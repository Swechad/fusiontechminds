const header = document.getElementById("header");
const footer = document.getElementById("footer");
const mobileWrapper = document.getElementById("mobileNav")
const headerContent = `
<nav class="main-menu clearfix">
<div class="main-menu-wrapper clearfix">
    <div class="main-menu-wrapper-inner clearfix">
       
            <div class="main-menu-wrapper__logo">
                <a href="index.html"><img src="assets/images/resources/logo-1.png" alt=""></a>
            </div>
            <div class="main-menu-wrapper__main-menu float-right">
                <a href="#" class="mobile-nav__toggler"><i class="fa fa-bars"></i></a>
                <ul class="main-menu__list">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="industries.html">Industries</a></li>
                    <li><a href="careers.html">Careers</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
        
    </div>
</div>
</nav>`

const footerContent = ` <div class="site-footer__top">
<div class="container">
    <div class="site-footer__top-inner">
        <div class="site-footer-map"
            style="background-image: url(assets/images/shapes/site-footer-mape.png)"></div>
        <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                <div class="footer-widget__column footer-widget__about">
                    <div class="footer-widget__about-logo">
                        <a href="index.html"><img src="assets/images/resources/footer-logo.png"
                                alt=""></a>
                    </div>
                    <p class="footer-widget__about-text">At Fusion Tech Minds, our customer-centric approach helps us craft superior experiences for you. We work closely with you to understand your business-critical needs and add
                    holistic value to accelerate the achievement of your business goals.</p>
                   
                </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 wow fadeInUp" data-wow-delay="200ms">
                <div class="footer-widget__column footer-widget__links clearfix">
                    <h3 class="footer-widget__title">Links</h3>
                    <ul class="footer-widget__links-list list-unstyled clearfix">
                        <li><a href="about.html">About</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="industries.html">Industries</a></li>
                        <li><a href="careers.html">Careers</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                  
                </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 wow fadeInUp" data-wow-delay="300ms">
                <div class="footer-widget__column footer-widget__contact">
                    <h3 class="footer-widget__title">Contact</h3>
                   
                    <ul class="list-unstyled footer-widget__contact-list">
                        <li>
                            <div class="icon">
                                <span class="icon-email"></span>
                            </div>
                            <div class="text">
                                <p><a href="mailto:info@fusiontechminds.com">
                                    info@fusiontechminds.com
                                    </a></p>
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <span class="icon-telephone"></span>
                            </div>
                            <div class="text">
                                <p><a href="tel:+91 8008794349">+91 8008794349</a></p>
                            </div>
                        </li>
                    </ul>
                    <div class="footer-widget__about-social mt-5">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                </div>
                </div>
            </div>
          
        </div>
    </div>
</div>
</div>
<div class="site-footer__bottom">
<div class="site-footer__bottom-container">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="site-footer__bottom-inner">
                    <div class="site-footer__bottom-left">
                        <p class="site-footer__bottom-text">© All Copyright <span class="dynamic-year">
                            </span><!-- /.dynamic-year --> by <a href="index.html">Fusiontech Minds</a></p>
                    </div>
                    <div class="site-footer__bottom-right">
                        <ul class="list-unstyled site-footer__bottom-menu">
                            <li><a href="#">Disclaimer</a></li>
                            <li><span>/</span></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`

const mobileNavWrapper =` <div class="mobile-nav__overlay mobile-nav__toggler"></div>
<div class="mobile-nav__content">
    <span class="mobile-nav__close mobile-nav__toggler"><i class="fa fa-times"></i></span>
    <div class="logo-box">
        <a href="index.html" aria-label="logo image"><img src="assets/images/resources/footer-logo.png"
                width="155" alt="" /></a>
    </div>
    <div class="mobile-nav__container"></div>
    <ul class="mobile-nav__contact list-unstyled">
        <li>
            <i class="fa fa-envelope"></i>
            <a href="mailto:info@fusiontechminds.com">info@fusiontechminds.com</a>
        </li>
        <li>
            <i class="fa fa-phone-alt"></i>
            <a href="tel:+91 8008794349">+91 8008794349</a>
        </li>
    </ul>
    <div class="mobile-nav__top">
        <div class="mobile-nav__social">
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-facebook-square"></a>
            <a href="#" class="fab fa-linkedin"></a>
        </div>
    </div>
</div>`
header.innerHTML = headerContent;
footer.innerHTML = footerContent;
mobileWrapper.innerHTML = mobileNavWrapper;
if ($(".dynamic-year").length) {
    let date = new Date();
    $(".dynamic-year").html(date.getFullYear());
  }

  if ($(".main-menu__list").length && $(".mobile-nav__container").length) {
    let navContent = document.querySelector(".main-menu__list").outerHTML;
    let mobileNavContainer = document.querySelector(".mobile-nav__container");
    mobileNavContainer.innerHTML = navContent;
  }

  
  if ($(".mobile-nav__toggler").length) {
    $(".mobile-nav__toggler").on("click", function (e) {
      e.preventDefault();
      $(".mobile-nav__wrapper").toggleClass("expanded");
      $("body").toggleClass("locked");
    });
  }
