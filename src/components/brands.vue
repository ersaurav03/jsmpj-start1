<template>
<div v-local-dr1 class="container-fluid  ">
		<div class="container ">

			<div v-local-dr2 class="row pt-5 pb-5 ">
                 <div  v-local-dr2 class="col-sm-6 col-md-6 col-lg-1   border border-light ">     	
                 </div>

				<div  v-local-dr2 class="col-sm-6 col-md-6 col-lg-2   border border-light" v-bind:key="arr1" v-for="arr1 in arr">
					<div  v-local-dr2 class="d-flex justify-content-center "><img  :src="arr1" class="img-responsive" height="100px" width="150px"></div>
				</div>

				<div v-local-dr2 class="col-sm-6 col-md-6 col-lg-1   border border-light ">	
                </div>
                
			</div>
		</div>
	</div>

</template>
<script>
	export default{
		data:function()
		{
			return{
				arr:['images/18.png','images/19.png','images/20.png','images/21.png','images/22.png']
			}
		},
		directives:{
			'local-dr1':{
				bind(el,binding,vnode){
					el.style.backgroundColor='rgba(255,255,255,0.3)';
				}
			},
			'local-dr2':{
				bind(el,binding,vnode){
					el.style.backgroundColor='rgba(255,255,250,0.9)';
				}
			}
		}
	}
</script>
<style>

</style>