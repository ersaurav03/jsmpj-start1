        <template>
            <div class="login">
                <navupper></navupper>
                <navlower></navlower>	
                <div class="container">
                   <div class="row">
                      <div class="col-xs-12">
                      <table class="table table-striped">
                          <thead>
                              <tr>
                                  <td>
                                    <th scope="row">Email Id</th>
                                    <tr v-for="earr1 in earr">{{earr1}}</tr>
                                  </td>

                                    <td>
                                    <th scope="row">Name </th>
                                    <tr v-for="narr1 in narr">{{narr1}}</tr>
                                  </td>

                                     <td>
                                    <th scope="row">Phone Number</th>
                                    <tr v-for="pharr1 in pharr">{{pharr1}}</tr>
                                  </td>

                                    <td>
                                    <th scope="row">Password</th>
                                    <tr v-for="psarr1 in psarr">{{psarr1}}</tr>
                                  </td>

                                   <td>
                                    <th scope="row">Message from User</th>
                                    <tr v-for="marr1 in marr">{{marr1}}</tr>
                                  </td>

                                     <td>
                                    <th scope="row">Gender Of User</th>
                                    <tr v-for="garr1 in garr">{{garr1}}</tr>
                                  </td>

                                      <td>
                                    <th scope="row">Priority og User</th>
                                    <tr v-for="sarr1 in sarr">{{sarr1}}</tr>
                                  </td>

                              </tr>
                          </thead>
                      </table>
                     </div>
                 </div>
             </div>
          <footerup></footerup>
         <footerdown></footerdown>
         </div>
     </div>

 </template>
 <style>

</style>
<script>
    import { eventBus } from '../main';
    import signup from './signup.vue';
    import navupper from '../components/navupper.vue'
    import navlower from '../components/navlower.vue'
    import footerup from '../components/footerup'
    import footerdown from '../components/footerdown'
    export default
    {
        components:
        {
            navupper,
            navlower,
            footerup,
            footerdown,

        },
        data:function(){
            return{
                email:'',
                earr:[],
                name:'',
                narr:[],
                phnumber:'',
                pharr:[],
                password:'',
                psarr:[],
                message:'Default',
                marr:[],
                sendMail:[],
                gender:'male',
                garr:[],
                selpri:'High',
                sarr:[],
                options:['Higher', 'Medium', 'Low']
            }
        },
        created()
        {
           this.earr=JSON.parse(localStorage.getItem('id')) || [];
           this.narr=JSON.parse(localStorage.getItem('id1')) || [];
           this.pharr=JSON.parse(localStorage.getItem('id2')) || [];
           this.psarr=JSON.parse(localStorage.getItem('id3')) || [];
           this.marr=JSON.parse(localStorage.getItem('id4')) || [];
           this.garr=JSON.parse(localStorage.getItem('id5')) || [];
           this.sarr=JSON.parse(localStorage.getItem('id6')) || [];
       }

   }
</script>