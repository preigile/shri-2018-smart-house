import Header from "./Header";
import Main from "./Main";
import Scenarios from "./Scenarios";
import Devices from "./Devices";
import Footer from "./Footer";

export default () => {
    return `${Header()}
            ${Main()}
            ${Scenarios()}
            ${Devices()}
            ${Footer()}`;
}
