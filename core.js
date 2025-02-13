document.addEventListener("DOMContentLoaded", function(){
  let blockedDomains = ["passioneurs.net", "passioneurs.co"],
    currentDomain = document.location.hostname.toLowerCase(),
    codev_width = 90, 
    codev_img = 'https://aweegbzfzp.cloudimg.io/v7/job-delivery.com/codev.png',
    codev_url = 'https://wa.me/201008669950',
    codev_wrapper = document.querySelector('.proart'),
    codev_body = document.querySelector('body');

  let isBlocked = blockedDomains.includes(currentDomain);

  if (codev_wrapper && !isBlocked) {
    if (codev_body.classList.contains('pco60')) { 
      codev_width = 70; 
    }

    codev_wrapper.style.cssText = "filter:opacity(1)!important;display:inline-block!important;visibility:visible!important;opacity:1!important;";
    codev_wrapper.innerHTML = `<a class="proart_a" href="${codev_url}" target="_blank">
                                  <img src="${codev_img}" id="codev-Logo" alt="CODEV Website and Mobile Applications Development Services" title="Codev | Website and Mobile Applications Development Services"/>
                               </a>`;

    let codev_link = document.querySelector('.proart_a'),
        codev_logo = document.querySelector('#codev-Logo');

    codev_link.style.cssText = "filter:opacity(1)!important;display:inline-block!important;visibility:visible!important;opacity:1!important;";
    if (codev_logo) {
      codev_logo.style.cssText = `width:${codev_width}px!important;height:auto!important;`;
    }
  }

  let style1 = "color: white; background: black; padding: 10px 20px; font-size: 22px; font-weight: bold; border-radius: 5px;",
    style2 = "color: green; font-size: 14px; font-weight: bold;",
    style3 = "color: blue; font-size: 14px;",
    codevText1 = 'Website Created by Codev',
    codevText2 = 'Mobile/WhatsApp/Telegram: ',
    codevText3 = '+201008669950';

  console.log("%c" + codevText1, style1);
  console.log("%c" + codevText2 + "%c" + codevText3, style2, style3);
  
  let div = document.createElement('div');
  div.style.display = 'none';
  div.innerHTML = codevText1 + '<br/>' + codevText2 + codevText3;
  document.body.appendChild(div);
});
