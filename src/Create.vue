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
				</div>

				<div class="columns is-centered is-vcentered has-text-centered">
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
						<div class="outlineBox" @click="addPlayer()">
							<font-awesome-icon icon="user" size="3x" />
							<h1 class="is-spaced is-size-6">Add player</h1>
							<!-- <input class="input" type="text" v-model="newPlayer" @keyUp.enter="addPlayer()"/> -->
							<font-awesome-icon icon="plus-circle" size="2x"/>
						</div>
					</div>

				</div>

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
		},

		deletePlayer(player) {
			this.players.splice(this.players.indexOf(player), 1)
		}
	}
}

</script>
