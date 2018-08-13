export default (card) => {
    return `<div class="card">
                <div class="card-icon" style="background-image: url('../assets/${card.icon}') no-repeat"></div>
                <div class="card-title">${card.title}</div>
                <div class="card-description">${card.description}</div>
            </div>`
}
