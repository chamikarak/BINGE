function getRadioValue(){
	var i;
	var radio=document.forms[0];
	for(i=0;i<radio.length; i++){
		if(radio[i].checked){
		  return radio[i].value;
		  }
	}return'';
}

function validateForm(){
	var name1 =document.forms["myForm"]["firstname"].value;
	var lastname=document.forms["myForm"]["lname"].value;
	var email=document.forms["myForm"]["email"].value;
	var comment=document.forms["myForm"]["comment"].value;
	var rate=getRadioValue();

	if (name1=="" || lastname=="") {
		alert("Name must be enter(either firstname and second name");
		return false;
	}
	else if (email==""){
		alert("Please enter your email address");
		return false;
	}
	else if (comment==""){
		alert("Please leave a feedback in the comment section");
		return false;
	}
	else{
		alert("Dear "+name1+" "+lastname+" ,Thank you very much for your feedback. You have rated our site as "+rate+" and your comment was "+comment);
	}
}