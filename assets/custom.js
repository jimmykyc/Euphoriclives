$(document).ready(function(){

  jQuery(".menu-btn").click(function(){jQuery(this).siblings(".menu").fadeToggle();});
  jQuery("li.has-dropdown").click(function(){jQuery(this).children(".dropdown-menu").fadeToggle();});
  $(".copy-add-btn").click(function(){
    var copyText = $("input.text");
    copyText.select();
    document.execCommand("copy");
  });

  jQuery.fn.isInViewport = function() {
  var elementTop = jQuery(this).offset().top;
  var elementBottom = elementTop + jQuery(this).outerHeight();

  var viewportTop = jQuery(window).scrollTop();
  var viewportBottom = viewportTop + jQuery(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  jQuery(window).on('resize scroll', function() {
    jQuery('.has-animation').each(function() {
      if (jQuery(this).isInViewport()) {
        jQuery(this).addClass('active');
      } else {
        jQuery(this).removeClass('active');
      }
    });
  });

  $('.dog-partners-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $('.why-us-dog-coin-row2').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  var button = document.getElementById("addNetwork");
button.addEventListener("click",function(e){
     if(window.ethereum) {
               
        window.ethereum.request({method: 'eth_requestAccounts'})
        window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{chainId: '0x45d',
                chainName: "Dogcoin Mainnet",
                nativeCurrency: {
                name: "Dogcoin",
                symbol: "DOGS",
                decimals: 18
                },
                rpcUrls: ['https://mainnet-rpc.dogcoin.me'],     blockExplorerUrls: ['https://explorer.dogcoin.network/']                    
            }]
        })
            
      }
},false);

});

function copyToClipboard(element){var $temp=$("<input>");$("body").append($temp);$temp.val($(element).html()).select();document.execCommand("copy");$temp.remove();}
