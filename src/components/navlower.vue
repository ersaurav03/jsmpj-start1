<template>
	
<nav class="navbar sticky-top navbar-expand-sm  navbar-light navtranparent">
	<div class="container">
		<a class="navbar-brand" href="#"><img src="../../public/images/logo.png"></a>
			<button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#id1">
				<span class="navbar-toggler-icon"></span>
			</button>

			 <div class="collapse navbar-collapse" id="id1">
					 <ul class="navbar-nav">
								<li class="nav-item ">
									<router-link to="/" class="nav-link">Home</router-link>
								</li>
								<li class="nav-item ">
									<router-link to="/About" class="nav-link">About</router-link>
								</li>
								<li class="nav-item ">
								<router-link to="/login" class="nav-link">Login</router-link>
								</li>
								<li class="nav-item ">
									<a  href="#">PAGES1</a>
								</li>
								<li class="nav-item ">
									<a class="nav-link" href="#">SHOP</a>
								</li>
								<li class="nav-item ">
									<a class="nav-link" href="#">CONTACTS</a>
								</li>
					</ul>
					<ul class="navbar-nav">
						<li class="nav-item">
	                       <a class="nav-link" href="#"><i class="fa fa-shopping-bag" aria-hidden="true" @click="counter--"></i>{{counter}}</a>

							<!--Apply Vue framework Here-->
						</li>
					</ul>
            </div>
	</div>
</nav>
</template>
<style>
	div.navtranparent
	{
		background-color: rgba(255,255,255,0.6);
	}
</style>
<script>

	import { eventBus } from '../main';
	import amazingworks from './amazingworks.vue';
	export default{
		data:function(){
			return {
				counter:0
			}
		},
		created()
		{
		eventBus.$on('counter',(data) => {
        this.counter = data;
		})	
		}
	}
</script>