import template from '../templates/view-component.html'
export default {
    name: 'view-component',
    template,
    data() {
        return {
            msg: "local view msg"
        }
    },
    created() {
        App.event.$on('increment', () => {
            this.updateStore()
        })
    }
}