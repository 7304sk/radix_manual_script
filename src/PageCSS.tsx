import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from './config';

const App: FC = () => {
    useEffect(() => {
        config.pageInit();
    });
    return (
        <>
            <section className='notice full-bleed'>
                バージョン４の公開に伴い、マニュアルを移転しましした。<br />
                <a href="https://radix.shoalwave.net">radix.shoalwave.net</a>
            </section>
            <h1 id="css" className="pages">CSS</h1>
            <section>
                <p>radix.css で提供されるクラスと、本フレームワークで想定される基本的な設計方針について説明します。</p>
                <h2>基本のレイアウトの使い方</h2>
                <p className="text-center">
                    <Link to="/css-layout">詳細</Link>
                </p>
            </section>
            <section>
                <h2 id="variables" className="linker">CSS variables</h2>
                <p>CSS3 で利用できる変数設定を利用しています。</p>
                <ul className="mb0">
                    <li><code>--fontSize</code></li>
                    <li><code>--linkColor</code></li>
                    <li><code>--textColor</code></li>
                </ul>
                <p>文字設定をします。 fontSize は rem のベースとなる html 要素のフォントサイズ、 linkColor は a 要素の文字色、 textColor は全体の文字色を設定します。</p>
                <ul className="mb0">
                    <li><code>--mainColor</code></li>
                    <li><code>--mainDarkColor</code></li>
                    <li><code>--mainLightColor</code></li>
                </ul>
                <p>メインの文字色を設定します。 mainColor と mainDarkColor は <code>.rdx-btn</code> 要素で用いる為、最低限設定してください。<br />
                    その他のカラープリセットはサイトに応じて作成するといいでしょう。</p>
                <ul className="mb0">
                    <li><code>--contentWidth</code></li>
                    <li><code>--spacing</code></li>
                </ul>
                <p>
                    contentWidth は <code>.centering</code> や <code>.fb-brackets</code> の中央要素の最大幅（＝ pc 時の要素幅）を設定します。<br />
                    spacing は <code>.centering</code> の最小マージン、<code>.fb-brackets</code> の最小パディングを設定します。
                </p>
                <ul className="mb0">
                    <li><code>--gutter</code></li>
                    <li><code>--gap</code></li>
                </ul>
                <p>main 内の要素のマージンを設定します。 gap は section 要素のマージン、 gutter はその他の要素のマージンの基準になります。</p>
                <p></p>
            </section>
            <section>
                <h2 id="reset" className="linker">スタイルリセット</h2>
                <p>
                    全要素が全て <code>border-box</code> で設定しています。<br />
                    フォントは Noto Sans JP、フォントカラーは <code>#333</code>、 line-height は 1.8 です。
                </p>
                <p>
                    img 要素は<del>ブロック要素に変更してあります。これはモバイル・ファーストの近年のトレンドを受けた設定です。 </del><br />
                    <code>object-fit: cover</code>
                    が設定されているため、適用したくない場合、.contain クラスを付与することで contain に変更されます。
                </p>
                <p>main 要素の中のコンテンツにはマージン等が設定されています。</p>
                <ul>
                    <li>h1 ~ h6 には、ランクに応じて <code>--gutter</code> から差し引かれた下部マージン</li>
                    <li>p, table, dl には <code>--gutter</code> 分の下部マージン</li>
                    <li>ul は disc のリストスタイルと下部マージン</li>
                    <li>ol は decimal ののリストスタイルと下部マージン</li>
                </ul>
                <p>が設定されています。</p>
            </section>
            <section>
                <h2 id="uniques" className="linker">特殊クラス</h2>
                <p>各々の自由なコーディングの補助が目的のフレームワークであり、このフレームワークで提供されるクラスのみで web サイトを構築することが目的ではありません。
                    その為、特異なクラスは最低限のみになっています。</p>
            </section>
            <section>
                <h3>レイアウト系</h3>
                <ul className="mb0">
                    <li><code>.clearfix</code></li>
                    <li><code>.centering</code></li>
                    <li><code>.fb-brackets</code></li>
                    <li><code>.full-bleed</code></li>
                    <li><code>.fill-parent</code></li>
                </ul>
                <p>
                    clearfix は float レイアウトにおいて clear both をする為のクラスです（float レイアウト自体は非推奨）。<br />
                    centering は radix.css によるコーディングの根幹となる、コンテンツ中央寄せの為のクラスです。<br />
                    fb-brackets はフルブリードレイアウトに対応したコンテンツ中央寄せ用のクラスです。fb-brackets の中で full-bleed クラスを付けると、横幅最大まで拡張されます。<br />
                    fill-parent は親要素内の空間を充填する為のクラスです。 ul li でレイアウトした a 要素を整理するために用いたりします。
                </p>
            </section>
            <section>
                <h3>表示系</h3>
                <ul className="mb0">
                    <li><code>.hide</code></li>
                    <li><code>.none</code></li>
                    <li><code>.sp-hide</code></li>
                    <li><code>.sp-none</code></li>
                    <li><code>.pc-hide</code></li>
                    <li><code>.pc-none</code></li>
                </ul>
                <p>要素を非表示にします。.none は <code>display: none!important</code> で絶対非表示、 .hide は opacity と visibility を用いて行う為
                    transition 等による制御ができます。<br />
                    sp- 接頭辞をつけるとスマホ時のみ、pc- 接頭辞をつけるとパソコン時のみになります。</p>
                <ul className="mb0">
                    <li><code>.visible</code></li>
                    <li><code>.sp-visible</code></li>
                    <li><code>.pc-visible</code></li>
                </ul>
                <p>表示します（ .hide クラスを打ち消します）。 .hide.visible は表示されますが、 .none.visible は表示されません。</p>
                <ul className="mb0">
                    <li><code>.modal-visible</code></li>
                </ul>
                <p>モーダルウィンドウでのみ表示します（他の表示系クラスと違い、指定していない状況に対して非表示として作用します）。</p>
            </section>
            <section>
                <h3>マージン系</h3>
                <ul className="mb0">
                    <li><code>.mb</code></li>
                    <li><code>.mb0</code></li>
                    <li><code>.mb_</code></li>
                    <li><code>.mb1</code></li>
                    <li><code>.mb1_</code></li>
                    <li><code>.mb2</code></li>
                    <li><code>.mb2_</code></li>
                    <li><code>.mb3</code></li>
                </ul>
                <p>margin-bottom を設定します。 .mb は --gutter の設定値です。<br />
                    それ以外は rem 単位の基準で、その数字の分の下部マージンとなります。 _ は 0.5rem 分です。</p>
            </section>
            <section>
                <h3>テキスト系</h3>
                <ul className="mb0">
                    <li><code>.text-right</code></li>
                    <li><code>.text-center</code></li>
                    <li><code>.text-left</code></li>
                </ul>
                <p>text-align を設定します。</p>
                <ul className="mb0">
                    <li><code>.text-clear</code></li>
                </ul>
                <p>内部の要素の文字を非表示にします。</p>
                <ul className="mb0">
                    <li><code>.text-unit</code></li>
                </ul>
                <p>span 要素等で用います。文字をひとまとめにして inline-block 要素に変換します。</p>
            </section>
            <section>
                <h3>装飾パーツ</h3>
                <p>
                    <button className="rdx-btn">.rdx-btn</button><br />
                    初期では css のクラスで設定した --mainColor と --mainDarkColor で色が付きます。
                </p>
            </section>
            <section>
                <h3>js 機能追加系</h3>
                <ul className="mb0">
                    <li><code>.rdx-drag-scroll</code></li>
                </ul>
                <p>要素の幅がが親要素の幅を超える（スクロールが可能）なとき、ドラッグすることでマウスでスクロールできるようにするものです。<Link to="/js#drag-scroll">詳細</Link></p>
                <ul className="mb0">
                    <li><code>.rdx-flex-fix</code></li>
                </ul>
                <p>flex box の折り返し時、space-between と space-around / center の合いの子で丁度いい配置になるようにできます。<Link to="/js#flex-fix">詳細</Link>
                </p>
                <ul className="mb0">
                    <li><code>.rdx-scroll-appear</code></li>
                </ul>
                <p>要素がスクロールによって表示されるようにできます。<Link to="/js#scroll-appear">詳細</Link></p>
            </section>
        </>
    );
}
export default App;