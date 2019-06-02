//React Makes Any develoepr better at Javascript Eventually
//Its librarys thats here to stay for longer time 


//So lets take a look into Javascript Objects 

//review 
//dot and bracket notation
//dot used more frequently
//bracket has more flexibility

//Example of simple Javascript Object and Check Which notaion is used more 
//i.e, wheather dot or bracket notation is used more 
//I think Bracket notation is one which can used however there key and value are 

var snowman = {
	isSnow: True,
	color: 'white',
	madeOfSnowBalls: 3,
	'First name': 'Frosty'
};

snowman.isSnow;
//True

snowman.color;
//white

snowman.madeOfSnowBalls;
//3

snowman.'First name';
//Error: the above line throws sytax error
snowman['First name'];
//'Frosty'


//ThereFore its best and easy to preffer bracket to access and change values too




//Lets build a object named house 
var house = {};

//And lets start assigning it some key and values to the house object

house.doors = 4;
house.bedrooms = 3;
house.address = "#20 RamaKrishna nilayam";
house.office = False;

 //Till now we didnot assign any key value of string type 
 //Lets create that with key of string type
 house['1st owner'] = "Puneeth";
 house['typeOf'] = "appartment";
 
// so we can say that dot notaion is easier during the assignment of obect.







 
