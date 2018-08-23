import icons from '../assets/icons.svg';

export default (card) => {
    return `<div class="card">
                <svg viewBox="0 0 24 24" class="card__icon">
                    <use xlink:href="${icons}#${card.icon}"></use>
                </svg>
                <div>
                    <div class="card__title">${card.title}</div>
                    <div class="card__description">${card.description}</div>
                </div>
            </div>`
}
