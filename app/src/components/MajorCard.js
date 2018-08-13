export default (card) => {
    return `<div class="major-card">
                <div class="major-card-icon" style="background-image: url('../assets/${card.icon}') no-repeat"></div>
                <div class="major-card-title">${card.title}</div>
                <div class="major-card-description">${card.description}</div>
            </div>`
}
