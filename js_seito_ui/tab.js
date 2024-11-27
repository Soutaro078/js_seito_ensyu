class TabNavigation {
    constructor(obj) {
        const $elm = document.querySelector(obj.hookName);
        this.$nav = $elm.querySelectorAll('[data-nav]');
        this.$content = $elm.querySelectorAll('[data-content]');
        this.ACTIVE_CLASS = 'is-active';
        this.navLen = this.$nav.length;
        this.targetVal_min = this.$nav[0].dataset.nav; // 最初のdata-navの値を取得
        console.log('targetVal_min',this.targetVal_min);
        this.init();
        this.addEventListeners();
    }

    init() {
        this.$content[0].style.display = 'block';
    }

    handleClick = (e) => {
        e.preventDefault();
        const $this = e.target;
        console.log('$this',$this)
        const targetVal = $this.dataset.nav;
        console.log('targetVal',typeof targetVal);
        
        //これについては，data-navの初期の値を取得している
        // 後に配列から一番最初のもの等を取得するときに使う

        for (let i = 0; i < this.navLen; i++) {
            this.$content[i].style.display = 'none';
            this.$nav[i].classList.remove(this.ACTIVE_CLASS);
        }

        document.querySelector(`[data-content="${targetVal}"]`).style.display = 'block';
        this.$nav[parseInt(targetVal,10)-parseInt(this.targetVal_min,10)].classList.add(this.ACTIVE_CLASS);
    }

    addEventListeners() {
        for (let i = 0; i < this.navLen; i++) {
            this.$nav[i].addEventListener('click', (e) => this.handleClick(e));
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TabNavigation({
        hookName: '#js-tab'
    });

    new TabNavigation({
        hookName: '#js-tab2'
    });
});


/* -------------------------------------------------------------------------------------------------------
これに関して
クラスにしたいのは，tabの部分かなー


 -------------------------------------------------------------------------------------------------------
*/

// これは即時関数です。即時関数は、定義と同時に実行されます。
// グローバル変数が汚染されるのを防ぐ
// jsはなるべくidを使う
// 変数に＄はDOM要素だよって意味
// このコードのポイントは，タブを増やそう，減らそうと思っても簡単に変化に対応できるところ

/*
--------------------------------------------------------
// このコードは，クラスとインスタンスを使っていない
(() => {
    //クラスとインスタンスなしver
    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');
    // これは，文字列（横に置きたいもの）の値的なもの
    const ACTIVE_CLASS = 'is-active';//大文字は定数を表す
    const navLen = $nav.length

    //初期化
    const init = () => {
        $content[0].style.display = 'block';
    }
    init();

    //クリックしたら起こるイベント
    const handleClick = (e) => {
        e.preventDefault();//アンカーなどの能力を削除する（殺す）って意味
        
        //クリックされたnavとそのデータを取得
        const $this = e.target;
        const targetVal = $this.dataset.nav;
        //datasetはそのDOM要素のdata属性を取るよって意味
        // navはdata-navのnavのこと

        //対象外のnav,content全て一度リセットする
        let index=0
        while(index < navLen){
            $content[index].style.display = 'none';
            $nav[index].classList.remove(ACTIVE_CLASS);
            index++;
        }
        // console.log('$this',targetVal);

        //対象のコンテンツをアクティブ化する
        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';

        //クラス属性についているクラス一覧を取得するって意味
        // addを使うことで，is-activeが加えられたって意味
        $nav[targetVal].classList.add(ACTIVE_CLASS);
    }
    //全要素に対して，関数を適応・発火
    let index = 0;
    while(index < navLen){
        $nav[index].addEventListener('click',(e) => handleClick(e));
        index++;
    }
-------------------------------------------------------------------------------------------------------
})();

// これは即時関数です。即時関数は、定義と同時に実行されます。
// グローバル変数が汚染されるのを防ぐ
// jsはなるべくidを使う
// 変数に＄はDOM要素だよって意味
// このコードのポイントは，タブを増やそう，減らそうと思っても簡単に変化に対応できるところ
*/

/*
2024年11月23日のリファクタリング
①HTMLクラスにおいて，data-navやdata-contentの数字が同じ場合，区別ができないというバグが発生
②それを治しても，もしかしたら，data-navの値とかは被ってはいけない可能性が出てきた
③ただし，それを治しても，別のエラーが発生（addlisteventに表示されない）
④それについて，初期値を受け取ってその値を使うことで解決した

ただし，これはHTMLで順番にデータを格納しなければいけないという制約付きなので
さらにいいものにするには別の処理をする必要がある
-------------*/
