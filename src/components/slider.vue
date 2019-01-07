<template>
<div class="container-fluid ">
	<div class="row d-flex justify-content-center">
		<div class="col col-lg-12 m-auto d-flex justify-content-center">
			<div id="slider3" class="carousel slide mb-5" data-ride="carousel">

				<ol class="carousel-indicators">
					<li class="active" data-target="#slider3" data-slide-to="0"></li><!--Three inicator on slider-->
					<li class="active" data-target="#slider3" data-slide-to="1"></li>
					<li class="active" data-target="#slider3" data-slide-to="2"></li>
				</ol>
				<!-- Things which will display inside slider--->
				<div class="carousel-inner">
					<div  class="carousel-item active" >
						<img src="../../public/images/slider0.png" class="d-block img-fluid">
						<div class="carousel-caption d-none d-md-block">
							<div  class="d-flex  justify-content-start pb-5">
								<button type="button" class="btn btn-primary text-light" @click="navigateToAbout">Check it out</button>
							</div>
						</div>
					</div>

						<div class="carousel-item">
							<img src="../../public/images/slider1.png" class="d-block img-fluid">
							<div class="carousel-caption d-none d-md-block">
								<div  class="d-flex justify-content-center pb-5">
									<button type="button" class="btn btn-primary text-light" @click="navigateToAbout">Check it out</button>
								</div>
							</div>
						</div>

					</div>
					<div class="carousel-item">
						<img src="../../public/images/slider2.png" class="d-block img-fluid">
						<div class="carousel-caption d-none d-md-block">
							<div  class="d-flex justify-content-end pb-5">
								<button type="button" class="btn btn-primary text-light" @click="navigateToAbout">Check it out</button>
							</div>
						</div>
					</div>

					<a href="#slider3" class="carousel-control-prev" data-slide="prev"><span class="carousel-control-prev-icon"></span></a>
					<a href="#slider3" class="carousel-control-next" data-slide="next"><span class="carousel-control-next-icon"></span></a>
				</div>
			</div>

		</div>
	</div>
</div>


</template>
<style>

</style>

<script>
export default{
	data:function()
	{
		return{
			path:[
			{link:'images/slider0.png',s:0},
			{link:'images/slider1.png',s:1},
			{link:'images/slider2.png',s:2}
			]
		}
	},
	methods:{
		navigateToAbout(){
			this.$router.push('/about');
		}
	}
}
</script>