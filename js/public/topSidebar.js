//头部导航栏
Vue.component('top-sidebar',{
	data:function(){
		return{
			count:0
		}
	},
	template:'<div id="toolbar" class="black"><div class="open-left"><button type="button" class="button-collapse navbar-toggle collapsed" data-activates="slide-out"><span class="sr-only">Toggle navigation</span><span class="icon-bar white"></span><span class="icon-bar white"></span><span class="icon-bar white"></span></button></div><h1 class="branding">Hellow Musican</h1><div class="open-right" data-activates="slide-out-right"><i class="material-icons">rss_feed</i></div></div></div>'
})
//页尾
Vue.component('bottom-bar',{
data:function(){
		return{
			count:0
		}
	},
	template:'<div class="container-fluid content row col-md-4 c1"><h5>关于我们</h5><p>我们是一个用心为热爱音乐的人服务的组织！</p><p>Come on ! Rock and Roll !</p><p>By：梁有才</p></div><hr><ul class="pull-left c3"><li><a href="#!" class="c2">意见反馈</a></li></ul><div class="copyright pull-right">Copyright © <script type="text/javascript">document.write(new Date().getFullYear())</script> Codnauts All Rights Reserved.</div>'
})


