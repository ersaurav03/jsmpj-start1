<template>
<div class="userpage">
  <navupper></navupper>
  <navlower></navlower>	
  <div class="container">
  	<div class="row">
  		<div class="col-xs-12">
         <h1 v-for="earr1 in earr">{{earr1}}</h1>
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
 name: 'userpage',
components: {
   navupper,
  navlower,
      footerup,
  footerdown
},

  data:function(){
    return{
      email:"",
      earr:[],
      password:"",
      parr:[],
     }
    },
    created()
    {
     this.earr=JSON.parse(localStorage.getItem('e_arr')) || [];
     this.parr=JSON.parse(localStorage.getItem('p_arr')) || [];
    },
}
</script>