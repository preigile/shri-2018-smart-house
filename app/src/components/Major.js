import Card from "./Card";
import cardInfo from "../storage/majorCards";

export default () => {
    return `<div class="major">
                <div class="major__title title">Главное</div>
                <div class="major-cards__container">
                    <div class="major-cards__info">
                        <div class="major-cards-info__title">Привет, Геннадий!</div>
                        <div class="major-cards-info__description">Двери и окна закрыты, сигнализация включена.</div>
                        <div class="major-cards-info__weather">
                            <div class="weather__home">
                                <div class="weather__title">Дома</div>
                                <div class="weather__number">+23</div>
                            </div>
                            <div class="weather__street">
                                <div class="weather__title">За окном</div>
                                <div class="weather__number">+19</div>
                            </div>
                            <div class="weather__icon"></div>
                        </div>
                    </div>
                    <div class="scroll-container">
                        <div class="major-cards">
                            ${cardInfo().map(Card).join('')}
                            <div class="scroll-icon__container">
                                <div class="scroll-icon_double"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
}
