<template>
	<div v-drz>
		<div class="container ">

			<div class="d-flex justify-content-start">
				<h2 class="pt-5 pb-4">What we <b>offer</b></h2>
			</div>

			<div class="row">

				<div class="col-sm-4 col-md-4 col-lg-4 wwoffer  border border-light" v-bind:key="link1" v-for="link1 in linkk">
					<div class="d-flex justify-content-center p-2">
						<div class="view overlay">
							<img v-bind:src="link1.picture" class="img-responsive" height="350px" width="350px">
							<div class="mask flex-center rgba-blue-strong">
								<h1 class="text-light"></h1>
							</div>
						</div>
					</div>

					<div class="d-flex justify-content-start a1">
						<h4>{{link1.Heading}}</h4>
					</div>	

					<div class="text-justify">
						<h6>{{link1.parag}}</h6>
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
		data:function(){
			return{
				linkk:[{picture:'images/1.png',Heading:'Security Service',parag:'Lorem ipsum dolort amet sectetur elit In augue nisl, ornare volutpat aliquam eget etlibura'},
				{picture:'images/2.png',Heading:'Financial Support',parag:'Lorem ipsum dolort amet sectetur elit In augue nisl, ornare volutpat aliquam eget etlibura'},
				{picture:'images/3.png',Heading:'Investment Bonds',parag:'Lorem ipsum dolort amet sectetur elit In augue nisl, ornare volutpat aliquam eget etlibura'}
				]
			}
		}
	}
</script>