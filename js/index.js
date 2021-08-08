$(function(){
	 $('.pictrue-3-box').each(function(z){
	 	 $('.pictrue-3-box').eq(z).find('.pictrue-3-list').each(function(i){
		 	 $('.pictrue-3-box').eq(z).find('.pictrue-3-list').eq(i).css({"animation-delay":"0" + i/2 + "s","-webkit-animation-delay":"0" + i/2 + "s","-moz-animation-delay":"0" + i/2 + "s","-o-animation-delay":"0" + i/2 + "s"});
		 })
	 })
});