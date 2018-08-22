
<template>
	<section class="section">
		
		<div class="container">

			<div class="columns is-centered">

				<div class="column is-one-quarter">
					<a><router-link to="/">
						<div class="box">
							<h1 class="title">Spells</h1>
							<p class="subtitle">All the spells in the game. Well, mostly.</p>
						</div>
					</router-link></a>
				</div>
				<div class="column is-one-quarter">
					<a><router-link to="/Classes">
						<div class="box">
							<h1 class="title">Classes</h1>
							<p class="subtitle">#bardisbestclass</p>
						</div>
					</router-link></a>
				</div>
				<div class="column is-one-quarter">

					<a><router-link to="/">
						<div class="box">
							<h1 class="title">Races</h1>
							<p class="subtitle">3, 2, 1... Dragonborn?</p>
						</div>
					</router-link></a>
				</div>

			</div>
		</div>

	</section>
</template>


<script>
export default {
	name: "Navigation"
}

</script>
