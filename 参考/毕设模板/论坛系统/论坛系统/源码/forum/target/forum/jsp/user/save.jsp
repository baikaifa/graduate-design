<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>

<form action="/forum/user/add.action" method="post">
	<input name="id" type="hidden" value="${user.userId }"></input>
	<div class="fmcontainer">
		<table class="inputtable" width="98%">
			<tr>
				<td class="leftlabel">姓 名：</td>
				<td><input name="userName" type="text"" /></td>
				<td class="leftlabel">性 别：</td>
				<td><input type="radio" name="sex" value="男" /><label>男</label>
					<input type="radio" name="sex" value="女" /><label>女</label></td>
				
			<tr>
				<td class="leftlabel">密码：</td>
				<td><input name="userPwd" type="text" value="${user.userPwd }" /></td>
				
				<td class="leftlabel">用户头像：</td>
				<td><input name="userFace" type="text">
					</td>
				

			</tr>
		
			
			
		</table>
		<div class="fmsubmitbtn">
			<input type="submit" name="submit" class="btn" value="提 交" /> <input
				type="button" name="cancle" class="btn" value="取 消" />
		</div>
	</div>
</form>

</body>
</html>