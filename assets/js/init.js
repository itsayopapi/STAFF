$(function() {
    // Fetch the config.json file
    $.getJSON("./config.json").then(function(config) {
        // Update the href attributes of anchor tags
        $("a[data-shop-href]").each(function(i, e) {
            var url = config.shopUrl;
            e.href = url + $(e).data('shop-href');
        });

        // Update the action attributes of forms
        $("form[data-shop-action]").each(function(i, e) {
            var url = config.shopUrl;
            e.action = url + $(e).data('shop-action');
        });
    });

    $(document).ready(function(){
        /*=========== Tab Js ===========*/
        try {
          $(".tab__btn").click(function () {
            const tabId = $(this).data("tab");
            $(".tab__btn").removeClass("active");
            $(this).addClass("active");
            $(".tab__content").removeClass("open").hide();
            $("#" + tabId)
              .addClass("open")
              .show();
          });
          $('.tab__btn[data-tab="tab1"]').click();
        } catch (error) {
          console.error("Tab Button not enable this page", error);
        }

        // PRICING-TABLE-TAB
        try {
          $(".tab__price").click(function () {
            const tabId = $(this).data("tab");
            $(".tab__price").removeClass("active");
            $(this).addClass("active");
            $(".price__content").removeClass("open").hide();
            $("#" + tabId)
              .addClass("open")
              .show();
          });
          $('.tab__price[data-tab="tab1"]').click();
        } catch (error) {
          console.error("Tab Button not enable this page", error);
        }       
        
        // PRICING-TABLE-TAB
        try {
          $(".tab__affiliate").click(function () {
            const tabId = $(this).data("tab");
            $(".tab__affiliate").removeClass("active");
            $(this).addClass("active");
            $(".affiliate__content").removeClass("open").hide();
            $("#" + tabId)
              .addClass("open")
              .show();
          });
          $('.tab__affiliate[data-tab="tab1"]').click();
        } catch (error) {
          console.error("Tab Button not enable this page", error);
        }
    })
    
    // BOOTSTRAP TOOLTIPS
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    // PRICING FEATURE SHOW HIDE
    try {
      $(document).ready(function () {
        $(".card-plan__feature--list-trigered").click(function () {
          $('.card-plan__feature--list-trigered').toggleClass('active').animate(100);
          $(".card-plan__feature--list.more__feature").slideToggle();
          $(".card-plan__feature--list.more__feature").css({
            display: "flex",
            marginTop: "25px"
          });
        });
      });
    } catch (error) {
      console.log('Feature show hide js code not working this page')
    }
   
  
  })(jQuery, window)

