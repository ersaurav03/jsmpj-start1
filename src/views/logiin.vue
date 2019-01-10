<template>
  <div class="userpage">
    <navupper></navupper>
    <navlower></navlower>	
    <div class="container">
     <div class="row">
      <div class="col-sm-4 bg-success">
       <h6> <img src="../../public/images/user.jpg" height="80px" width="80px"> Hello User:--{{earr}}</h6>
     </div>
     <div class="col-sm-4 bg-primary">
       <h1>Pleasure to serve</h1>
     </div>
     <div class="col-sm-4 bg-dark">
      <router-link to="/login"> <button class="btn btn-primary" @click="flushh"> signout</button></router-link>
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

 methods:{
  flushh(){
    localStorage.clear();
  }
}
}
</script>