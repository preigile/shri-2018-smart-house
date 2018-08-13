import Card from "./Card";
import cardInfo from "../starage/majorCards";

export default () => {
    return `<div class="major">
                <div class="major-title title">Главное</div>
                <div class="major-cards-container">
                    <div class="major-cards-info">
                        <div class="major-cards-info-title">Привет, Геннадий!</div>
                        <div class="major-cards-info-description">Двери и окна закрыты, сигнализация включена.</div>
                        <div class="major-cards-info-weather">
                            <div class="weather-home">
                                <div class="weather-title">Дома</div>
                                <div class="weather-number">+23</div>
                            </div>
                            <div class="weather-street">
                                <div class="weather-title">За окном</div>
                                <div class="weather-number">+19</div>
                            </div>
                            <div class="weather-icon"></div>
                        </div>
                    </div>
                    <div class="major-cards">
                        ${cardInfo().map(Card).join('')}
                    </div>
                </div>
            </div>`
}
