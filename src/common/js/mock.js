import Mock from 'mockjs'

Mock.mock('http://g.cn', {
	middle: '@FIRST',
	last: '@LAST',
	full: '@first @middle @last'
});
Mock.mock('http://stone.com/video_list', {
	code: 200,
	data: [{
		'name': "科目",
		'list|3-10': [{
			'name': '@city'
		}]
	}, {
		'name': "专业",
		'list|3-20': [{
			'name': '@city'
		}]
	}, {
		'name': "科目",
		'list|3-10': [{
			'name': '@city'
		}]
	}, ]
});
/*首页*/
(function() {
	/*猜你喜欢*/
	Mock.mock('http://stone.com/index/guess', {
		code: 200,
		'data|5': [{
			'video_title': '@csentence(5)', //标题
			'video_price|100-2000.2': 1, //价格
			'video_num|+1': 1, //排序
			'video_click|1-1000': 100, //点击数量
			'video_msg|1-1000': 100, //消息数量
			'video_img': '../../zcommon/image/banner1.png',
			'video_imgs': "@image('300x200', '#FF6600')", //图
			'href_url': '@url', //链接
		}]
	});
	/*热门视频*/
	Mock.mock('http://stone.com/index/video', {
		code: 200,
		'data|5': [{
			'video_title': '@csentence(5)', //标题
			'video_price|100-2000.2': 1, //价格
			'video_num|+1': 1, //排序
			'video_click|1-1000': 100, //点击数量
			'video_msg|1-1000': 100, //消息数量
			'video_img': '../../zcommon/image/banner1.png',
			'video_imgs': "@image('300x200', '#FF6600')", //图
			'href_url': '@url', //链接
		}]
	});
	/*视频中心*/
	Mock.mock('http://stone.com/index/all_video', {
		code: 200,
		'data|24': [{
			'video_title': '@csentence(5)', //标题
			'video_price|100-2000.2': 1, //价格
			'video_num|+1': 1, //排序
			'video_click|1-1000': 100, //点击数量
			'video_msg|1-1000': 100, //消息数量
			'video_img': '../../zcommon/image/banner1.png',
			'video_imgs': "@image('300x200', '#FF6600')", //图
			'href_url': '@url', //链接
		}]
	});
	/*系统公告*/
	Mock.mock('http://stone.com/index/system_msg', {
		code: 200,
		'data|7': [{
			'index_msg': '@csentence', //标题
			'href_url': '@url', //链接
		}]
	});
	/*banner*/
	Mock.mock('http://stone.com/index/banner', {
		code: 200,
		'data': [{
			'banner': "@image('1200x400', '#FF6600')", //图片
			'href_url': '@url' //进入地址
		}]
	});
	/*广告*/
	Mock.mock('http://stone.com/index/banner', {
		code: 200,
		'data': [{
			'img': "@image('1900x100', '#FF6600')", //广告图片
			'href_url': '@url' //广告地址
		}]
	});
	/*index_list*/
	Mock.mock('http://stone.com/index/index_list', {
		code: 200,
		'data': [{
			'name': "培训类目",
			'index_img': "@image('224x460', '#FF6600')", //左边大图
			'list|8': [{
				'video_title': '@csentence(5)', //标题
				'video_price|100-2000.2': 1, //价格
				'video_num|+1': 1, //排序
				'video_click|1-1000': 100, //点击数量
				'video_msg|1-1000': 100, //消息数量
				'video_img': '../../zcommon/image/banner1.png',
				'video_imgs': "@image('300x200', '#FF6600')", //图
				'href_url': '@url', //链接
			}]
		}, {
			'name': "培训类目",
			'index_img': "@image('224x460', '#FF6600')",
			'list|8': [{
				'video_title': '@csentence(5)', //标题
				'video_price|100-2000.2': 1, //价格
				'video_num|+1': 1, //排序
				'video_click|1-1000': 100, //点击数量
				'video_msg|1-1000': 100, //消息数量
				'video_img': '../../zcommon/image/banner1.png',
				'video_imgs': "@image('300x200', '#FF6600')", //图
				'href_url': '@url', //链接
			}]
		}, {
			'name': "培训类目",
			'index_img': "@image('224x460', '#FF6600')",
			'list|8': [{
				'video_title': '@csentence(5)', //标题
				'video_price|100-2000.2': 1, //价格
				'video_num|+1': 1, //排序
				'video_click|1-1000': 100, //点击数量
				'video_msg|1-1000': 100, //消息数量
				'video_img': '../../zcommon/image/banner1.png',
				'video_imgs': "@image('300x200', '#FF6600')", //图
				'href_url': '@url', //链接
			}]
		}, ]
	});

})()

/*common*/
/*底部合作链接*/
Mock.mock('http://stone.com/index/footer_list', {
	code: 200,
	'data': {
		'href_list|4-16': [{
			'href_name': '@city', //名字
			'href_url': '@url' //url
		}],
		'call_list|2': [{
			'call_num': '@date' //电话
		}]
	}
});
/*登录*/
Mock.mock('http://stone.com/logoin', {
	code: 200,
	'data': '@word(15, 16)'
});
(() => {
	/*个人中心*/
	Mock.mock('http://stone.com/member/member_center', {
		code: 200,
		'data': {
			'member_img': "@image('141x130', '#4A7BF7')", //头像
			'member_name': '@cname', //注册名字
			'reg_time': '@date()', //注册时间
			'member_email': '@email', //邮箱
			'member_department': '项目事业部', //部门
			'member_phone': '18583671750', //电话
			'member_regname': '@cname', //职称
			'member_grade': '用户组', //用户组
			'member_integral|1-100': 100, //积分
			'member_situation': '内容显示', //持证情况
		}
	});
	/*我的专业 观看记录 我的视频 观看记录*/
	Mock.mock('http://stone.com/member/member_video', {
		code: 200,
		'data|6': [{
			'video_title': '@csentence(5)', //标题
			'video_price|100-2000.2': 1, //价格
			'video_num|+1': 1, //排序
			'video_click|1-1000': 100, //点击数量
			'video_msg|1-1000': 100, //消息数量
			'video_img': '../../common/image/member_video.png',
			'video_imgs': "@image('224x160', '#FF6600')", //图
			'href_url': '@url', //链接
		}]
	});
	/*我的积分*/
	Mock.mock('http://stone.com/member/member_integral', {
		code: 200,
		'data': {
			'member_integral|1-100': 100, //积分数量
			'list|8': [{
				'integral_time': '@date()', //日期
				'integral_change|1-1000': 100, //积分变更
				'is_change|0-1': 1, //减少还是增加 1是增加 0是减少
				'describe': '观看视频', //减少还是增加 1是增加 0是减少
			}]
		}
	});
	/*视频订单  */
	Mock.mock('http://stone.com/member/vide_order', {
		code: 200,
		'data|8': [{
			'order_time': '@date()', //日期
			'describe': 'VIP视频专享',
			'video_imgs': "@image('90x50', '@color')",//img
			'video_title': "PS基础入门教学视频教学视频",//名字
			'video_order': "@id",//订单号
			'video_price|100-2000.2': 1, //价格
		}]
	});
	/*积分订单  */
	Mock.mock('http://stone.com/member/integral_order', {
		code: 200,
		'data|8': [{
			'order_time': '@date()', //日期
			'describe': 'VIP视频专享',
			'video_imgs': "@image('90x50', '@color')",//img
			'video_title': "PS基础入门教学视频教学视频",//名字
			'video_order': "@id",//订单号
			'video_integral|100-2000': 1, //价格
		}]
	});
	/*我的评价  */
	Mock.mock('http://stone.com/member/my_assessment', {
		code: 200,
		'data|8': [{
			'assessment_time': '16小时前', //日期
			'member_name': '@cname', //名字
			'describe': 'VIP视频专享',
			'video_imgs': "@image('90x50', '@color')",//img
			'assessment_comment': "PS基础入门教学PS基础入门教学视频教学视频PS基础入门教学视频教学视频视频教学视频",//名字
			'video_order': "@id",//订单号
			'video_integral|100-2000': 1, //价格
			'video_click|1-1000': 100, //点击数量
			'video_msg|1-1000': 100, //消息数量
			'member_img': "@image('160x160', '#4A7BF7')", //头像
		}]
	});
	/*我的消息*/
	Mock.mock('http://stone.com/member/my_msg', {
		code: 200,
		'data|9': [{
			'msg_time':'@date()',//时间
			'msg_title':'内容显示内容显示',//标题
			'msg_content':'内容显示内容显示',//内容
			'msg_is|0-1':1,//是否发送收条 0为 未发送 1为发送
		}]
	});

})()

Mock.mock('http://stone.com/member/examination_list', {
		code: 200,
		'data|10-30': [{
			'examination_subject':'@cparagraph',//题目
			'examination_select|4':[{
				'exmain_id|+1':1,
				'exmain_option':'@csentence(5)',

			}],//选项
			'examination_answer':'',//
			'examination_1|0-1':1,//
		}]
	});

export default {

}
