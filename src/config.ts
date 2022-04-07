import radix from './radix';

export default class config {
    static version: string = '3.1.6';
    static firstLoad: boolean = true;
    static pageInit() {
        let myRadix = new radix({
            preload: {
                active: true,
                selector: '#preload',
                minload: 2500
            },
            toggleNav: {
                active: true,
                trigger: '#toggle-nav',
                target: '#global-nav',
                preventScroll: false
            }
        });
        /* init radix instance */
        myRadix.init();
        if (this.firstLoad) {
            console.log('Radixインスタンス確認用');
            console.log(myRadix);
            this.firstLoad = false;
        } else {
            window.scrollTo(0, 0);
        }

        /* set nav clicked events */
        let navlinks = document.querySelectorAll('#global-nav a');
        navlinks.forEach(navlink => {
            navlink.addEventListener('click', () => {
                if (myRadix.navOpen) {
                    myRadix.toggleNav('close');
                }
            });
        });

        let linkers = document.querySelectorAll('.linker');
        linkers.forEach(linker => {
            linker.addEventListener('click', () => {
                let the_id = linker.getAttribute('id');
                let the_href = window.location.href;
                let arr_href = the_href.split('#');
                let the_link = arr_href[0] + '#' + the_id;
                try {
                    navigator.clipboard.writeText(the_link);
                    alert('クリップボードにリンクをコピーしました。')
                } catch (error) {
                    alert('コピーに失敗しました')
                }
            });
        });
    }
}