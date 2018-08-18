import Card from "./Card";
import devicesInfo from "../starage/devices";
import devicesTypes from "../starage/devicesTypes";

export default () => {
    return `<script type="text/javascript">
                console.log('log');
            </script>
            
            <div class="devices">
                <div class="devices__types">
                    <div class="devices__types-title title">Избранные устройства</div>
                    ${devicesTypes().map(devicesType).join('')}
                </div>
                <div class="devices__container">
                    ${devicesInfo().map(Card).join('')}
                </div>
            </div>`
}

function devicesType(type) {
    let selectedType = 'all';

    return `<div class="devices__type ${selectedType === type.name ? 'devices__type_selected' : ''}"> 
                <div class="devices__type-title">${type.title}</div>
            </div>`
}
