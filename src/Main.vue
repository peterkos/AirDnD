<template>
	<div id="main">

		<!-- <h1> View your things below:</h1> -->
		
		<!-- Navigation links -->
		<section class="hero is-primary">
			<div class="hero-body">
				<div class="columns is-centered has-text-centered is-narrow">

					<div class="column ">
						<div class="box">
							<router-link to="/spells">
								<h1 class="title is-size-4 has-text-black">Spells</h1>
							</router-link>
						</div>
					</div>

					<div class="column">
						<div class="box">
							<router-link to="/classes">
								<h1 class="title is-size-4 has-text-black">Classes</h1>
							</router-link>
						</div>
					</div>

					<div class="column">
						<div class="box">
							<router-link to="/races">
								<h1 class="title is-size-4 has-text-black">Races</h1>
							</router-link>
						</div>
					</div>

					<div class="column">
						<div class="box">
							<router-link to="/items">
								<h1 class="title is-size-4 has-text-black">Items</h1>
							</router-link>
						</div>
					</div>

				</div>
			</div>
			<div class="hero-foot">
				<div class="columns is-centered">
					<div class="column is-one-third">
						<input type="text" class="input is-narrow searchBar" placeholder="minmax bard" />
					</div>
				</div>
			</div>
		</section>

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