// JavaScript Document

$(document).ready(function() {
	$(".pictrue-5-owl").owlCarousel({
		items : 6,/*默认显示数量*/
		itemsDesktop : [1199, 5],/*响应式布局*/
		itemsDesktopSmall : [991, 4],
		itemsTablet : [768, 3],
		itemsMobile : [479, 2],
		autoPlay : 3000,
		stopOnHover : true,/*鼠标经过悬停*/
		lazyLoad : true,/*响应式开关*/
		navigation : false,/*箭头开关*/
		pagination : true,/*按钮开关*/
		navigationText : ["", ""],/*左右箭头文字*/
	  });
 });