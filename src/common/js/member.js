import $ from 'jquery'

$(function(){
	// 会员中心   tabs切换
	$(".member_contaniner .member_right ul.tabs_personal li.tabs_nav").on("click",function(){
		$(".member_contaniner .member_right ul.tabs_personal li").removeClass("active");
		$(this).addClass("active");
		if($(this).index() != 0){
			$(".member_contaniner .member_right ul.tabs_personal li.tabs_nav:eq(0)").css("cssText","border-left:1px solid #eee;");
		};
		// if($(this).index() == 1){
		// 	$('#myscore_list_old').css("cssText","display:block");
		// 	$(".myscore_skin_list").css("cssText","display:none");
		// };
        var index=$(this).index();
        $(".member_contaniner .member_right .tabs").removeClass("active");
        $(".tabs_personal_banner_"+index).addClass("active");
	});

	// 会员中心--资料管理
	$("#modify_personCode .key_img,#lcyb_register .key_img,#lcyb_login .key_img").on("click",function(){
		$(this).siblings("input").focus();
	});

	// 会员中心--我的分数
	$(".member_right #myscore_list_old .myscore_list .check").on("click",function(){
		var score_row_index = $(this).parents('#myscore_list_old .myscore_list tr').index();
		$(this).parents('#myscore_list_old').css("cssText","display:none");
		$("#check_score_detail").css("cssText","display:block");

		// 获取对应点击行row的编号,再去出发ajax请求相应数据填充在‘#check_score_detail’的表格里面,请求前先清空数据。
		console.log(score_row_index);
	});
	$("#check_score_detail .score_detail_back_btn").on("click",function(){
		$(this).parent('#check_score_detail').css("cssText","display:none").prev('#myscore_list_old').css("cssText","display:block")
	});
});
