export const mixxx = {
	data() {
return{
	filterText:'',
	p:'Product',
	fruits:['Advisory','Financial','Inforation & Technology','Banking','Insurance','Mutual Funds','Forex','Share Broking']
}
},

computed:{
	filteredFruits(){
		return this.fruits.filter((element) => {
            return element.match(this.filterText);
		});
	}
},
created(){
  console.log("created");
}
};