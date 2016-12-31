import store from '../data/store'
export default {
    data() {
        return {
            store
        }
    },
    methods: {
        test() {
            console.log('mixins applied', this.store.nodes.value);
        },
        updateStore() {
            this.store.update()
        }
    }
}