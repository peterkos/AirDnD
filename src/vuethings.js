


// Vue!
import Vue from "vue"
import Class from "./Class.vue"

import VueFire from 'vuefire'
Vue.use(VueFire);


new Vue({
	el: "#app",
	components: { Class },
	render: h => h(Class)
})

