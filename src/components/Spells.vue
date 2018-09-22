<template>
	<div id="spellsSection">

		<h1 class="title has-text-centered has-text-white is-vcentered">Spells</h1>

		<div class="tile is-ancestor">
			<div class="tile is-parent">
				<div class="tile is-child box">
					<!-- @TODO: {{all}} spells, all:['all', 'paladin', 'cleric'...] -->
					<h2 class="title is-size-3 has-text-centered">All Spells</h2>

					<table class="table is-fullwidth is-hoverable">
						<thead>
							<th class="has-text-centered">Level</th>
							<th class="">Name</th>
							<th class="">Duration</th>
							<th class="has-text-centered">Range</th>
							<th class="has-text-centered">Concentration</th>
							<th class="has-text-centered">PHB</th>
						</thead>
						<tbody>
							<tr v-for="currentSpell in spells">
								<td class="has-text-centered">{{currentSpell.level}}</td>
								<td class="">{{currentSpell.name}}</td>
								<td class="">{{currentSpell.duration}}</td>
								<td class="has-text-centered">{{currentSpell.range}}</td>
								<td class="has-text-centered">{{currentSpell.concentration | capitalize}}</td>
								<td class="has-text-centered">{{currentSpell.page | capitalize}}</td>
							</tr> 
						</tbody>
					</table>
				</div>
			</div>
			<div class="tile is-4 is-vertical is-parent shortTileSidebar">
				<div class="tile is-child box">
					<p class="title">One</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
				</div>
				<div class="tile is-child box">
					<p class="title">Two</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import Firebase from 'firebase'
	import db from '../db.js'

	let spellsRef = db.ref('spells')
	
	export default {
		name: 'Spells',
		firebase: function() {
			return {
				spells: spellsRef
			}
		},
		data() {
			return {
				newSpell: {
					level: "",
					name: "",
					duration: "",
					range: "",
					concentration: "",
					phb: ""
				}
			}
		},
		methods: {
		},
		filters: {
			capitalize: function (value) {
				if (!value) {
					return ''
				}

				value = value.toString()
				return value.charAt(0).toUpperCase() + value.slice(1)
			}
		}
	}
</script>