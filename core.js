document.addEventListener("DOMContentLoaded", function(){
  var codev_width = 90, 
      codev_img = 'https://aweegbzfzp.cloudimg.io/v7/job-delivery.com/codev.png',
      codev_url = 'https://wa.me/201008669950',
      codev_wrapper = document.querySelector('.proart'),
      codev_body = document.querySelector('body');
  
  if (typeof(codev_wrapper) != 'undefined' && codev_wrapper != null){
    if(codev_body.classList.contains('pco60')){codev_width = 70;}
    if((document.location.host !== 'passioneurs.net') 
       && (document.location.host !== 'passioneurs.co') 
       && (document.location.host !== 'god-tur.dk')
       && (document.location.host !== 'gotorz.com')){
      
      codev_wrapper.setAttribute("style", "filter:opacity(1)!important;display:inline-block!important;visibility:visible!important;opacity:1!important;");
      codev_wrapper.innerHTML = ('<a class="proart_a" href="'+ codev_url +'" target="_blank"><img src="'+ codev_img +'" id="codev-Logo" alt="CODEV Website and Mobile Applications Development Services" title="Codev | Website and Mobile Applications Development Services"/></a>');
      
      var codev_link = document.querySelector('.proart_a'),
          codev_logo = document.querySelector('.proart_img');
        
      codev_link.setAttribute("style", "filter:opacity(1)!important;display:inline-block!important;visibility:visible!important;opacity:1!important;");
      document.body.appendChild('<div style="display:none;">Website Created by Codev<br/>WhatsApp/Telegram: +201008669950</div>');
      codev_logo.setAttribute("style", "filter:opacity(1)!important;display:inline-block!important;visibility:visible!important;opacity:1!important;width:"+codev_width+"px!important;height:auto!important;");
    }
  }
  else {
    codev_body.innerHTML = ('');
    setTimeout(function(){window.location.href = (window.location.href);},10);
  }
  console.info(document.location.host);
});
