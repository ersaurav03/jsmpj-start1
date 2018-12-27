<template>
  <div class="home">
    <navupper></navupper>
    <navlower></navlower>
    <slider></slider>
    <benifits></benifits>
    <whatweoffer></whatweoffer>
    <amazingworks></amazingworks>
    <values></values>
    <workdone></workdone>
    <ourteam></ourteam>
    <progressbar></progressbar>
    <brands></brands>
    <purchasenow></purchasenow>
    <footerup></footerup>
    <footerdown></footerdown>
  </div>
</template>

<script>
// @ is an alias to /src
import navupper from '../components/navupper.vue'
import navlower from '../components/navlower.vue'
import slider from '../components/slider.vue'
import benifits from '../components/benifits.vue'
import whatweoffer from '../components/whatweoffer.vue'
import amazingworks from '../components/amazingworks.vue'
import values from '../components/values.vue'
import workdone from '../components/workdone'
import ourteam from '../components/ourteam'
import progressbar from '../components/progressbar'
import brands from '../components/brands'
import purchasenow from '../components/purchasenow'
import footerup from '../components/footerup'
import footerdown from '../components/footerdown'

export default {
  name: 'home',
  components: {
     navupper,
    navlower,
    slider,
    benifits,
    whatweoffer,
    amazingworks,
    values,
    workdone,
    ourteam,
    progressbar,
    brands,
    purchasenow,
    footerup,
    footerdown
  }
}
</script>
