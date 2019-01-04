<template>
<div class=" footerup1">
<div class="container footerup1">
<div class="row">

	<div class="col-md-3 footerup1 text-light">
		<div class="col-md-12 footerup1  d-flex justify-content-start">
			<div class="d-flex justify-content-start"> <img src="../../public/images/logo01.png"></div>
		</div>

		<div class="col-md-12 footerup1  d-flex justify-content-end">
			<address>
				98 North 39th Street, Suite 836 NY 8362-1800<br>
				Phone: (030) 333 456 789 - 686<br>
				<span class="text-primary">Email: Infor@wright.com</span><br>

			</address>
		</div>

		<div class="col-md-12 footerup1 ">
			<h4>FOLLOW US ON</h4>
			<br>
			<i       v-for="i2 in icon1" :class="i2.d"data-toggle="tooltip" data-placement="top" :title="i2.t"> </i>

<!-- 			<i class="fab fa-facebook-square fa-2x"  data-toggle="tooltip" data-placement="top" title="Facebook"></i>
			<i class="fab fa-dribbble-square fa-2x" data-toggle="tooltip" data-placement="top" title="Dribble"></i>
			<i class="fab fa-google-plus-square fa-2x" data-toggle="tooltip" data-placement="top" title="Gogle+"></i>
			<i class="fab fa-behance-square fa-2x" data-toggle="tooltip" data-placement="top" title="Behance"></i>
			<i data-toggle="tooltip" title="RSS" class="fas fa-rss-square fa-2x" ></i> -->

		</div>
	</div>

	<div class="col-md-3 footerup text-light d-flex justify-content-start"> 
		<div class="col-md-12 footerup ">
			<h4>INFORAMTION</h4>
			<a href="#" v-for="i in Info"><h6 class="d-flex justify-content-start text-light"> {{i}}</h6></a>
<!-- 			<a href="#"><h6 class="d-flex justify-content-start text-light">Press & Media</h6></a>
			<a href="#"><h6 class="d-flex justify-content-start text-light"> News/Blog </h6></a>
			<a href="#"><h6 class="d-flex justify-content-start text-light"> Career </h6></a>
			<a href="#"><h6 class="d-flex justify-content-start text-light">Awards & Reviews</h6></a>
			<a href="#"><h6 class="d-flex justify-content-start text-light">Testimonials</h6></a>
			<a href="#"><h6 class="d-flex justify-content-start text-light"> Affiliate Program</h6></a> -->
		</div>
	</div>

	<div class="col-md-3 footerup text-light">
		<div class="col-md-12 footerup1">
			<h4>LATEST TWEETS</h4>
			<div class="row">
				<div class="col-sm-2 col-md-2 col-lg-2"><i class=" text-primary fab fa-twitter fa-2x"></i></div>
				<div class="col-sm-10 col-md-10 col-lg-10">
					Wright
					<p class="d-flex justify-content-start">Multipurpose Business Agency HTML Template <br> <h6 class="text-primary">goo.gl/JrLd4m pic.twitter.com/BUtj8woDGq</h6> November23, 2018 11:58 pm</p></div>
				</div>
			</div>

			<div class="col-md-12 footerup1 text-light">
				<div class="row">
					<div class="col-sm-2 col-md-2 col-lg-2">
						<i class="text-primary fab fa-twitter fa-2x"></i>
					</div>
						<div class="col-sm-10 col-md-10 col-lg-10">
							Bachas
							<p class="d-flex justify-content-start"> Bachas Responsive WordPress Theme for your online store here, purchase now <br> <h6 class="text-primary">goo.gl/wl9zDA pic.twitter.com/kS7BSkiOUS</h6>
							June 3, 2018 12:03 pm</p>
						</div>

				</div>
		    </div>
	</div>

	<div class="col-md-3 footerup text-light">

			<div class="col-sm-12 footerup1">
						<h4>PHOTO STREAMS</h4>
						<div class="row">
							<div class=" col-sm-4 col-md-4 col-lg-4" v-for="p1 in pict"> <img :src="p1" class="img-responsive" height="50px" width="85px"></div>
<!-- 							<div class=" col-sm-4 col-md-4 col-lg-4"><img src="../../public/images/02.jpg" class="img-responsive" height="50px" width="85px"></div>
							<div class=" col-sm-4 col-md-4 col-lg-4"><img src="../../public/images/03.jpg" class="img-responsive" height="50px" width="85px"></div>
						</div>
						<div class="row">
							<div class=" col-sm-4 col-md-4 col-lg-4"><img src="../../public/images/04.jpg" class="img-responsive" height="50px" width="85px"></div>
							<div class=" col-sm-4 col-md-4 col-lg-4"><img src="../../public/images/05.jpg" class="img-responsive" height="50px" width="85px"></div>
							<div class=" col-sm-4 col-md-4 col-lg-4"><img src="../../public/images/06.jpg" class="img-responsive" height="50px" width="85px"></div> -->
						</div>
					</div><br>

					<div class="col-md-12 footerup1 text-light">
						<div><i class="fab fa-instagram"></i>Follow on Instagram</div>
					</div>
			</div>
	</div>
		</div>
	</div>
</template>

<style>
div.footerup1
{
	background-color: rgba(0,0,0,1.0);
	border-style: none;
}
</style>

<script>
	export default{
		data:function(){
			return{
				icon1:[
			{d:'fab fa-twitter-square fa-2x',t:'Twitter'},
			{d:'fab fa-dribbble-square fa-2x',t:'Dribble'},
			{d:'fab fa-google-plus-square fa-2x',t:'GooglePlus'},
				{d:'fab fa-behance-square fa-2x',t:'Behance'},
				{d:'fas fa-rss-square fa-2x',t:'RSS'},
				{d:'fab fa-facebook-square fa-2x',t:'Facebook'}
				],
				Info:[
				'About Us',
				'Press & Media',
				'News/Blog',
				'Career',
				'Awards & Reviews',
				'Testimonials',
				'Affiliate Program'
				],
				pict:[
				'images/01.jpg',
                 'images/02.jpg',
                 'images/03.jpg',
                 'images/04.jpg',
                 'images/05.jpg',
                 'images/06.jpg'
				]
			}
		}
	}
</script>