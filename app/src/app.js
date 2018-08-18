import App from "./components/App";
import './styles/main.less'

let root = document.getElementById('root');
let scripts = root.getElementsByTagName('script');

root.innerHTML = App();

for (let i = 0; i < scripts.length; i++) {
    eval(scripts[i].innerText);
}
