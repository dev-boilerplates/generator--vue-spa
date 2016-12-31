import template from '../templates/nav-component.html'
export default {
    name: 'nav-component',
    template,
    data() {
        return {
            msg: "local nav msg"
        }
    },
    created() {
        App.event.$on('loaded', (data) => {
            console.log('getting local storage', data);
        })
    },
    mounted() {
        setTimeout(() => {
            console.log('emit');
            App.event.$emit('increment')
        }, 500)
    }
}