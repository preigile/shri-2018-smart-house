import Card from "./Card";
import devicesInfo from "../storage/devices";
import devicesTypes from "../storage/devicesTypes";

window.devices = {
    selectedType: devicesTypes().selected,
    visibleTypesGroup: false,

    selectDeviceType: (type) => {
        if (window.devices.visibleTypesGroup && (window.devices.selectedType !== type)) {
            window.devices.visibleTypesGroup = false;
        }
        window.devices.selectedType = type;
        window.update();
    },
    displayTypesGroup: () => {
        window.devices.visibleTypesGroup = !window.devices.visibleTypesGroup;
        window.update();
    }
};

export default () => {
    return `<div class="devices">
                <div class="devices__types">
                    <div class="devices__types-title title">Избранные устройства</div>
                    <div class="devices__types-container_desktop">
                        ${devicesTypes().all.map(devicesType).join('')}
                    </div>
                    <div class="devices__types-container_mobile">
                        <div class="devices__types-selected" onclick="devices.displayTypesGroup()">
                            ${devicesTypes().all
                                .filter(type => {
                                    return type.name === devices.selectedType;
                                }).map(devicesType).join('')}
                        </div>
                        <div class="devices__types-group ${devices.visibleTypesGroup ? 'devices__types-group_visible' : ''}">
                            ${devicesTypes().all
                                .filter(type => {
                                    return type.name !== devices.selectedType;
                                }).map(devicesType).join('')}
                        </div>
                    </div>
                </div>
                <div class="scroll-container">
                    <div class="devices__container">
                        ${devicesInfo()
                            .filter(device => {
                                if (devices.selectedType === 'all') {
                                    return true;
                                }
                                return device.type === devices.selectedType;
                            }).map(Card).join('')}
                    </div>
                </div>
            </div>`
}


function devicesType(type) {
    return `<div class="devices__type ${devices.selectedType === type.name ? 'devices__type_selected' : ''}"
                onclick="devices.selectDeviceType('${type.name}')">
                <div class="devices__type-title">${type.title}</div>
                ${devices.selectedType === type.name ? '<div class="arrow-icon_bottom"></div>' : ''}
            </div>`
}
