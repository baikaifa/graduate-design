<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
<title>ITwindows</title>
<style type="text/css">
<!--
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
}

.tabfont01 {
	font-family: "宋体";
	font-size: 9px;
	color: #555555;
	text-decoration: none;
	text-align: center;
}

.font051 {
	font-family: "宋体";
	font-size: 12px;
	color: #333333;
	text-decoration: none;
	line-height: 20px;
}

.font201 {
	font-family: "宋体";
	font-size: 12px;
	color: #FF0000;
	text-decoration: none;
}

.button {
	font-family: "宋体";
	font-size: 14px;
	height: 37px;
}

html {
	overflow-x: auto;
	overflow-y: auto;
	border: 0;
}
-->
</style>

<link href="../css/css.css" rel="stylesheet" type="text/css" />
<link href="../css/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="../js/xiangmu.js"></script>
</head>
<script type="text/javascript">
	function sousuo() {
		window.open("gaojisousuo.htm","","depended=0,alwaysRaised=1,width=800,height=510,location=0,menubar=0,resizable=0,scrollbars=0,status=0,toolbar=0");
	}
	function selectAll() {
		var obj = document.fom.elements;
		for (var i = 0; i < obj.length; i++) {
			if (obj[i].name == "delid") {
				obj[i].checked = true;
			}
		}
	}

	function unselectAll() {
		var obj = document.fom.elements;
		for (var i = 0; i < obj.length; i++) {
			if (obj[i].name == "delid") {
				if (obj[i].checked == true)
					obj[i].checked = false;
				else
					obj[i].checked = true;
			}
		}
	}

	function link() {
		document.getElementById("fom").action = "sendxiaoxi.htm";
		document.getElementById("fom").submit();
	}

	function on_load() {
		var loadingmsg = document.getElementById("loadingmsg");
		var mainpage = document.getElementById("mainpage");
		loadingmsg.style.display = "";
		mainpage.style.display = "none";

		loadingmsg.style.display = "none";
		mainpage.style.display = "";
	}
</SCRIPT>

<body onload="on_load()">

	<table id="mainpage" width="100%" border="0" cellspacing="0" cellpadding="0">
		<form action="/forum/user/search.action" method="post">
		<tr>
			<td height="30">
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td height="62" background="../images/nav04.gif">

							<table width="98%" border="0" align="center" cellpadding="0" cellspacing="0">
								<tr>
									<td width="21"><img src="../images/ico07.gif" width="20" height="18" /></td>
									<td width="550">查看内容：按时间： <input name="textfield"
										type="text" size="12" readonly="readonly" /><span
										class="newfont06">至</span> <input name="textfield" type="text"
										size="12" readonly="readonly" /> <input name="Submit"
										type="button" class="right-button02" value="查 询" />
									</td>
									<td width="132" align="left"><a href="#" onclick="sousuo()"> <input name="Submit" type="button" class="right-button07" value="高级搜索" /></a></td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</td>
		</tr>
		</form>
		<tr>
			<td><table id="subtree1" style="DISPLAY:" width="100%"
					border="0" cellspacing="0" cellpadding="0">

					<tr>
						<td><table width="95%" border="0" align="center"
								cellpadding="0" cellspacing="0">


								<tr>
									<td height="40" class="font42"><table width="100%"
											border="0" cellpadding="4" cellspacing="1" bgcolor="#464646"
											class="newfont03">

											<tr>
												<td height="20" align="center" colspan="14" align="center"
													bgcolor="#EEEEEE" class="tablestyle_title">用户列表</td>
											</tr>
											<tr>
												<td align="center" bgcolor="#EEEEEE">选择</td>
												<td height="20" align="center" bgcolor="#EEEEEE">序号</td>
												<td height="20" align="center" bgcolor="#EEEEEE">用户ID</td>
												<td align="center" bgcolor="#EEEEEE">用户名</td>
												<td align="center" bgcolor="#EEEEEE">用户头像</td>
												<td align="center" bgcolor="#EEEEEE">注册时间</td>
												<td align="center" bgcolor="#EEEEEE">用户类型</td>
												<td align="center" bgcolor="#EEEEEE">用户状态</td>

												<td align="center" bgcolor="#EEEEEE">操作</td>
											</tr>
											<c:forEach items="${userList}" var="user" varStatus="status">
												<tr align="center">
													<td bgcolor="#FFFFFF"><input type="checkbox"
														name="delid" /></td>
													<td height="20" bgcolor="#FFFFFF">${status.index+1}</td>
													<td height="20" bgcolor="#FFFFFF">${user.userId}</td>
													<td bgcolor="#FFFFFF">${user.userName}</td>
													<td bgcolor="#FFFFFF">${user.userFace}</td>

													<td height="20" bgcolor="#FFFFFF">${user.userRegtime}</td>
													<td bgcolor="#FFFFFF">${user.userType}</td>
													<td bgcolor="#FFFFFF">${user.userState}</td>
													<td bgcolor="#FFFFFF">
													<a href="/forum/user/delete.action?id=${user.userId}">删除</a>|
													<a href="/forum/user/view.action?id=${user.userId}">查看</a>|
													<a href="/forum/user/toEdit.action?id=${user.userId}">修改</a></td>
												</tr>
											</c:forEach>


										</table></td>
								</tr>
							</table></td>
					</tr>
				</table>
				<table width="95%" border="0" align="center" cellpadding="0"
					cellspacing="0">
					<tr>
						<td height="6"><img src="../images/spacer.gif" width="1"
							height="1" /></td>
					</tr>
					<tr>
						<td height="33"><table width="100%" border="0" align="center"
								cellpadding="0" cellspacing="0" class="right-font08">
								<tr>
									<td width="50%">共 <span class="right-text09">5</span> 页 |
										第 <span class="right-text09">1</span> 页
									</td>
									<td width="49%" align="right">[<a href="#"
										class="right-font08">首页</a> | <a href="#" class="right-font08">上一页</a>
										| <a href="#" class="right-font08">下一页</a> | <a href="#"
										class="right-font08">末页</a>] 转至：
									</td>
									<td width="1%"><table width="20" border="0"
											cellspacing="0" cellpadding="0">
											<tr>
												<td width="1%"><input name="textfield3" type="text"
													class="right-textfield03" size="1" /></td>
												<td width="87%"><input name="Submit23222" type="submit"
													class="right-button06" value=" " /></td>
											</tr>
										</table></td>
								</tr>
							</table></td>
					</tr>
				</table></td>
		</tr>
	</table>
	</form>

	<div id="loadingmsg"
		style="width: 100px; height: 18px; top: 0px; display: none;">
		<img src="file:///F|/项目管理相关资料/项目管理系统页面/images/loadon.gif" />
	</div>

</body>
</html>
