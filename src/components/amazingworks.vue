<template>
	<div class="bg-light">
		<div class="container">
			<h2 class="pt-5 pb-4"> Amazing <b>Works</b></h2>
			<div class="row">
				<div class="col-sm-6 col-md-6 col-lg-3  border border-light" v-bind:key="p" v-for="p in picture">
					<div class="d-flex justify-content-center p-5">
						<div class="view overlay"><img :src="p" class="img-responsive" height="250px" width="150px" @click="increase">
							<div class="mask flex-center rgba-white-strong"><h6 class="text-light"></h6>
							</div>
						</div>
					</div>
				</div>
				<br>
			</div>
			<div class="pb-5">
				<!-------Padding added for gap frm bottom----------------------->
			</div>
		</div>
	</div>

</template>
<style>

</style>
<script>
import { eventBus } from '../main';
export default
{
	data:function()
	{
		return{
          counter :0,
          picture:['images/4.png','images/5.png','images/6.png','images/7.png','images/8.png','images/9.png','images/10.png','images/11.png']
		}
	},
methods:
{
 increase(){
	this.counter++;
 eventBus.$emit('counter03',this.counter);
 }
},
	
}
</script>