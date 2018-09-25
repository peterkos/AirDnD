<template>
	<div id="main">

		<!-- <h1> View your things below:</h1> -->

		<!-- Navigation links -->
		<section class="hero mainNavHero is-small">
			<div class="hero-body">
				<div class="columns is-centered has-text-centered is-narrow is-half">

					<div class="column is-one-fifth">
						<router-link to="/spells">
							<div class="box">
								<h1 class="title is-size-4">Spells</h1>
							</div>
						</router-link>
					</div>

					<div class="column is-one-fifth">
						<router-link to="/classes">
							<div class="box">
								<h1 class="title is-size-4">Classes</h1>
							</div>
						</router-link>
					</div>

					<div class="column is-one-fifth">
						<router-link to="/races">
							<div class="box">
								<h1 class="title is-size-4">Races</h1>
							</div>
						</router-link>
					</div>

					<div class="column is-one-fifth">
						<router-link to="/items">
							<div class="box">
								<h1 class="title is-size-4">Items</h1>
							</div>
						</router-link>
					</div>

				</div>
			</div>
		</section>

		<!-- All subviews go inside here! -->
		<!-- (Spells, Classes, etc. )-->
		<section class="section">
			<router-view></router-view>
		</section>
	</div>

</template>

<script>
	export default {
		name: "MainApp",
		data() {
			return {
			}
		},
		methods: {
		}
	}
</script>
