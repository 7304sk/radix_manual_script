import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import PageAbout from './PageAbout';
import PageCSS from './PageCSS';
import PageCSS_layout from './PageCSS-layout';
import PageJS from './PageJS';
import config from './config';

const Header: FC = () => {
    return (
        <>
            <header>
                <div className="author">
                    <a href="https://twitter.com/shoalwave"><i className="fab fa-twitter"></i></a>
                    <a href="https://github.com/7304sk/"><i className="fab fa-github"></i></a>
                    <a href="https://shoalwave.net"><i className="fa-solid fa-link"></i></a>
                </div>
                <h1 className="centering">Radix<span>version {config.version}</span></h1>
            </header>
            <button id="toggle-nav" className="pc-none"><div className="rsi-hamburger">#svg</div><div className="text">MENU</div></button>
        </>
    );
}
const GlobalNav: FC = () => {
    return (
        <nav id="global-nav">
            <ul className="first">
                <li><Link to="/">About</Link></li>
                <li><Link to="/css">CSS</Link></li>
                <li><Link to="/js">Javascript</Link></li>
            </ul>
        </nav>
    );
}
const Footer: FC = () => {
    return (
        <>
            <a href="#" id="pagetop" className="pagetop rsi-angleTop rdx-scroll-appear" rdx-scroll-appear-fixed="300" rdx-scroll-appear-reset="true"
                rdx-scroll-appear-delay="0">#svg</a>
            <footer>
                <div className="copyright centering">&copy; 2021 shoalwave</div>
            </footer>
        </>
    );
}
const App: FC = () => {
    return (
        <>
            <Header />
            <BrowserRouter>
                <GlobalNav />
                <main className="fb-brackets">
                    <Switch>
                        <Route path='/css'>
                            <PageCSS />
                        </Route>
                        <Route path='/css-layout'>
                            <PageCSS_layout />
                        </Route>
                        <Route path='/js'>
                            <PageJS />
                        </Route>
                        <Route path='/'>
                            <PageAbout />
                        </Route>
                    </Switch>
                </main>
            </BrowserRouter>
            <Footer />
        </>
    );
}
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('react-root')
);
