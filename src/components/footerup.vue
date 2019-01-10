<template>
<div v-local-dr="'rgba(0,0,0,1.0)'">
<div class="container " v-local-dr="'rgba(0,0,0,1.0)'">
<div class="row">

<div v-local-dr="'rgba(0,0,0,1.0)'" class="col-md-3  text-light">
	<div class="col-md-12 footerup1  d-flex justify-content-start">
		<div class="d-flex justify-content-start"> <img src="../../public/images/logo01.png"></div>
	</div>

	<div v-local-dr="'rgba(0,0,0,1.0)'" class="col-md-12 d-flex justify-content-end">
		<address>
			98 North 39th Street, Suite 836 NY 8362-1800<br>
			Phone: (030) 333 456 789 - 686<br>
			<span class="text-primary">Email: Infor@wright.com</span><br>
		</address>
	</div>

	<div v-local-dr="'rgba(0,0,0,1.0)'" class="col-md-12">
		<h4>FOLLOW US ON</h4>
		<br>
		<i v-bind:key="i2" v-for="i2 in icon1" :class="i2.d" data-toggle="tooltip" data-placement="top" :title="i2.t"> </i>
	</div>
</div>

<div v-local-dr="'rgba(0,0,0,1.0)'" class="col-md-3  text-light d-flex justify-content-start"> 
	<div class="col-md-12  ">
		<h4>INFORAMTION</h4>
		<a href="#" v-bind:key="i" v-for="i in Info"><h6 class="d-flex justify-content-start text-light"> {{i}}</h6></a>

	</div>
</div>

<div v-local-dr="'rgba(0,0,0,1.0)'" class="col-md-3 text-light">
	<div class="col-md-12 footerup1">
		<h4>LATEST TWEETS</h4>
		<div class="row">
			<div class="col-sm-2 col-md-2 col-lg-2"><i class=" text-primary fab fa-twitter fa-2x"></i></div>
			<div class="col-sm-10 col-md-10 col-lg-10">
				Wright
				<p class="d-flex justify-content-start">Multipurpose Business Agency HTML Template</p> <br> <h6 class="text-primary">goo.gl/JrLd4m pic.twitter.com/BUtj8woDGq</h6><p> November23, 2018 11:58 pm</p> </div>
		</div>
	</div>

	<div v-local-dr="'rgba(0,0,0,1.0)'" class="col-md-12 text-light">
			<div class="row">
				<div class="col-sm-2 col-md-2 col-lg-2">
					<i class="text-primary fab fa-twitter fa-2x"></i>
				</div>
					<div class="col-sm-10 col-md-10 col-lg-10">
						Bachas
						<p class="d-flex justify-content-start"> Bachas Responsive WordPress Theme for your online store here, purchase now  </p><br> <h6 class="text-primary">goo.gl/wl9zDA pic.twitter.com/kS7BSkiOUS</h6>
						<p>June 3, 2018 12:03 pm </p>
					</div>
			</div>
	</div>
</div>

<div class="col-md-3  text-light">
<div class="col-sm-12 " v-local-dr="'rgba(0,0,0,1.0)'">
	<h4>PHOTO STREAMS</h4>
	<div class="row">
		<div class=" col-sm-4 col-md-4 col-lg-4" v-bind:key="p1" v-for="p1 in pict"> <img :src="p1" class="img-responsive" height="50px" width="85px"></div>
	</div>
</div>
		<br>

<div v-local-dr="'rgba(0,0,0,1.0)'" class="col-md-12 text-light">
	<div><i class="fab fa-instagram"></i>Follow on Instagram</div>
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
		icon1:
		[
  {d:'fab fa-twitter-square fa-2x',t:'Twitter'},
  {d:'fab fa-dribbble-square fa-2x',t:'Dribble'},
  {d:'fab fa-google-plus-square fa-2x',t:'GooglePlus'},
  {d:'fab fa-behance-square fa-2x',t:'Behance'},
		{d:'fas fa-rss-square fa-2x',t:'RSS'},
		{d:'fab fa-facebook-square fa-2x',t:'Facebook'}
		],
		Info:
		[
		'About Us',
		'Press & Media',
		'News/Blog',
		'Career',
		'Awards & Reviews',
		'Testimonials',
		'Affiliate Program'
		],
		pict:
		[
		'images/01.jpg',
         'images/02.jpg',
         'images/03.jpg',
         'images/04.jpg',
         'images/05.jpg',
         'images/06.jpg'
		]
	}
},
directives:{
	'local-dr':{
		bind(el,binding,vnode){
			el.style.backgroundColor=binding.value;
		}
	}
}
}
</script>