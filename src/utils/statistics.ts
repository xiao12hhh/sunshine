import { getCollection } from "astro:content";

/** Date → 本地时区的 YYYY-MM-DD，避免 toISOString 的 UTC 偏移 */
function toDateKey(d: Date): string {
	const pad = (n: number) => String(n).padStart(2, "0");
	return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

/** 统计一篇 Markdown 正文的「字数」：中文字符逐个计数，英文按单词计数 */
export function countWords(markdown: string): number {
	const text = markdown
		.replace(/```[\s\S]*?```/g, " ") // 代码块
		.replace(/`[^`]*`/g, " ") // 行内代码
		.replace(/!\[[^\]]*\]\([^)]*\)/g, " ") // 图片
		.replace(/\[[^\]]*\]\([^)]*\)/g, " ") // 链接
		.replace(/^#{1,6}\s+/gm, "") // 标题标记
		.replace(/^>\s?/gm, "") // 引用
		.replace(/^\s*[-*+]\s+/gm, "") // 无序列表标记
		.replace(/^\s*\d+[.)]\s+/gm, "") // 有序列表标记
		.replace(/<[^>]+>/g, " ") // HTML 标签
		.replace(/[*_~|]/g, " "); // 强调等符号

	const cjk = (text.match(/[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/g) || [])
		.length;
	const latin = (
		text
			.replace(/[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/g, " ")
			.match(/[A-Za-z0-9]+(?:['’-][A-Za-z0-9]+)*/g) || []
	).length;
	return cjk + latin;
}

export type BlogStatistics = {
	postCount: number;
	wordCount: number;
	categoryCount: number;
	tagCount: number;
	/** 从最早一篇已发布文章到今天，站点已运行天数（构建时算的快照，无 JS 时作兜底） */
	runningDays: number;
	/** 最早一篇已发布文章的日期（YYYY-MM-DD）；供前端按当天实时重算天数，无文章时为空串 */
	runningSince: string;
	/** 最近一次更新的日期字符串（YYYY-MM-DD） */
	lastUpdated: string;
};

/** 单月写稿数据：某年某月写了多少字 */
export type MonthStats = {
	year: number;
	month: number; // 1-12
	words: number;
};

/** 年份 → 该年 12 个月的写稿量（无稿的月份为 0），用于码字热力图 */
export type YearlyHeatmap = {
	years: number[]; // 有序：旧→新
	/** 某年某月(1-12)字数，缺失按 0 处理 */
	words: (year: number, month: number) => number;
	rows: MonthStats[][]; // 与 years 对齐的渲染数据
	maxMonthWords: number;
	totalWords: number;
};

export async function getWordHeatmap(): Promise<YearlyHeatmap> {
	const posts = await getCollection("posts", ({ data }) => {
		return data.draft !== true;
	});

	const map = new Map<string, number>(); // "YYYY-M" -> words
	let totalWords = 0;
	for (const post of posts) {
		const w = countWords(post.body ?? "");
		const d = new Date(post.data.published);
		const key = `${d.getFullYear()}-${d.getMonth() + 1}`;
		map.set(key, (map.get(key) ?? 0) + w);
		totalWords += w;
	}

	// 找出有写稿的年份范围（含首尾之间的空年）
	const yearsSet = new Set<number>();
	for (const k of map.keys()) yearsSet.add(Number(k.split("-")[0]));
	if (yearsSet.size === 0) {
		return { years: [], words: () => 0, rows: [], maxMonthWords: 0, totalWords: 0 };
	}
	const yMin = Math.min(...yearsSet);
	const yMax = Math.max(...yearsSet);

	const years: number[] = [];
	const rows: MonthStats[][] = [];
	let maxMonthWords = 0;
	for (let y = yMin; y <= yMax; y++) {
		years.push(y);
		const row: MonthStats[] = [];
		for (let m = 1; m <= 12; m++) {
			const w = map.get(`${y}-${m}`) ?? 0;
			maxMonthWords = Math.max(maxMonthWords, w);
			row.push({ year: y, month: m, words: w });
		}
		rows.push(row);
	}

	return {
		years,
		words: (y, m) => map.get(`${y}-${m}`) ?? 0,
		rows,
		maxMonthWords,
		totalWords,
	};
}

export async function getBlogStatistics(): Promise<BlogStatistics> {
	const posts = await getCollection("posts", ({ data }) => {
		return data.draft !== true;
	});

	let wordCount = 0;
	const categorySet = new Set<string>();
	const tagSet = new Set<string>();
	let oldest: Date | null = null;
	let newest: Date | null = null;

	for (const post of posts) {
		wordCount += countWords(post.body ?? "");

		const cat = (post.data.category ?? "").trim();
		if (cat) categorySet.add(cat);
		else categorySet.add("未分类");

		for (const t of post.data.tags ?? []) tagSet.add(t.trim());

		const d = new Date(post.data.published);
		if (!oldest || d < oldest) oldest = d;
		if (!newest || d > newest) newest = d;
	}

	const today = new Date();
	// 归零时间，避免时区导致的天数偏差
	const day0 = new Date(today.getFullYear(), today.getMonth(), today.getDate());
	const start = oldest ? new Date(oldest.getFullYear(), oldest.getMonth(), oldest.getDate()) : day0;
	const runningDays = oldest ? Math.max(1, Math.round((day0.getTime() - start.getTime()) / 86400000) + 1) : 0;
	const runningSince = oldest ? toDateKey(start) : "";

	return {
		postCount: posts.length,
		wordCount,
		categoryCount: categorySet.size,
		tagCount: tagSet.size,
		runningDays,
		runningSince,
		lastUpdated: newest ? newest.toISOString().slice(0, 10) : "-",
	};
}
