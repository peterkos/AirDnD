<style lang="scss">
@import './assets/sass/main.scss'
</style>

<template>

	<div id="app">

		<!-- <navigation></navigation> -->
		<!-- <router-view></router-view> -->

		<home></home>

	</div>

</template>

<script>

import Home from "@/components/Home"
import Navigation from "@/components/Navigation"

export default {
	name: "App",
	components: {
		Home,
		Navigation
	}
}

</script>
