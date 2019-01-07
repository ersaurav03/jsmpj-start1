<template>
<div >
	<navupper></navupper>
	<navlower></navlower>
	<div class="d1">
		<h1 class="text-danger">JSMPJ Corporation</h1>
		<button class="btn btn-warning"><router-link :to="{name:'login', query:{ locale: 'en', q:100}}">LOGIN</router-link></button> 
<!-- 			<button class="btn btn-primary btn-block" @click="navigateToLgin">LOGIN
		</button> -->
		<h1>Page id is:--{{id}}</h1>
	</div>
	<footerup></footerup>
	<footerdown></footerdown>
</div>
</template>
<style>
.d1
{
background-image: url('/images/footer1.jpg');
height: 500px;
}
</style>
<script>
import navupper from '../components/navupper.vue'
import navlower from '../components/navlower.vue'
import footerup from '../components/footerup.vue'
import footerdown from '../components/footerdown.vue'
export default{
	components:{
		navupper,
		navlower,
		footerup,
		footerdown
	},
	data(){
		return{
              id:this.route.params.id
		}
	},
methods:{
	navigateToLgin(){
		this.$router.push('/login');
	}
}
}
</script>