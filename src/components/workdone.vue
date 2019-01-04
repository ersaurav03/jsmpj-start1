<template>
	<div class="container">
		<div class="row">
			<div class="col-sm-1 col-md-1 col-lg-1 "></div>
			<div class=" col-sm-6 col-md-2 pt-5 trackrecord" v-for="arr1 in arr">
				<div class="d-flex justify-content-center"><h1>{{arr1.p}}</h1></div>
				<div class="d-flex justify-content-center"><h6>{{arr1.d}}</h6></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data:function(){
			return{
				arr:[
				{p:'99',d:'Project Completed'},
				{p:'120',d:'Happy Clients'},
				{p:'75',d:'Cups of Coffee'},
				{p:'105',d:'Awards Winner'},
				{p:'3500',d:'Ratings'}
				]
			}
		}
	}
</script>
<style>
div.trackrecord
{
	height: 150px;
}
</style>