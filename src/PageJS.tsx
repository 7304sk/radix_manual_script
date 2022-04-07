import React, { FC, useState, useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/vs2015.css';
import config from './config';

import imgFish from './img/fish_icon_color.png';
import imgFlexFix from './img/flex-fix.png';
import imgLogo from './img/logo.png';

hljs.registerLanguage('javascript', javascript);

const App: FC = () => {
    useEffect(() => {
        config.pageInit();
        hljs.initHighlighting();
    });

    const code1: string = "window.addEventListener('DOMContentLoaded', () => {\nlet myRadix = new radix({\n        // オプションをここに書く\n    });\n    myRadix.init();\n});";
    const code2: string = "smoothScroll: {\n    active: true,  // 機能のオン、オフ（boolean）\n    duration: 800,  // スクロール終了までの時間（ミリ秒）\n    easing: 'easeInOutExpo' // スクロールのイージング（イージングセレクタ）\n}";
    const code3: string = "autoTargetBlank: {\n    active: true  // 機能のオン、オフ（boolean）\n}";
    const code4: string = "toggleNav: {\n    active: false  // 機能のオン、オフ（boolean）\n    trigger: '',  // 開閉ボタン（CSSセレクタ）\n    target: ''  // 対象のメニュー（CSSセレクタ）\n    class: 'opened',  // 追加するクラス（string）\n    preventScroll: false  // ナビゲーション展開時、ページ全体のスクロールを制限するか（boolean）\n}";
    const code5: string = "svg: {\n    active: true,  // 機能のオン、オフ（boolean）\n    hamburger: '.rsi-hamburger',  // ハンバーガーメニュー\n    cross: '.rsi-cross',  // ×印\n    arrowLR: '.rsi-arrowLR',  // 左右矢印\n    arrowTB: '.rsi-arrowTB',  // 上下矢印\n    angleTop: '.rsi-angleTop',  // 上向き角\n    angleRight: '.rsi-angleRight',  // 右向き角\n    angleBottom: '.rsi-angleBottom',  // 下向き角\n    angleLeft: '.rsi-angleLeft'  // 左向き角\n}";
    const code6: string = "dragScroll: {\n    active: true,  // 機能のオン、オフ（boolean）\n    selector: '.rdx-drag-scroll',  // 領域を作る場所（CSSセレクタ）\n    hint: true  // ヒントを表示するか（boolean）\n}";
    const code7: string = "flexFix: {\n    active: true  // 機能のオン、オフ（boolean）\n    selector: '.rdx-flex-fix',  // 対象とする場所（CSSセレクタ）\n    inherit: false,  // 内部要素もコピーするか（boolean）\n    min: 0  // ダミーの最小個数\n}";
    const code8: string = "modal: {\n    active: true  // 機能のオン、オフ（boolean）\n    resizeSpeed: 300,  // 拡縮アニメーション速度（ミリ秒）\n    resizeEasing: 'easeInOutBack',  // 拡縮アニメーションのイージング（イージングセレクタ）\n    fit: true,  // 表示時の倍率を画面一杯になるようにするか（boolean）\n    enlargeText: '拡大',  // 拡大ボタンのテキスト（string）\n    shrinkText: '縮小'  // 縮小ボタンのテキスト（string）\n}";
    const code9: string = "scrollAppear: {\n    active: true  // 機能のオン、オフ（boolean）\n    selector: '.rdx-scroll-appear',  // スクロール表示する要素（CSSセレクタ）\n    delay: 200,  // 表示するまでの遅延（ミリ秒）\n    reset: false,  // 一度表示した後非表示にするか（boolean）\n    class: 'active'  // 追加するクラス（string）\n}";
    const code10: string = "preload: {\n    active: false  // 機能のオン、オフ（boolean）\n    selector: '',  // プリロード画面の要素（CSSセレクタ）\n    minload: 200  // 最小の表示時間（ミリ秒）\n}";
    const code11: string = "window.addEventListener('DOMContentLoaded', () => {\n    let myRadix = new radix({\n        timeFrame: 10,\n        preload: {\n            active: false,\n            selector: '',\n            minload: 200\n        },\n        smoothScroll: {\n            active: true,\n            duration: 800,\n            easing: 'easeInOutExpo'\n        },\n        autoTargetBlank: {\n            active: true\n        },\n        toggleNav: {\n            active: false,\n            trigger: '',\n            target: '',\n            class: 'opened',\n            preventScroll: false\n        },\n        svg: {\n            active: true,\n            hamburger: '.rsi-hamburger',\n            cross: '.rsi-cross',\n            arrowLR: '.rsi-arrowLR',\n            arrowTB: '.rsi-arrowTB',\n            angleTop: '.rdx-angleTop',\n            angleRight: '.rdx-angleRight',\n            angleBottom: '.rdx-angleBottom',\n            angleLeft: '.rdx-angleLeft'\n        },\n        dragScroll: {\n            active: true,\n            selector: '.rdx-drag-scroll',\n            hint: true\n        }\n        flexFix: {\n            active: true,\n            selector: '.rdx-flex-fix',\n            inherit: false,\n            min: 0\n        },\n        modal: {\n            active: true,\n            resizeSpeed: 300,\n            resizeEasing: 'ease-in-out',\n            fit: true,\n            enlargeText: '拡大',\n            shrinkText: '縮小'\n        },\n        scrollAppear: {\n            active: true\n            selector: '.rdx-scroll-appear',\n            delay: 200,\n            reset: false,\n            class: 'active'\n        }\n    });\n    myRadix.init();\n});";

    return (
        <>
            <section className='notice full-bleed'>
                バージョン４の公開に伴い、マニュアルを移転しましした。<br />
                <a href="https://radix.shoalwave.net">radix.shoalwave.net</a>
            </section>
            <h1 id="javascript" className="pages">javascript</h1>
            <section>
                <p>web ページを作成する際に、基本的にどのようなページにもあって損はない機能を、ひとまとめにして実行するスクリプトです。</p>
                <p>スライドショーなどのリッチコンテンツを制作することは含まれていません。追加でスクリプトを書いたり、別の専用スクリプトを一緒に組み込むなどして制作することを考えられています。（例としては、私が作っている
                    rdx-filter.js 等のように）。</p>
            </section>
            <section>
                <h2>使い方</h2>
                <p>radix.js を head 内の script 要素で読み込ませてください。その後、script で以下の初期化スクリプトを実行してください（雛形では、 index.js
                    として分けられてそれを読み込む形になっています）。各種機能をカスタマイズするには、この初期化スクリプト内の指定の場所にオプションを追加します。</p>
                <pre><code>{code1}</code></pre>
            </section>
            <section>
                <h2 id="easing-selector" className="linker">イージング関数について - イージングセレクタ</h2>
                <p>BSD License である <a href="http://robertpenner.com/easing/">Robert Penner’s Easing Functions</a>
                    を利用しています。イージングセレクタには linear, easeIn, easeOut, easeInOut の4種類があり、linear 以外には変化の強度に6段階あります。（<a
                        href="https://easings.net/ja">イージングの例一覧</a>）</p>
                <p className="mb0">緩やかな方から順に、</p>
                <ul className="mb0">
                    <li>Sine</li>
                    <li>Quad</li>
                    <li>Cubic</li>
                    <li>Quart</li>
                    <li>Quint</li>
                    <li>Expo</li>
                </ul>
                <p className="mb0">があり、 <code>easeInQuart</code> のように表記します。<br />
                    それ以外にも特殊なイージングとして</p>
                <ul className="mb0">
                    <li>Circ : Expo に似ているが加速・減速時間が緩やか</li>
                    <li>Back : 少し行き過ぎてから戻る</li>
                    <li>Elastic : バネのように振動する</li>
                    <li>Bounce : ボールを投げたように放物線運動で跳ね返る</li>
                </ul>
                <p>という設定があり、それぞれ In, Out, InOut が利用できます。</p>
                <p>'ease-in', 'ease-out', 'ease-in-out' のように css イージング名での指定も可能であり、その場合は Quad として適用されます。</p>
            </section>
            <section>
                <h2 id="options" className="linker">機能説明、オプション設定</h2>
                <p>radix.js で提供される機能と、それを実行するのに必要なオプションを説明します。全てのオプションには active プロパティがあり、これの真偽型で機能の実行を判断します。</p>
                <p>radix インスタンスで提供される API についてはこのページのコンソールに出力しているので、そちらを確認してください。</p>
                <ol>
                    <li><a href="#smooth-scroll">スムーススクロール付与</a></li>
                    <li><a href="#target-blank">外部リンクへの target blank 付与</a></li>
                    <li><a href="#js-toggle-nav">ナビゲーションの開閉機能</a></li>
                    <li><a href="#svg">svgの挿入機能</a></li>
                    <li><a href="#drag-scroll">ドラッグスクロール</a></li>
                    <li><a href="#flex-fix">css による flex layout の補正機能</a></li>
                    <li><a href="#modal">モーダルウィンドウ</a></li>
                    <li><a href="#scroll-appear">スクロール表示</a></li>
                    <li><a href="#js-preload">プリロード画面</a></li>
                </ol>
            </section>
            <section>
                <h3 id="smooth-scroll" className="linker">スムーススクロール付与</h3>
                <pre><code>{code2}</code></pre>
                <p>
                    同一ページ内へのアンカーのリンクをクリック時、自動で目標までスクロールするようにします。<br />
                    条件としては、a タグのうち、href属性値が # から始まるものについて、本来のページ遷移をキャンセルして対象 ID のエレメントまでスクロールするイベントを追加します。<br />
                    # から始まるもののみが対象である為、 index.html#hoge のように、ファイル名や http:// から始まっている場合は機能しません。
                </p>
                <p>アニメーションの指定には<a href="#easing-selector">イージングセレクタ</a>が利用できます。</p>
                <p>リンク要素に個別に <code>rdx-smooth-scroll-easing</code>, <code>rdx-smooth-scroll-duration</code>
                    を設定することで、全体設定の他に各要素に個別の設定ができます。</p>
                <ol>
                    <li className="mb_"><a href="#options" rdx-smooth-scroll-easing="easeOutBounce"
                        rdx-smooth-scroll-duration="1000" className="rdx-btn">スクロールする（easeOutBounce）</a></li>
                    <li className="mb_"><a href="page-js#options" className="rdx-btn">スクロールではなく直遷移</a></li>
                </ol>
                <p>スムーススクロールの場合、URLは変わりません。直遷移の場合URLが変わります。</p>
            </section>
            <section>
                <h3 id="target-blank" className="linker">外部リンクへの target blank 付与</h3>
                <pre><code>{code3}</code></pre>
                <p>そのままですが、外部リンクや pdf ファイルへのリンクとなっている a タグに <code>target="_blank"</code> を直接追加し、別窓で強制的に開くようにします。</p>
            </section>
            <section>
                <h3 id="js-toggle-nav" className="linker">ナビゲーションの開閉機能</h3>
                <pre><code>{code4}</code></pre>
                <p>
                    スマートフォンサイトでよくある、タップ（クリック）することでメニューが開き、もう一度タップすることで閉じるというボタンを実装します。<br />
                    querySelector で指定する為、cssセレクタの記法でクラスでも ID でも指定できます。
                </p>
                <p>
                    <code>preventScroll</code> を true にすることで、ナビゲーションが開いている状態のときに body に <code>overflow-y: hidden</code>
                    を追加し、ページ全体のスクロールをしないようにします。
                </p>
                <p>
                    開閉動作は js コードから呼び出せます。作成した radix インスタンスから <code>toggleNav(mode)</code> メソッドを呼び出すことで開閉を行います。引数 mode
                    は省略すると現在の状態に応じて開閉を行います。 false または 'open' で展開、 true または 'close' で縮小です。<br />
                    現在の開閉状態は <code>navOpen</code> を読むことで取得できます。詳しい例は当マニュアルに実行されている index.js の 32 行目からのスクリプトです。
                </p>
            </section>
            <section>
                <h3 id="svg" className="linker">svgの挿入機能</h3>
                <pre><code>{code5}</code></pre>
                <p>svg で作成されたアイコンを挿入します。 img タグによる埋め込みでなく、svg のコードをそのまま埋め込む形なので、css や他の js コードでパーツごとに自由に動かせたりします。<br />
                    基本的に、rsi-(アイコン名) というクラス名の要素を対象に SVG に置き換えます。javascript の init 時にセレクタを変更することができ、クラス名の衝突対策や自由宣言ができます。
                </p>
                <p>アイコンの一覧：（ホバーでアイコン名が表示されます）</p>
                <ul className="svg-display">
                    <li className="rsi-hamburger" data-popup="hamburger"></li>
                    <li className="rsi-cross" data-popup="cross"></li>
                    <li className="rsi-arrowLR" data-popup="arrowLR"></li>
                    <li className="rsi-arrowTB" data-popup="arrowTB"></li>
                    <li className="rsi-angleTop" data-popup="angleTop"></li>
                    <li className="rsi-angleRight" data-popup="angleRight"></li>
                    <li className="rsi-angleBottom" data-popup="angleBottom"></li>
                    <li className="rsi-angleLeft" data-popup="angleLeft"></li>
                </ul>
            </section>
            <section>
                <h3 id="drag-scroll" className="linker">ドラッグスクロール</h3>
                <pre><code>{code6}</code></pre>
                <p>
                    スマホの画面などでは横の幅が少なく、コードやテーブルを表示する際にはみ出してしまうことがあります。<br />
                    これは、このクラスをつけたブロックの内部をドラッグすることでスクロールできるようにするものです。<br />
                    <code>hint</code> を true にしておくことで、スクロールのインジケータが表示されるようになります。<br />
                    テーブル等、狭い横幅表示の際にブレークできない要素をスクロールさせることができます（スマホでは元々フリックでスクロールができるのでインジケータを表示することが主目的になりますが、パソコンの場合にもマウスによるドラッグスクロールを可能にします）。
                </p>
                <p>例↓</p>
                <div className="rdx-drag-scroll mb">
                    <table className="example-table mb0">
                        <thead>
                            <tr>
                                <th></th>
                                <th>月</th>
                                <th>火</th>
                                <th>水</th>
                                <th>木</th>
                                <th>金</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1時間目</th>
                                <td>国語</td>
                                <td>算数</td>
                                <td>体育</td>
                                <td>国語</td>
                                <td>図工</td>
                            </tr>
                            <tr>
                                <th>2時間目</th>
                                <td>算数</td>
                                <td>生活</td>
                                <td>国語</td>
                                <td>音楽</td>
                                <td>図工</td>
                            </tr>
                            <tr>
                                <th>3時間目</th>
                                <td>生活</td>
                                <td>国語</td>
                                <td>算数</td>
                                <td>算数</td>
                                <td>国語</td>
                            </tr>
                            <tr>
                                <th>4時間目</th>
                                <td>体育</td>
                                <td>道徳</td>
                                <td>読書</td>
                                <td>生活</td>
                                <td>体育</td>
                            </tr>
                            <tr>
                                <th>昼休み</th>
                                <td colSpan={5}>きゅうしょく・そうじ</td>
                            </tr>
                            <tr>
                                <th>5時間目</th>
                                <td></td>
                                <td>音楽</td>
                                <td>書写</td>
                                <td>学活</td>
                                <td>数学</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section>
                <h3 id="flex-fix" className="linker">css による flex layout の補正機能</h3>
                <pre><code>{code7}</code></pre>
                <p>少し説明がめんどくさいので画像で。</p>
                <p className="text-center"><img src={imgFlexFix} width="700" rdx-modal-self="true" rdx-modal-resize="true" /></p>
                <p>このように、 flex box の横幅が変わったときに、内部の要素を整列する際に <code>text-align: justify</code>
                    のように要素を並べ、よりキレイなレイアウトを可能にします。</p>
                <p>具体的には、並べられる要素をコピーして追加することにより疑似的に整列させる為、横幅を再現できる要素をコピーする必要があります。</p>
                <p>動作の軽量化の為、初期設定では <code>inherit</code> が false となっており子要素を継承しません。うまく動作しないときはこれを true
                    にすることで期待された動作になることがあります。</p>
            </section>
            <section>
                <h3 id="modal" className="linker">モーダルウィンドウ</h3>
                <pre rdx-modal-self="true" rdx-modal-resize="true" rdx-modal-scale="2"><code>{code8}</code></pre>
                <p>モーダルウィンドウで画像などを開きます。</p>
                <p>アニメーションの指定には<a href="#easing-selector">イージングセレクタ</a>が利用できます。</p>
                <p><code>rdx-modal-target</code> に対象としたい要素のセレクタを入力した要素をクリックすることで、モーダルウィンドウが開きます。<br />
                    <code>rdx-modal-self</code> 属性を持たせた要素をクリックすると、それ自体をモーダルウィンドウで開きます。<br />
                    <code>rdx-modal-resize</code> 属性を持たせると、拡大・縮小ボタンが表示され、モーダルウィンドウ内で拡大縮小ができるようになります。
                </p>
                <p><code>.modal-visible</code> クラスを持たせると、モーダルウィンドウで開かれているときのみ表示されます。</p>
                <p>
                    個別設定として、<code>rdx-modal-resize-speed</code>, <code>rdx-modal-resize-easing</code>,
                    <code>rdx-modal-scale</code> を設定することで全体とは別の設定で開くことができます。（例として、このセクションの pre 部分「modal: &123;~ &125;
                    の部分」をクリックすると、最初から2倍表示で表示されます。）
                </p>
                <p>モーダルウィンドウにおける 1 倍は、その要素が持つ本来の大きさになります。例えば下の Radix のロゴ画像は max-width: 100%
                    がかけられているため、画面幅が狭い時は本来の大きさよりも縮めて表示されています。しかし、モーダルウィンドウで開いた時の大きさはその時の大きさではなく画像の本来の幅である 665px
                    として表示されます。<br />
                    リサイズボタンによって 5 倍より大きく拡大、 0.2 倍より小さく縮小はできません。</p>
                <p><button className="rdx-btn" rdx-modal-target="#modal-img">画像を開く</button></p>
                {/* 上のボタンによって開く要素 */}
                <img id="modal-img" className="modal-visible" src={imgFish} alt="アイコン" width="300" />
                {/* クリックでその要素自体を開く要素 */}
                <p>下の画像をクリックすると大きなサイズで表示できます。</p>
                <p className="text-center"><img className="rdx-scroll-appear" rdx-scroll-appear-reset="true" rdx-modal-self="true" rdx-modal-resize="true" src={imgLogo} alt="ロゴ" /></p>
            </section>
            <section className="rdx-scroll-appear">
                <h3 id="scroll-appear" className="linker">スクロール表示</h3>
                <pre><code>{code9}</code></pre>
                <p>
                    画面が要素の位置までスクロールしたときに要素を表示するようにします。<br />
                    スクロール時にクラスを追加しているだけなので、どのようにアニメーションするかは css で自由に設定できます。<br />
                    reset は、要素が画面外に出た際に class を外すかという設定です。上の画像は reset あり、このセクションは reset なしの例です。<br />
                    <code>rdx-scroll-appear-reset</code>, <code>rdx-scroll-appear-delay</code>,
                    <code>rdx-scroll-appear-class</code> 属性により、全体設定の他に各要素に個別の設定ができます。
                </p>
                <p>
                    また、position: fixed で配置されている要素などへの使用を想定して、個別設定限定のオプションとして <code> rdx-scroll-appear-fixed</code>
                    があります。これは Pixel 値で設定でき、要素の相対位置ではなく window のスクロール量がその値を超えるかによっての判定に代わります。<br />
                    当マニュアルのページトップボタンが例です。
                </p>
            </section>
            <section>
                <h3 id="js-preload" className="linker">プリロード画面</h3>
                <pre><code>{code10}</code></pre>
                <p>ページのコンテンツが読み込まれた時点で非表示にする要素を指定できます。非表示にするまでの遅延時間も設定できます。</p>
            </section>
            <section>
                <h2 id="roundup" className="linker">オプションまとめ</h2>
                <p>全てのオプションの初期値を入れた宣言は以下です。</p>
                <p>機能説明に含まれていない汎用オプションとして、 <code>timeFrame</code> があります。これはスムーススクロール等、 javascript
                    でアニメーション処理をする際のインターバル間隔（ミリ秒）です。</p>
                <pre><code>{code11}</code></pre>
            </section>
        </>
    );
};
export default App;