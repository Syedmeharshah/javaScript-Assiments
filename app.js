
// --------Alert--------

// 1. Write a script to greet your website visitor using JS alert box.

// let nam = prompt('Enter your name');
// alert(nam + ' ' + 'Welcome to our website');







// 2. Write a script to display following message on your web page:

// alert('Error! please enter your valid password');








// 3. Write a script to display following message on your web page: (Hint : Use line break)

// alert('Welcome to js land\nHappy coding');










// 4. Write a script to display following messages in sequence:   

// alert('Welcome to js land');
// alert('Happy Coding! \n Prevent this page from creating additional dialogue'); 













// 5. Generate the following message through browser’s developer console:

// console.log('alert("Hello.. I can run JS through my web browser console")');
// alert("Hello.. I can run JS through my web browser's console");










// --------Variables for strings--------











// 1.  Declare a variable called username.

// let username = "syedmeharshah";
// console.log(username);












// 2. Declare a variable called myName & assign to it a string that represents your Full Name.

// let myName = "Syed Mehar Ali Shah";
// console.log(myName);















// 3. Write a script to
//  a. declare a JS variable, titled message
//  b. assign “Hello World” to the variable message
//  c. display the message in alert box 

// let titledMessage = "Hello World";
// alert(titledMessage);









// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

// let nam = "Ali Khan";
// alert(nam);

// let age = 17;
// alert(age + '\n\n' + "Prevent this page from creating additional dialoques.");

// let institude = "SSUET";
// alert(institude)

// let cource = "Mobile and computing - Module A";
// alert(cource + '\n' + "Prevent this page from creating additional dialoques.");








// 5. Write a script to display the following alert using one JS variable:

// let yummy = "PIZZA";
// alert(yummy + '\n' + "PIZZ" + '\n' + "PIZ" + '\n' + "PI" + '\n' + "P");








// 6. Fortune Teller: Why pay a fortuneteller when you can just program your fortune yourself?Store the following into variables: number of children,partner’s name, geographic location, and job title.


// let partnerName = "Syed Mehar Ali Shah";
// let numberOfChildren = 2;
// let geographicLocation = "Paris";
// let jobTitle = "Web Developer";
// alert("My name is " + partnerName + " I have " + numberOfChildren + " kids and i  live in " + geographicLocation + " and i am a " + jobTitle);








// 7. Declare a variable called email & assign to it a string that represents your Email Address (e.g. abc@xyz.com). Show the below mentioned message in an alert box. (Hint: use string concatenation);

// let email = "syedzada12550@gmail.com";
// let emailAddress = "My Email Address is " + email;
// alert(emailAddress);








// 8. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:

// let book = "A smart way to learn JavaScript";
// alert("I am trying to learn from a book " + book);









// 9. Use the variables, declared in exercise 4 & show the details giving meaning to data. Like “My name is Ali Khan”, “I am 17 years old”, “I study in SSUET”,  “I take Mobile & Cloud Computing, Module A classes:

// let nam = "Ali Khan";
// let age = 17;
// let institude = "SSUET";
// let course = "Mobile & Cloud Computing - Module A";
// let message = "My name is " + nam + " I am " + age + " years old. I study in " + institude + " and I enrolled in " + course;  
// alert(message);







// 10. Write a script to display this in browser through JS

// document.writeln("Yay! I can write HTML Content Through JavaScript");










// -------------Variables for numbers -------------







// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.

// let age = 23;
// age = "I am " + age + " years old ";
// alert(age);






// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.

// let times = 21;
// times = " You have visited this site " + times + " times ";
// alert(times);







// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:


// let birthYear = 2001;
// birthYear = " My birth year is " + birthYear;
// document.writeln(birthYear);
// document.write("<br>");
// document.writeln(" Data type of declare variable is number ");










// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
//     a. Visitor’s name
//     b. Product title
//     c. Quantity i.e. how many products a visitor wants to order

    
// let visitorName = "Sami Khan";
// let quantity = 3;
// let productTittle = "T-Shirt(s)"
// let clothingStore = visitorName + " ordered " + quantity + " " + productTittle + " XYZ Clothing store";
// document.write(clothingStore);








// ---------------VARIABLE NAMES: LEGAL	& ILLEGAL---------------  










// 1. Declare 3 variables in one statement


// let nam = "Syed Mehar Ali Shah", age = 21, city = "Karachi";
// document.writeln(" Name : " + nam ," Age : " + age  ," City : " + city);








// 2. Declare 5 legal & 5 illegal variable names;


// A.legal variable :

// let student = "Syed Mehar Ali";
// let studentAge = "21";
// let studentCity123 = "Karachi";
// let $studentCource = "Mern Stack";
// let _studentCountry = "Pakistan";
// document.writeln(student,  " " + studentAge,  " " + studentCity123,  " " + $studentCource,  " " + _studentCountry);

// B. Illegal variables :

// let *student = "Syed Mehar Ali";
// let 123studentAge = "21";
// let var = "Karachi";
// let -studentCource = "Mern Stack";
// let student&Country = "Pakistan";
// document.writeln(*student,  " " + 123studentAge,  " " + var,  " " + $-studentCource,  " " + student&Country);












// 3. Display this in your browser
//    a. A heading stating “Rules for naming JS variables”
//    b. Variable names can only contain ______, ______,
//    ______ and ______.
//    For example $my_1stVariable
//    c. Variables must begin with a ______, ______ or
//    _____. For example $name, _name or name
//    d. Variable names are case _________
//    e. Variable names should not be JS _________


// let heading = "a. A heading stating “Rules for naming JS variables”"
// document.writeln(heading);
// document.write("<br>")
// let studentAge = "studentAge", studentCity123 = "studentCity123",  $studentCource = " $studentCource ", _studentCountry = " _studentCountry ";
// document.writeln("b. Variable names can only contain , "  + studentAge,  " , " + studentCity123,  " , " + $studentCource + " and " + _studentCountry);
// document.write("<br>")
// let example = "For example $my_1stVariable";
// document.writeln(example);
// document.write("<br>")
// let dollar = " Dollar Sign";  underscore = " Underscore"; alphabet = " Alphabet";
// document.writeln(" c. Variables must begin with a " + dollar + " , " + underscore + " and " + alphabet);
// document.write("<br>")
// let example1 = "For example $name, _name or name";
// document.writeln(example1);
// document.write("<br>")
// let variablesName = "Sensitive";
// document.writeln("  d. Variable names are case  " + variablesName);
// document.write("<br>")
// let example2 = "e. Variable names should not be JS _________";
// document.writeln(example2);







//                  MATH	EXPRESSIONS	
// FAMILIAR	OPERATORS |	UNFAMILIAR	OPERATORS	|	ELIMINATING	AMBIGUITY








// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

// let num1 = 13;
// let num2 = 9;
// let num3 = num1 + num2;
// document.writeln(" Sum of " + num1 + " and " + num2 + " is " + num3);











// 2. Repeat task1 for subtraction, multiplication, division & modulus. E.g.

//   A. Subtraction 
// let num1 = 13;
// let num2 = 9;
// let num3 = num1 - num2;
// document.writeln(" Subtraction of " + num1 + " and " + num2 + " is " + num3);

//   B. Multiplication
// let num1 = 13;
// let num2 = 9;
// let num3 = num1 * num2;
// document.writeln(" Multiplication of " + num1 + " and " + num2 + " is " + num3);


//   C. Division
// let num1 = 13;
// let num2 = 9;
// let num3 = num1 / num2;
// document.writeln(" Division of " + num1 + " and " + num2 + " is " + num3);



//   D. Modulus
// let num1 = 13;
// let num2 = 9;
// let num3 = num1 % num2;
// document.writeln(" Modulus of " + num1 + " and " + num2 + " is " + num3);












// 3. Do the following using JS Mathematic Expressions
//     a. Declare a variable.
//     b. Show the value of variable in your browser like “Value
//     after variable declaration is: ??
//     c. Initialize the variable with some number.
//     d. Show the value of variable in your browser like “Initial
//     value: 3”.
//     e. Increment the variable.
//     f. Show the value of variable in your browser like “Value
//     after increment is: 4”.
//     g. Add 7 to the variable.
//     h. Show the value of variable in your browser like “Value
//     after addition is: 11”.
//     i. Decrement the variable.
//     j. Show the value of variable in your browser like “Value
//     after decrement is: 10”.
//     k. Show the remainder after dividing the variable’s value by
//     3. Output : “The remainder is : 1”


// var variable;
// document.write(" Value after variable declaration is: " + variable);
// document.write("<br>");
// var variable = 3;
// document.writeln( " Initial value : " + variable);
// document.write("<br>");
// variable++;
// document.write(" Value after increment is: " + variable);
// document.write("<br>");
// var add = 7;
// var variable = add + variable
// document.write(" Value after Addison is: " + variable);
// document.write("<br>");
// variable--;
// document.write(" Value after Decrement is: " + variable);
// document.write("<br>");
// let remainderValue = variable % 3;
// document.writeln(" The remiander is " + remainderValue);











// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie

// let ticketCost = 600;
// let buyingTicket = 5;
// let buyingCost = ticketCost * buyingTicket;
// document.writeln(" Total Cost to buy " + buyingTicket + " ticket to a movie is " + buyingCost + " PKR ");







// 5. Write a script to display multiplication table of any number in your browser

// document.write("Multiplication Table for 4");
// document.write("<br>")
// document.write("<br>")
// document.writeln(" 4 x 1 = 4");
// document.write("<br>")
// document.writeln(" 4 x 2 = 8");
// document.write("<br>")
// document.writeln(" 4 x 3 = 12");
// document.write("<br>")
// document.writeln(" 4 x 4 = 16");
// document.write("<br>")
// document.writeln(" 4 x 5 = 20");
// document.write("<br>")
// document.writeln(" 4 x 6 = 24");
// document.write("<br>")

// document.writeln(" 4 x 7 = 28");
// document.write("<br>")

// document.writeln(" 4 x 8 = 32");
// document.write("<br>")

// document.writeln(" 4 x 9 = 36");
// document.write("<br>")

// document.writeln(" 4 x 10 = 40");







// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
//      a. Store a Celsius temperature into a variable.
//      b. Convert it to Fahrenheit & output “NNoC is NNoF”
//      c. Now store a Fahrenheit temperature into a variable.
//      d. Convert it to Celsius & output “NNoF is NNoC”.

// let c = 12;
// let f = (c * 9/5) + 32;     
// document.writeln(c + "°C is " + f + "°F");
// document.writeln("<br>");
// let f1 = 68;
// let c1= (f1 - 32) * 5/9;
// document.writeln(f1 + "°F is " + c1 + "°C");







// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables:
//    a. Price of item 1
//    b. Price of item 2
//    c. Ordered quantity of item 1
//    d. Ordered Quantity of item 2
//    e. Shipping charges

// let priceItem1 = 560;
// let QuantityItem1 = 2;

// let priceItem2 = 200;
// let QuantityItem2 = 5;
// let shippingCharges = 150;

// document.writeln("<h2> Shpping Card </h2>");
// document.writeln("<br>");
// document.writeln("<br>");
// document.writeln(" Price of item 1 is " + priceItem1);
// document.writeln("<br>");
// document.writeln(" Quantity of item 1 is " + QuantityItem1);
// document.writeln("<br>");
// document.writeln(" Price of item 2 is " + priceItem2);
// document.writeln("<br>");
// document.writeln(" Quantity of item 2 is " + QuantityItem2);
// document.writeln("<br>");
// document.writeln("<br>");
// document.writeln(" Shipping charges is " + shippingCharges);
// document.writeln("<br>");
// document.writeln("<br>");
// let totalPriceItem1 = priceItem1 * QuantityItem1 ;
// let totalPriceItem2 = priceItem2 * QuantityItem2 ;
// let total = totalPriceItem1 + totalPriceItem2 + shippingCharges;
// document.writeln("Total cost of your order is " + total + " PKR ");










// 8. Write a script to take total marks & marks obtained by a student. Compute the percentage & show the result in your browser.
// document.writeln("<h1>Marks sheet</h1>");
// document.writeln("<br>");
// document.writeln("<br>");
// let totalMarks = 1200;
// let obtainedMarks = 900;
// let percentage = obtainedMarks / totalMarks * 100;
// document.writeln(" Total Marks: " + totalMarks);
// document.writeln("<br>");
// document.writeln(" Marks obtained :  " + obtainedMarks);
// document.writeln("<br>");
// document.writeln(" Percentage : " + percentage + " % ");







// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression

// document.writeln("<h1>Currency in PKR</h1>");
// document.writeln("<br>");
// let usd = 10;
// let usdToPkr = 104;  
// let total1 = usd * usdToPkr;
// let sar = 25;
// let sarToPkr = 28;
// let total2 = sar * sarToPkr;
// let total = total1 + total2;
// document.writeln("Total Currency in PKR : " + total);








// 10. Write a program to initialize a variable with some number
// and do arithmetic in following sequence:

// let number = 1;
// let result = ((number + 5) * 10) / 2;
// document.writeln(result);





//11. The Age Calculator: Forgot how old someone is? Calculate it!
//    a. Store the current year in a variable.
//    b. Store their birth year in a variable.
//    c. Calculate their 2 possible ages based on the stored values.





// let currentYear = +prompt(" Enter the current year");
// let birthYear = +prompt(" Enter the birth year");
// let age = currentYear - birthYear;
// console.log(" The Age Calculator " + " \n Current Year: " + currentYear + "\n Birth Year: " + birthYear + "\n They are either " + age + " or " + (age + 1));








// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”. 


// let radius = 12;
// let circumferenceofCircle = 2 * 3.14 * radius;
// let areaOfCircle = 3.14 *  radius ** 2; 

// console.log( " The Geometrizer " + "\n Radius of a circle : " + radius + "\n The Circumference is : " + circumferenceofCircle + "\n The area is " + areaOfCircle);
















// 13. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// console.log("Result");
// let a = 10;
// console.log("The value of a is : " + a);
// console.log(".........................");
// ++a;
// console.log("The value of ++a is : " + a);
// console.log("Now the value of a is : " + a);
// console.log("The value of a++ is : " + a);
// a++
// console.log("Now value of a is : " + a);
// --a;
// console.log("The value of --a is : " + a);
// console.log("Now the value of a is : " + a);
// console.log("The value of a-- is : " + a);
// a--
// console.log("Now the value of a is : " + a);









// 14. What will be the output in variables a, b & result after
// execution of the following script:
//  var a = 2, b = 1;
//  var result = --a - --b + ++b + b--;
// Explain the output at each stage:
//  --a;
//  --a - --b;
//  --a - --b + ++b;
//  --a - --b + ++b + b--;



//  --a = 2;
//  --a = 1 - --b = 0 1-0 = 1;
//  --a = 0 - --b = 0 + ++b = 1; 1-0+2 = 
//  --a - --b + ++b + b--;


// var a = 2, b = 1;
// --a;
// console.log(" a is " + a );
// --a - --b;
// console.log(" b is " + b);
// // var a = 2, b = 1;
// // --a;
// // --a - --b;
// // --a  - --b   + ++b     ;
// // --a  - --b  + ++b   + b-- ;
// let a1 = 2, b1 = 1;
// let result = --a1 - --b1 + ++b1 + b1--;
// console.log(" Result is " + result);









// 15. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? Wonder no
// more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.




// let favSnake = " Oreo buscuits ";
// let age = "15";
// let maxAge = "85";
// let estimatedAmount = "2";
// console.log(maxAge - age * 365 * estimatedAmount);











// ------------------------------------   USER	 INPUT	 &      ------------------------------------	
// ------------------------------------ CONDITIONAL	STATEMENTS ------------------------------------














// 1. Write a program that takes input a name from user & greet the
// user like this:

// let nam = prompt("Please enter your name");
// alert(" Hi, " + nam + "\n Prevent this page from creating additional dilogues.");








// 2. Write a program to take input a number from user & display
// it’s multiplication table on your browser. If user does not enter
// a new number, multiplication table of 5 should be displayed by
// default.



// function table(){
//     let userInput = prompt("Enter any number of tables");
//     let output = "";

//     if (userInput === null || userInput === "")
//     userInput = 5;
// else{
//     userInput = parseInt(userInput)
// }
// for(let i = 1; i <=10; i++){
//     let result = userInput * i;
//     output += userInput + " x " + i + " = " + result + "\n";
// }
// alert(output);
    
// }

// table();








// 3. Write a program to take “city” name as input from user. If user
// enters “Karachi”, welcome the user like this: “Welcome to city
// of lights”


// let city = prompt(" please enter your city");
// city = " Welcome to city of lights";
// alert(city);







// 4. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the user is
// female, give the message: Good Morning Ma’am.


// let userInput = prompt("Enter your gender");
// if (userInput === "male") {
//     alert("Good Morning sir")
// } else if (userInput === "female") { 
//     alert("Good morning Ma'am");
// } else {
//     alert("Please enter your gender");
// }










// 5. Write a program to take input color of road traffic signal from
// the user & show the message according to this table:


// let userInput = prompt("Enter the signal color").toLowerCase();
// if(userInput === "red"){
//     alert("Vehicles must stop")
// } else if(userInput === "yellow"){
//     alert("vehicles should get ready to move")
// } else if(userInput === "green"){
//     alert("vehicles can move now")
// } else{
//     alert(" Please enter Signal color")
// }









// 6. Write a program to take input max age & current age from
// user. If the current age is less than or equal to max age, show the message “You are welcome”



// let maxAge = +prompt("Enter your maximum age");
// let currentAge = +prompt(" Enter your current age");
// if (currentAge <= maxAge) {
//     alert(" You are Welcome ");
// } else {
//     alert(" You are not allowed");
// }






// 7. Write a program to take input remaining fuel in car (in litres)
// from user. If the current fuel is less than 0.25litres, show the
// message “Please refill the fuel in your car”



// let fuel = prompt(" Enter remaining fuel in car");
// if(fuel < 2){
//     alert("Please refill the fuel in your car");
// } else {
//     alert(" you have fuel in your car now");
// }












// 8. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
//  alert("given condition for variable a is true");
// }
// b. var b = 82;
// if (b++ === 83){
//  alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
//  alert("condition 1 is true");
// }
// if (c === 13){
//  alert("condition 2 is true");
// }
// if (++c < 14){
//  alert("condition 3 is true");
// }
// if(c === 14){
//  alert("condition 4 is true");
// } 
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
// }
// e. if (true){
//  alert("True");
// }
// if (false){
//  alert("False");
// }
// f. if("car" < "cat"){
//  alert("car is smaller than cat");
// }



// let a = 4, b = 82;
// if (++a === 5){
//  alert("given condition for variable a is true");
// } else if (b++ === 83){
//  alert("given condition for variable b is true");
// }
// let c = 12;
// if (c++ === 13){
//  alert("condition 1 is true");
// }
// else if (c === 13){
//  alert("condition 2 is true");
// }
// else if (++c < 14){
//  alert("condition 3 is true");
// }
// else if(c === 14){
//  alert("condition 4 is true");
// } 
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
// }
// if (true){
//  alert("True");
// }
// else if (false){
//  alert("False");
// }
// if("cat" < "car"){
//  alert("car is smaller than cat");
// }else{
//     alert("Condition is false");
// }








// 9. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute grade as
// per following table: 


// console.log("================================ Marsheet =================================");
// let english  = +prompt("Enter English Marks");
// let urdu = +prompt("Enter Urdu Marks");
// let math = +prompt("Enter Math Marks");
// let obtainedMarks = english + urdu + math;
// let totalMarks = 300;
// let percentage = obtainedMarks / totalMarks * 100;
// console.log("Total marks: " + totalMarks);
// console.log("Marks Obtained : " + obtainedMarks);
// console.log("Percentage : " + percentage + " % ");
// if(percentage >= 80){
//     console.log("Grade : A-one");
//     console.log("Remarks : Excellent");
// } else if(percentage >= 70){
//     console.log("Grade : A");
//     console.log("Remarks : Good");
// } else if(percentage >= 60){
//     console.log("Grade : B");
//     console.log("Remarks : you need to improve");
// } else if(percentage < 60){
//     console.log("Fail");
//     console.log("Remarks : Sorry");
// } else {
//     console.log(" plzz enter your marks ");
// }









// 10. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Take input
// from users, the following:
// a. Name of item1
// b. Name of item2
// c. Price of item 1
// d. Price of item 2
// e. Ordered quantity of item 1
// f. Ordered Quantity of item 2
// g. Shipping charges
// Compute the total cost. If the total cost is above 2000 PKR ,
// offer them 10% discount & show the receipt in your browser

// -------------------- Not Solve --------------------

// let item1 = prompt("Enter the name of item 1");
// let item2 = prompt("Enter the name of item 2");
// let price1 = prompt("Enter the price of item 1");
// let price2 = prompt("Enter the price of item 2");
// let quantity1 = prompt("Enter the ordered quantity of item 1");
// let quantity2 = prompt("Enter the ordered quantity of item 1");
// let shippingCharges = prompt("Enter Shipping Charges");
// let totalCost = item1 + item2 + price1 + price2 + quantity1 + quantity2 + shippingCharges;
// let discount = 10 / totalCost * 100;
// if(totalCost > 2000){
//     console.log(discount);
// }else{
//     console.log("no discount");
// }










// 11. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


// let secretNumber = 1; 
// let userNumber = +prompt("Guest the secret number");
// if(userNumber === secretNumber){
//     alert("Bingo! Correct answer");
// } else if(userNumber === secretNumber + 1) {
//     alert("Close enough to the correct answer")
// }else{
//     alert("try again");
// }










// 12. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number is
// divisible by 3.


// let number = +prompt("Enter a number");
// if(number % 3 == 0){
//     alert(number + " is divisible by 3");
// }else{ 
//     alert(number + " is not divisible by 3");
// }











// 13. Names & Total scores of two teams are taken as input. Write
// a program that shows which team has won the game or show if
// there is a tie. (Team A or Team B)

// let teamNameA = prompt(" Enter the name of A Team ");
// let teamScoreA = +prompt(" Enter the Score of A Team ");
// let teamNameB = prompt(" Enter the name of B Team ");
// let teamScoreB = +prompt(" Enter the Score of B Team ");
// let result;
// if(teamScoreA > teamScoreB ){
//    alert(result = teamNameA + " Won the match ");
// } else if (teamScoreB > teamScoreA){
//    alert(result = teamNameB + " Won the match ");

// }else {
//     alert(" Something went wrong");
// }







// 14. Take a string, a number and a Boolean in three variables.
// Write a program that checks the type of variables & responds
// accordingly. Like :


// let str = "Pakistan is a string";
// let num = 92;
// let bool = true;
// if(typeof str ){
//     alert(str);
// } 
// if(typeof num){
//    alert(num + " is a number");
// }
//  if(typeof bool){
// alert(bool + " is a boolean");
// } 










// 15. Write a program that checks whether the given input is an
// even number or an odd number.


// let number = +prompt(" enter number ");
// if(number % 2 === 0) {
//     alert(number + " is an Even  number");
// }else {
//     alert(number + " is an Odd  number");
// }












// 16. Weather in Karachi nowadays is too cool, write a program
// that takes temperature as input and shows a message based on
// following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”




// let temperature = +prompt("Enter Karachi Temperature");
// if(temperature > 40){
//     alert("It is too hot outside.")
// }else if(temperature > 30){
//     alert("The Weather today is Normal.")
// }else if(temperature > 20){
//     alert("Today’s Weather is cool.")
// }else if(temperature >= 10){
//     alert("OMG! Today’s weather is so Cool.")
// }else{
//     alert("Only enter tenperature")
// }










// 17. Write a program to create a calculator for +,-,*, / & % using if
// statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.


// let firstNumber = +prompt("Enter First Number");
// let operators = prompt("Enter any one Operators +, -, *, /, %");
// let secondNumber = +prompt("Enter Second Number");
// let result;
// if(operators === "+"){
//      result = firstNumber + secondNumber;
// }else if(operators === "-"){
//     result = firstNumber - secondNumber;
// }else if(operators === "*"){
//     result = firstNumber * secondNumber;
// } else if(operators === "/"){
//     result = firstNumber / secondNumber;
// }else if(operators === "%"){
//     result = firstNumber % secondNumber;
// }
// alert(firstNumber + " " + operators + " "  + secondNumber + " "  + " is " + result)
//let result = firstNumber + secondNumber;












// 18. Write a program that takes user input day name. If the day is
// Monday, Tuesday, Wednesday, Thursday or Friday, then show
// “It’s a week day”. If the day is Saturday then show “It’s
// weekend”. If the day is Sunday then show “Yay! It’s a holiday”.



// let dayName = prompt("Enter the day");
// dayName = dayName.toLowerCase();
// if (dayName === "monday" || dayName === "tuesday" || dayName === "wednesday" || dayName === "thursday" || dayName === "friday" ) {
//     console.log("It's a Weekday");
// }else if (dayName === "saturday") {
//     console.log("It's Weekend");
// }else if (dayName === "sunday"){
//     console.log("Yay! It's a Holiday");
// }else{
//     console.log(" Plzz Enter only day Name ");
// }










// 19. Write a program that takes input user’s score, if it’s greater
// than 50, say “You are passed”. Otherwise, show “Try again!”




// let userScore = prompt('Please enter your score');
// if (userScore >= 50) {
//     console.log("You are pass");
// }else{
//     console.log("Try Again");
// }









// 20. Write a program that:
// a. takes 2 numbers.
// b. tells whichever number is the greater (higher) number.
// c. tells if they are equal
// Show the output to make sure it works (e.g. "The greater
// number of 5 and 10 is 10.").



// let take = +prompt("Enter Any 1 Number");
// let take2 = +prompt("Enter Any 2 Number");
// if(take > take2){
//     console.log(` The  greater number of  ${take} and  ${take2} is ${take} `);
// }else if(take < take2){
//     console.log(`The  greater number of  ${take2} and  ${take} is ${take2}`);
// }
// else if (take === take2){
//     console.log("Both numbers are equal");
// }else{
//     console.log("Enter only numbers")
// }






// 21. The Translator:
// Write a program that:
// a. takes 1 input, a language code (e.g. "es", "de", "en")
// b. tells "Hello, World" for the given language, for atleast 3
// languages. It should default to returning English.
// (Hint: use translate.google.com to check the translation of
// hello world in different languages)


// let language = prompt('Enter language code ("en", "es", "de" )');
// let translate;
// if(language === 'en') {
//     translate = " Hello World";  
// } else if(language === 'es') {
//     translate = " Hola Mundo";
// }else if(language === 'de') {
//     translate = " Hallo Welt";
// }else{
//     translate = "enter correct code";
// }
// alert(translate);





// 22. Write a program to take input a number & tell whether it’s a
// positive or negative number.



// let number = +prompt("Enter a number");
// if(number > 0){
//     alert(number + " is a positive number");
// } else if(number < 0){
//     alert(number + " is a negative number");
// } else {
//     alert("invalid number")
// }











// 23. The Pluralizer: Write a program that:
// a. takes 2 inputs, a noun and a number.
// b. tells the number and pluralized form, like "5 cats" or "1
// dog".
// Prompt the user to enter a noun

// let noun = prompt("Enter a noun:");
// let number = parseInt(prompt("Enter a number:"));
// let pluralNoun;
// if (number === 1) {
//     pluralNoun = noun;
// } else {
//     pluralNoun = noun + "s";
// }
// var result = number + " " + pluralNoun;
// alert(result);
