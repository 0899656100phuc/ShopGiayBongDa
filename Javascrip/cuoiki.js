new WOW().init();

$(document).ready(function () {
	$('.list').click(function () {
	  const value = $(this).attr('data-filter');
	  if (value == 'all') {
		$('.itemBox').show('1000');
	  }
	  else {
		$('.itemBox').not('.' + value).hide('1000');
		$('.itemBox').filter('.' + value).show('1000');
	  }
	})
  })


/* chọn hình click */
var ProductImg = document.getElementById("product-img");
var SmallImg = document.getElementsByClassName("small-img");
SmallImg[0].onclick=function()
{
	ProductImg.src=SmallImg[0].src;
}
SmallImg[1].onclick=function()
{
	ProductImg.src=SmallImg[1].src;
}
SmallImg[2].onclick=function()
{
	ProductImg.src=SmallImg[2].src;
}
SmallImg[3].onclick=function()
{
	ProductImg.src=SmallImg[3].src;
}
SmallImg[4].onclick=function()
{
	ProductImg.src=SmallImg[4].src;
}
/* end chọn hình clink */

/* xem thêm */
$(document).ready(function(){
  $("button").click(function(){
    $(".details").toggle();
  });
});
/* end xem thêm */

/* back to Top */
$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop())
		{
			$("#backtop").fadeIn();
		}
		else{
			$("#backtop").fadeOut();
		}
	})
})
/* end backtop to top*/
  
/* QL form */
$(document).ready(function(){
	$("#form-contact").validate({
		rules:{
			"noiDung":{
				minlength:20
			},
			"Email":{
				required:true
			}
		},
		messages:{
			"noiDung":{
				minlength:"hãy nhập ít nhất 20 ký tự"
			},
			"Email":{
				required: "vui lòng nhập đúng định dạng "
			},
		}
	})
})
/* end QL form */

$(document).ready(function(){
	$("button").click(function(){
	$(".details").toggle();
  });
});