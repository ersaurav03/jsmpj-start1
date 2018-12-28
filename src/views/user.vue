<template>
	<div class="login">
    <navupper></navupper>
    <navlower></navlower>	
    <div class="container">
    	<div class="row">
    		<div class="col-xs-12">
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
   </div>
</div>
</div>
</div>

</template>
<style>

</style>
<script>
import { eventBus } from '../main';
import signup from './signup.vue';
</script>