import Card from "./Card";
import devicesInfo from "../starage/devices";
import devicesTypes from "../starage/devicesTypes";

export default () => {
    return `<div class="devices">
                <div class="devices-types">
                    <div class="devices-types-title title">Избранные устройства</div>
                    ${devicesTypes().map(devicesType).join('')}
                </div>
                <div class="devices-container">
                    ${devicesInfo().map(Card).join('')}
                </div>
            </div>`
}

function devicesType(type) {
    return `<div class="devices-type">
                <div class="devices-type-title">${type.title}</div>
            </div>`
}
