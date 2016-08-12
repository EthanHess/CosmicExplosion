


ft=function(){
	var e=t(".randomtext"),i="";
	t.each(e.text().split(""),function(t,e)	{
		var n=15*(t+1),r=dt(-n,n),o=15*(t+1),s=dt(-o,o);
			i+='<span class="letter" data-randx="'+r+'" data-randy="'+s+'">'+e+"</span>"}),e.html(i),n.scattedTextLoaded=!0,pt()},


	pt=function(){
		var e=t("section.footer form input[type=text]"),n=i.querySelectorAll(".letter");
		t(".footer").unbind("mousemove").bind("mousemove",

		function(i){
		for(var r=mt(i,e),o=gt(),s=r.x-o,a=r.y-vt()-t(this).offset().top,l=Math.sqrt(s*s+a*a)/o,u=-2,c=-200,h=0,f=n.length;f>h;h++){
			var p,d,m=n[h].getAttribute("data-randx")*u*l,g=n[h].getAttribute("data-randy")*u*l;
			e.is(":hover")?(d=0,p=0):(d=5*g,p=5*m),TweenLite.to(n[h],.6,{overwrite:!0,css:{top:d,left:p},ease:Sine.easeOut}),u+=.1,c+=20}})},


	dt=function(t,e){
		return Math.floor(Math.random()*(e-t+1))+t},


	mt=function(e,i){var n=t(i).offset();
		return{y:e.pageY||e.clientY-t(e.target).offset().top,x:e.pageX||e.clientX-t(e.target).offset().left,formY:e.clientY-n.top,formX:e.clientX-(n.left+i.outerWidth()/2)}},


	gt=function(){return Math.floor(.5*_t())},

	vt=function(){return Math.floor(.5*yt())},


	//* I think this is where it ends *//


	_t=function(){return e.innerWidth||i.documentElement.clientWidth||i.body.clientWidth},


	yt=function(){return e.innerHeight||i.documentElement.clientHeight},

	xt=function(){var e=t(".sticky-waypoint"),i=t(".intro, .videos, .companies, .screenings, .host, .press"),n=t(".about, .making, .footer");
	e.each(function(){
		var e=t(this),r=e.position().top;
		i.waypoint({handler:function(t){"down"==t?e.removeClass("dark"):e.addClass("dark")},offset:r}),n.waypoint({handler:function(t){"down"==t?e.addClass("dark"):e.removeClass("dark")},offset:r})})};t(function(){ft(),q(),$(),rt(),W(),X(),Y(),V(),I(),B(),xt(),U(),H()})}(jQuery,window,window.document,window.DesignDisruptors=window.DesignDisruptors||{});
















