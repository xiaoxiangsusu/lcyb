const url = "";
export default {
	url: {
		/*首页*/
		index: "index.html",
		video: "video.html", //视频中心
		video_detail: "video_detail.html", //视频中心详情页
		exam: "exam.html", //考试中心
		exam_detail: "exam_detail.html", //考试中心详情页
		login: "login.html", //登录页面
		register: "register.html", //注册页面
		exam_score: "exam_score.html", //考卷成绩
		examination: "examination.html", //考卷成绩
		find_password: "find_password.html", //找回密码
		videoCenter_pay: "videoCenter_pay.html", //视频支付
		pay_success: "pay_success.html", //支付成功
		member_personalCenter: "member_personalCenter.html", //个人中心
		member_manageIntegral: "member_manageIntegral.html", //积分管理
		member_manageTrade: "member_manageTrade.html",
		member_myVideo: "member_myVideo.html",
		member_manageInformation: "member_manageInformation.html",
		member_myScore: "member_myScore.html",
		member_gatherErrors: "member_gatherErrors.html",
		member_myMessage: "member_myMessage.html",
    news:'news.html'//新闻详情
	},
	dataUrl:{

	},
	setSession(val) {
		sessionStorage.setItem('apply', JSON.stringify(val))
		return val
	},
	getSession() {
		let _city = JSON.parse(sessionStorage.getItem('apply'))
		return _city
	},
	getLocation() {
		let _city = Object.assign({}, JSON.parse(localStorage.getItem('location')))
		return _city
	},
	setLocation(val) {
		localStorage.setItem('location', JSON.stringify(val))
		return val
	},
	get_storage(name) {
		let _city = JSON.parse(localStorage.getItem(name))
		return _city
	},
	set_storage(name,val) {
		localStorage.setItem(name, JSON.stringify(val))
		return val
	},
	getRequest(str) {
		let url = ''
		if (str) {
			url = str
		} else {
			url = location.href;
		}
		let theRequest = new Object();
		let href = url.split('?')[0]
		if (url.indexOf("?") != -1) {
			str = url.substr(url.indexOf("?") + 1);
			let strs = str.split("&");
			for (var i = 0; i < strs.length; i++) {
				theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
			}
		}
		return {
			href: href,
			parms: theRequest
		};
	},
}
