<template>
	<div id="classesSection">
		<div class="columns is-centered">
			<div class="column is-half has-text-centered">
				<h2 class="is-size-2">Class list</h2>

				<table class="table is-fullwidth">
					<thead>
						<th class="has-text-centered">Name</th>
						<th class="has-text-centered">Hit die</th>
					</thead>
					<tbody>
						<tr v-for="currentClass in classes">
							<td class="has-text-centered">{{currentClass.name}}</td>
							<td class="has-text-centered">{{currentClass.hit_die}}</td>
						</tr> 
					</tbody>
				</table>
			</div>
		</div>

		<div class="columns is-centered">
			<div class="column is-one-third">
				<div class="field is-horizontal">

					<div class="field-label is-normal">
						<label class="label is-expanded">Name</label>
					</div>
					<div class="field-body">
						<div class="field">
							<div class="control">
								<input class="input" type="text" placeholder="Bard" v-model="newClass.name"/>
							</div>
						</div>
					</div>
				</div>
				<div class="field is-horizontal">

					<div class="field-label is-normal">
						<label class="label is-expanded">Hit die</label>
					</div>
					<div class="field-body">
						<div class="field">
							<div class="control">
								<input class="input" type="text" placeholder="15" v-model="newClass.hit_die"/>
							</div>
						</div>
					</div>
				</div>

				<div class="field is-grouped is-grouped-centered">
					<div class="control">
						<button class="button is-primary" @click="addClass()">Submit</button>
					</div>
					<div class="control">
						<button class="button is-danger is-outlined" @click="cancelAddClass()">Cancel</button>
					</div>

				</div>

			</div>

		</div>
	</div>

</template>

<script>
	// import Firebase from 'firebase/app'
	// import db from '../db.js'

	import { getDatabase, ref, onValue } from "firebase/database"
	
	let classesRef = ref(getDatabase(), "classes/")

	export default {
		name: 'Classes',
		firebase: function() {
			return {
				classes: classesRef
			}
		},
		data() {
			return {
				newClass: {
					name: "",
					hit_die: ""
				}
			}
		},
		methods: {
			addClass() {
				classesRef.push(this.newClass);
				this.cancelAddClass();
			},
			cancelAddClass() {
				this.newClass.name = "";
				this.newClass.hit_die = "";
			}
		}
	}
</script>