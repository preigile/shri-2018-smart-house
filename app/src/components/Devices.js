import Card from "./Card";
import devicesInfo from "../storage/devices";
import devicesTypes from "../storage/devicesTypes";

window.devices = {
    selectedType: devicesTypes().selected
};

export default () => {
    return `<script type="text/javascript">
                function selectDeviceType(type) {
                    window.devices.selectedType = type;
                    window.update();
                }
            </script>
            
            <div class="devices">
                <div class="devices__types">
                    <div class="devices__types-title title">Избранные устройства</div>
                    ${devicesTypes().all.map(devicesType).join('')}
                </div>
                <div class="devices__container">
                    ${devicesInfo()
                        .filter(device => {
                            if (devices.selectedType === 'all') {
                                return true;
                            } 
                            return device.type === devices.selectedType;
                        }).map(Card).join('')}
                </div>
            </div>`
}


function devicesType(type) {
    return `<div class="devices__type ${devices.selectedType === type.name ? 'devices__type_selected' : ''}"
                onclick="selectDeviceType('${type.name}')">
                <div class="devices__type-title">${type.title}</div>
            </div>`
}
