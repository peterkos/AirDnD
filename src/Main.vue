<template>
	<div id="main">

		<h1> View your things below:</h1>
		<router-view></router-view> <!--Contains Spells, Classes, etc. -->
	</div>

</template>

<script>
	export default {
		name: "main",
		data() {
			return {
				test: "this is test"
			}
		},
		methods: {
		}
	}
</script>