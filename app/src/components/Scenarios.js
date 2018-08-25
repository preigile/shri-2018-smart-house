import Card from "./Card";
import scenarioInfo from "../storage/scenarios";

window.scenarios = {
    action: (card) => {
        window.scenarios.all.map((one) => {
            if (one.id === card) {
                one.active = !one.active;
                window.update();
            }
        })
    },
    all: scenarioInfo()
};

export default () => {
    return `<div class="scenarios">
                <div class="scenarios-title title">Избранные сценарии</div>
                <div class="scenarios-container">
                    ${scenarios.all.map(Card).join('')}
                </div>
            </div>`
}
