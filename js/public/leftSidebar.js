
//左侧导航栏头部
Vue.component('left-top-picture',{
	data:function(){
		return{
			count:0
		}
	},
	template:'<div class="card side-nav-card"><div class="opacity-overlay"></div><div class="content footer author"><a href="C:/musican/html/login/login.html"><img src="C:/musican/img/faces/avatar.jpg" alt="..." class="avatar img-raised"> <span class="info-title white-text">梁有才</span></a></div></div>'
})
//左侧导航栏下面菜单
Vue.component('left-bottom',{
	data:function(){
		return{
			count:0
		}
	},
	template:'<div class="panel-group" id="accordion"><div class="panel panel-heading"><h4 class="panel-title"><a href="C:/musican/index-wide.html">回到主页</a></h4></div><div class="panel panel-heading"><h4 class="panel-title"><a href="myselfInfo/profile.html">我的信息</a></h4></div><div class="panel panel-heading"><h4 class="panel-title"><a href="index-wide.html">乐队主页</a></h4></div><div class="panel panel-heading"><h4 class="panel-title"><a href="index-wide.html">寻找演出</a></h4></div><div class="panel panel-heading"><h4 class="panel-title"><a href="index-wide.html">论坛交流</a></h4></div></div>'
})
