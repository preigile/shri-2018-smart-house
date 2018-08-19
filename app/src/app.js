import App from "./components/App";
import './styles/main.less'

let root = document.getElementById('root');
let scripts = root.getElementsByTagName('script');

window.update = () => {
    root.innerHTML = App();

    for (let i = 0; i < scripts.length; i++) {
        (function () {
            eval.apply(this, arguments);
        }(scripts[i].innerText));
    }
};

window.update();
