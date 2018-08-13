import Card from "./Card";
import scenarioInfo from "../starage/scenarios";

export default () => {
    return `<div class="scenarios">
                <div class="scenarios-title title">Избранные сценарии</div>
                <div class="scenarios-container">
                    ${scenarioInfo().map(Card).join('')}
                </div>
            </div>`
}
