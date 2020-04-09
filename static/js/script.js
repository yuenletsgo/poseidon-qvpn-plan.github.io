$('.flex .info ul li').on('click', function(){
	$(this).find('.p').slideToggle( "slow" );
	$(this).siblings().find('.p').slideUp( "slow" );
});

var interval;

function countdown() {
  clearInterval(interval);
  interval = setInterval( function() {
      var seconds = $('#invalid span').html();
      seconds -= 1;
      $('#invalid span').html(seconds);

      if (seconds == 0){
        $('#invalid').html("Regenerate QR code.");
      }
  }, 1000);
}

$('.price-table ul li').on('click', function(){
	$('#pay').removeClass('hide');
	$('#pay').addClass('pop-active');
	$('#pop-bg').removeClass('hide');
	$('#pop-bg').fadeIn();
	$('#pay h4 span').html($(this).find('h4').html() + ' / ' + $(this).find('h5').html() )
	$('#invalid span').text("60");
  countdown();
  if($('#invalid').html("Regenerate QR code.")) {
    $('#invalid').html("invalid in <span>60</span>s");
    countdown();
  }
});

$('#pop-bg').on('click',function(){
	$('#pay').addClass('hide');
	$('#invalid span').text("60");
	clearInterval(interval);
	if($('#pay').hasClass('pop-active')) {
		$('#pop-bg').addClass('hide');
	} else if($('#loading').hasClass('loading')) {
		alert('Item purchasing, Please don`t close the window.')
	} else if ($('#done').hasClass('show')) {
		$('#done').removeClass('show');
		$('#done').addClass('hide');
		$('#close').addClass('hide');
		$('#pop-bg').addClass('hide');
	}
})
$('#pay').on('click',function(){
	$('#pay').addClass('hide');
	$('#pay').removeClass('pop-active');
	$('#loading').removeClass('hide');
	$('#loading').addClass('loading');
});

$('#loading').on('click',function(){
	$('#loading').addClass('hide');
	$('#loading').removeClass('loading');
	$('#done').removeClass('hide');
	$('#done').addClass('show');
	$('#close').removeClass('hide');
});
$('#close').on('click',function(){
	$('#done').addClass('hide');
	$('#close').addClass('hide');
	$('#pop-bg').addClass('hide');
});

$(window).resize(function() {
  if ($(window).width() < 768) {
		$('.price-table ul li').on('click', function(){
			$('#loading').removeClass('hide');
			$('#loading').addClass('pop-active');
			$('#pop-bg').removeClass('hide');
			$('#pop-bg').fadeIn();
		});
		$('#pop-bg').on('click',function(){
			$('#loading').addClass('hide');
			$('#loading').removeClass('pop-active');
			$('#pop-bg').addClass('hide');
		})
	}
});
AOS.init();
