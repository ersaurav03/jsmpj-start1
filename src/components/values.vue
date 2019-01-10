<template>
<div class="container-fluid">
		<div class="row d-flex justify-content-center">
			<div class="col-sm-6 col-md-6 col-lg-6  leftt">
				<div class="d-flex justify-content-center"></div>
			</div>

			<div class="col-sm-6 col-md-6 col-lg-6 " v-drz2:color="'rgba(255,255,255,1.0)'">
				<div class="row">
					<div v-drz1:background="'rgba(0,0,0,1.0)'" class="col-sm-6 col-md-6 p-5  border border-light " v-bind:key="arr1" v-for="arr1 in arr">
						<div class="d-flex justify-content-start"><i :class="arr1.i1"></i></div><br>
						<div class="d-flex justify-content-start"><b text-light>{{arr1.h}}</b></div>
						<div class="d-flex justify-content-start"><i :class="arr1.i2" aria-hidden="true"></i></div>
						<div class="text-justify"><h6>{{arr1.p}}</h6></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
div.leftt
{
background-image:url("../../public/images/mid.jpg");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
}
</style>

<script>
	export default{
		data:function(){
			return{
				arr:[
				{i1:'fas fa-anchor fa-2x',h:'Branding Identity',i2:'fa fa-times',p:'Lorem ipsum dolor sit amet consectetur adipcing elit rivamus a aliquet interdum maurisaliquet felis interdume'},
				{i1:'fas fa-bell fa-2x',h:'Marketing Services',i2:'fa fa-times',p:'Lorem ipsum dolor sit amet consectetur adipcing elit rivamus a aliquet interdum maurisaliquet felis interdume'},
				{i1:'fas fa-edit fa-2x',h:'Unlimited Colors',i2:'fa fa-times',p:'Lorem ipsum dolor sit amet consectetur adipcing elit rivamus a aliquet interdum maurisaliquet felis interdume'},
				{i1:'fas fa-cogs fa-2x',h:'Free Support & Updfates',i2:'fa fa-times',p:'Lorem ipsum dolor sit amet consectetur adipcing elit rivamus a aliquet interdum maurisaliquet felis interdume'},
				{i1:'fas fa-link fa-2x',h:'SEO Ready',i2:'fa fa-times',p:'Lorem ipsum dolor sit amet consectetur adipcing elit rivamus a aliquet interdum maurisaliquet felis interdume'},
				{i1:'fas fa-layer-group fa-2x',h:'Ma Styles Available',i2:'fa fa-times',p:'Lorem ipsum dolor sit amet consectetur adipcing elit rivamus a aliquet interdum maurisaliquet felis interdume'}
				]
			}
		}
	}
</script>