import ViewComponent from '../components/viewComponent'
import NavComponent from '../components/navComponent'

export default {
    spa: {
        el: '#view',
        components: {ViewComponent}
    },
    gui: {
        el: "#nav",
        components: {NavComponent}
    }
}