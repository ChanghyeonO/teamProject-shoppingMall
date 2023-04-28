let $doc = $(document);
let $win = $(window);

let scrollTop = 0;

$('.membership-popup').magnificPopup({
  type: 'inline',
  mainClass: 'membership-popup'
});

$('.popup-membership .btn-close').on('click', function(e) {
  e.preventDefault();

  $.magnificPopup.close();
});

// Show/hide gift-wrap section

$('.section-gift-wrap .section__checkbox input').on('change', function() {
  var $this = $(this);
  var $sectionMain = $this.closest('.section-gift-wrap').find('.section__main');

  if ($this.prop('checked')) {
    $sectionMain.slideDown();
  } else {
    $sectionMain.slideUp();
  }
});

// Cart gift wrapping attribute

$('#cart-attribute-gift').on('keyup', function() {
  var $this = $(this);
  var $cartGiftWrap = $(".js-cdd-cart-form .cart-gift-wrap");

  $cartGiftWrap.val($this.val());
});

// Add gift-wrap product to cart

$('.section-gift-wrap .link-gift-wrap').on('click', function(e) {
  e.preventDefault();

  var $this = $(this);
  var variantId = $this
    .closest('.section-gift-wrap')
    .find('.list-radios input:checked')
    .data('value');

  $.ajax({
    url: '/cart/add.js',
    type: 'post',
    dataType: 'json',
    data: {
      quantity: 1,
      id: variantId
    }
  })
    .done(function() {
      $.ajax({
        url: '/cart'
      }).done(function(data) {
        var $data = $(data);
        $('.section-cart').html($data.find('.section-cart').html());
      });
    })
    .fail(function(error) {
      console.log('error');
    });
});


// $('.section-silicone .field--name-input').on('keyup', function() {
//   var $this = $(this);
//   var $nameField = $this.closest('.form__row').find('.field--name');

//   $('.section-silicone .field--name-input').each(function() {
//     if ($this.hasClass('first')) {
//       firstName = $this.val();
//     } else {
//       lastName = $this.val();
//     }
//   });

//   $nameField.val(firstName + ' ' + lastName);
// });

// silicone form non-phonetic name fields
var firstName = '';
var lastName = '';
$('.section-silicone .field--name-input-name').on('input', function() {
  var $this = $(this);
  var $nameField = $this.closest('.form__row-name').find('.field--name');

    if ($this.hasClass('first')) {
      firstName = $this.val();
    } else {
      lastName = $this.val();
    }

  $nameField.val(firstName + ' ' + lastName);
});

// silicone form phonetic name fields
var firstNamePhonetic = '';
var lastNamePhonetic = '';
$('.section-silicone .field--name-input-phonetic').on('input', function() {
  var $this = $(this);
  var $nameField = $this.closest('.form__row-phonetic').find('.field--name');

    if ($this.hasClass('first')) {
      firstNamePhonetic = $this.val();
    } else {
      lastNamePhonetic = $this.val();
    }

  $nameField.val(firstNamePhonetic + ' ' + lastNamePhonetic);
});

// end silicone form name fields 

$doc.on('click', '.section-silicone .btn--submit', function(e) {
  e.preventDefault();

  var $this = $(this);
  $this.closest('form').trigger('submit');
});

function updateFields($this, $form) {
  $form.find('.form__row').addClass('js-hide');
  $form.find('[data-required="true"]').removeClass('form__row--required');
  if ($this.hasClass('form-product')) {
    $form.find('.form__row.form__select, .field-one').removeClass('js-hide');
    $form
      .find('.field-one[data-required="true"]')
      .addClass('form__row--required');
  } else if ($this.hasClass('form-shopping')) {
    $form.find('.form__row.form__select, .field-two').removeClass('js-hide');
    $form
      .find('.field-two[data-required="true"]')
      .addClass('form__row--required');
  } else if ($this.hasClass('form-press')) {
    $form.find('.form__row.form__select, .field-three').removeClass('js-hide');
    $form
      .find('.field-three[data-required="true"]')
      .addClass('form__row--required');
  } else if ($this.hasClass('form-business')) {
    $form.find('.form__row.form__select, .field-four').removeClass('js-hide');
    $form
      .find('.field-four[data-required="true"]')
      .addClass('form__row--required');
  }
}

$win.on('scroll resize orientationchange', function() {
  scrollTop = $win.scrollTop();
});

$doc.ready(function() {
  updateFields(
    $('#contact_form input[name="contact[inquiry]"]'),
    $('#contact_form')
  );

  $('.checkbox-radio input').on('change', function() {
    const $this = $(this);
    const $form = $(this).closest('form');
    $form.find('.checkbox-radio input').prop('checked', false);
    $this.prop('checked', true);
    updateFields($this, $form);
  });
});

$doc
  .on('change', '.product--single .product__quantity input', function() {
    quantityCheck();
  })
  .on('click', '.quantity-controls .btn', function() {
    quantityUpdate($(this));
    quantityCheck();
    ajaxUpdateToCart();
  })
  .on('change', '.swatch__element input', function() {
    swatchToggle($(this));
    quantityCheck();
  })
  /* submit 될 때 걸려서 주석처리 JJR 2020-03-17
  .on('submit', 'form[action="/cart/add"]', function(e) {
    e.preventDefault();
    ajaxAddToCart($(this));

    let $popup = $(this).find('.form__popup');

    $popup.toggleClass('popup-bottom', $popup.offset().top - scrollTop < 300);
  })
  */
  .on('click', '.close-popup', function(e) {
    e.preventDefault();
    $('.form__popup-success').removeClass('popup-expanded');
  });

function quantityCheck() {
  let $input = $('.swatch__element input:checked');
  let id = $input.data('id');
  let quantity = Number($input.data('quantity'));
  let val = Number($('#product-quantity').val());

  $.ajax({
    type: 'GET',
    url: '/cart.js',
    dataType: 'json',
    success: function(response) {
      let items = response.items;
      let $btnSubmit = $('form[action="/cart/add"]').find('.btn-submit');
      let $btnLimited = $('form[action="/cart/add"]').find('.btn-limited');
      let $btnSoldOut = $('form[action="/cart/add"]').find('.btn-sold-out');
      let flag = false;

      $('.form__popup-error').removeClass('popup-expanded');

      for (var i = 0; i < items.length; i++) {
        if (
          items[i].id == id &&
          Number(items[i].quantity) + val > quantity &&
          quantity > 0
        ) {
          $('.form__popup-error .product-quantity').text(quantity);
          $btnLimited.removeClass('hide');
          $btnSubmit.addClass('hide');
          $btnSoldOut.addClass('hide');
          $('.form__popup-error').addClass('popup-expanded');

          flag = true;
        }
      }

      if (!flag && val > quantity && quantity > 0) {
        $('.form__popup-error .product-quantity').text(quantity);
        $btnLimited.removeClass('hide');
        $btnSubmit.addClass('hide');
        $btnSoldOut.addClass('hide');
        $('.form__popup-error').addClass('popup-expanded');
      } else if (!flag && val <= quantity && quantity > 0) {
        $btnLimited.addClass('hide');
        $btnSubmit.removeClass('hide');
      }

      setTimeout(function() {
        $('.form__popup-error').removeClass('popup-expanded');
      }, 5000);
    },
    error: function(data) {
      console.log('error');
    }
  });
}

function ajaxCartUpdate($serializeForm) {
  $.ajax({
    url: '/cart/update.js',
    dataType: 'json',
    data: $serializeForm,
    success: function(data) {
      updateCount(data);
      updateCartWrapper(data, false);
    },
    error: function(data) {
      console.log('error: ' + data);
    }
  });
}

var ajaxUpdateToCart = function() {
  let $serializeForm = $('form[action="/cart"]').serialize();

  $.ajax({
    url: '/cart/update.js',
    dataType: 'json',
    data: $serializeForm
  });
};

var ajaxAddToCart = function($form) {
  var serializeForm = $form.serialize();

  $.ajax({
    type: 'POST',
    url: '/cart/add',
    // dataType: 'html',
    data: serializeForm,
    success: function(response) {
      $('.form__popup-success').addClass('popup-expanded');
      $('body').removeClass('loading');
    },
    error: function(data) {
      $('.form__popup-success').removeClass('popup-expanded');

      var $form = $('form[action="/cart/add"]');
      var $btnSubmit = $form.find('.btn-submit');
      var $btnLimited = $form.find('.btn-limited');
      var $selectedOption = $('.swatch .swatch__element input:checked');
      var inventory = $selectedOption.data('quantity');

      $('.form__popup-error')
        .find('span.product-quantity')
        .text(inventory);
      $('.form__popup-error').addClass('popup-expanded');

      $selectedOption.data('available', false);

      $btnSubmit.addClass('hide');
      $btnLimited.removeClass('hide');

      setTimeout(function() {
        $('.form__popup-error').removeClass('popup-expanded');
      }, 5000);
    }
  });
};

function slider_products($slider, dots, arrows, slidesToShow) {

  if ($slider.length > 0) {
    let $slides = $slider.find('.slider__slides');
    let fade = true;

    if (dots == undefined) {
      dots = false;
    }

    if (arrows == undefined) {
      arrows = false;
    }

    if (slidesToShow == undefined) {
      slidesToShow = 1;
    }

    if (slidesToShow > 1) {
      fade = false;
    }

    $slides.slick({
      dots: dots,
      arrows: arrows,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      speed: 1000,
      centerMode: false,
      variableWidth: false,
      adaptiveHeight: false,
      fade: fade,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
}

function swatchToggle($input) {
  var $form = $input.closest('form[action="/cart/add"]');
  var $btnSubmit = $form.find('.btn-submit');
  var $btnSoldOut = $form.find('.btn-sold-out');
  var $isAvailable = $form.find('.is_available');
  var elementIsAvailable = $input.data('available');
  var max = $input.data('max');

  $isAvailable.toggleClass('hide', elementIsAvailable);
  $btnSubmit.toggleClass('hide', !elementIsAvailable);
  $btnSoldOut.toggleClass('hide', elementIsAvailable);
}

function quantityUpdate($this) {
  let $quantity = $this.closest('.quantity-controls');
  let $plus = $quantity.find('.plus');
  let $input = $quantity.find('input.qty');
  let min = parseInt($input.attr('min'));
  let max = parseInt($input.attr('max'));
  let $label = $quantity.find('span.qty');
  let val = parseInt($input.val());
  let step = parseInt($this.data('step'));

  if (val + step <= min) {
    val = min;
  } else if (val + step >= max) {
    val = max;
  } else {
    val += step;
  }

  $input.val(val).change();
  $label.text(val);

  if (val == 0) {
    $this.closest('tr').slideUp();
  }

  if (val == max) {
    $plus.addClass('disabled');
  } else {
    $plus.removeClass('disabled');
  }
}

// Register form
/*
let selects = [
  'customer[occupation]',
  'customer[birthday_day]',
  'customer[birthday_month]',
  'customer[addresses][][province]',
  'customer[birthday_year]'
];

for (var i = 0; i < selects.length; i++) {
  const targetNode = document.getElementsByName(selects[i]);
  let name = selects[i];

  // Options for the observer (which mutations to observe)
  const config = { childList: true, subtree: true };

  // Callback function to execute when mutations are observed
  const callback = function(mutationsList, observer) {
    let options = $('.fields select[name="' + name + '"]').html();
    $(options).appendTo($('.form__row select[name="' + name + '"]'));
    observer.disconnect();
  };

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(document.getElementById('fields'), config);
}

const $input = $('input[name="customer[zip]"]');

$doc
  .on(
    'change',
    '.form-register input:not([type="radio"]), .form-register textarea, .form-register select',
    function() {
      let $this = $(this);
      let name = $this.data('name');
      let value = $this.val();

      $('[name="' + name + '"]').val(value);
    }
  )
  .on('change', '.form-register input[type="radio"]', function() {
    const $this = $(this);
    let value = $this.data('value');

    $('.form__content--info input[name="' + $this.attr('name') + '"]').val(
      $this.next().text()
    );
    $('input[value="' + value + '"]').trigger('click');
  })
  .on(
    'change keyup',
    'input[name="customer[first_name]"], input[name="customer[last_name]"]',

    function() {
      let value =
        $('input[name="customer[last_name]"]').val() +
        ' ' +
        $('input[name="customer[first_name]"]').val();

      $('input[name="customer[name]').val(value);
    }
  )
  .on(
    'change keyup',
    'input[name="customer[addresses][][phone1]"], input[name="customer[addresses][][phone2]"], input[name="customer[addresses][][phone3]"]',

    function() {
      let value =
        $('input[name="customer[addresses][][phone1]"]').val() +
        '-' +
        $('input[name="customer[addresses][][phone2]"]').val() +
        '-' +
        $('input[name="customer[addresses][][phone3]"]').val();

      $('input[name="customer[addresses][][phone]').val(value);
    }
  )
  .on(
    'change keyup',
    'input[name="customer[first_name_phonetic]"], input[name="customer[last_name_phonetic]"]',
    function() {
      let value =
        $('input[name="customer[last_name_phonetic]"]').val() +
        ' ' +
        $('input[name="customer[first_name_phonetic]"]').val();

      $('input[name="customer[name_phonetic]').val(value);
    }
  )
  .on(
    'change keyup',
    'input[name="customer[zip1]"], input[name="customer[zip2]"]',
    function() {
      let value =
        $('input[name="customer[zip1]"]').val() +
        '-' +
        $('input[name="customer[zip2]"]').val();

      $('input[name="customer[zip]"]').val(value);
      $('input[name="customer[addresses][][zip]"]').val(value);
    }
  )
  .on('click', '.btn--next, .btn--back', function(e) {
    e.preventDefault();
    let email =
      $('.form__row--email input[name="customer[email]"]').val() ||
      $('.form__row--email input[name="contact[email]"]').val();
    let email_confirmation =
      $('.form__row--email input[name="customer[email_confirmation]"]').val() ||
      $('.form__row--email #field-email_confirmation').val();
    let password = $(
      '.form__row--password input[name="customer[password]"]'
    ).val();
    let password_confirmation = $(
      '.form__row--password input[name="customer[password_confirmation]"]'
    ).val();

    $('.form__row--required input, .form__row--required select').each(
      function() {
        if ($(this).val() == '') {
          $(this)
            .closest('.form__row')
            .addClass('form__row--error');
        } else {
          $(this)
            .closest('.form__row')
            .removeClass('form__row--error');
        }
      }
    );

    if (email != email_confirmation) {
      $('.form__row--email').addClass('form__row--error');
    }

    if (password != password_confirmation) {
      $('.form__row--password').addClass('form__row--error');
    }

    if (
      $(
        '.form-register .form__content:not(.form__content--info) .form__row--error'
      ).length == 0
    ) {
      $('.form__content, .form-footer').toggle();
    }
      $(window).scrollTop(0);
  });
*/
function getObjData(place, string) {
  return place.address_components.filter(function(item) {
    return item.types.indexOf(string) >= 0;
  });
}

function setData($ele, data, append) {
  if (!append) {
    append = false;
  }

  if (data.length) {
    $ele.each(function() {
      if (append) {
        let currentVal = $(this).val() + ' ';
        $(this)
          .val(currentVal + data[0].long_name)
          .trigger('change keyup');
      } else {
        $(this)
          .val(data[0].long_name)
          .trigger('change keyup');
      }
    });
  }
}

function noResults($parent) {
  const dataNoresults = $parent.data('no-results');
  $parent.find('.no-results').remove();
  $parent.append('<p class="no-results">' + dataNoresults + '</p>');
}

// $(
//   '.form__row input[name="customer[addresses][][zip]"], .form__row input[name="contact[zip code]"]'
// ).each(function() {
//   const $this = $(this);

//   const options = {
//     types: ['geocode'],
//     componentRestrictions: { country: 'jp' }
//   };

//   $('.form__row input[name="customer[addresses][][zip]"]').on(
//     'change',
//     function(event) {
//       if (event.keyCode === 13) {
//         event.preventDefault();
//       }
//     }
//   );

//   let autocomplete = new google.maps.places.Autocomplete($this[0], options);

//   autocomplete.addListener('place_changed', function() {
//     const place = autocomplete.getPlace();
//     const $form = $this.closest('form');

//     var $prefecture = $form.find('input[name*="[province]"]');
//     var $address1 = $form.find(
//       'input[name*="customer[addresses][][address1]"]'
//     );
//     var $addressClone = $form.find('#field-zip-cloned');
//     var $siliconePrefecture = $form.find(
//       'input[data-name="contact[prefecture]"]'
//     );
//     var $siliconeAddress = $form.find('input[data-name="contact[address1]"]');

//     const prefectureData = getObjData(place, 'administrative_area_level_1');
//     const addressData = getObjData(place, 'locality');
//     const addressDataSublocality = getObjData(place, 'sublocality');
//     const postAddress = getObjData(place, 'postal_code');

//     setData($prefecture, prefectureData);
//     setData($address1, addressData);
//     setData($address1, addressDataSublocality, true);
//     setData($addressClone, postAddress);
//     setData($this, postAddress);

//     if ($siliconePrefecture.length) {
//       setData($siliconePrefecture, prefectureData);
//     }

//     if ($siliconeAddress.length) {
//       setData($siliconeAddress, addressData);
//       setData($siliconeAddress, addressDataSublocality, true);
//     }

//     $prefecture.on('change', function() {
//       $(this).val();
//     });

//     $address1.on('change', function() {
//       $(this).val();
//     });

//     setTimeout(function() {
//       $this
//         .closest('.form__controls')
//         .find('.no-results')
//         .remove();
//     }, 100);
//   });

//   $doc.on('click', '.btn-auto-fill', function(event) {
//     const $parent = $this.closest('.form__controls');
//     if ($('.pac-container:visible').length) {
//       $parent.find('.no-results').remove();
//     } else {
//       noResults($parent);
//     }
//   });
// });

// setTimeout(function() {
//   $('.js-stop-autofill').each(function(item) {
//     $(this).attr('autocomplete', 'whatever');
//   });
// }, 1000);

// Silicone form update phone

var $phoneFields = $('.section-silicone .field--phone');

$phoneFields.on('keyup', function() {
  var $this = $(this);
  var $phoneField = $this.closest('.form__row').find('.final-phone');
  var currentPhone = '';

  $phoneFields.each(function() {
    var $field = $(this);

    if ($field.val().length > 0) {
      currentPhone += $field.val() + '-';
    }
  });

  currentPhone = currentPhone.substring(0, currentPhone.length - 1);

  $phoneField.val(currentPhone);
});

$doc.on('click', '.btn--silicone-next', function(e) {
  e.preventDefault();

  $('.section-silicone .form__row select').each(function() {
    var $this = $(this);
    var $field = $(
      '.section-silicone .form__content--info input[data-name="' +
        $this.attr('name') +
        '"]'
    );

    $field.val($this.find('option:selected').text());
  });

  $(
    '.section-silicone .form__row input, .section-silicone .form__row textarea'
  ).each(function() {
    var $this = $(this);

    var $field = $(
      '.section-silicone .form__content--info input[data-name="' +
        $this.attr('name') +
        '"]'
    );

    $field.val($this.val());
  });

  var email = $('.form__row--email input[name="contact[email]"]').val();
  var email_confirmation = $(
    '.form__row--email #field-email_confirmation'
  ).val();

  $('.form__row--required input, .form__row--required select').each(function() {
    if ($(this).val() == '') {
      $(this)
        .closest('.form__row')
        .addClass('form__row--error');
    } else {
      $(this)
        .closest('.form__row')
        .removeClass('form__row--error');
    }
  });

  if (email != email_confirmation) {
    $('.form__row--email').addClass('form__row--error');
  }

  if (
    $(
      '.form-register .form__content:not(.form__content--info) .form__row--error'
    ).length == 0
  ) {
    console.log(1);
    $('.form__content, .form-footer').toggle();
  }
  $(window).scrollTop(0);
});

// Subscribe to Klaviyo when register

var klaviyoFormFlag = false;

$doc.on('submit', '#create_customer', function(e) {
  var $this = $(this);
  var $newsletterOption = $this.find(
    'input[name="customer[sign_up_marketing]-cloned"]:checked'
  );

  if (
    !klaviyoFormFlag &&
    $newsletterOption.data('subscribe_to_klaviyo') === 'yes'
  ) {
    e.preventDefault();
    var $klavForm = $('#email_signup');

    $klavForm
      .find('[name="email"]')
      .val($this.find('[name="customer[email]"]').val());

    $.ajax({
      url: $klavForm.data('ajax-submit'),
      type: 'POST',
      data: $klavForm.serialize()
    }).done(function() {
      klaviyoFormFlag = true;

      $this.trigger('submit');
    });
  }
});
