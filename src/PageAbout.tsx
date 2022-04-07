import React, { FC, useEffect } from 'react';
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
            <h1 id="about">The Common HTML, <br />CSS and JS Library for Responsive Website.</h1>
            <section>
                <p className="text-center"><a href="https://github.com/7304sk/radix" className="rdx-btn">ソースコード</a>　<a href="https://github.com/7304sk/RADIX/releases" className="rdx-btn">パッケージダウンロード</a></p>
                <p>
                    Radixは HTML、CSS, javascript によるレスポンシブwebページ作成用のライブラリです。<br />
                    許可のない商業利用、また個人利用を超えた無断改変、二次配布を禁じます。
                </p>
            </section>
            <section>
                <h3>バージョンによる違い</h3>
                <p>ファイル名の radix.a.b.c の a.b.c でバージョンを表します。基本的には a は互換や言語仕様の準拠基準を表しており、過去のバージョンからの互換が切られます。<br />
                    b は機能追加や重大なバグ修正が行われた場合の更新です。<br />
                    c はバグ修正や軽微な機能調整が行われた更新です。</p>
                <p>例として、 2.1.0 を利用して作成された web サイトの本フレームワークをアップデートする場合、2系列の最終版である 2.3.0
                    へのアップデートは行えますが、3.0.0へのアップデートの際は宣言文の仕様変更等が影響する為、完成されたサイトの見た目・機能が崩れる場合があります。</p>
                <strong>1.x.x 系列</strong>
                <p>jQuery に依存。</p>
                <strong>2.x.x 系列</strong>
                <p>ES5 準拠、IE を含めたレガシーブラウザにも一応対応した仕様に。</p>
                <strong>3.x.x 系列</strong>
                <p>IE の終了、Edge の chromium 化を受けレガシーブラウザを削除、 ES6 仕様に。</p>
                <p>
                    CSS reset のみの最小限度のフレームワークでは機能として不十分、しかし、デザイン・レイアウトをそのフレームワークでの設計思想でがんじがらめにしてしまうことは開発者の自由をうばってしまう。という考えから「誰もが使い回す機能を意識せずとも実装でき、個々の設計には自由を」という方針で作成しています。フレームワーク依存でないネイティブな開発をベースとして、最低限のユーティリティクラスと基本的なJS機能をまとめたものです。<br />
                    仮想DOMを用いたコンポーネント単位での開発のようなものに対し最適化しているわけではありません。あくまでフロントベースで静的なWEBサイトに対して、ピュアなCSSよりも楽な開発を可能にすることが目的です。
                    （仮想DOM環境でも、副作用フックに都度インスタンスの init メソッドを実行することで利用すること自体は可能です）
                </p>
                <p>
                    
                </p>
            </section>
            <section>
                <h2>UPDATE LOG</h2>
                <ul className="update">
                    <li>
                        <span className="date">2022.03.06</span>
                        <span className="tag">3.1.6</span>
                        <p>
                            ・ToggleNav の trigger, target それぞれのセレクタ対象を複数のエレメントに指定しても動作するように変更<br />
                            ・FlexFix のダミーエレメント追加の最小個数を設定できるオプション機能を追加
                        </p>
                    </li>
                    <li>
                        <span className="date">2022.03.04</span>
                        <span className="tag">3.1.5</span>
                        <p>
                            ・scroll appear の reset オプションの既定値を false から true に変更（実用上 reset する場面の方が多かったため）<br />
                            ・パッケージリリースで読み込んでいる外部のアイコンライブラリを Font Awesome から Google Material Icons に変更（テスト変更、元に戻す可能性あり）
                        </p>
                    </li>
                    <li>
                        <span className="date">2022.02.21</span>
                        <span className="tag">3.1.4</span>
                        <p>
                            ・a, .rdx-modal-source を cursor: pointer になるように修正<br />
                            ・.fb-brackets が、ラッパーの高さに対し内部のコンテンツの高さが足りない場合に間延びしてしまう問題を修正
                        </p>
                    </li>
                    <li>
                        <span className="date">2022.02.01</span>
                        <span className="tag">3.1.3</span>
                        <p>
                            minify 版の css の不具合を修正<br />
                            JS を react 対応版の記述に修正
                        </p>
                    </li>
                    <li>
                        <span className="date">2021.11.02</span>
                        <span className="tag">3.1.2</span>
                        <p>
                            css reset を新しい方式に変更<br />
                            マニュアルを react で作成
                        </p>
                    </li>
                    <li>
                        <span className="date">2021.08.26</span>
                        <span className="tag">3.1.1</span>
                        <p>
                            バージョン管理の利便性のため、ファイル名からバージョン番号を削除<br />
                            バージョン表記は radix.css と radix.js の内部のみに<br />
                            minify したファイル（radix.min.css、radix.min.js）を作成するように<br />
                            その他軽微なバグ修正
                        </p>
                    </li>
                    <li>
                        <span className="date">2021.06.18</span>
                        <span className="tag">3.1.0</span>
                        <p>
                            hamburger のスペルを今までずっと間違えていたのを修正<br />
                            <code>line-height</code> をデフォルト1.4に（pタグのみ1.8）<br />
                            <code>.centering</code> クラスの代替となる <code>.fb-brackets</code> を追加。 <code>.full-bleed</code>
                            と併せてフルブリードレイアウトに対応<br />
                            svg アイコンに angle 4種類を追加<br />
                            就活のため一応 github 上で公開
                        </p>
                    </li>
                    <li>
                        <span className="date">2020.11.10</span>
                        <span className="tag">3.0.2</span>
                        <p>
                            オブジェクト宣言時に引数を渡さないとエラーが出るバグを修正
                        </p>
                    </li>
                    <li>
                        <span className="date">2020.10.15</span>
                        <span className="tag">3.0.1</span>
                        <p>
                            モーダルウィンドウ機能の微調整、 fit プロパティを追加
                        </p>
                    </li>
                    <li>
                        <span className="date">2020.10.06</span>
                        <span className="tag">3.0.0</span>
                        <p>
                            js を ES6 仕様に更新（class, let, constの使用）その他微調整<br />
                            radix.js をプロトタイプ型からクラス型変更、それに伴いオプションの宣言方法を変更<br />
                            【新機能】<br />
                            イージング関数を Robert Penner’s Easing Functions に<br />
                            <a href="#js-scrollappear">スクロール表示機能</a>を追加<br />
                            <a href="#js-preload">preload</a> 機能を追加<br />
                            【CSS】<br />
                            CSS variables の項目を調整<br />
                            body 要素に <code>text-size-adjust: 100%</code> を追加<br />
                            【モーダルウィンドウ】<br />
                            モーダルウィンドウのリサイズ機能周りを改善、リサイズのオンオフ機能を追加、宣言属性を変更<br />
                            <code>.modal-visible</code> クラスを追加<br />
                            【ドラッグスクロール】<br />
                            horizontalScroll 機能の名称を dragScroll に変更<br />
                            【ナビゲーション開閉】<br />
                            <code>preventScroll</code> オプションの追加<br />
                            【以下開発者向け】<br />
                            radix インスタンスから toggleNav の開閉状態を取得できるように<br />
                            関数を追加し、開閉機能の外部スクリプトからの実行を可能に<br />
                            radix インスタンスに modalParts プロパティを追加、モーダルウィンドウに利用されているエレメントノードが取得されている状態に
                        </p>
                    </li>
                    <li>
                        <span className="date">2020.03.16</span>
                        <span className="tag">2.3.0</span>
                        <p>モーダルウィンドウ機能を追加<br />
                            js で出力される css クラス名を <code>rdx-</code> から始まるものに統一</p>
                    </li>
                    <li>
                        <span className="date">2020.03.12</span>
                        <span className="tag">2.2.2</span>
                        <p>水平スクロール領域を1ページに複数作成した際にスクロールヒントが一つしか表示されないバグを修正</p>
                    </li>
                    <li>
                        <span className="date">2020.03.11</span>
                        <span className="tag">2.2.1</span>
                        <p>雛形のJS記述が連想配列になっていなかったのを修正<br />
                            flex fix の修正<br />
                            リストスタイルの CSS クラス名がおかしかったのを修正</p>
                    </li>
                    <li>
                        <span className="date">2020.02.27</span>
                        <span className="tag">2.2.0</span>
                        <p>js の機能に、flexbox の修正クラスの作成を追加<br />
                            img のデフォルトの <code>object-fit</code> を cover に変更、containクラスを作成<br />
                            p のデフォルトの <code>text-align</code> を justify に設定<br />
                            js 書き出しの SVG ハンバーガーのデザインを修正</p>
                    </li>
                    <li>
                        <span className="date">2020.02.05</span>
                        <span className="tag">2.1.0</span>
                        <p>CSS Variables を解禁（ IE をサポート対象外に）<br />
                            radix.css 内でのメディアクエリを廃止し、 style.css 内への記述のみに変更<br />
                            js の機能に、横スクロール領域クラスの作成を追加<br />
                            フォントサイズの可変を廃止し、デフォルトで 16px に固定するように<br />
                            style.css 内に固定ページ化用のスタイルをコメントアウトでの記述で追加</p>
                    </li>
                    <li>
                        <span className="date">2020.01.22</span>
                        <span className="tag">2.0.2</span>
                        <p>js での SVG ハンバーガーの書き出しの不具合を修正</p>
                    </li>
                    <li>
                        <span className="date">2020.01.10</span>
                        <span className="tag">2.0.1</span>
                        <p>js の微修正</p>
                    </li>
                    <li>
                        <span className="date">2020.01.04</span>
                        <span className="tag">2.0.0</span>
                        <p>jQuery に依存しない radix.js の実装。最低限の機能としてスムーススクロールと auto target blank のみ<br />
                            実装レベルは ES5 準拠（きっちり確認はしていないため一部 ES6 の可能性あり）</p>
                    </li>
                    <li>
                        <span className="date">2019.11.14</span>
                        <span className="tag">1.5.1</span>
                        <p>html グローバル属性 <code>[hidden]</code> に対応</p>
                    </li>
                    <li>
                        <span className="date">2019.09.25</span>
                        <span className="tag">1.5.0</span>
                        <p>印刷画面への対応（ Chrome のみ。現状では全ブラウザへの包括的な対応は不可能）<br />
                            その他、mさんが追加してくれた IE-fix の反映</p>
                    </li>
                    <li>
                        <span className="date">2019.08.29</span>
                        <span className="tag">1.4.0</span>
                        <p>個人利用からフレームワーク化して公開</p>
                    </li>
                    <li>
                        <span className="date">2018</span>
                        <span className="tag">1.0.0 ~ 1.3.0</span>
                        <p>「css reset と最適化スタイルで自分用の基底化をする」ライブラリということで、radix.css と命名した（root.css だと既にどこかにありそうだったから）。<br />
                            当初は自己満足的な構成でとても他人に公開しようと思うレベルのものでなく、特に管理もしていなかった。いつからナンバリングをしていたのかのログもなく、1.0.0 ~ 1.3.0
                            のデータは現在は消失している。
                        </p>
                    </li>
                    <li>
                        <span className="date">2017</span>
                        <span className="tag">alpha</span>
                        <p>cssの最適化に有名ライブラリのやり方が気に入らなかった為、自分用ライブラリとして作成を始めた。この頃は css のみで js
                            は独立して「よく使うコード集」みたいなものをまとめていた（というかまだ js を習得しておらず、コピペコードしか使えなかった）。</p>
                    </li>
                </ul>
            </section>
        </>
    );
}
export default App;