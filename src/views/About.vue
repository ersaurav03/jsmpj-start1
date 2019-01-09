<template>
<div class="About">
<navupper></navupper>
<navlower></navlower>	
<div class="container ">
	<div class="row ">
		<div class="col-xs-6 col-lg-12">
			<whatweoffer></whatweoffer><br>
        <button class="btn btn-primary btn-block" @click="navigateToHome">HOME</button>
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
import whatweoffer from '../components/whatweoffer'

export default {
name: 'About',
components: {
 navupper,
navlower,
whatweoffer,
footerup,
footerdown
},
methods:{
navigateToHome(){
    this.$router.push('/');
}
}
}
</script>

<style>
.w1
{
	width: 100%;
}
.img1
{
	background: url("../../public/images/slider0.png");
	height: 1000px;
	width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
