import Card from "./Card";
import scenarioInfo from "../storage/scenarios";

window.scenarios = {
    all: scenarioInfo(),

    action: (card) => {
        window.scenarios.all.map((one) => {
            if (one.id === card) {
                one.active = !one.active;
                window.update();
            }
        })
    }
};

export default () => {
    return `<div class="scenarios">
                <div class="scenarios__title title">Избранные сценарии</div>
                <div class="scroll-container">
                    <div class="scenarios__container">
                        ${scenarios.all.map(Card).join('')}
                    </div>
                </div>
            </div>`
}
