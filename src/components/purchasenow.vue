<template>

	<div class=" bg-dark hz">
		<div class="container bg-dark">
			<div class="row text-light ">
				<div class="col col-sm-6 col-md-6 col-lg-6  py-3">
					<div class="d-flex justify-content-start py-4" ><h4>If you like <span class="text-primary">wright</span> HTML Template! Just for <span class="text-primary"> $17</span></h4></div>
				</div>
				<div class="col col-sm-6 col-md-6 col-lg-6 p-4 ">
					<div class="d-flex justify-content-end"><button class="btn btn-dark-lg btn btn-outline-primary p-3" @click="navigateToHome">PRCHASE NOW </button></div>
				</div>
			</div>		
		</div>	
	</div>	
</template>

<style>
div.hz
{
height: 100px;
}
</style>
<script>
	export default{
		methods:{
			navigateToHome(){
				this.$router.push('/check');
			}
		}
	}
</script>