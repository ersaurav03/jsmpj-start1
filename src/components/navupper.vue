<template>
	<!-----------------------------------------------------Upper anvbar starts------------------------------------------------------------------>
	<div v-drz1:background="'rgba(0,0,0,1.0)'">
		<div v-drz1:background="'rgba(0,0,0,1.0)'" class="container text-light">
			<div class="row fontsizees">

                                                         <!----------Code for Phone number----------->
				<div class=" col-sm-12 col-lg-3 my-1"> 
					<i class="fa fa-phone" aria-hidden="true"></i>998-877-6655
				</div>

                                                         <!--------------Code for email--------------->
				<div class=" col-sm-12 col-lg-3 my-1"> 
					<i class="far fa-envelope"></i>  @email.com
				</div>
                           
                                                        <!------Code for space interms of coluns------>
                <div class=" col-sm-12 col-lg-1 "> 
                </div>

                                                        <!--------------Code for icons---------------->
				<div class=" col-sm-12 col-lg-2 my-1"> 
					<i v-bind:key="arr1" v-for="arr1 in arr" :class="arr1" aria-hidden="true"></i>

				</div> 			                                      <!------Code for space interms of coluns------>
                <div class=" col-sm-12 col-lg-1 "> 
                </div>

                                                        <!-------------Code for searchbar------------->
				<div class=" col-sm-12 col-lg-2 my-1">   
					<div class="input-group ">
						<div class="input-group-append">
							<input type="text" class="form-control-sm" placeholder="Search">
							<button class="btn btn-sm btn-outline-dark bg-dark text-light " type="button"><i class="fa fa-search" aria-hidden="true"></i></button>
						</div>
					</div>   
				</div>

			</div>
		</div>
	</div>
	<!------------------------------------------------------Upper navbar Endss---------------------------------------------------------------->
</template>

<style>
/*<!--------------------------------------------we increase font size by 20px to make all icons as wel as text size equal----------------------->*/
div.fontsizees
{
font-size: 20px;
}
</style>

<script>
	export default{
		data:function(){
			return{
				arr:[
				'fab fa-twitter-square mr-1',
				'fab fa-facebook-square mr-1',
				'fab fa-linkedin-square mr-1',
				'fab fa-dribbble mr-1',
				'fab fa-instagram mr-1']
			}
		}
	}
</script>