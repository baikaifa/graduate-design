<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<form action="/forum/article/add.action">



<lable>标题：</lable><input type="text" name="artTopic"></input>



   <hr width="70%" height="1px">
   <!--  private Integer artId;

    private Integer sectionId;

    private Integer userId;

    private String artTopic;

    private Integer artReplycount;

    private Integer artClickcount;

    private Date artPubtime;

    private Date artModtime;

    private String artState;

    private String artContent; -->
   
   <button type="submit">发表</button>
    
    
    <input type="submit" value="发表" style="width:100PX"></input>
</form>

</body>
</html>