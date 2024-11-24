// let 変数を宣言するもの
let unko = 'Hello World!';

// unko = 'Hello World2!!';

//定数
const bigUnko = 'He..Hell...Hello World!';

// bigUnko = 'Hello World2!!';

// print文のような役割
// console.log(bigUnko);

// 配列
let inoki = ['いーち', 'にー', 'さーん', 'ダーー！！'];

// console.log(inoki);
// console.log(inoki[1]);

/*
// ループ文
let index = 0;
while(index< inoki.length){//4回行うはず
    //繰り返したい命令
    console.log(inoki[index]); //0,1,2,3,4
    index++;
}
*/

/* おまけ（for文とforEachメソッド）
for(let i = 0; i < inoki.length; i++){
    console.log(inoki[i]);
}
実は、C言語の時と変わらない
また，forEachメソッドを使うこともできる
inoki.forEach((inoki) => {
    console.log(inoki);
});

forEachメソッドは，配列の要素数分だけ繰り返す(配列限定のメソッド)
inoki.forEach((element, index) => {
    console.log(`Index: ${index}, Value: ${element}`);
});

このようにコールバック関数を使って表現することも可能

*/

// if / else

// if(inoki.length > 5){
//     console.log('ボンバイエ！');
// } else{
//     console.log('ボンバ...！');
// }

//関数
// 最近はアロー関数を使うことが多い（雛形だと思ってやるといい）
// argは引数
const test = (arg) => {
    if(inoki.length > arg){
        console.log('ボンバイエ！');
    } else{
        console.log('ボンバ...！');
    }

};

test(7);
test(3);

//オブジェクト（基本文法はラスト）
const unko2 = {
    // プロパティー
    color: 'pink',
    size: 'large',
    purfume: 'mint',
    // メソッド
    goToilet: () => {
        console.log('Hello World');
    }
};

console.log(unko2.goToilet());

// 特殊なオブジェクト
// 1. windowオブジェクト
// ブラウザ全体の情報を取得するもの

// console.log(window.innerHeight);
// console.log(window.innerWidth);
// window.alert('Hello World!');//この機能は間違えた時に使えそう

// 2. documentオブジェクト
// HTMLの情報を取得するもの→表示しているページ全体の情報
// console.log(document);

console.log(document.getElementsByTagName('button')[0])

//ボタンをとった時だけにやりたいこと
// ボタンをとってない時だけにやったらエラーがでた

// document.getElementsByTagName('button')[0].addEventListener('click', () => {
//     window.alert('Hello World!');
// });

//DOMContentLoadedはHTMLの読み込みが終わった時に実行される
// DOMにおけるイベントの一つ


document.addEventListener('DOMContentLoaded', (event) => {
    console.log(document.getElementsByTagName('button')[0]);

    // ボタンをとった時だけにやりたいこと
    const button = document.getElementsByTagName('button')[0];
    if (button) {
        button.addEventListener('click', () => {
            window.alert('Hello World!');
        });
    }
});

// そういえば前に見たYoutuberが実行する順番の話していたなーそれだけ確認するか
