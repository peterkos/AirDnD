<template>
	<div id="spellsSection">

		<h1 class="title has-text-centered has-text-white is-vcentered">Spells</h1>

		<div class="columns is-centered">
			<div class="column is-one-third">
				<!-- @TODO: Propogate search to specific component only! (With filtering options) -->

				<div class="field has-addons">
					<div class="control is-expanded">
						<input type="text"
						class="input searchBar"
						@click="searchActive = true"
						@keyup.esc="searchActive = false"
						placeholder="Search for a spell here"/>
					</div>
					<div class="control">
						<a class="button is-info">Search</a>
					</div>
				</div>

				<div class="field is-grouped is-grouped-centered">
					<div class="control">
						<div class="select">
							<select>
								<!-- @TODO: Pull dynamically to allow for homebrew classes -->
								<option>Class:</option>
								<option>Barbarian</option>
								<option>Bard</option>
								<option>Cleric</option>
								<option>Druid</option>
								<option>Fighter</option>
								<option>Monk</option>
								<option>Paladin</option>
								<option>Ranger</option>
								<option>Rogue</option>
								<option>Sorcerer</option>
								<option>Warlock</option>
								<option>Wizard</option>
							</select>
						</div>
					</div>
					<div class="control">
						<div class="select">
							<select>
								<option>Max level:</option>
								<option v-for="count in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]">{{count}}</option>
							</select>
						</div>
					</div>
					<div class="control checkBoxControl">
						<input class="is-checkradio is-white" id="concentrationCheckbox" type="checkbox" name="concentrationCheckbox">
						<label for="concentrationCheckbox" class="has-text-white">Conc.</label>
					</div>
					<div class="control checkBoxControl">
						<input class="is-checkradio is-white" id="ritualCheckbox" type="checkbox" name="ritualCheckbox">
						<label for="ritualCheckbox" class="has-text-white">Ritual</label>
					</div>
				</div>
			</div>
		</div>

		<div class="container is-fluid">
			<div class="tile is-ancestor">
				<div class="tile is-vertical is-parent shortTileSidebar spellNameSidebar">
					<div class="tile is-child box">
						<p class="title" v-if="!selectedSpell.name">Title</p>
						<p class="title" v-if="selectedSpell.name">{{selectedSpell.name}}</p>
						<!-- <i v-if="selectedSpell.desc">Description</i> -->
						<!-- <i v-if="!selectedSpell.desc">{{selectedSpell.desc}}</i> -->
						<p v-for="description in selectedSpell.desc">{{description}}<br><br></p>
					</div>
				</div>
				<div class="tile is-parent is-6">
					<div class="tile is-child box">
						<!-- @TODO: {{all}} spells, all:['all', 'paladin', 'cleric'...] -->
						<h2 class="title is-size-3 has-text-centered">All Spells</h2>

						<table class="table is-fullwidth is-hoverable">
							<thead>
								<th class="has-text-centered">Level</th>
								<th class="">Name</th>
								<!-- <th class="">Duration</th> -->
								<th class="has-text-centered">Range</th>
								<th class="has-text-centered">Concentration</th>
								<th class="has-text-centered">PHB</th>
							</thead>
							<tbody>
								<tr v-for="currentSpell in spells" @click="selectSpell(currentSpell)" :class="{'is-selected': currentSpell.name === selectedSpell.name}">
									<td class="has-text-centered">{{currentSpell.level}}</td>
									<td class="">{{currentSpell.name}}</td>
									<!-- <td class="">{{currentSpell.duration}}</td> -->
									<td class="has-text-centered">{{currentSpell.range}}</td>
									<td class="has-text-centered">{{currentSpell.concentration | capitalize}}</td>
									<td class="has-text-centered">{{currentSpell.page | capitalize}}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="tile is-vertical is-parent shortTileSidebar">
					<div class="tile is-child box">
						<p class="title">Usability</p>
						<ul>
							<li><b>Level:</b> {{selectedSpell.level}}</li>
							<li><b>Casting time:</b> {{selectedSpell.casting_time}}</li>
							<li><b>Concentration:</b> {{selectedSpell.concentration | capitalize}}</li>
							<li><b>Range:</b> {{selectedSpell.range}}</li>
							<li><b>Components:</b> {{selectedSpell.components | join}}</li>
							<li><b>Ritual:</b> {{selectedSpell.ritual | capitalize}}</li>
							<li><b>Duration:</b> {{selectedSpell.duration}}</li>
							<!-- <li><b>Classes:</b> {{selectedSpell.classes | join}}</li> @FIXME: Tedious v-for! -->
							<li><b>Material:</b> {{selectedSpell.material}}</li>
						</ul>
					</div>
					<div class="tile is-child box">
						<p class="title">Special Attributes</p>
						<ul>
							<li><b>School:</b> {{selectedSpell.school | getSchoolName}}</li>
							<li><b>Higher level rules:</b></li>
							<ul>
								<li v-for="leveldesc in selectedSpell.higher_level">{{leveldesc}}<br></li>
							</ul>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Firebase from 'firebase'
	import db from '../db.js'

	export default {
		name: 'Spells',
		firebase: function() {
			return {
				spells: db.ref('spells')
				// @TODO: See manual bunding in vuefire readme -- may allow for nested properties
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
				},
				selectedSpell: {},
				searchActive: true
			}
		},
		methods: {
			selectSpell(spell) {
				this.selectedSpell = spell
			},
			selectSearch() {
				this.searchActive = true
			}
		},
		filters: {
			capitalize: function(value) {
				if (!value) {
					return ''
				}

				value = value.toString()
				return value.charAt(0).toUpperCase() + value.slice(1)
			},
			join: function(value) {
				if (!value) {
					return ''
				}
				return value.join('')
			},

			// This is a workaround as VueFire doesn't allow access to nested properties.
			getSchoolName: function(value) {
				if (!value) {
					return ''
				}
				console.log(value.name)
				return value.name
			}
		}
	}
</script>
