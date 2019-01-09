<template>
	<nav class="navbar sticky-top navbar-expand-sm  navbar-light navtranparent">
		<div class="container">
			<a class="navbar-brand" href="#"><img src="../../public/images/logo.png"></a>
			<button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#id1">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="id1">
				<ul class="navbar-nav">
					<li v-bind:key="nav1" v-for="nav1 in navv" class="nav-item ">
						<router-link :to="nav1.link" class="nav-link">{{nav1.name}}</router-link>
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
// import amazingworks from './amazingworks.vue';
export default{
	data:function(){
		return {
			counter:0,
			navv: [
			{name:'HOME', link:'/'},
			{name:'ABOUT',link:'/About'},
			{name:'CONTACTS',link:'/'},
			{name:'ACCOUNT',link:'/login'},
			{name:'PAGES',link:'/'}
			]
			
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