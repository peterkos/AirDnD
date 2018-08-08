

<template>
	<div class="hello">
		<!-- <h1>{{ msg }}</h1> -->
		
		<section class="hero is-primary">
			<div class="hero-body">
				<div class="container">
					<h1 class="title">
						Primary title
					</h1>
					<h2 class="subtitle">
						Primary subtitle
					</h2>
				</div>
			</div>
		</section>

	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data () {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>