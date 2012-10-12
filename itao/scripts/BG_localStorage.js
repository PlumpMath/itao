﻿//用户管理localstorage存储信息

//这边更改后，需要到BG_main里面的initDB里面做相应的更改
var db = (function(){
	return {
		savedUser:function(){return localStorage['savedLoginUser']},   	//保存的登录名，可以是nick，可以使手机，可以是邮箱。
		savedUserPwd:function(){return localStorage['savedLoginPwd']},		//保存的用户密码
		savedUserNick:function(){return localStorage['savedUserNick']},   //保存的用户名的昵称
		
		currentUserNick:function(){return localStorage['currentLoginUser']},	//当前登录的用户名
		currentUserCoin:function(){return localStorage['currentLoginUser']},	//当前登录用户的淘金币个数
		
		prevUserNick:function(){return localStorage['prevLoginUser']},			//上一次登录的用户名，需要用这个判断是否自动登陆
		hasCurrentUserGot:function(){return localStorage['hasCurrentUserGot']}, //当前登录用户是否已经领取过今天的淘金币 'true' or 'false'
		hasSavedUserGot:function(){return localStorage['hasSavedUserGot']}, //保存用户是否已经领取过今天的淘金币 value:"true" or "false"
		currentUserGotDate:function(){return localStorage['currentUserGotDate']}, //当前登录用户登录淘金币的日期，根据这个判断第二天再次领取 new Date().toDateString()
		savedUserGotDate:function(){return localStorage['savedUserGotDate']}, //保存用户登录淘金币的日期，根据这个判断第二天再次领取 new Date().toDateString()
		dontTryLoginToday:function(){return localStorage['dontPromptNeedLoginToday']}, //不再提示今日需要登录 value: new Date().toDateString()
		hasTipToShow:function(){return localStorage['hasTipToShow']},   //是否有消息需要在前台显示
		tipToShowContent:function(){return localStorage['tipToShowContent']},   //需要显示的消息
		autoFlushTip:function(){return localStorage['autoFlushTip']},  //消息被送到前台后，是否需要自动清空消息，否则下次仍然提示消息  true or false
		
		setSavedUser:function(v){localStorage['savedLoginUser'] = v},   	//保存的登录名
		setSavedUserPwd:function(v){localStorage['savedLoginPwd']= v},		//保存的用户密码
		setSavedUserNick:function(v){localStorage['savedUserNick'] = v},   	//保存的登录名的昵称
		setCurrentUserNick:function(v){localStorage['currentLoginUser']= v},	//当前登录的用户名
		setCurrentUserCoin:function(v){localStorage['currentLoginUser']= v},	//当前登录用户的淘金币个数
		setPrevUserNick:function(v){localStorage['prevLoginUser']= v},			//上一次登录的用户名，需要用这个判断是否自动登陆		set
		setHasCurrentUserGot:function(v){localStorage['hasCurrentUserGot']= v}, //当前登录用户是否已经领取过今天的淘金币 'true' or 'false'
		setHasSavedUserGot:function(v){localStorage['hasSavedUserGot']= v}, //保存用户是否已经领取过今天的淘金币 value:"true" or "false"
		setCurrentUserGotDate:function(v){localStorage['currentUserGotDate']= v}, //当前登录用户登录淘金币的日期，根据这个判断第二天再次领取
		setSavedUserGotDate:function(v){localStorage['savedUserGotDate']= v}, //保存用户登录淘金币的日期，根据这个判断第二天再次领取
		setDontTryLoginToday:function(v){localStorage['dontPromptNeedLoginToday']= v}, //不再提示今日需要登录 value: new Date().toDateString()
		setHasTipToShow:function(v){localStorage['hasTipToShow']= v}, //是否有消息需要在前台显示
		setTipToShowContent:function(v){localStorage['tipToShowContent']= v}, //需要显示的消息
		setAutoFlushTip:function(v){localStorage['autoFlushTip']= v} //消息被送到前台后，是否需要自动清空消息，否则下次仍然提示消息  true or false
	};
})();