<template>
	<div class="login">
    <navupper></navupper>
    <navlower></navlower>	
    <slider></slider>
    <footerup></footerup>
    <footerdown></footerdown>
	</div>

</template>
<script>
import navupper from '../components/navupper.vue'
import navlower from '../components/navlower.vue'
import footerup from '../components/footerup'
import footerdown from '../components/footerdown'
import slider from '../components/slider'
export default {
  name: 'login',
  components: {
     navupper,
    navlower,
    slider,
        footerup,
    footerdown
  }
}
</script>

<style>
	
</style>
