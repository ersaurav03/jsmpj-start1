  <template>
    <div class="About">
      <navupper></navupper>
      <navlower></navlower>	
      <div class="container">
        <div class="card">
          <div class="card-header d-flex justify-content-start">
           <div> <strong>{{p | toUppercase}}</strong></div>
           <div class="input-group d-flex justify-content-end">
             <div class="input-group-append">
              <input v-model="filterText" type="text" class="form-control-sm" placeholder="Search">
              <button class="btn btn-sm btn-outline-dark bg-dark text-light " type="button">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>  
        </div>
        <div class="card-body">
          <h5 class="card-title">Services are Available in Our Company</h5>
          <ol class="card-text">
           <li v-bind:key="fruit" v-for="fruit in filteredFruits">
           <!--  <p>{{fruit}}</p> -->
           <div class="card">
              <div class="card-header text-success bg-dark" v-model="save"><h6>{{fruit}}</h6></div>
               <div class="card-body" >Content</div>
                 <div class="card-footer">Footer</div>
             
           </div>
          </li>
        </ol>
        <router-link to="/" class="btn btn-primary">Go To Home</router-link>
      </div>
      <div class="card-footer text-muted">
        Last Update About Product 2 days ago
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
  // import whatweoffer from '../components/whatweoffer'

  export default {
    name: 'About',
    components: {
     navupper,
     navlower,
  // whatweoffer,
  footerup,
  footerdown
},
data() {
  return{
  filterText:'',
  save:'',
	p:'Product',
  fruits:['Advisory','Financial','Inforation & Technology','Banking','Insurance','Mutual Funds','Forex','Share Broking'],
  data:[
  {d:'Data',f:'Footer'},
  {d:'Data1',f:'Footer1'},
  ]
  }
},
methods:{
  navigateToHome(){
    this.$router.push('/');
  }
},
computed:{
 filteredFruits(){
  return this.fruits.filter((element) => {
    return element.match(this.filterText);
  });
}
},
filters:{
 toUppercase(value){
  return value.toUpperCase();
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
