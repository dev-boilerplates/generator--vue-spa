import Vue from 'vue/dist/vue'
import Common from './common'
import Storage from '../data/local'
import BaseComponents from './base'

Vue.mixin(Common)

export default {
    event: new Vue(),
    storage: (false) ? Storage.init('vueapp') : false,
    components: {},
    init: function() {
        let loaded = []
        this.event.$on('attached', (view) => {
            loaded.push(view)
            if(loaded.length == Object.keys(BaseComponents).length) this.launch()
        })
        this.registerComponents()
    },
    registerComponents: function() {
        Object.keys(BaseComponents).forEach((key,index) => {
            let component = BaseComponents[key]
            component.mounted = function() {
                App.event.$emit('attached', {name: this._uid})
            }
            this.components[key] = new Vue(component)
        })
    },
    launch: function() {
        let data = false
        if(this.storage) {
            data = (this.storage.hasStorage()) ? this.storage.retrieve() : null
        }
        App.event.$emit('loaded', data)
    },
    syncStorage: function(data) {
        this.storage.sync(data)
    }
}