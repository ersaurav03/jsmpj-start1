<template>
		<div class="login">
			<navupper></navupper>
			<navlower></navlower>	
			<div class="container">
				<div class="row">
					<div class="col-sm-4">
						<router-link :to="{name:'signin', query:{locale:'login',q:200}}" class="text-light"><button class="btn btn-primary btn-block">SignIn </button></router-link>
						or
						<!--<router-link to="/signup" class="text-light"><button class="btn btn-primary d-block w1">SignUp</button></router-link>without query parameters -->
						<router-link :to="{name:'signup', query:{locale:'signup', q:300}}" class="text-light"><button class="btn btn-primary d-block w1">SignUp</button></router-link>
						<hr>
						<router-view></router-view>
						<!-- <router-link to="/check">Check</router-link> -->
						<ul class="list-group">
							<router-link tag="li" to="/child1"  class="list-group-item" style="cursor:pointer">User 1</router-link>
							<router-link tag="li" to="/child2" class="list-group-item" style="cursor:pointer">User 2</router-link>
							<router-link tag="li" to="/child3" class="list-group-item" style="cursor:pointer">User 3</router-link>
						</ul>
						<br>
					</div>
				</div>
			</div>

			<footerup></footerup>
			<footerdown></footerdown>
		</div>
</template>

<script>
		import navupper from '../components/navupper.vue'
		import navlower from '../components/navlower.vue'
		import footerup from '../components/footerup'
		import footerdown from '../components/footerdown'
		export default {
			name: 'login',
			components: {
				navupper,
				navlower,
				footerup,
				footerdown
			}

		}
</script>

<style>
	.w1
	{
		width: 100%;
	}
</style>
