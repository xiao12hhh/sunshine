---
title: 我把五门课的笔记开源了
published: 2026-10-27
description: 计算机组成原理、数据结构、Java 后端、离散数学、线性代数——五份持续更新的学习笔记，全部开源在 AtomGit，点开就能看。
image: './cover-notes.png'
tags: [开源, 笔记, 计算机基础]
category: '学习'
pinned: true
draft: false
---

笔记最初只是写给自己看的。

后来慢慢发现，同一门课踩过的坑、整理过的对比表、画过的结构图，换个人还得从头再踩一遍、再画一遍。既然已经整理成文，不如直接放到公开仓库里——**能省一个是一个**。

于是有了这五份笔记。它们不是教科书的复述，而是我在课程、考试和自学里反复回看的那部分：概念怎么讲才顺、哪里最容易混、题目一般怎么考、代码跑起来是什么样。

<style>
.notes-list { display: flex; flex-direction: column; gap: 14px; margin: 28px 0 8px; }
.notes-card {
  display: block;
  padding: 18px 20px 16px;
  border-radius: 14px;
  background: var(--btn-card-bg-hover);
  border: 1px solid var(--line-divider);
  text-decoration: none !important;
  color: inherit !important;
  transition: background .18s ease, border-color .18s ease, transform .18s ease;
}
.notes-card:hover {
  background: var(--btn-regular-bg-hover);
  border-color: var(--primary);
  transform: translateY(-2px);
}
.notes-card-head { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
.notes-card-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--primary); flex: none; }
.notes-card-title { font-size: 1.1rem; font-weight: 700; color: inherit; letter-spacing: .01em; }
.notes-card-arrow { margin-left: auto; color: var(--primary); font-size: 1rem; opacity: .75; }
.notes-card:hover .notes-card-arrow { opacity: 1; }
.notes-card-desc { margin: 0 0 10px; font-size: .9rem; line-height: 1.75; color: inherit; opacity: .8; }
.notes-card-meta { display: flex; flex-wrap: wrap; gap: 6px; }
.notes-tag {
  font-size: .72rem;
  padding: 2px 9px;
  border-radius: 999px;
  background: var(--btn-regular-bg);
  color: var(--btn-content);
  letter-spacing: .02em;
}
</style>

<div class="notes-list">

<a class="notes-card" href="https://atomgit.com/2603_95680783/Principles_of_Computer_Construction_Notes" target="_blank" rel="noopener">
<div class="notes-card-head"><span class="notes-card-dot"></span><span class="notes-card-title">计算机组成原理</span><span class="notes-card-arrow">↗</span></div>
<p class="notes-card-desc">从冯·诺依曼结构讲到数据通路。易混概念做成对比表，寄存器、性能指标做成速查表，配自绘的结构图与指令执行流程图；手写笔记也一并数字化存档，方便对照原稿。</p>
<div class="notes-card-meta"><span class="notes-tag">4 章已更新</span><span class="notes-tag">约 2.2 万字</span><span class="notes-tag">图解 + 速查</span></div>
</a>

<a class="notes-card" href="https://atomgit.com/2603_95680783/Data_Structur_Note" target="_blank" rel="noopener">
<div class="notes-card-head"><span class="notes-card-dot"></span><span class="notes-card-title">数据结构</span><span class="notes-card-arrow">↗</span></div>
<p class="notes-card-desc">按严蔚敏 / 王道体系把八章串成一条线：概念 → 性质 → 关键操作 → 复杂度 → 易错点 → 典型题型。线性表、树、图、查找、排序逐章整理，附核心对比速查表和考点清单，课程考试与 408 都能直接对着复习。</p>
<div class="notes-card-meta"><span class="notes-tag">8 章完整</span><span class="notes-tag">约 34 万字</span><span class="notes-tag">对标 408</span></div>
</a>

<a class="notes-card" href="https://atomgit.com/2603_95680783/Notes-For-Java" target="_blank" rel="noopener">
<div class="notes-card-head"><span class="notes-card-dot"></span><span class="notes-card-title">Java 后端笔记</span><span class="notes-card-arrow">↗</span></div>
<p class="notes-card-desc">把两百多课时的课程整理成七个阶段：语言基础、面向对象、核心类库、集合与算法、IO 与并发、网络与反射，最后落到实战项目。考点标注面试频率，重难点配源码分析、内存 ASCII 图和可直接运行的代码，基于 JDK 21 实测。</p>
<div class="notes-card-meta"><span class="notes-tag">7 个阶段</span><span class="notes-tag">26 篇</span><span class="notes-tag">JDK 21 实测</span></div>
</a>

<a class="notes-card" href="https://atomgit.com/2603_95680783/Discrete_Mathematics_Notes" target="_blank" rel="noopener">
<div class="notes-card-head"><span class="notes-card-dot"></span><span class="notes-card-title">离散数学</span><span class="notes-card-arrow">↗</span></div>
<p class="notes-card-desc">按屈婉玲教材体系整理的十章笔记，覆盖数理逻辑、集合与关系、图论、组合分析、代数与自动机五大模块。每章固定包含易考点、易错点、解题套路和阶梯例题，零基础也能顺着往下读。</p>
<div class="notes-card-meta"><span class="notes-tag">10 章</span><span class="notes-tag">约 9.3 万字</span><span class="notes-tag">零基础友好</span></div>
</a>

<a class="notes-card" href="https://atomgit.com/2603_95680783/Linear_Algebra_Notes" target="_blank" rel="noopener">
<div class="notes-card-head"><span class="notes-card-dot"></span><span class="notes-card-title">线性代数</span><span class="notes-card-arrow">↗</span></div>
<p class="notes-card-desc">以高阳等编著的《线性代数》为教材，按小节整理定义、定理与例题。目前已完整覆盖线性方程组与矩阵、行列式、向量与向量空间三章，后续章节陆续补齐。</p>
<div class="notes-card-meta"><span class="notes-tag">前 3 章</span><span class="notes-tag">14 篇</span><span class="notes-tag">按节整理</span></div>
</a>

</div>

## 一点使用建议

- **别从头读到尾。** 先看目录定位到不熟的那一节，读完顺手做两道题，比通读一遍有效得多。
- **先看「易错点」。** 每章开头或结尾我都会标出容易混的地方，做题前扫一眼能省不少分。
- **代码别只看。** Java 笔记里的示例都是能直接跑的，复制下来改两行、打印一下，比看十遍源码分析都管用。

## 关于更新

这五份笔记都还在生长。计组的指令系统、总线与存储层次，线代的后面四章，都在计划里；已经写完的部分也会随着复习不断修正。

如果发现哪里写错了、讲得不清楚，或者想要某个专题补一篇，欢迎直接在仓库里提 Issue——我看到就会改。觉得有用的话，点个 Star 就是最好的鼓励。

> 写下来才算真的学会。共勉。
