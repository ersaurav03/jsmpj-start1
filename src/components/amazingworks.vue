<template>
<div class="bg-light">
		<div class="container">
			<h2 class="pt-5 pb-4"> Amazing <b>Works</b></h2>
			<div class="row">

				<div class="col-sm-6 col-md-6 col-lg-3  border border-light">
					<div class="d-flex justify-content-center p-5">
						<div class="view overlay"><img src="../../public/images/4.png" @click="increase" class="img-responsive" height="250px" width="150px">
							<div class="mask flex-center rgba-white-strong"><h6 class="text-light"><!-- <i class="text-primary fa fa-shopping-bag fa-2x"> --></i></h6>
							</div>
						</div>
					</div>
				</div>

				<br>
				<div class="col-sm-6 col-md-6 col-lg-3 border border-light">
					<div class="d-flex justify-content-center p-5">
						<div class="view overlay"><img src="../../public/images/5.png" @click="increase" class="img-responsive" height="250px" width="150px">
							<div class="mask flex-center rgba-white-strong"><h6 class="text-light"><!-- <i class="text-primary fa fa-shopping-bag fa-2x"></i> --></h6></div>
						</div>
					</div>
				</div>
				<br>

				<div class=" col-sm-6 col-md-6 col-lg-3  border border-light">
					<div class="d-flex justify-content-center p-5">
						<div class="view overlay"><img src="../../public/images/6.png" @click="increase" class="img-responsive" height="250px" width="150px">
							<div class="mask flex-center rgba-white-strong"><h6 class="text-light"><!-- <i class="text-primary fa fa-shopping-bag fa-2x"></i> --></h6>
							</div>
						</div>
					</div>
				</div>
				<br>


				<div class="col-sm-6 col-md-6 col-lg-3  border border-light">
					<div class="d-flex justify-content-center p-5">
						<div class="view overlay"><img src="../../public/images/7.png" @click="increase" class="img-responsive" height="250px" width="150px">
							<div class="mask flex-center rgba-white-strong"><h6 class="text-light"><!-- <i class="text-primary fa fa-shopping-bag fa-2x"></i> --></h6></div>
						</div>
					</div>
				</div>
			</div>
			<br>

			<div class="row">
				<div class="col-sm-6 col-md-6 col-lg-3  border border-light">
					<div class="d-flex justify-content-center p-5">
						<div class="view overlay"><img src="../../public/images/8.png" @click="increase" class="img-responsive" height="250px" width="150px"><div class="mask flex-center rgba-white-strong"><h6 class="text-light"><!-- <i class="text-primary fa fa-shopping-bag fa-2x"></i> --></h6></div>
					</div>
				</div>
			</div>

			<div class="col-sm-6 col-md-6 col-lg-3  border border-light">
				<div class="d-flex justify-content-center p-5">
					<div class="view overlay"><img src="../../public/images/9.png" @click="increase" class="img-responsive" height="250px" width="150px">
						<div class="mask flex-center rgba-white-strong"><h6 class="text-light"><!-- <i class="text-primary fa fa-shopping-bag fa-2x"></i> --></h6>
						</div>
					</div>
				</div>
			</div>

			<div class="col-sm-6 col-md-6 col-lg-3 border border-light">
				<div class="d-flex justify-content-center p-5"><div class="view overlay"><img src="../../public/images/10.png" @click="increase" class="img-responsive" height="250px" width="150px"><div class="mask flex-center rgba-white-strong"><h6 class="text-light"><!-- <i class="text-primary fa fa-shopping-bag fa-2x"></i> --></h6></div></div></div>
			</div>

			<div class="col-sm-6 col-md-6 col-lg-3 border border-light">
				<div class="d-flex justify-content-center p-5">
					<div class="view overlay"><img src="../../public/images/11.png" @click="increase" class="img-responsive" height="250px" width="150px">
						<div class="mask flex-center rgba-white-strong"><h6 class="text-light"><!-- <i class="text-primary fa fa-shopping-bag fa-2x"></i> --></h6>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="pb-5">
			<!-------Padding added for gap frm bottom----------------------->
		</div>
	</div>
</div>

</template>
<style>

</style>
<script>

	import { eventBus } from '../main';
	export default
	{
		data:function()
		{
			return{
              counter :0
			}
		},
		methods:
		{
         increase(){
         	this.counter++;
         	eventBus.$emit('counter',this.counter);
         }
		},
		
	}
</script>