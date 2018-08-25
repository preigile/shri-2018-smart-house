let scenarios = [
    {
        id: '1',
        collection: 'scenarios',
        title: 'Выключить весь свет в доме и во дворе',
        description: '',
        icon: 'icon_sun_yellow',
        active: false
    },
    {
        id: '2',
        collection: 'scenarios',
        title: 'Я ухожу',
        description: '',
        icon: 'icon_scheduled',
        active: false
    },
    {
        id: '3',
        collection: 'scenarios',
        title: 'Включить свет <br/>в коридоре',
        description: '',
        icon: 'icon_sun_yellow',
        active: true
    },
    {
        id: '4',
        collection: 'scenarios',
        title: 'Набрать горячую ванну',
        description: 'Начнётся в 18:00',
        icon: 'icon_temperature_yellow',
        active: false
    },
    {
        id: '5',
        collection: 'scenarios',
        title: 'Сделать пол тёплым во всей квартире',
        description: '',
        icon: 'icon_temperature_yellow',
        active: false
    }
];

export default () => {
    return scenarios;
}
