<style lang="scss">
@import './assets/sass/main.scss'
</style>

<template>

	<div id="create">

		<div class="hero is-dark is-medium">

			<div class="hero-body">

				<div class="columns is-centered is-vcentered has-text-centered">
					<div class="column is-narrow">

						<div class="outlineBox">
							<font-awesome-icon icon="chess-king" size="4x" />
							<h1 class="is-spaced is-size-4">Add a DM</h1>
						</div>

					</div>
				<!-- </div> -->

				<div class="verticalLine"></div>

				<!-- <div class="columns is-centered is-vcentered has-text-centered"> -->
					<div class="column is-narrow playerColumn" v-for="(player, index) in players" :key="index">
						<div class="outlineBox">
							<font-awesome-icon icon="user" size="3x" />
							<h1 class="is-spaced is-size-6">{{player}}</h1>
							<!-- @TODO: Delete and edit -->
						</div>
						<a class="delete deleteButton" @click="deletePlayer(player)"></a>
					</div>

					<!-- Button to add new players -->
					<div class="column is-narrow">
						<div class="outlineBox">
							<font-awesome-icon icon="user" size="3x" />
							<h1 class="is-spaced is-size-6">Add player</h1>

							<!-- Basic player info -->
							<div class="field">

								<label class="label has-text-white is-small" style="text-align: left">Name</label>
								<input class="input is-small is-primary playerNameInput" 
										type="text" 
										placeholder="John" 
										v-model="newPlayer"
										@keyup.enter="addPlayer()"/>

								
							</div>

							
							<!-- <font-awesome-icon icon="plus-circle" size="2x" @click="addPlayer()"/> -->
						</div>
					</div>

				</div> <!-- End of columns -->

			</div>

		</div>
	</div>
</template>

<script>

export default {
	name: "Create",
	data() {
		return {
			newPlayer: "",
			players: []
		}
	},
	methods: {
		
		addPlayer() {
			this.players.push(this.newPlayer)
			this.newPlayer = ""
		},

		deletePlayer(player) {
			this.players.splice(this.players.indexOf(player), 1)
		}
	}
}

</script>
