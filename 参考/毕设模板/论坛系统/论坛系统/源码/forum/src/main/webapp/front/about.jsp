<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>ITwindow</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link href="/forum/front/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="/forum/front/js/jquery-1.3.2.min.js"></script>
<script type="text/javascript" src="/forum/front/js/script.js"></script>

<script type="text/javascript" src="/forum/front/js/cufon-yui.js"></script>
<script type="text/javascript" src="/forum/front/js/arial.js"></script>
<script type="text/javascript" src="/forum/front/js/cuf_run.js"></script>
<!-- CuFon ends -->
</head>
<body>
	<div class="main">
		<div class="main_resize">
			<div class="header">
				<div class="logo">
					<h1>
						<a href="index.html"><span>IT</span>window<small>Programmer's
								paradise</small></a>
					</h1>

				</div>
				
				
					<div>
				
					<span style="float: right; margin-right: 20px;"><a href="/forum/front/login.jsp">欢迎你，<%=session.getAttribute("userName") %></a>|
					<a href="/forum/logout.action">退出</a>
					</span>

				</div>

				</div>
				<div class="search">

					
					<!--/searchform -->
					<div class="clr"></div>
				</div>
				<div class="clr"></div>
				<div class="menu_nav">
					<ul>
						<li><a href="/forum/show/notice.action">首页</a></li>
						<li><a href="/forum/blog/article.action">博文列表</a></li>

						<li><a href="/forum//blog/front.action">博客</a></li>
						<li><a href="/forum/front/section.jsp">版块精选</a></li>
						
						<li><a href="http://lib.csdn.net/" target="_blank">知识库</a></li>
						<li  class="active"><a href="/forum/front/about.jsp">关于我们</a></li>
						<li><a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=1076629910@qq.com" target="_blank">联系我们</a></li>
					</ul>
					<div class="clr"></div>
				</div>
				<div class="hbg">
					<img src="/forum/front/images/header_images.jpg" width="923"
						height="291" alt="header images" />
				</div>
			</div>
			<div class="content">
				<div class="content_bg">
					<div class="mainbar">
						<div class="article">
           <font size="3" color="#6495ED"><span>关于我们</span></font><div class="clr"></div>
          <p><strong>ITwindow将关注点放在一群可爱额程序猿（媛）身上。倾力为他们打造一个属于他们自己的交流平台</strong></p>
          <p>在论坛中，每个人都有一个虚拟的身份，用户之间的交流没有了时间和空间的限制，也不需要考虑时间和空间，无论彼此的距离有多远，在论坛中都可以实现零距离。在彼此的交流中，无需考虑对方的在现实生活中的身份，所以，每个人在参与讨论的时候，都是和其他用户处于同等的地位，这样所有用户都可以畅所欲言的探讨问题。论坛汇集以一大批志同道合的朋友，并向用户免费开放。由于参与论坛的人数众多，所以不乏在各方面都有擅长的人才，每个人擅长的方面不同，而论坛将有不同特长的用户汇集在一起，从而形成优势互补。在生活和工作中的一些疑惑我们可以在论坛中提出来，或者将自己的观点提出来和大家一起讨论。</p>
        </div>
        <div class="article">
          <font size="3" color="#6495ED"><span>我们的目标</span></font><div class="clr"></div>
          <p><strong>我们的目标是让所有的程序猿（媛）把这里当成自己的家</strong></p>
        
          <p>在当今社会，论坛上的帖子浏览量成千上万次已经是司空见惯的事了，而今的论坛系统也成为了紧跟在电子邮件之后的互联网应用。随着时代的发展，论坛也在进行着版本更迭，论坛已经逐渐从之前的娱乐交流平台转化成了网络媒体，网络媒体在不断的发展过程中，它在社会中的引导力和影响力也不断在增强。</p>
            <p>ITwindow虽然用户单一，但是用户的黏性去很高。在这样一个温暖的大家庭中，用户可以各抒己见、畅快交流、互相学习达到多赢的效果。</p>
        </div>
						
						
					</div>
					<div class="sidebar">
						<div class="gadget">
							<h2 class="star">
								<span>Sidebar</span> Menu
							</h2>
							<div class="clr"></div>
							<ul class="sb_menu">
								<li ><a href="/forum/show/notice.action">首页</a></li>
								<li><a href="/forum/blog/article.action">博文列表</a></li>
		
								<li><a href="/forum//blog/front.action">博客</a></li>
								<li><a href="/forum/front/section.jsp">版块精选</a></li>
								
								<li><a href="http://lib.csdn.net/" target="_blank">知识库</a></li>
								<li  class="active"><a href="/forum/front/about.jsp">关于我们</a></li>
								<li><a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=1076629910@qq.com" target="_blank">联系我们</a></li>
							</ul>
						</div>
						<div class="gadget">
							<h2 class="star">
								<span>Fast Links</span>
							</h2>
							<div class="clr"></div>
							<ul class="ex_menu">
								<li><a href="http://www.iteye.com/" target="_blank">ITeye<br />
										http://www.iteye.com/
								</a></li>
								<li><a href="http://www.csdn.net/" target="_blank">CSDN<br />
										http://www.csdn.net/
								</a></li>
								<li><a href="https://github.com/" target="_blank">github<br />
										https://github.com/
								</a></li>
								<li><a href="http://www.oschina.net/" target="_blank">开源中国<br />
										http://www.oschina.net/
								</a></li>
								<li><a href="http://www.w3school.com.cn/" target="_blank">w3school<br />
										http://www.w3school.com.cn/
								</a></li>
								<li><a href="http://php.net/">PHP官网<br />
										http://php.net/
								</a></li>
							</ul>
						</div>
						<div class="gadget">
							<h2 class="star">
								<span>Wise Words</span>
							</h2>
							<div class="clr"></div>
							<div class="testi">
								<p>
									<span class="q"><img
										src="/forum/front/images/qoute_1.gif" width="20" height="15"
										alt="quote" /></span> We can let circumstances rule us, or we can
									take charge and rule our lives from within. <span class="q"><img
										src="/forum/front/images/qoute_2.gif" width="20" height="15"
										alt="quote" /></span>
								</p>
								<p class="title">
									<strong>Earl Nightingale</strong>
								</p>
							</div>
						</div>
					</div>
					<div class="clr"></div>
				</div>
			</div>
		</div>
		<div class="fbg">
			<div class="fbg_resize">
				<div class="col c1">
					<h2>
						<span>Image Gallery</span>
					</h2>
					<a href="#"><img src="/forum/front/images/pic_1.jpg" width="58"
						height="58" alt="pix" /></a> <a href="#"><img
						src="/forum/front/images/pic_2.jpg" width="58" height="58"
						alt="pix" /></a> <a href="#"><img
						src="/forum/front/images/pic_3.jpg" width="58" height="58"
						alt="pix" /></a> <a href="#"><img
						src="/forum/front/images/pic_4.jpg" width="58" height="58"
						alt="pix" /></a> <a href="#"><img
						src="/forum/front/images/pic_5.jpg" width="58" height="58"
						alt="pix" /></a> <a href="#"><img
						src="/forum/front/images/pic_6.jpg" width="58" height="58"
						alt="pix" /></a>
				</div>
				<div class="col c2">
					<h2>
						<span>Lorem Ipsum</span>
					</h2>
					<p>
						Lorem ipsum dolor<br /> Lorem ipsum dolor sit amet, consectetuer
						adipiscing elit. Donec libero. Suspendisse bibendum. Cras id urna.
						Morbi tincidunt, orci ac convallis aliquam, lectus turpis varius
						lorem, eu posuere nunc justo tempus leo. Donec mattis, purus nec
						placerat bibendum, dui pede condimentum odio, ac blandit ante orci
						ut diam.
					</p>
				</div>
				<div class="col c3">
					<h2>
						<span>About</span>
					</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
						libero. Suspendisse bibendum. Cras id urna. Morbi tincidunt, orci
						ac convallis aliquam, lectus turpis varius lorem, eu posuere nunc
						justo tempus leo. llorem, eu posuere nunc justo tempus leo. Donec
						mattis, purus nec placerat bibendum. <a href="#">Learn more...</a>
					</p>
				</div>
				<div class="clr"></div>
			</div>
		</div>
	</div>
	<div class="footer">
		<div class="footer_resize">
			<p class="lf">
				© Copyright <a href="#">MyWebSite</a>.
			</p>
			<p class="rf">
				<a href="http://www.cssmoban.com/" title="网站模板" target="_blank">网站模板</a>
			</p>
			<div class="clr"></div>
		</div>
	</div>
</body>
</html>