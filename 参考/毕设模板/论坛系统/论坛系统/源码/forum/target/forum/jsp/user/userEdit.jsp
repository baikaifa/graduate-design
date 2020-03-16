<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>

<form action="/forum/user/update.action" method="post">
	
	<div class="fmcontainer">
	
		<table class="inputtable" width="50%">
			<tr>
			<td class="leftlabel">用户ID</td>
			 <td><input name="userId" type="text" value=${user.userId}  ></input></td>
			</tr>
			<tr><td class="leftlabel">姓 名：</td>
			<td><input name="userName" type="text" value="${user.userName}"  /></td></tr>
			<tr><td class="leftlabel">用户类型：</td>
				
				<td><input name="userType" type="text" value="${user.userType }"  /></td></tr>
			<tr><td class="leftlabel">用户状态：</td>
				
				<td><input name="userState" type="text" value="${user.userState  }"  /></td>
			</tr>
			<tr>
				<td class="leftlabel">用户头像：</td>
				<td><input name="userFace" type="text" value="${user.userFace}"/>
					</td></tr>
			
			
			
		</table>
		
		<div class="fmsubmitbtn">
		     <input type="submit" name="submit" class="btn" value="提 交" /> 
			 <input type="button" name="cancle" class="btn" value="取 消" />
		</div>
	</div>

</form>
</body>
</html>