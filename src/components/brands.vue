<template>
<div class="container-fluid likess1 bg-light">
		<div class="container ">

			<div class="row pt-5 pb-5 ">
                 <div class="col-sm-6 col-md-6 col-lg-1 ocust  border border-light ">     	
                 </div>

				<div class="col-sm-6 col-md-6 col-lg-2 ocust  border border-light " v-for="arr1 in arr">
					<div class="d-flex justify-content-center "><img  :src="arr1" class="img-responsive" height="100px" width="150px"></div>
				</div>

				<div class="col-sm-6 col-md-6 col-lg-1 ocust  border border-light ">	
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
		}
	}
</script>
<style>
div.ocust
{
background-color: rgba(255,255,255,0.7);
border-style: none;
}
div.likess1
{
background-color: rgba(255,255,255,1.0);
border-style: none
}


</style>