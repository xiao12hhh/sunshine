---
title: Java 基础入门教程（从零到面向对象之前）
published: 2026-09-07
description: 从零开始系统学习 Java 编程语言核心基础语法。涵盖环境搭建、基本语法、数据类型、运算符、流程控制、数组、方法等，但不涉及面向对象深入内容。
image: './cover-java.png'
tags: [学习, Java, 编程]
category: '学习'
draft: false
---

欢迎来到 Java 世界！本教程将带你从零开始，系统学习 Java 编程语言的核心基础语法。内容涵盖环境搭建、基本语法、数据类型、运算符、流程控制、数组、方法等，但不涉及面向对象（类、对象、继承、多态等）的深入内容。每个知识点都配有详细说明、代码示例和常见注意事项，力求让初学者扎实掌握。

## 目录
1. [Java 概述](#1-java-概述)
2. [开发环境搭建](#2-开发环境搭建)
3. [第一个 Java 程序](#3-第一个-java-程序)
4. [基本语法要素](#4-基本语法要素)
    - 4.1 [注释](#41-注释)
    - 4.2 [标识符和关键字](#42-标识符和关键字)
    - 4.3 [变量与常量](#43-变量与常量)
5. [数据类型](#5-数据类型)
    - 5.1 [基本数据类型](#51-基本数据类型)
    - 5.2 [引用数据类型（简介）](#52-引用数据类型简介)
    - 5.3 [类型转换](#53-类型转换)
6. [运算符](#6-运算符)
    - 6.1 [算术运算符](#61-算术运算符)
    - 6.2 [关系运算符](#62-关系运算符)
    - 6.3 [逻辑运算符](#63-逻辑运算符)
    - 6.4 [赋值运算符](#64-赋值运算符)
    - 6.5 [位运算符（了解）](#65-位运算符了解)
    - 6.6 [三元运算符](#66-三元运算符)
    - 6.7 [其他运算符](#67-其他运算符)
7. [流程控制](#7-流程控制)
    - 7.1 [顺序结构](#71-顺序结构)
    - 7.2 [条件判断（if、if‑else、switch）](#72-条件判断ifif‑elseswitch)
    - 7.3 [循环结构（for、while、do‑while）](#73-循环结构forwhiledo‑while)
    - 7.4 [跳转语句（break、continue、return）](#74-跳转语句breakcontinuereturn)
8. [数组](#8-数组)
    - 8.1 [一维数组](#81-一维数组)
    - 8.2 [多维数组](#82-多维数组)
    - 8.3 [Arrays 工具类常用方法](#83-arrays-工具类常用方法)
9. [方法（函数）](#9-方法函数)
    - 9.1 [方法的定义与调用](#91-方法的定义与调用)
    - 9.2 [参数与返回值](#92-参数与返回值)
    - 9.3 [方法重载](#93-方法重载)
    - 9.4 [递归](#94-递归)
    - 9.5 [可变参数](#95-可变参数)
    - 9.6 [变量作用域](#96-变量作用域)
10. [输入与输出](#10-输入与输出)
    - 10.1 [标准输出（System.out）](#101-标准输出systemout)
    - 10.2 [标准输入（Scanner）](#102-标准输入scanner)
11. [常用类简单使用](#11-常用类简单使用)
    - 11.1 [String 类](#111-string-类)
    - 11.2 [Math 类](#112-math-类)
    - 11.3 [包装类（简略）](#113-包装类简略)
12. [异常处理基础](#12-异常处理基础)
13. [总结与建议](#13-总结与建议)

## 1. Java 概述
Java 是一种面向对象、跨平台、健壮安全的高性能编程语言，由 Sun Microsystems（现 Oracle）于 1995 年发布。其核心思想是 **Write Once, Run Anywhere**（一次编写，到处运行），这得益于 Java 虚拟机（JVM）机制。

- **JVM**（Java Virtual Machine）：负责执行 Java 字节码，屏蔽底层操作系统差异。
- **JRE**（Java Runtime Environment）：运行 Java 程序所需的环境，包含 JVM 和核心类库。
- **JDK**（Java Development Kit）：开发工具包，包含 JRE 以及编译、调试等工具（如 `javac`、`java`、`jar`）。

版本演进：目前主流是 Java 8（长期支持）、Java 11、Java 17 等。本教程基于 Java 17 语法，但基础部分兼容多数版本。

## 2. 开发环境搭建
### 2.1 下载 JDK
访问 Oracle 官网或 AdoptOpenJDK（现 Eclipse Temurin）下载适合操作系统的 JDK 安装包。推荐使用 LTS 版本。

### 2.2 安装与配置环境变量（Windows 示例）
1. 双击安装包，按提示安装（建议路径不含空格，如 `C:\Java\jdk-17`）。
2. 配置环境变量：
   - 新建系统变量 `JAVA_HOME`，值为 JDK 安装根目录。
   - 编辑 `Path` 变量，添加 `%JAVA_HOME%\bin`。
3. 验证：打开命令行（cmd），输入 `java -version` 和 `javac -version`，若显示版本信息则成功。

### 2.3 开发工具选择
- 文本编辑器：Notepad++、Sublime Text、VS Code（需安装 Java 扩展）。
- 集成开发环境（IDE）：IntelliJ IDEA（推荐）、Eclipse、NetBeans。初学者建议先用文本编辑器 + 命令行编译运行，以熟悉底层过程。

## 3. 第一个 Java 程序
### 3.1 编写源代码
新建一个文本文件，命名为 `HelloWorld.java`，输入以下代码：
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

### 3.2 编译与运行

打开终端 / 命令行，进入文件所在目录。

- 编译：`javac HelloWorld.java` → 生成 `HelloWorld.class` 字节码文件。
- 运行：`java HelloWorld` → 控制台输出 `Hello, World!`。

### 3.3 代码解析

- `public class HelloWorld`：定义了一个公共类，类名必须与文件名一致（大小写敏感）。
- `public static void main(String[] args)`：程序入口，固定写法（目前可理解为模板）。
- `System.out.println("Hello, World!");`：输出字符串并换行。

**注意点**：

- Java 是大小写敏感的，`class` 和 `Class` 不同。
- 文件名与公共类名必须完全一致（`.java` 后缀除外）。
- 每个 Java 程序至少有一个类，且包含 `main` 方法才能独立运行。

## 4. 基本语法要素

### 4.1 注释

注释是对代码的解释，不会被编译执行。Java 支持三种注释：

- 单行注释：`// 注释内容`
- 多行注释：`/* 注释内容 */`
- 文档注释：`/** 注释内容 */`（用于生成 API 文档）

```
// 这是单行注释
/*
    这是多行注释
    可以跨行
 */
/**
 * 这是文档注释，通常用于方法或类说明
 */
public class CommentDemo {
    public static void main(String[] args) {
        // 单行注释示例
        System.out.println("注释不会影响程序");
    }
}
```

### 4.2 标识符和关键字

**标识符**：用于命名类、方法、变量等的名称。规则：

- 由字母、数字、下划线 `_`、美元符 `$` 组成。
- 不能以数字开头。
- 不能是 Java 关键字（如 `public`、`class`、`int` 等）。
- 区分大小写，长度不限。

**关键字**：Java 预定义的具有特殊含义的单词，如 `abstract`、`class`、`if`、`for` 等。全部小写。

**命名规范（建议遵守）**：

- 类名：大驼峰（PascalCase），如 `HelloWorld`。
- 方法名 / 变量名：小驼峰（camelCase），如 `userName`、`getAge`。
- 常量：全部大写，下划线分隔，如 `MAX_VALUE`。

### 4.3 变量与常量

- **变量**：在程序运行过程中值可以改变的量。必须先声明后使用。
声明格式：`数据类型 变量名 [= 初始值];`
示例：`int age = 25;`
- **常量**：值不可变的量，使用 `final` 关键字修饰。
声明格式：`final 数据类型 常量名 = 值;`
示例：`final double PI = 3.14159;`（通常命名全部大写）

```
public class VariableDemo {
    public static void main(String[] args) {
        int num = 10;          // 变量
        num = 20;              // 可重新赋值
        final double PI = 3.14;
        // PI = 3.15;          // 编译错误，常量不能修改
        System.out.println("num=" + num + ", PI=" + PI);
    }
}
```

> 注意：局部变量在使用前必须初始化，否则编译报错。

## 5. 数据类型

Java 是强类型语言，每个变量都必须声明其数据类型。数据类型分为两大类：**基本数据类型** 和 **引用数据类型**。

### 5.1 基本数据类型（8 种）

| 类型关键字 | 占用字节 | 取值范围 | 默认值 |
| --- | --- | --- | --- |
| byte | 1 | -128 ~ 127 | 0 |
| short | 2 | -32768 ~ 32767 | 0 |
| int | 4 | -2³¹ ~ 2³¹‑1 | 0 |
| long | 8 | -2⁶³ ~ 2⁶³‑1 | 0L |
| float | 4 | ±3.4E‑38 ~ ±3.4E+38 | 0.0f |
| double | 8 | ±1.8E‑308 ~ ±1.8E+308 | 0.0d |
| char | 2 | 0 ~ 65535（Unicode 字符） | `'\u0000'` |
| boolean | 视虚拟机实现 | `true / false` | `false` |

**注意**：

- 整数字面量默认是 `int`，超大长整型要加后缀 `L`：`long big = 30000000000L;`
- 浮点字面量默认是 `double`，`float` 需要后缀 `F`：`float f = 3.14F;`
- `char` 使用单引号包裹单个字符，支持 Unicode 转义 `'\u0041'` 代表 `A`

```
public class DataTypeDemo {
    public static void main(String[] args) {
        byte b = 100;
        short s = 10000;
        int i = 100000;
        long l = 10000000000L;   // 必须加L
        float f = 3.14159F;      // 必须加F
        double d = 3.1415926535;
        char c = 'A';
        boolean flag = true;

        System.out.println(b + ", " + s + ", " + i + ", " + l);
        System.out.println(f + ", " + d + ", " + c + ", " + flag);
    }
}
```

### 5.2 引用数据类型（简介）

引用类型指向一个对象，而不是直接存储值本身。包括：

- 类（Class）：`String`、`Scanner`
- 接口（Interface）
- 数组（Array）

引用类型默认值为 `null`，本教程仅简单使用 `String` 和数组。

```
String str = "Hello";   // 字符串是类
int[] arr = new int[5]; // 数组是引用类型
```

### 5.3 类型转换

1. **自动类型转换（隐式）**：小范围 → 大范围，自动转换
转换链：`byte → short → int → long → float → double`；`char → int`
2. **强制类型转换（显式）**：大范围 → 小范围，手动强转，存在精度丢失、溢出风险
语法：`(目标类型) 值`

```
public class TypeCastDemo {
    public static void main(String[] args) {
        // 自动转换
        int i = 100;
        long l = i;
        double d = l;

        // 强制转换
        double pi = 3.14159;
        int intPi = (int) pi;    // 截断小数
        System.out.println(intPi);

        int big = 130;
        byte b = (byte) big;     // 溢出
        System.out.println(b);
    }
}
```

> boolean 不能和任何类型互相转换；混合运算时，变量会自动提升为取值范围更大的类型。

## 6. 运算符

### 6.1 算术运算符

`+ - * / % ++ --`

```
public class ArithmeticDemo {
    public static void main(String[] args) {
        int a = 10, b = 3;
        System.out.println(a + b);  // 13
        System.out.println(a - b);  // 7
        System.out.println(a * b);  // 30
        System.out.println(a / b);  // 3（整数整除）
        System.out.println(a % b);  // 1（取余）

        int x = 5;
        System.out.println(x++);    // 先输出5，再加1
        System.out.println(++x);    // 先自增，再输出7
    }
}
```

> 整数相除结果为整数，如果需要小数，至少一个操作数为浮点型。

### 6.2 关系运算符

`== != > < >= <=`，运算结果一定是 `boolean`

```
int a = 5, b = 8;
System.out.println(a == b);  // false
System.out.println(a != b);  // true
System.out.println(a < b);   // true
```

### 6.3 逻辑运算符

`&& || ! & | ^`，操作布尔值

- `&&`、`||`：**短路运算**，左边已经可以确定结果时，右边不再执行

```
boolean p = true, q = false;
System.out.println(p && q);  // false
System.out.println(p || q);  // true
System.out.println(!p);      // false

int i = 0;
if (false && (i++ > 0)) {}
System.out.println(i);       // 0，短路导致i不会自增
```

### 6.4 赋值运算符

`= += -= *= /= %=`
`a += 3` 等价于 `a = a + 3`（自带隐式类型转换）

```
int a = 10;
a += 5;   // a = 15
a %= 4;   // a = 3
```

### 6.5 位运算符（了解）

`& | ^ ~ << >> >>>`，作用于整数的二进制位

```
int a = 5;   // 0101
int b = 3;   // 0011
System.out.println(a & b);  // 1
System.out.println(a | b);  // 7
System.out.println(a ^ b);  // 6
System.out.println(a << 1); // 10
```

### 6.6 三元运算符

格式：`条件 ? 表达式1 : 表达式2`
条件为 true 返回表达式 1，否则返回表达式 2

```
int age = 18;
String status = age >= 18 ? "成年" : "未成年";
System.out.println(status);
```

### 6.7 其他运算符

- `instanceof`：判断对象类型（面向对象）
- `()`：提升运算优先级

## 7. 流程控制

### 7.1 顺序结构

代码从上至下逐行执行，是程序默认执行方式。

### 7.2 条件判断（if、if‑else、switch）

#### if

```
if (条件) {
    // 条件为true执行
}
```

#### if‑else

```
if (条件) {
} else {
}
```

#### if‑else if‑else

```
int score = 85;
if (score >= 90) {
    System.out.println("优秀");
} else if (score >= 80) {
    System.out.println("良好");
} else if (score >= 60) {
    System.out.println("及格");
} else {
    System.out.println("不及格");
}
```

#### switch

适合等值匹配，`break` 防止穿透；Java14+ 支持箭头语法

```
int day = 3;
switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    default:
        System.out.println("Other day");
}

// Java14+ 简化写法
switch (day) {
    case 1 -> System.out.println("Mon");
    case 2 -> System.out.println("Tue");
    case 3 -> System.out.println("Wed");
    default -> System.out.println("Other");
}
```

### 7.3 循环结构（for、while、do‑while）

#### for

```
for (初始化; 判断条件; 迭代语句) {
    循环体;
}
// 1~10打印
for (int i = 1; i <= 10; i++) {
    System.out.print(i + " ");
}
```

#### while（先判断，后执行）

```
int sum = 0, i = 1;
while (i <= 100) {
    sum += i;
    i++;
}
System.out.println("sum=" + sum);
```

#### do‑while（先执行一次，再判断，至少运行一次）

```
do {
    //循环体
} while (条件);
```

### 7.4 跳转语句（break、continue、return）

- `break`：跳出当前循环 /switch
- `continue`：跳过本次循环剩余代码，直接进入下一轮循环
- `return`：结束整个方法

```
// break
for (int i = 1; i <= 100; i++) {
    if (i % 7 == 0) {
        System.out.println(i);
        break;
    }
}

// continue，输出奇数
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    System.out.print(i + " ");
}
```

## 8. 数组

数组是**固定长度、存放相同类型元素**的容器，属于引用类型。

### 8.1 一维数组

#### 声明初始化

```
// 动态初始化：指定长度，默认值填充
int[] arr1 = new int[5];
// 静态初始化
int[] arr2 = new int[]{1,2,3};
int[] arr3 = {4,5,6};
```

#### 遍历访问

索引从 `0` 开始；`数组名.length` 获取数组长度

```
int[] arr = {10,20,30,40};
System.out.println(arr[0]);
arr[2] = 99;

//普通for遍历
for(int i = 0;i < arr.length;i++){
    System.out.println(arr[i]);
}
//增强for循环 for‑each（只读）
for(int num : arr){
    System.out.println(num);
}
```

#### 示例求最大值

```
int[] scores = {85,92,78,88,96};
int max = scores[0];
for(int s : scores){
    if(s > max) max = s;
}
System.out.println("最高分："+max);
```

### 8.2 多维数组（二维数组）

```
//固定行列
int[][] matrix = new int[3][4];
//静态初始化
int[][] matrix2 = {
    {1,2,3},
    {4,5,6},
    {7,8,9}
};
//不规则数组
int[][] jagged = new int[2][];
jagged[0] = new int[3];
jagged[1] = new int[5];

//双层循环遍历
for(int i = 0;i < matrix2.length;i++){
    for(int j = 0;j < matrix2[i].length;j++){
        System.out.print(matrix2[i][j]+" ");
    }
    System.out.println();
}
```

### 8.3 Arrays 工具类

`java.util.Arrays` 提供数组排序、打印、复制、填充等静态方法

```
import java.util.Arrays;

public class ArraysDemo {
    public static void main(String[] args) {
        int[] nums = {5,3,8,1,9};
        Arrays.sort(nums);
        System.out.println(Arrays.toString(nums));

        int idx = Arrays.binarySearch(nums,5);
        System.out.println("索引："+idx);

        int[] copy = Arrays.copyOf(nums,3);
        System.out.println(Arrays.toString(copy));

        Arrays.fill(nums,0);
        System.out.println(Arrays.toString(nums));
    }
}
```

> 数组一旦创建长度不可修改；索引越界抛出 `ArrayIndexOutOfBoundsException`

## 9. 方法（函数）

方法是封装一段可重复执行的代码块，本章节全部使用 `static` 静态方法。

### 9.1 方法的定义与调用

语法格式：

```
[修饰符] 返回值类型 方法名(形参列表){
    方法体;
    [return 返回值;]
}
```

示例：

```
public class MethodDemo {
    public static int add(int a,int b){
        return a + b;
    }
    public static void main(String[] args) {
        int res = add(10,20);
        System.out.println("结果："+res);
    }
}
```

- 返回值类型写 `void` 代表无返回值，`return` 可以省略或者单独写 `return;`

### 9.2 参数与返回值

- **形参**：方法定义时的变量
- **实参**：调用方法时传入的真实数据
- `return` 用来结束方法并返回结果，类型必须匹配声明

```
public static double circleArea(double radius){
    return 3.14 * radius * radius;
}
```

### 9.3 方法重载（Overload）

同一个类中，**方法名相同，参数列表不同（个数 / 类型 / 顺序）**，返回值不能作为重载区分条件

```
public static int sum(int a,int b){return a+b;}
public static int sum(int a,int b,int c){return a+b+c;}
public static double sum(double a,double b){return a+b;}
```

### 9.4 递归

方法**自己调用自己**，必须设置终止条件，否则栈溢出 `StackOverflowError`
阶乘示例：

```
public static long factorial(int n){
    if(n == 0 || n == 1) return 1;
    return n * factorial(n-1);
}
```

### 9.5 可变参数

`类型...变量名`，本质是数组；可变参数只能放在参数列表最后，一个方法最多一个可变参数

```
public static int sumAll(int... nums){
    int sum = 0;
    for(int x : nums) sum += x;
    return sum;
}
//调用 sumAll(1,2,3,4,5)
```

### 9.6 变量作用域

**局部变量**：定义在方法 / 代码块内部，只能在对应 `{}` 中使用，使用前必须初始化

```
public static void scopeDemo(){
    int x = 10;
    if(x > 0){
        int y = 20;
        System.out.println(x+y);
    }
    //System.out.println(y); //编译报错，y已经失效
}
```

## 10. 输入与输出

### 10.1 标准输出 System.out

- `System.out.print()`：输出不换行
- `System.out.println()`：输出并换行
- `System.out.printf("格式字符串",参数)`：格式化输出

```
System.out.printf("姓名：%s，年龄：%d\n","张三",25);
```

### 10.2 标准输入 Scanner

使用步骤：

1. `import java.util.Scanner;`
2. 创建对象 `Scanner sc = new Scanner(System.in);`
3. 调用 `nextInt()` / `nextDouble()` / `nextLine()` 获取输入
4. `sc.close()` 关闭资源

```
import java.util.Scanner;

public class ScannerDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("请输入名字：");
        String name = scanner.nextLine();
        System.out.print("请输入年龄：");
        int age = scanner.nextInt();
        System.out.println("你好，"+name+"，今年"+age+"岁");
        scanner.close();
    }
}
```

> `nextInt()` 读取数字之后会遗留换行符，如果后面使用 `nextLine()` 需要额外读取一行吃掉换行符。输入类型不匹配抛出 `InputMismatchException`

## 11. 常用类简单使用

### 11.1 String 类

字符串是**不可变字符序列**，修改会生成新对象

```
String s1 = "Hello";
String s2 = "World";
String s3 = s1 + " " + s2;

int len = s1.length();
char ch = s1.charAt(1);
String sub = s3.substring(0,5);
int index = s1.indexOf('l');
boolean eq = s1.equals("Hello");
boolean ignoreCase = "HELLO".equalsIgnoreCase(s1);
String upper = s1.toUpperCase();
String replaceStr = s1.replace('l','L');
String[] splitArr = "one,two,three".split(",");
String trimStr = "  abc  ".trim();
```

> 判断字符串内容相等**必须使用 `.equals()`，不要直接用 `==`**

### 11.2 Math 类

全部静态数学工具方法

```
double pi = Math.PI;
double abs = Math.abs(-5.5);
double ceil = Math.ceil(3.2);
double floor = Math.floor(3.9);
long round = Math.round(3.5);
double max = Math.max(10,20);
double min = Math.min(10,20);
double pow = Math.pow(2,3);
double sqrt = Math.sqrt(9);
double random = Math.random(); // [0.0 , 1.0)
```

### 11.3 包装类（简略）

8 种基本类型对应的对象类型，支持**自动装箱 / 拆箱**

```
Integer i = 10;         //自动装箱 int → Integer
int num = i;            //自动拆箱 Integer → int

int parseNum = Integer.parseInt("123");
String str = Integer.toString(456);
```

> 缓存范围 `-128 ~ 127`，超出缓存区间比较值请使用 `.equals()`

## 12. 异常处理基础

异常是程序运行时发生的错误事件，`try‑catch‑finally` 捕获处理异常
常见异常：

- `ArithmeticException`：算术异常（除 0）
- `ArrayIndexOutOfBoundsException`：数组越界
- `NullPointerException`：空指针
- `InputMismatchException`：输入格式错误

语法结构：

```
try{
    //可能报错的代码
}catch(异常类型 e){
    //捕获异常后的处理逻辑
}finally{
    //无论是否异常，一定会执行（释放资源）
}
```

示例代码：

```
import java.util.Scanner;

public class ExceptionDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        try {
            System.out.print("输入整数：");
            int num = sc.nextInt();
            int res = 100 / num;
            System.out.println("结果：" + res);
        } catch (ArithmeticException e) {
            System.out.println("除数不能为0！");
        } catch (InputMismatchException e) {
            System.out.println("输入不是整数！");
        } finally {
            sc.close();
            System.out.println("资源释放完成");
        }
    }
}
```

手动抛出异常 `throw`；方法声明异常列表使用 `throws`

```
public static void checkAge(int age){
    if(age < 0){
        throw new IllegalArgumentException("年龄不能为负数");
    }
    System.out.println("合法年龄");
}
```

## 13. 总结与建议

恭喜你完成 Java 基础语法的学习！你已经掌握：

1. Java 环境搭建，编译运行流程（JDK/JRE/JVM）
2. 变量、8 大基本数据类型、运算符、类型转换
3. if‑else / switch、for / while / do‑while、break / continue
4. 一维、二维数组，Arrays 工具类
5. 方法定义调用、重载、递归、可变参数、变量作用域
6. Scanner 输入输出、String / Math / 包装类基础用法
7. try‑catch 简单异常捕获处理

**下一阶段：面向对象编程（类、对象、封装、继承、多态、抽象类、接口）**

### 学习建议

1. 动手敲每一段示例代码，拒绝只看视频读文档
2. 读懂控制台报错信息，学会简单调试
3. 练习小型项目：简易计算器、成绩管理系统巩固语法
4. 学会查阅官方文档、合理搜索解决 bug

### 附录常见问题

- Q：编译提示找不到符号？
A：检查拼写大小写，变量是否提前定义，类库是否导入。
- Q：`==` 和 `equals()` 的区别？
A：基本类型 `==` 判断值；引用类型 `==` 判断内存地址，`equals()` 判断对象内容（String 重写过 equals）。
- Q：如何终止循环？
A：`break` 跳出单层循环；`return` 直接结束整个方法。

祝你学习愉快，在 Java 的世界里探索无限可能！

---

## 📚 后续学习笔记

后面还有一些 Java 学习笔记和实战代码，**欢迎大家来看**：

👉 [https://gitee.com/xiaohg1218/java-notes](https://gitee.com/xiaohg1218/java-notes)

里面整理了更深入的 Java 知识、项目实战以及常见面试题，希望对你有帮助！