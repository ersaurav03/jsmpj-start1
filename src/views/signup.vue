<template>
	<div class="login">
    <navupper></navupper>
    <navlower></navlower>	
    <div class="container">
    	<div class="row">
    		<div class="col-xs-12">
    			<form>
           <div class="form-group">
            <label class="text-primary float-left" for="Name"> Name</label>
            <input class="form-control" type="text" id="name" placeholder="Enter Name" v-model="name">

            <label class="text-primary float-left" for="Name"> Email Id</label>
            <input class="form-control" type="email" id="Email" placeholder="Enter your valid Email id" v-model="email">

            <label class="text-primary float-left" for="Name"> Phone Number</label>
            <input class="form-control" type="text" id="phnumber" placeholder="Enter your Phone Number" v-model.number="phnumber">

            <label class="text-primary float-left" for="Name"> Password</label>
            <input class="form-control" type="password" id="password" placeholder="Enter password" v-model="password">

            <br>
            <div>
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" id="sign in" value="sign inn" v-model="sendMail">Sign In
              </label>

              <textarea id="message" rows="5" class="form-control" v-model="message" placeholder="lease Enter Your Feedback">
              </textarea>

              <label  class="Male">
               <input type="radio" id="male" value="male" v-model="gender">Male
             </label>
             <label  class="Male">
               <input type="radio" id="Female" value="Female" v-model="gender">Female
             </label>
              <br>
             <label class="priority">Priority</label>
             <select id="priority" class="form-control" v-model="selpri">
              <option v-for="option in options" >{{option}}</option>
              <!-- :selected="option== 'Low'" -->
            </select>

          </div>
          <br>
          <router-link to="/user"><button class="btn btn-primary btn-block"  @click="signn">SignUp</button></router-link>
        </div><br>
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
  import { eventBus } from '../main';
  export default {

    name: 'login',
    components: {
     navupper,
     navlower,
     footerup,
     footerdown

   },
   data:function()
   {
    return{
        email:'',
        earr:[],
        name:'',
        narr:[],
        phnumber:'',
        pharr:[],
        password:'',
        psarr:[],
        message:'',
        marr:[],
        sendMail:'true',
        smarr:[],
        gender:'male',
        garr:[],
        selpri:'High',
        sarr:[],
        options:['Higher', 'Medium', 'Low']
    }
  },
  created(){
         this.earr=JSON.parse(localStorage.getItem('id')) || [];
         this.narr=JSON.parse(localStorage.getItem('id1')) || [];
         this.pharr=JSON.parse(localStorage.getItem('id2')) || [];
         this.psarr=JSON.parse(localStorage.getItem('id3')) || [];
         this.marr=JSON.parse(localStorage.getItem('id4')) || [];
         this.garr=JSON.parse(localStorage.getItem('id5')) || [];
         this.sarr=JSON.parse(localStorage.getItem('id6')) || [];
         this.smarr=JSON.parse(localStorage.getItem('id7')) || [];
  },
  methods:
  {
    signn(){
    this.earr.push(this.email);
    this.narr.push(this.name);
    this.pharr.push(this.phnumber);
    this.psarr.push(this.password);
    this.marr.push(this.message);
    this.garr.push(this.gender);
    this.sarr.push(this.selpri);
    this.smarr.push(this.sendMail);

     localStorage.setItem('id',JSON.stringify(this.earr));
     localStorage.setItem('id1',JSON.stringify(this.narr));
     localStorage.setItem('id2',JSON.stringify(this.pharr));
     localStorage.setItem('id3',JSON.stringify(this.psarr));
     localStorage.setItem('id4',JSON.stringify(this.marr));
     localStorage.setItem('id5',JSON.stringify(this.garr));
     localStorage.setItem('id6',JSON.stringify(this.sarr));
     localStorage.setItem('id7',JSON.stringify(this.smarr));
    }
  }

}
</script>

<style>

</style>
