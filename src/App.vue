<style lang="scss">
	@import './assets/sass/main.scss'
</style>

<template>
	<div id="app">
		<HelloWorld/>
	</div>
</template>

<script>

import HelloWorld from './components/HelloWorld'

export default {
	name: 'App',
	components: {
		HelloWorld
	}
}
</script>

