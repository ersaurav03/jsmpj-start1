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
                <input class="form-control" type="text" id="name" placeholder="Enter Name" v-model="userData.name">

                <label class="text-primary float-left" for="Name"> Email Id</label>
                <input class="form-control" type="email" id="Email" placeholder="Enter your valid Email id" v-model="userData.email">

		            <label class="text-primary float-left" for="Name"> Phone Number</label>
                <input class="form-control" type="text" id="phnumber" placeholder="Enter your Phone Number" v-model.number="userData.phnumber">

                <label class="text-primary float-left" for="Name"> Password</label>
		            <input class="form-control" type="password" id="password" placeholder="Enter password" v-model="userData.password">

                <br>
		            <div>
                <label class="form-check-label">
                <input type="checkbox" class="form-check-input" id="sign in" value="sign inn" v-model="userData.sendMail">Sign In
                  </label>
                <label class="form-check-label">
                <input type="checkbox" class="form-check-input" id="sign out" value="sign Out" v-model="userData.sendMail">LogOut
                  </label>
                  <textarea id="message" rows="5" class="form-control" v-model="userData.message">
                  </textarea>
                   
                   <label  for="Male">
                     <input type="radio" id="male" value="male" v-model="userData.gender">Male
                   </label>
                  <label  for="Male">
                     <input type="radio" id="Female" value="Female" v-model="userData.gender">Female
                   </label>

                    <label for="priority">Priority</label>
                    <select id="priority" class="form-control" v-model="userData.selpri">
                      <option v-for="option in userData.options" >{{option}}</option>
                      <!-- :selected="option== 'Low'" -->
                    </select>

                 </div>
                   <br>
                     <button class="btn btn-primary btn-block" type="submit" @click'>SignUp</button>
	               </div><br>
	           </form>
    		</div>
    	</div>
    </div>
    <div>
      <p>{{userData.name}}</p>
      <p>{{userData.email}}</p>
    <p>{{userData.phnumber}}</p>
    <p>{{userData.password}}</p>
    <p style="white-space:pre">{{userData.message}}</p>
    <ol>
      <li v-for="item in userData.sendMail">{{ item }}</li>
    </ol>
    <p>{{userData.gender}}</p>
    <p>{{userData.selpri}}</p>
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
      userData: {
      email:'',
      name:'',
      phnumber:'',
      password:'',
     message:'Default',
    sendMail:[],
    gender:'male',
    selpri:'High',
    options:['Higher', 'Medium', 'Low'],
    },
    
  }
},
methods:
{
  signn(){
    eventBus.$emit('data',this.userData);
  }
}

}
</script>

<style>
	
</style>
