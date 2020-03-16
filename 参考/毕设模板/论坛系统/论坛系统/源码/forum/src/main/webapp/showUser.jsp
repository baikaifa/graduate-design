
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>UserList</title>
</head>
<body>
	<table border="1px">
		
		<tr>
		<td>序号</td>
		<td>姓名</td>
		
		</tr>
		<c:forEach items="${userList}" var="user" varStatus="status">
			<tr>
				<td>${status.index+1} </td>
				<td>${user.userName}</td>
			</tr>
		</c:forEach>
	</table>
</body>
</html>