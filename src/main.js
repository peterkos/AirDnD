// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import Create from "./Create"
import VueRouter from "vue-router"
import Vuex from "vuex"
import VueFire from "vuefire"

// Uses
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueFire)

// Routing
import Home from "@/components/Home"
import Classes from "@/components/Classes"

const routes = [
	{ path: "/", component: Home },
	{ path: "/classes", component: Classes },
]

const router = new VueRouter({
	routes
})




// Styling
require("@/assets/sass/main.scss")


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: "#create",
	components: { Create },
	template: "<Create/>",
	router
}).$mount("Create")

