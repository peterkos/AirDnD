<template>
	<div id="spells">

		<h1 class="title has-text-centered has-text-white is-vcentered">Spells</h1>

	</div>
</template>

<script>
	import Firebase from 'firebase'
	import db from '../db.js'

	let spellsRef = db.ref('spells')
	
	export default {
		name: 'Spells',
		firebase: {
			classes: spellsRef
		},
		data() {
			return {
			}
		},
		methods: {
		}
	}
</script>