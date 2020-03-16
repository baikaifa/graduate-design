<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<title>ITwindows</title>
<link rel="stylesheet" rev="stylesheet" href="../css/style.css" type="text/css" media="all" />


<script language="JavaScript" type="text/javascript">
function tishi()
{
  var a=confirm('数据库中保存有该人员基本信息，您可以修改或保留该信息。');
  if(a!=true)return false;
  window.open("冲突页.htm","","depended=0,alwaysRaised=1,width=800,height=400,location=0,menubar=0,resizable=0,scrollbars=0,status=0,toolbar=0");
}

function check()
{
document.getElementById("aa").style.display="";
}

</script>
<style type="text/css">
<!--
.atten {font-size:12px;font-weight:normal;color:#F00;}
-->
</style>
</head>

<body class="ContentBody">
  <form action="" method="post" enctype="multipart/form-data" name="form" target="sypost" >
<div class="MainDiv">
<table width="99%" border="0" cellpadding="0" cellspacing="0" class="CContent">
  <tr>
      <th class="tablestyle_title" >添加用户</th>
  </tr>
  <tr>
    <td class="CPanel">
 
		   <form action="/forum/user/add.action"  method="post">
		<table border="0" cellpadding="0" cellspacing="0" style="width:100%">
		
		 
			<TR>
			<TD width="100%">
				<fieldset style="height:100%;">
				<legend>添加用户</legend>
					  <table border="0px" cellpadding="2" cellspacing="1" style="width:25%" align="center">
					 
					  <tr>
					    <td nowrap align="right" width="15%"><span class="red">*</span>用户名:</td>
					    <td width="35%"><input name='userName' type="text" class="text" style="width:154px" value="" />
				       </tr>
					   <tr>
					    <td width="16%" align="right" nowrap="nowrap">用户密码:</td>
					    <td width="34%"><input class="text" name='userPwd' style="width:154px" value=""/></td>
					  </tr>
					    
					    
					  <tr>
					    <td nowrap="nowrap" align="right">用户头像</td>
					    <td><input class="text" name='userFace' style="width:154px" value=""/></td>
						</tr>
						<tr>
					    <td align="right">用户类型:</td>
						<td align="center">
					          <select name="usertype" >
							  <option  selected="selected">==请选择==</option>
							  <option value="普通用户">普通用户</option>
							  <option value="版主">版主</option>
							  <option value="超级管理员">超级管理员</option>
							  </td>
					  </tr>
					  <tr>
					    <td align="right">用户状态:</td>
					    <td align="center">
							<select name="select3" >
							  <option  selected="selected">==请选择==</option>
							  <option value="正常">正常</option>
							  <option value="超禁言">禁言</option>
							  <option value="封号">封号</option>
							</select>
						</td>
						</tr>
						
					  </table>
					  <TR>
			<TD colspan="2" align="center" height="50px">
			<input type="submit" name="submit" value="提交" class="button"/>　
			
			<input type="button" name="Submit2" value="取消" class="button" onclick="window.history.go(-1);"/></TD>
		</TR>
					  </form>
			  <br />
				</fieldset>			</TD>
		</TR>
		</TABLE>
	
	
	 </td>
  </tr>
  
  
		
		
		
		
		</TABLE>
	
	
	 </td>
  </tr>
  
  
  
  </table>

</div>
</form>
</body>
</html>
