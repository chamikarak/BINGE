var chosenProducts=new Array(); //stores the product code of the item added to cart
var productAmounts=new Array(); //stores the quatity

//this function changes the input type to month and reduces the hieght of the field 
function change(x){
	x.type='month';
    x.style.height="auto";
}
//increases font size of the page
function increaseFontSize(){
    body = document.getElementById('a');
    style = window.getComputedStyle(body, null).getPropertyValue('font-size');
	setSize = parseFloat(style);
	body.style.fontSize = (setSize + 3) + 'px'; //increases the current font size of the page by 3px 
}
//decreases font size of the page
function decreaseFontSize(){
	body = document.getElementById('a');
	style = window.getComputedStyle(body, null).getPropertyValue('font-size');
	settSize = parseFloat(style);
	body.style.fontSize = (setSize -3) + 'px'; //decreases the current font size of the page by 3px 
}
//gets the number of the clothing and combines it to form the size code
function getSizes(tshirtNum){
	var clothingNumber="clothing"+tshirtNum.toString();
	return document.getElementById(clothingNumber).value;
                 
}

//using the product code, this function finds out the name of the item
function getProductName(productNum){
	var itemName="";
	var tshirtSize=""
	switch (productNum){
		case 1:
			itemName="Game of Thrones poster";
			break;
		case 2:
			itemName="FRIENDS poster";
			break;
		case 3:
			itemName="Riverdale poster";
			break;
//in the case where a clothing item is chosen, it's size is also included as part of the item name
		case 4:
			tshirtSize=getSizes(1); //calls function to get clothing size
			itemName="The Witcher t-shirt ("+tshirtSize+")"; 
			break;
		case 5:
			tshirtSize=getSizes(2);
			itemName="Brooklyn 99 t-shirt ("+tshirtSize+")";
			break;
		case 6:
			tshirtSize=getSizes(3);
			itemName="Southside serpents jacket ("+tshirtSize+")";
			break; 
		default:
			itemName="none"        
	}
	return itemName;

}

//calculates the price per item
function calculatePrice(num, amount){
	var price=getPrice(num);
	return amount*price;
                
}

function getProduct(x){
	var button="btn"+x.toString();
	var product="product"+x.toString();
	document.getElementById(button).style.backgroundColor="#003"; //changes button colour to blue
	var getAmount=document.getElementById(product).value; //gets the no. of items selected 
               
	if(getAmount==0){
		alert("Please enter quantity for product"); //makes sure the user can't add to cart without choosing quantity
		return false;
	}
	else{
		chosenProducts.push(x); 
		productAmounts.push(getAmount);
		//itemcode and item quantity is added to the relevant array
	}
}
//gets the price of each item
function getPrice(x){
	var price;
	//posters
	if (x<=3){
		price=10;
	}
	//tshirts
	else if(x<=5){
		price=15;
	}
	//hoodie
	else{
		price=25;
	}
	return price;
}
            

function getTotal(){
	var totalAmount=0;
	//calculate price per item and adds it to the total 
	for (i=1;i<=chosenProducts.length;i++){
		var productNumber=chosenProducts[i-1];
		var productAmount=productAmounts[i-1];
		var pricePerItem=calculatePrice(productNumber, productAmount); 
		totalAmount+=pricePerItem;
	}
	//if the user enters the correct promocode=>10% discount from the total bill
	var promoCode=document.getElementById("promo").value;
	if(promoCode=="BINGE2648"){
		var discount=totalAmount*10/100;
		totalAmount=totalAmount-parseInt(discount);
	}
	return totalAmount;    
}
function isEmpty(){
	//gets all personal detail form elements 
	var firstName=document.getElementById("fname").value;
	var lastName=document.getElementById("lname").value;
	var address=document.getElementById("address").value;
	var email=document.getElementById("email").value;
	var cardNo=document.getElementById("cardno").value;
	var securityCode=document.getElementById("cvv").value;
	var expMonth=document.getElementById("exmonth").value;
	
	//makes sure all mandatory fields are filled
	if (firstName=="" || lastName==""|| address=="" ||email=="" || cardNo=="" || cvv=="" || exmonth==""){
		alert("Please fill all the fields");
		return false;
	}
	/*else if(!Number.isInteger(cardNo)==true){
		alert("Please enter a digits only for Credit Card Number!");
	}
	else if(!Number.isInteger(securityCode)==true){
		alert("Please enter a digits only for Security Code!");
	}*/
	//makes sure securityCode and cardNo have the correct length
	else if(securityCode.length!=3){
		if (securityCode.length>3){
			alert('You have entered too many digits for Security Code!');
		}
		else if(securityCode.length<3){
			alert('You have entered not enough digits for Security Code!')
		}
	}
	else if (cardNo.length!=12){
		if (cardNo.length>12){
			alert('You have entered too many digits for credit card number!');
		}
		else if(securityCode.length<12){
			alert('You have entered not enough digits for credit card number!')
		}
	}
	else{
		var finalBill=getTotal(); //gets final total
		//makes sure at least one item is selected before submission
		if (finalBill!=0){
			var productName="";
			var productQuantity="";
			var bill="";
			//adds item name and quantity into one string
			for(i=1;i<=chosenProducts.length;i++){
				productName=getProductName(chosenProducts[i-1]);
				productQuantity=productAmounts[i-1].toString();
				bill= bill.concat(productName+ "          "+ productQuantity+ "\n");
		}
		//displays summary of the bill
		alert("Hi, " +firstName+" "+lastName+"! \nYou have ordered the following items: \n Item                                         Amount\n"+bill+"Your final total bill is $"+finalBill);
		}
		else{
			alert('Please add items to card before placing order!');
		}
		
	}
}
//resets arrays to null           
function resetForm(){
	while (chosenProducts.length) { 
		chosenProducts.pop(); 
		productAmounts.pop() }
}