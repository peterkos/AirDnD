


// Vue!
import { createApp } from "vue"
import { createRouter, createWebHashHistory } from "vue-router"
import { useVueFuse } from "vue-fuse"



// FIXME: Make VueFuse work again
// Vue.use(VueFuse)



// Ensure database is initialized FIRST
import { config } from "./db.js"
import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
const firebaseApp = initializeApp(config)
const db = getDatabase(firebaseApp)
export default db


// Class imports
import Home from "./components/Home.vue"
import Classes from "./components/Classes.vue"
import Spells from "./components/Spells.vue"
import Races from "./components/Races.vue"
import Items from "./components/Items.vue"

// Setup routing
const routes = [
	{ path: "/", component: Home},
	{ path: "/classes", component: Classes },
	{ path: "/spells", component: Spells },
	{ path: "/races", component: Races },
	{ path: "/items", component: Items },
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

// Main instance
import MainApp from "./MainApp.vue"
const app = createApp(MainApp)
app.use(router)
app.mount("#mainapp")
app.component("MainApp", MainApp)


