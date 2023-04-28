var $cartNotesFields = $('.section-gift-message .form-gift-wrap .field');
var $cartNote = $(".js-cdd-cart-form .cart-note");

$('.section-gift-message .section__head-choice input').on('change', function() {
  var $this = $(this);
  var $sectionOptions = $('.section-gift-message .section__body');

  if ($this.val() === 'show') {
    $sectionOptions.slideDown();
  } else {
    $sectionOptions.slideUp();
  }
});

$('input[name=gift-wrap]').on('click', function(){
  //$('#attributes-gift-wrap').val($('input[name=gift-wrap]:checked').val());
  $('#attributes-gift-wrap').val($(this).val());
});
$('#show-gift-wrap').on('click',function(){
  if($(this).is(':checked')){
    $('#attributes-gift-wrap-content').val($('#cart-attribute-gift').val());
	$('input[name=gift-wrap]').each(function(){
      if($(this).is(':checked')){
        $('#attributes-gift-wrap').val($(this).val());
      }
    });
  }else{
    $('#attributes-gift-wrap').val('');
    $('#attributes-gift-wrap-content').val('');
  }
});

$('#cart-attribute-gift').on('blur', function(){
  $('#attributes-gift-wrap-content').val($(this).val());
});

$cartNotesFields.on('blur', function() {
  var id = $(this).attr('id');
  $('#attributes-'+id).val($(this).val());
});
/* 
$cartNotesFields.on('keyup', function() {
  var currentNote = '';

  $cartNotesFields.each(function() {
    var $this = $(this);

    if ($this.val().length > 0) {
      currentNote += $this.val() + ' @ ';
    }
  });

  currentNote = currentNote.replace(/\s@\s$/, '');
  $cartNote.val(currentNote);
});
*/
//gift message content
$('.gift-message-content ').slideUp();
$('#show-gift-message').click(function(){
    if($(this).prop("checked") == true){
        $('.gift-message-content ').slideDown();
		$('#attributes-message').val('希望する');
        $('.form__row .field').each(function(){
          $('#attributes-'+$(this).attr('id')).val($(this).val());
        });
    }
    else if($(this).prop("checked") == false){
      $('.gift-message-content ').slideUp();
      $('#attributes-message').val('');
      $('.form__row .field').each(function(){
        //alert($(this).attr('id'));
        $('#attributes-'+$(this).attr('id')).val('');
      });
    }
});

$('#cart-note').on('blur', function(){
  $('input[name=note]').val($(this).val());
});

$(document).on("click", '.option-toggle', function (e) {
  e.preventDefault();
  var target = $(this).attr('href');
  $(target).slideToggle();
});

