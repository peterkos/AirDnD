<template>
	<div id="spellsSection">

		<h1 class="title has-text-centered has-text-white is-vcentered">Spells</h1>

		<div class="columns is-centered">
			<div class="column is-one-third">
				<!-- @TODO: Propogate search to specific component only! (With filtering options) -->

				<div class="field has-addons">
					<div class="control is-expanded">
						<!-- <VueFuse class="input searchBar"
						          placeholder="Search for spellsss"
						          eventName="results"
						          :list="spells"
						          :keys="['name', 'level']"
						          :defaultAll="true"
						          @fuseResultsUpdated="showResults($event)"/> -->
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
								<th class="has-text-centered">Class</th>
								<th class="has-text-centered">Concentration</th>
								<th class="has-text-centered">Ritual</th>
							</thead>
							<tbody>
								<tr v-for="currentSpell in searchResults" @click="selectSpell(currentSpell)" :class="{'is-selected': currentSpell.name === selectedSpell.name}">
									<td class="has-text-centered">{{currentSpell.level}}</td>
									<td class="">{{currentSpell.name}}</td>
									<td class="has-text-centered">
										<p v-for="currentClass in currentSpell.classes">{{currentClass.name}}</p> <!-- @TODO: Make comma separation smarter -->
									</td>
									<td class="has-text-centered">{{capitalize(currentSpell.concentration)}}</td>
									<td class="has-text-centered">{{capitalize(currentSpell.ritual)}}</td>
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
							<li><b>Concentration:</b> {{capitalize(selectedSpell.concentration)}}</li>
							<li><b>Range:</b> {{selectedSpell.range}}</li>
							<li><b>Components:</b> {{join(selectedSpell.components)}}</li>
							<li><b>Ritual:</b> {{capitalize(selectedSpell.ritual)}}</li>
							<li><b>Duration:</b> {{selectedSpell.duration}}</li>
							<!-- <li><b>Classes:</b> {{join(selectedSpell.classes)}}</li> @FIXME: Tedious v-for! -->
							<li><b>Material:</b> {{selectedSpell.material}}</li>
						</ul>
					</div>
					<div class="tile is-child box">
						<p class="title">Special Attributes</p>
						<ul>
							<li><b>School:</b> {{getSchoolName(selectedSpell.school)}}</li>
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

	import Firebase from 'firebase/app'
	import VueFuse from 'vue-fuse'
	// import {db} from '../vuethings.js'
	import { getDatabase, ref, get } from 'firebase/database'

	const db = getDatabase()

	// const val = get(ref(db, 'spells')).then((snapshot) => {
	// 	console.log("snapshot: " + snapshot.val())
	// })

	export default {
		name: 'Spells',
		firebase: function() {
			console.log("ASDF")
			return {
				spells: []
				// @TODO: See manual bunding in vuefire readme -- may allow for nested properties
			}
		},
		created() {
			get(ref(db, 'spells')).then((snapshot) => {
				console.log("snapshot: " + snapshot.val())
				this.spells = snapshot.val()
				this.searchResults = this.spells
			})
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

				// Searching
				searchResults: [],
			}
		},
		methods: {
			selectSpell(spell) {
				this.selectedSpell = spell
			},
			showResults(results) {
				this.searchResults = results
			},
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
