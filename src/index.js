import DatePicker from './packages/hyx-date-picker';
const components = [
    DatePicker
]

const install = function(Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    DatePicker
}