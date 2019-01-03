<template>
	<div class="login">
    <navupper></navupper>
    <navlower></navlower>	
    <div class="container">
    	<div class="row">
    		<div class="col-sm-4">
                     <router-link to="/signin" class="text-light"><button class="btn btn-primary btn-block">SignIn </button></router-link>
                     or
                     <router-link to="/signup" class="text-light"><button class="btn btn-primary d-block w1">SignUp</button></router-link>
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
