//配列の中にオブジェクトを入れることで，問題文や選択肢，正解を管理しやすくなる
const quiz = [
    {
        question: 'ゲーム市場，最も売れたゲーム機は次のうちどれ？',
        answers: [
            'スーパーファミコン', 
            'プレイステーション2', 
            'ニンテンドースイッチ', 
            'ニンテンドーDS'
        ],
        correct: 'ニンテンドーDS'
    },
    {
        question: '任天堂の看板ゲームといえば？',
        answers: [
            'スーパーマリオ', 
            'ドンキーコング', 
            'ゼルダの伝説', 
            '星のカービィ'
        ],
        correct: 'スーパーマリオ'
    },
    {
        question: 'スマブラの開発元は次のうちどれ？',
        answers: [
            'バンダイナムコ', 
            'カプコン', 
            '任天堂', 
            'セガ'
        ],
        correct: '任天堂'

    }
];

let quizIndex = 0;
let quizLength = quiz.length;
let score = 0;
//配列の中にオブジェクトを入れることで，問題文や選択肢，正解を管理しやすくなる

// ずっと使うものは変数にした方が後々使いやすいよね
//HTMLのオブジェクトを取得するときは，「$」を入れる
//＄が入っていると，HTMLのオブジェクトを取得しているとわかりやすい
const $button = document.getElementsByTagName('button');

//クイズの問題文と選択肢を定義
const setUpQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let index = 0;
    let buttonLength = $button.length;
    while(index < buttonLength){
        $button[index].textContent = quiz[quizIndex].answers[index];
        index++;
    }
}
setUpQuiz();

// eはイベントオブジェクトの略
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');
        score++;
    }else{
        window.alert('不正解！');
    }

    quizIndex++;

    if(quizIndex < quizLength){
        //問題数がまだあればこちらを実行
        setUpQuiz();
    }else{
        //問題数がもう出なければこちらを実行
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    }
}

let handleIndex = 0;
let buttonLength = $button.length;

while(handleIndex < buttonLength){
    $button[handleIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handleIndex++;
}

// リファクタリング(while文を使わない)
// $button[0].addEventListener('click', (e) => {
//     clickHandler(e);
// });

// $button[1].addEventListener('click', (e) => {
//     clickHandler(e);
// });

// $button[2].addEventListener('click', (e) => {
//     clickHandler(e);
// });

// $button[3].addEventListener('click', (e) => {
//     clickHandler(e);
// });

/* 元のコード（リファクタリング前）
$button[0].addEventListener('click', (e) => {
    if(correct === e.target.textContent){
        window.alert('正解！');
    }else{
        window.alert('不正解！');
    }
});
$button[1].addEventListener('click', (e) => {
    if(correct === e.target.textContent){
        window.alert('正解！');
    }else{
        window.alert('不正解！');
    }
});
$button[2].addEventListener('click', (e) => {
    if(correct === e.target.textContent){
        window.alert('正解！');
    }else{
        window.alert('不正解！');
    }
});
$button[3].addEventListener('click', (e) => {
    if(correct === e.target.textContent){
        window.alert('正解！');
    }else{
        window.alert('不正解！');
    }
});

*/

// // まあ，書き方はなんとなく理解できた気がしている
// document.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
//     const button = document.getElementsByTagName('button')[0];
//     console.log(button); // Check if button is null or not
//     // if (button) {
//     //     button.addEventListener('click', () => {
//     //         window.alert('Hello World!');
//     //     });
//     // } else {
//     //     console.log('Button not found');
//     // }
// });

// コンソールボタン
/*
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const button = document.getElementsByTagName('button')[0];
    console.log(button); // Check if button is null or not
    if (button) {
        button.addEventListener('click', () => {
            window.alert('Hello World!');
        });
    } else {
        console.log('Button not found');
    }
});

*/


/*
------------------------------------------------------------------------------------------------------------------------
#リファクタリング前
const question = 'ゲーム市場，最も売れたゲーム機は次のうちどれ？';

const answers = [
    'スーパーファミコン', 
    'プレイステーション2', 
    'ニンテンドースイッチ', 
    'ニンテンドーDS'
];

const correct = 'ニンテンドーDS';

// document.getElementById('js-question').textContent = question;

// ずっと使うものは変数にした方が後々使いやすいよね
//HTMLのオブジェクトを取得するときは，「$」を入れる
//＄が入っていると，HTMLのオブジェクトを取得しているとわかりやすい
const $button = document.getElementsByTagName('button');

//クイズの問題文と選択肢を定義
const setUpQuiz = () => {
    document.getElementById('js-question').textContent = question;
    let index = 0;
    let buttonLength = $button.length;
    while(index < buttonLength){
        $button[index].textContent = answers[index];
        index++;
    }
}
setUpQuiz();

// リファクタリング前

// let index = 0;
// let buttonLength = $button.length;
// while(index < $button.length){
//     $button[index].textContent = answers[index];
//     index++;
// }
// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];

// eはイベントオブジェクトの略
const clickHandler = (e) => {
    if(correct === e.target.textContent){
        window.alert('正解！');
    }else{
        window.alert('不正解！');
    }
};

let handleIndex = 0;
let buttonLength = $button.length;

while(handleIndex < buttonLength){
    $button[handleIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handleIndex++;
}

// リファクタリング(while文を使わない)
// $button[0].addEventListener('click', (e) => {
//     clickHandler(e);
// });

// $button[1].addEventListener('click', (e) => {
//     clickHandler(e);
// });

// $button[2].addEventListener('click', (e) => {
//     clickHandler(e);
// });

// $button[3].addEventListener('click', (e) => {
//     clickHandler(e);
// });

/* 元のコード（リファクタリング前）
$button[0].addEventListener('click', (e) => {
    if(correct === e.target.textContent){
        window.alert('正解！');
    }else{
        window.alert('不正解！');
    }
});
$button[1].addEventListener('click', (e) => {
    if(correct === e.target.textContent){
        window.alert('正解！');
    }else{
        window.alert('不正解！');
    }
});
$button[2].addEventListener('click', (e) => {
    if(correct === e.target.textContent){
        window.alert('正解！');
    }else{
        window.alert('不正解！');
    }
});
$button[3].addEventListener('click', (e) => {
    if(correct === e.target.textContent){
        window.alert('正解！');
    }else{
        window.alert('不正解！');
    }
});

*/

// // まあ，書き方はなんとなく理解できた気がしている
// document.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
//     const button = document.getElementsByTagName('button')[0];
//     console.log(button); // Check if button is null or not
//     // if (button) {
//     //     button.addEventListener('click', () => {
//     //         window.alert('Hello World!');
//     //     });
//     // } else {
//     //     console.log('Button not found');
//     // }
// });

// コンソールボタン
/*
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const button = document.getElementsByTagName('button')[0];
    console.log(button); // Check if button is null or not
    if (button) {
        button.addEventListener('click', () => {
            window.alert('Hello World!');
        });
    } else {
        console.log('Button not found');
    }
});

------------------------------------------------------------------------------------------------------------------------
// リファクタリング前

// let index = 0;
// let buttonLength = $button.length;
// while(index < $button.length){
//     $button[index].textContent = answers[index];
//     index++;
// }
// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];

*/

