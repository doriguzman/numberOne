//Age Calculator
var birthYear = 1995;
var futureYear = 2020;

var Age = futureYear - birthYear; 

console.log(" I will be either " + Age + " or " + (Age-1) + " in 2020");

// Snack Supply Calculator 
var myAge = 22;
var maxAge = 30;
var estimatedAmountDay = 5;
var estimatedAmountInYear= estimatedAmountDay * 365
var years= maxAge-myAge;
var total= estimatedAmountInYear * years

console.log(" You will need " + total + " snacks to last you until the age of " + maxAge )

//Properties of a Circle

var radius = 5;
var circumference = 2 * Math.PI * radius

console.log("The circumference is " + circumference)

var area = Math.PI * Math.pow(radius,2)
console.log("The area is:" + area)

//Temperature Converter

var Celsius = 10 
var convertCelcius = Celsius * 9/5 + 32 

console.log(Celsius + "°C is " + convertCelcius + "°F")

var fahrenheit = 50 
var conVertFahrenheit = (fahrenheit - 32) * 5/9
console.log(fahrenheit + " °F is " +  conVertFahrenheit + "°C") 