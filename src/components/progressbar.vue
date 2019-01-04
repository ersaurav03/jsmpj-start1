<template>
	<div class="bg-light">
		<div class="container">
			<div class="row">
				<div class="col col-sm-6 col-md-6 wwchose">

					<div class="d-flex justify-content-start">	
						<h6>Why Choose <b>wright</b> <br> HTML Template</h6>
					</div>

					<div class="d-flex justify-content-center ">	
						<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, </p>
					</div>
					<div class="d-flex justify-content-start p-2"><a class="single-btn" href="#" > Read More </a> <i class="fas fa-arrow-circle-right"></i> 
					</div>

				</div>
				<div class="col col-sm-6 col-md-6 ">
					<div class="row">
						<div class="col col-sm-12 col-md-12 col-lg-12 wwchose1" v-for="arr1 in arr">
							<h6>{{arr1.h}}</h6>
							<div class="progress sm-progress">
								<div class="progress-bar bg-primary progress-bar-striped progress-bar-animated " :class="arr1.w" role="progressbar"  aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
						</div>
					</div>
				</div>	
			</div>
		</div>
	</div>
</template>

<style>
div.wwchose
{
	height:200px;
}

div.w1
{
	width: 79%;
}
div.w2
{
	width: 96%;
}
div.w3
{
	width: 65%;
}
div.w4
{
	width: 92%
}
</style>

<script>
	export default{
		data:function(){
			return{
				arr:[{h:'Stratergy 79%',w:'w1'},
				{h:'Marketing 96%',w:'w2'},
				{h:'Wordpress Theme 65%',w:'w3'},
				{h:'UI/UX Design 92%',w:'w4'}
				]
			}
		}
	}
</script>