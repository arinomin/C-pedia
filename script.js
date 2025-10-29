document.addEventListener('DOMContentLoaded', () => {

    const cheatSheetData = [
        {
            id: 'if-else',
            name: 'if-else文',
            category: '文法',
            description: '条件に応じて処理を分岐させます。',
            syntax: 'if (condition) { /* if block */ } else if (condition) { /* else if block */ } else { /* else block */ }',
            example: `#include <stdio.h>

int main() {
    int score = 85;
    if (score >= 90) {
        printf("Grade: A\n");
    } else if (score >= 80) {
        printf("Grade: B\n");
    } else {
        printf("Grade: C or lower\n");
    }
    return 0;
}`,
            notes: '`else if` や `else` は省略可能です。'
        },
        {
            id: 'switch-case',
            name: 'switch文',
            category: '文法',
            description: '変数の値に応じて、複数の処理候補の中から一つを選んで実行します。`if-else if`の連鎖をより簡潔に、そして効率的に書ける場合があります。',
            syntax: 'switch (expression) {\n    case constant1:\n        // statements\n        break;\n    case constant2:\n        // statements\n        break;\n    default:\n        // default statements\n}',
            example: `#include <stdio.h>

int main() {
    int rank = 2;

    switch (rank) {
        case 1:
            printf("Gold Medal!\n");
            break;
        case 2:
            printf("Silver Medal!\n");
            break;
        case 3:
            printf("Bronze Medal!\n");
            break;
        default:
            printf("No medal.\n");
            break;
    }
    return 0;
}`,
            notes: '`break`を書き忘れると、後続の`case`の処理が続けて実行されてしまう「フォールスルー」という現象が起きるので注意が必要です。`default`はどの`case`にも一致しない場合に実行され、省略も可能です。'
        },
        {
            id: 'for-loop',
            name: 'forループ',
            category: '文法',
            description: '指定された回数だけ処理を繰り返します。',
            syntax: 'for (initialization; condition; increment) { /* statement(s) */ }',
            example: `#include <stdio.h>

int main() {
    for (int i = 0; i < 5; i++) {
        printf("i = %d\n", i);
    }
    return 0;
}`,
            notes: '初期化、条件式、増分式はそれぞれ省略可能です。'
        },
        {
            id: 'while-loop',
            name: 'whileループ',
            category: '文法',
            description: '指定された条件が真（true）である間、処理を繰り返します。',
            syntax: 'while (condition) { /* statement(s) */ }',
            example: `#include <stdio.h>

int main() {
    int i = 0;
    while (i < 5) {
        printf("i = %d\n", i);
        i++;
    }
    return 0;
}`,
            notes: 'ループの内部で条件を偽にする処理（`i++`など）を忘れると無限ループになります。'
        },
        {
            id: 'operators',
            name: '演算子',
            category: '文法',
            description: '計算や比較など、様々な操作を行うための記号です。C言語には多くの演算子があり、これらを使いこなすことがプログラミングの基本となります。',
            syntax: '// 演算子には特定の構文はありませんが、以下のように使用します。\nvariable = operand1 operator operand2;',
            example: `/* 1. 算術演算子 */
int a = 10, b = 3;
printf("a + b = %d\n", a + b); // 加算
printf("a - b = %d\n", a - b); // 減算
printf("a * b = %d\n", a * b); // 乗算
printf("a / b = %d\n", a / b); // 除算 (整数同士なので結果も整数)
printf("a %% b = %d\n", a % b); // 剰余 (余り)

/* 2. 関係演算子と比較演算子 */
// 結果は真(1)か偽(0)になる
printf("a > b is %d\n", a > b);  // aはbより大きいか
printf("a == 10 is %d\n", a == 10); // aは10と等しいか

/* 3. 論理演算子 */
int c = 1; // C言語では 0 以外は真として扱われる
int d = 0; // 0 は偽として扱われる
printf("c && d is %d\n", c && d); // AND (cかつd)
printf("c || d is %d\n", c || d); // OR (cまたはd)
printf("!c is %d\n", !c);      // NOT (cではない)

/* 4. 代入演算子 */
int e = 5;
e += 3; // e = e + 3 と同じ。 eは8になる
printf("e = %d\n", e);

/* 5. インクリメント・デクリメント */
int f = 10;
f++; // fに1を加える (fは11になる)
printf("f = %d\n", f);`,
            notes: '演算子には優先順位があります。例えば `*` は `+` より先に計算されます。意図しない計算順序を防ぐために、括弧 `()` を使うことが有効です。'
        },
        {
            id: 'function-definition',
            name: '関数',
            category: '文法',
            description: '特定の処理をまとめたもので、名前を付けて何度も呼び出すことができます。コードの再利用性を高め、プログラムを整理するために不可欠です。',
            syntax: 'return_type function_name(parameters) {\n    /* 関数の本体 */\n    return value;\n}',
            example: `#include <stdio.h>

// 2つの整数の合計を返す関数
int add(int a, int b) {
    return a + b;
}

int main() {
    int sum = add(5, 3);
    printf("合計: %d\n", sum); // 合計: 8
    return 0;
}`,
            notes: '戻り値がない関数は、`return_type` に `void` を指定します。'
        },
        {
            id: 'printf',
            name: 'printf',
            category: '標準ライブラリ関数',
            description: 'コンソールに書式付きで文字列を出力します。',
            syntax: 'int printf(const char *format, ...);',
            example: `#include <stdio.h>

int main() {
    char name[] = "World";
    int age = 20;
    printf("Hello, %s!\n", name);
    printf("You are %d years old.\n", age);
    return 0;
}`,
            notes: '`%s`は文字列、`%d`は整数、`\n`は改行を表します。'
        },
        {
            id: 'scanf',
            name: 'scanf',
            category: '標準ライブラリ関数',
            description: 'コンソールから書式付きでデータを入力します。',
            syntax: 'int scanf(const char *format, ...);',
            example: `#include <stdio.h>

int main() {
    int age;
    printf("あなたの年齢を入力してください: ");
    scanf("%d", &age);
    printf("あなたは %d 歳です。\n", age);
    return 0;
}`,
            notes: '入力先の変数の前には `&` (アドレス演算子) が必要です。セキュリティ上の脆弱性があるため、`fgets` の使用が推奨されることもあります。'
        },
        {
            id: 'string-h',
            name: '文字列操作 <string.h>',
            category: '標準ライブラリ関数',
            description: 'C言語の文字列（NULL終端文字 `\0` を持つchar型配列）を扱うための便利な関数群です。利用するには `#include <string.h>` が必要です。',
            syntax: 'size_t strlen(const char *s);\nchar *strcpy(char *dest, const char *src);\nint strcmp(const char *s1, const char *s2);\nchar *strcat(char *dest, const char *src); ',
            example: `#include <stdio.h>
#include <string.h>

int main() {
    char str1[20] = "Hello";
    char str2[] = "World";
    char str3[20];

    // 文字列の長さを取得 (NULL文字は含まない)
    printf("str1の長さ: %zu\n", strlen(str1));

    // 文字列をコピー
    strcpy(str3, str1);
    printf("コピーされた文字列: %s\n", str3);

    // 文字列を連結
    strcat(str1, " ");
    strcat(str1, str2);
    printf("連結された文字列: %s\n", str1);

    // 文字列を比較 (同じなら0)
    if (strcmp(str3, "Hello") == 0) {
        printf("str3は \"Hello\" と同じです。\n");
    }
    return 0;
}`,
            notes: '`strcpy`や`strcat`は、コピー先の配列サイズを超えて書き込んでしまう「バッファオーバーフロー」の危険性があります。サイズを指定できる `strncpy` や `strncat` の使用がより安全です。'
        },
        {
            id: 'array',
            name: '配列',
            category: 'データ型',
            description: '同じ型のデータを連続したメモリ領域に格納するものです。多くのデータをまとめて扱う際に便利です。',
            syntax: 'type array_name[size];',
            example: `#include <stdio.h>

int main() {
    // 要素数5の整数型配列を宣言
    int numbers[5] = {10, 20, 30, 40, 50};

    // 配列の要素にアクセス
    printf("3番目の要素: %d\n", numbers[2]); // 30

    // forループを使ってすべての要素を出力
    for (int i = 0; i < 5; i++) {
        printf("numbers[%d] = %d\n", i, numbers[i]);
    }
    return 0;
}`,
            notes: '配列のインデックスは0から始まります。`numbers[2]`は3番目の要素を指します。'
        },
        {
            id: 'enum',
            name: 'enum (列挙型)',
            category: 'データ型',
            description: '整数定数に「意味のある名前」を付けて管理しやすくする機能です。複数の定数を扱うコードの可読性を大幅に向上させます。',
            syntax: 'enum tag_name { member1, member2, ... };',
            example: `#include <stdio.h>

// 信号の色を列挙型で定義
typedef enum {
    RED,
    YELLOW,
    GREEN
} SignalColor;

void check_signal(SignalColor color) {
    switch (color) {
        case RED:
            printf("止まれ\n");
            break;
        case YELLOW:
            printf("注意\n");
            break;
        case GREEN:
            printf("進め\n");
            break;
    }
}

int main() {
    SignalColor my_signal = GREEN;
    check_signal(my_signal);
    return 0;
}`,
            notes: '各メンバーには自動的に0, 1, 2...と整数値が割り当てられます。`enum Day { MON = 1, TUE, ... }`のように初期値を指定することも可能です。'
        },
        {
            id: 'pointer',
            name: 'ポインタ',
            category: 'ポインタ',
            description: '変数の「メモリアドレス」を格納するための特殊な変数です。C言語が「低レベルな操作も可能」と言われる理由の一つで、効率的なメモリアクセスや、関数間でデータを柔軟にやり取りするために不可欠です。',
            syntax: 'type *pointer_name;',
            example: `/* 1. 基本的なポインタの使い方 */
#include <stdio.h>

int main() {
    int var = 10;
    int *p;      // int型へのポインタ変数を宣言

    p = &var;  // varのアドレスをポインタpに格納

    printf("変数varのアドレス: %p\n", &var);
    printf("ポインタpが格納している値(アドレス): %p\n", p);
    printf("ポインタpが指す先の値: %d\n", *p); // pが指すアドレスにある値を取得

    *p = 20;   // ポインタ経由でvarの値を変更
    printf("変更後のvarの値: %d\n", var); // 20が出力される
    return 0;
}

/* 2. 関数とポインタ（値の書き換え）*/
#include <stdio.h>

// ポインタを引数に取ることで、呼び出し元の変数を書き換える
void add_ten(int *num) {
    *num = *num + 10;
}

int main() {
    int value = 5;
    printf("関数呼び出し前の値: %d\n", value);
    add_ten(&value); // valueのアドレスを渡す
    printf("関数呼び出し後の値: %d\n", value); // 15が出力される
    return 0;
}

/* 3. 動的メモリ確保 */
#include <stdio.h>
#include <stdlib.h> // malloc, freeのため

int main() {
    int *arr;
    int n = 5;

    // int型5個分のメモリを動的に確保
    arr = (int*)malloc(n * sizeof(int));
    if (arr == NULL) { // メモリ確保失敗のチェック
        printf("メモリ確保に失敗しました。\n");
        return 1;
    }

    for (int i = 0; i < n; i++) {
        arr[i] = i * 10;
        printf("%d ", arr[i]);
    }
    printf("\n");

    free(arr); // 確保したメモリを必ず解放する
    return 0;
}`,
            notes: ' `&` は「アドレス演算子」、`*` は「間接参照演算子」です。関数にポインタを渡すと、大きなデータも効率的に扱え、関数内で元のデータを変更できます。`malloc`で確保したメモリは、不要になったら必ず`free`で解放しないと「メモリリーク」の原因になります。'
        },
        {
            id: 'struct',
            name: '構造体 (struct)',
            category: 'データ型',
            description: '名前、年齢、住所など、関連する複数のデータを一つにまとめて、新しい「型」として定義する機能です。プログラムで扱う「モノ」や「概念」を表現するのに非常に便利です。',
            syntax: 'struct TagName {\n    type member1;\n    type member2;\n    ...\n};\n', 
            example: `/* 1. 構造体の基本的な使い方 */
#include <stdio.h>
#include <string.h>

// 「学生」を表す構造体を定義
struct Student {
    char name[50];
    int age;
};

int main() {
    struct Student s1; // 構造体変数の宣言

    // ドット(.)演算子でメンバーにアクセス
    strcpy(s1.name, "Taro Yamada");
    s1.age = 20;

    printf("学生名: %s, 年齢: %d\n", s1.name, s1.age);
    return 0;
}

/* 2. typedefで新しい型名を作成 */
#include <stdio.h>
#include <string.h>

// typedef を使うと、毎回 'struct Student' と書かなくてよくなる
typedef struct {
    char name[50];
    int age;
} Student;

int main() {
    Student s2; // 'struct'を省略して宣言できる
    strcpy(s2.name, "Jiro Suzuki");
    s2.age = 22;
    printf("学生名: %s, 年齢: %d\n", s2.name, s2.age);
    return 0;
}

/* 3. 構造体のポインタと関数 */
#include <stdio.h>
#include <string.h>

typedef struct {
    char name[50];
    int age;
} Person;

// 構造体のポインタを引数に取る関数
// (コピーが発生しないため、効率が良い)
void print_person(const Person *p) {
    // ポインタ経由の場合、アロー(->)演算子でメンバーにアクセス
    printf("名前: %s\n", p->name);
    printf("年齢: %d\n", p->age);
}

int main() {
    Person p1;
    strcpy(p1.name, "Saburo Tanaka");
    p1.age = 25;

    print_person(&p1); // p1のアドレスを渡す
    return 0;
}`,
            notes: '構造体の各要素を「メンバー」と呼びます。`typedef`は既存の型に別名を付ける機能で、構造体と組み合わせて使うとコードが読みやすくなります。大きな構造体を関数に渡す際は、コピーのコストを避けるためにポインタで渡すのが一般的です。'
        },
        {
            id: 'define',
            name: '#define',
            category: 'プリプロセッサ',
            description: '定数やマクロを定義するために使われるプリプロセッサ命令です。コンパイル前にコード内の文字列を置換します。',
            syntax: '#define IDENTIFIER replacement',
            example: `#include <stdio.h>

// 円周率の定数を定義
#define PI 3.14159

// 引数を2乗するマクロを定義
#define SQUARE(x) ((x) * (x))

int main() {
    double radius = 10.0;
    double area = PI * radius * radius;
    printf("円の面積: %f\n", area);

    int num = 5;
    printf("%dの2乗: %d\n", num, SQUARE(num));
    return 0;
}`,
            notes: 'マクロの引数は `(x)` のように括弧で囲むことが推奨されます。これは予期せぬ計算順序を防ぐためです。'
        },
        {
            id: 'file-io',
            name: 'ファイル入出力',
            category: 'ファイル操作',
            description: 'プログラムの外部にあるファイルからデータを読み込んだり、ファイルにデータを書き出したりする機能です。計算結果の保存や設定ファイルの読み込みなどに使います。',
            syntax: 'FILE *fp;\nfp = fopen("filename", "mode");\n// ... file operations ...\nfclose(fp);',
            example: `#include <stdio.h>

int main() {
    FILE *fp;
    char text[] = "Hello, File I/O!";
    char buffer[100];

    // 1. ファイルへの書き込み
    fp = fopen("test.txt", "w");
    if (fp == NULL) {
        printf("ファイルを開けませんでした。\n");
        return 1;
    }
    fprintf(fp, "%s\n", text);
    fclose(fp);
    printf("ファイルに書き込みました。\n");

    // 2. ファイルからの読み込み
    fp = fopen("test.txt", "r");
    if (fp == NULL) {
        printf("ファイルを開けませんでした。\n");
        return 1;
    }
    fgets(buffer, sizeof(buffer), fp);
    fclose(fp);
    printf("ファイルから読み込んだ内容: %s", buffer);

    return 0;
}`,
            notes: 'ファイルモードには主に "r"(読み込み), "w"(新規書き込み), "a"(追記) があります。`fopen`で開いたファイルは、処理が終了したら必ず`fclose`で閉じる必要があります。'
        }
    ];

    // --- DOM Elements ---
    const categoryListEl = document.getElementById('category-list');
    const itemListEl = document.getElementById('item-list');
    const itemDetailContainerEl = document.getElementById('item-detail-container');
    const itemListContainerEl = document.getElementById('item-list-container');
    const searchBoxEl = document.getElementById('search-box');
    const siteTitleEl = document.querySelector('header h1');

    // --- Render Functions ---

    function renderCategories() {
        const categories = ['すべて', ...new Set(cheatSheetData.map(item => item.category))];
        categoryListEl.innerHTML = '';
        categories.forEach(category => {
            const li = document.createElement('li');
            li.textContent = category;
            li.dataset.category = category;
            if (category === 'すべて') {
                li.classList.add('active');
            }
            categoryListEl.appendChild(li);
        });
    }

    function renderItemList(items) {
        itemListEl.innerHTML = '';
        items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.textContent = item.name;
            itemDiv.classList.add('item-list-entry'); // Add a class for styling
            itemDiv.dataset.id = item.id;
            itemListEl.appendChild(itemDiv);
        });
    }
    
    function renderItemDetail(item) {
        itemDetailContainerEl.innerHTML = `
            <button id="back-to-list">← 一覧へ戻る</button>
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <h3>構文</h3>
            <pre><code>${escapeHtml(item.syntax)}</code></pre>
            <h3>使用例</h3>
            <pre><code class="language-c">${escapeHtml(item.example)}</code><button class="copy-btn">コピー</button></pre>
            <h3>注意点</h3>
            <p>${item.notes}</p>
        `;
        
        // Add event listener for the new copy button
        const copyBtn = itemDetailContainerEl.querySelector('.copy-btn');
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(item.example).then(() => {
                copyBtn.textContent = 'コピー完了!';
                setTimeout(() => {
                    copyBtn.textContent = 'コピー';
                }, 2000);
            });
        });

        // Add event listener for the back button
        document.getElementById('back-to-list').addEventListener('click', showListView);
    }

    // --- View Management ---

    function showDetailView(item) {
        renderItemDetail(item);
        itemListContainerEl.classList.add('hidden');
        itemDetailContainerEl.classList.remove('hidden');
    }

    function showListView() {
        itemDetailContainerEl.classList.add('hidden');
        itemListContainerEl.classList.remove('hidden');
        // Reset active category if needed or other cleanup
    }

    // --- Event Handlers ---

    function handleCategoryClick(e) {
        if (e.target.tagName === 'LI') {
            const selectedCategory = e.target.dataset.category;
            
            // Update active class
            document.querySelectorAll('#category-list li').forEach(li => li.classList.remove('active'));
            e.target.classList.add('active');

            const filteredItems = selectedCategory === 'すべて'
                ? cheatSheetData
                : cheatSheetData.filter(item => item.category === selectedCategory);
            
            renderItemList(filteredItems);
            showListView();
        }
    }

    function handleSearch() {
        const searchTerm = searchBoxEl.value.toLowerCase();
        const filteredItems = cheatSheetData.filter(item => 
            item.name.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm)
        );
        renderItemList(filteredItems);
        showListView();
        // Clear active category
        document.querySelectorAll('#category-list li').forEach(li => li.classList.remove('active'));
    }

    function handleItemClick(e) {
        if (e.target.classList.contains('item-list-entry')) {
            const itemId = e.target.dataset.id;
            const item = cheatSheetData.find(i => i.id === itemId);
            if (item) {
                showDetailView(item);
            }
        }
    }

    // --- Utility ---
    function escapeHtml(unsafe) {
        return unsafe
             .replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&#039;");
    }


    // --- Initial Load ---
    renderCategories();
    renderItemList(cheatSheetData);

    // --- Event Listeners ---
    categoryListEl.addEventListener('click', handleCategoryClick);
    searchBoxEl.addEventListener('input', handleSearch);
    itemListEl.addEventListener('click', handleItemClick);
    siteTitleEl.addEventListener('click', () => {
        renderItemList(cheatSheetData);
        showListView();
    });
});
