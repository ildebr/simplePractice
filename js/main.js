$(window).scroll(()=>{
	console.log("scroll")
	if (window.scrollY > 500){
		console.log("entro")
		$("nav.scroll-visible").addClass("show");
	}
	else if (window.scrollY < 500){
		$("nav.scroll-visible").removeClass("show");
	}
})