<template>
	<div class="bg-light likess1">
		<div class="container">
			<h3 class="text-dark pt-5 pb-4">Our Crazy <b>Team</b></h3>
			<div class="row">

				<div class="col col-sm-6 col-md-6 col-lg-1 ">
					
				</div>
				<div class=" col-sm-6 col-md-6 col-lg-2 " v-for="arr1 in arr">
					<div class="d-flex justify-content-center "><div class="view overlay">
						<img :src="arr1.p" class="img-responsive" height="250px" width="150px">
						<div class="mask flex-center rgba-white-strong"><h6 class="text-light"></h6>
						</div>
					</div>
				</div>
				<div class="d-flex justify-content-center"><h6>{{arr1.n}}</h6></div>
				<div class="d-flex justify-content-center"><p> {{arr1.d}} </p></div>
			</div>

		</div>
	</div>	
</div>
</template>
<style>
div.likess
{
	height: 100px;
}
</style>
<script>
	export default{
		data:function(){
			return{
				arr:[
				{p:'images/13.png',n:'Marcos Alonso',d:'Class Master'},
				{p:'images/14.png',n:'Luis Aragones',d:'Marketer'},
				{p:'images/15.png',n:'Maria Alessis',d:'Class Master'},
				{p:'images/16.png',n:'John Doe',d:'PHP Devloper'},
				{p:'images/17.png',n:'Gigi Hadid',d:'Graphic Designer'},
				]
			}
		}
	}
</script>