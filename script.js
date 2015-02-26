(function(){

$(document).ready(function(){

	var menuHidden = true;
	var postHidden = true;

	var $menuButton = $('.menu-button');
	var $menu = $('.menu');
	var $menuItem = $('.menu-item');

	var $postButton = $('.post-button');
	var $post = $('.post');
	var $postSection = $('.post-section');
	var $inputLabel = $('.input-label');
	var $textInput = $('.text-input');
	var $radio = $('.radio');
	var $radioCircle = $('.radio-circle');
	var $radioDot = $('.radio-dot');

	var $content = $('.content');

	var openMenu = function(){
		$menu.css('left','0px');
		$menuItem.css('opacity','1');
		menuHidden = false;
	};
	var closeMenu = function(){
		$menuItem.css('opacity','0');
		$menu.css('left','-300px');
		menuHidden = true;
	};

	var openPost = function(){
		$post.css('top','364px');
		$postSection.css('opacity','1');
		postHidden = false;
	};
	var closePost = function(){
		$postSection.css('opacity','0');
		$post.css('top','64px');
		postHidden = true;
	};

	$menuButton.click(function(){
		if (menuHidden){
				openMenu();
				closePost();
		} else {
				closeMenu();
		}
	});

	$postButton.click(function(){
		if (postHidden){
				openPost();
				closeMenu();
		} else {
				closePost();
		}
	});
	
	$content.click(function(){
		if (!menuHidden) {
			closeMenu();
		}
		if (!postHidden) {
			closePost();
		}
	});

	$textInput.keydown(function(){
		var $thisLabel = $(this).prev();
		if ( !$(this).val() ){
			$thisLabel.css('opacity','1');
		}
	});
	$textInput.blur(function(){
		var $thisLabel = $(this).prev();
		if ( !$(this).val() ){
			$thisLabel.css('opacity','0');
		}
	});

	$radio.click(function(){
		var $thisInput = $(this).find('input');
		var $thisInputValue = $thisInput.attr('value');
		var $thisRadioCircle = $(this).find('.radio-circle');
		var $thisRadioDot = $thisRadioCircle.find('.radio-dot');
		$thisInput.prop('checked', true);
		$radioDot.css({
			'background-color':'#9E9E9E',
			'height':'0px',
			'width':'0px'
		});
		$radioCircle.css('border-color','#9E9E9E');
		$thisRadioDot.css({
			'background-color':'#2C9A47',
			'height':'8px',
			'width':'8px'
		});
		$thisRadioCircle.css('border-color','#2C9A47');
		
	});

});

})();