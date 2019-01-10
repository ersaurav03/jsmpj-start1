<template>
<div v-local-dr:background="{color1:'rgba(0,0,0,0.9)',height1:'100px'}">
<div class="container">
		<div class="row">
			<div  class="col-sm-6">
				<div class="d-flex justify-content-start p-3">
					<i class="far fa-copyright"></i><b class="text-primary">Copyright @2018 by <strong>Wright Inc.</strong> All right reserved</b>
				</div>
			</div>

			<div  class="col-sm-6  p-3 d-flex justify-content-end" >
				<i class="text-light" v-bind:key="arr1" v-for="arr1 in arr" :class="arr1"></i>
			</div>

		</div>
	</div>
</div>
</template>

<style>
div.footerdown
{
color: white;
height: 100px;
border-style: none;
}

</style>
<script>
	export default{
		data:function(){
			return{
				arr:[
				'fab fa-cc-visa fa-3x',
				'fab fa-cc-mastercard fa-3x',
				'fab fa-cc-paypal fa-3x',
				'fab fa-cc-discover fa-3x',
				'fab fa-cc-amex fa-3x',
				'fab fa-cc-stripe fa-3x'
				]
			}
		},
		directives:{
			'local-dr':{
				bind(el,binding,vnode){
                 el.style.height=binding.value.height1;
                 el.style.backgroundColor=binding.value.color1;
				}
			}
		}
	}
</script>