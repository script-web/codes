jQuery(window).on("load", function(){
    var codev_img = 'https://www.job-delivery.com/codev.png';
    var codev_url = 'https://www.facebook.com/Pro.Art.Designs';
    	
    if(jQuery('.proart.exist_p').length) {
        jQuery('.proart.exist_p').html('<a href="'+ codev_url +'" target="_blank"><img src="'+ codev_img +'" id="codev-Logo" style="width: 80px;" alt="CODEV web development" title="Codev | web development services"/></a>');
   	}
    else {
        jQuery('BODY').html('');
    	setTimeout(function(){window.location.href = (window.location.href);},1000);
   	}
});
