package com.tools;

import java.text.SimpleDateFormat;
import java.util.Date;

public class FormDate {
	
	public static String formDate(Date date) {
//		long year=date.getYear();
//		long mouth=date.getMonth();
//		long day=date.getDay();
//		long h=date.getHours();
//		long m=date.getMinutes();
//		long s=date.getSeconds();
		
		
	//	return year+"-"+mouth+"-"+day+" "+h+":"+m+":"+s;
		 SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		 return  sdf1.format(date);
		
	}
	
}
