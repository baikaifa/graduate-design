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
				
				</div>
				<div class="search">

					
					<!--/searchform -->
					<div class="clr"></div>
				</div>
				<div class="clr"></div>
				<div class="menu_nav">
					<ul>
						<li ><a href="/forum/show/notice.action">首页</a></li>
						<li class="active"><a href="/forum/blog/article.action">博文推荐</a></li>

						<li><a href="/forum//blog/front.action">博客</a></li>
						<li><a href="/forum/front/section.jsp">版块精选</a></li>
						
						<li><a href="http://lib.csdn.net/" target="_blank">知识库</a></li>
						<li  ><a href="/forum/front/about.jsp">关于我们</a></li>
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
          <font size="3" color="#6495ED"><span>帖子</span>详情</font><div class="clr"></div>
        
         
          <p>主题：${art.artTopic}</p>
          <p>${art.artContent} </p>
          <p>发布时间：${art.artPubtime}</p>
          <br></br>
          <p>评论：${art.artComment}</p>
          
        </div>
        <form action="/forum/article/comment.action" method="post" id="leavereply">
          <ol><li>
            <label for="message">我要评论</label>
            <input type="hidden" name="artId" value="${art.artId}"/>
            
            <textarea id="message" name="artComment" rows="8" cols="50"></textarea>
          </li><li>
            <input type="image" name="imageField" id="imageField" src="/forum/front/images/submit.gif" class="send"  />
            <div class="clr"></div>
          </li></ol>
          </form>
        
     
      </div>
					<div class="sidebar">
						<div class="gadget">
							<h2 class="star">
								<span>Sidebar</span> Menu
							</h2>
							<div class="clr"></div>
							<ul class="sb_menu">
								<li ><a href="/forum/show/notice.action">首页</a></li>
						<li class="active"><a href="/forum/blog/article.action">博文推荐</a></li>

						<li><a href="/forum//blog/front.action">博客</a></li>
						<li><a href="/forum/front/section.jsp">版块精选</a></li>
						
						<li><a href="http://lib.csdn.net/" target="_blank">知识库</a></li>
						<li  ><a href="/forum/front/about.jsp">关于我们</a></li>
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