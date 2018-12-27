<template>
	<div class="login">
    <navupper></navupper>
    <navlower></navlower>	
    <div class="container">
    	<div class="row">
    		<div class="col-xs-12">
    			<form>
	              <div class="form-group">
		            <label class="text-primary float-left" for="Name"> Email Id</label>
		            <input class="form-control" type="email" id="Email" placeholder="Enter your valid Email id">
		            <label class="text-primary float-left" for="Name"> Password</label>
		            <input class="form-control" type="password" id="password" placeholder="Enter password"><br>
		            <div class="d-flex justify-content-start pl-3"><label class="form-check-label">
        		    <input type="checkbox" class="form-check-input">Stay Sign in
        	         </label></div><br>
		            <button class="btn btn-primary btn-block" type="submit">SignIn</button>
                    <h6>or</h6>
                     <button class="btn btn-primary btn-block" type="submit">SignUp</button>
	               </div>
	           </form>
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
	
</style>
