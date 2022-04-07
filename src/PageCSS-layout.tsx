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
            <h1 id="css" className="pages">CSS設計</h1>
            <section>
                <p>準備中</p>
            </section>
        </>
    );
}
export default App;