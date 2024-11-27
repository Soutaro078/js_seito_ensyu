(() => {

    class Accordion {
        //初期化
        constructor(obj){
            console.log(obj);
            const $elm = document.querySelector(obj.hookName);
            const $trigger = $elm.getElementsByTagName(obj.tagName);
            const triggerLen = $trigger.length;
            let index = 0;
            //クラス内の関数はthisをつける(今回は問が2個以上あるので，この形に)
            while(index < triggerLen) {
                $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
                this.actionoUnko();
                index++;
            }      
        }

        actionoUnko(){
            console.log('うんこ');
        }
        // クリックしたら実行されるもの
        //クラス内で関数を書く時は，constとかいらない
        clickHandler = (e) => {
            e.preventDefault();
            /*
            .nextElementSibling は、その次の兄弟要素を取得します。
            この場合、次の兄弟要素は 
            <div class="accordion-contents">
            A1.クソして寝ろ</div> です。
            */
            const $target = e.currentTarget;
            const $content = $target.nextElementSibling;
            if($content.style.display === 'block') {
                $content.style.display = 'none';
            }else{
                $content.style.display = 'block';
            }
        }        // クリックしたら実行されるもの
    }

    const fuckingAccordion = new Accordion({
        hookName: '#js-accordion',
        tagName: 'a',
        // classTrigger: 'js-faq-trigger',

    });

    const fuckingAccordion1 = new Accordion({
        hookName: '#js-accordion2',
        tagName: 'a',
        // classTrigger: 'js-faq-trigger',

    });




})();


/*
-------------------------------------------------------------------------
クラスなしver

(() => {
    const $elm = document.querySelector('#js-accordion');
    const $trigger = $elm.getElementsByTagName('a');
    const triggerLen = $trigger.length;
    let index = 0;

    // クリックしたら実行されるもの
    const clickHandler = (e) => {
        e.preventDefault();
        
        .nextElementSibling は、その次の兄弟要素を取得します。
        この場合、次の兄弟要素は 
        <div class="accordion-contents">
        A1.クソして寝ろ</div> です。
  
        const $target = e.currentTarget;//currentTargetは今の注目しているタグ（多分アンカー）
        const $content = $target.nextElementSibling;
        if($content.style.display === 'block') {
            $content.style.display = 'none';
        }else{
            $content.style.display = 'block';
        }
    }
    // クリックしたら実行されるもの
    while(index < triggerLen) {
        $trigger[index].addEventListener('click', (e) => clickHandler(e));
        index++;
    }

})();

-------------------------------------------------------------------------
*/







/*
3時間前のリファクタリング
(() => {
    const $elm = document.querySelector('#js-accordion');
    const $trigger = $elm.getElementsByTagName('a');

    // クリックしたら実行されるもの
    const clickHandler = (e) => {
        e.preventDefault();
        /*
        .nextElementSibling は、その次の兄弟要素を取得します。
        この場合、次の兄弟要素は 
        <div class="accordion-contents">
        A1.クソして寝ろ</div> です。
        
        const $content = $trigger[0].nextElementSibling;
        if($content.style.display === 'block') {
            $content.style.display = 'none';
        }else{
            $content.style.display = 'block';
        }
    };

    $trigger[0].addEventListener('click', (e) => clickHandler(e));
})();
*/ 