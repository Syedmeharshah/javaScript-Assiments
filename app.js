
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


//   ===================Continue===================











