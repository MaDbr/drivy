'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);



// Display cars 
	for (var i = 0; i < cars.length; i++){
	console.log(cars[i].pricePerDay);
	}


function convertDate(str){
	var re = /[0-9]+/g;
	var result = re[Symbol.match](str);
	
	var dateLoc = new Date(result[0], result[1]-1, result[2]);
	return dateLoc;
}

function getDays (beginDate, returnDate){
	var begin = convertDate(beginDate).getTime();
	var end = convertDate(returnDate).getTime();
	}
	
	
/*function getPrice()
{
	for (var i=0;i<cars.length;i++)
	{
		var car_km= [];
		var car_day=[];
		car_km[i]= cars[i].pricePerKm;
		car_day[i]=cars[i].pricePerDay;
	}
}
*/  


// Exercice 1 : Write code that generates the price for each driver
function getPrice() {
  var rentDuration;
  var rentNumberDays;
  var distance=[];
  for(var i = 0; i < rentals.length; i++) {
	distance[i]=rentals[i].distance; // on stock les distances
  	rentDuration = Math.abs(convertDate(rentals[i].returnDate).getTime() - convertDate(rentals[i].pickupDate).getTime());
    rentNumberDays = Math.ceil(rentDuration / (1000 * 3600 * 24)); // durée de la location en jours 
    rentals[i].price = rentNumberDays * cars[i].pricePerDay + rentals[i].distance * cars[i].pricePerKm; // on calcule le prix
	console.log(rentals[i].price);
    }
}

// Exercice 2 : Adapt the rental price computation to take these new rules into account.

function DecreasingPrice() {
  var rentDuration;
  var rentNumberDays;
  var distance=[];
  for(var i = 0; i < rentals.length; i++) {
	distance[i]=rentals[i].distance;
  	rentDuration = Math.abs(convertDate(rentals[i].returnDate).getTime() - convertDate(rentals[i].pickupDate).getTime());
    rentNumberDays = Math.ceil(rentDuration / (1000 * 3600 * 24));

	if(rentals[i].distance >=10)
	{
    rentals[i].price = rentNumberDays * (cars[i].pricePerDay*0.5) + rentals[i].distance * cars[i].pricePerKm;
	console.log(rentals[i].price);
	}
	else if (rentals[i].distance>=4)
	{
		rentals[i].price = rentNumberDays * (cars[i].pricePerDay*0.3) + rentals[i].distance * cars[i].pricePerKm;
	console.log(rentals[i].price);
	}
	else if (rentals[i].distance>=1)
	{
		rentals[i].price = rentNumberDays * (cars[i].pricePerDay*0.1) + rentals[i].distance * cars[i].pricePerKm;
	console.log(rentals[i].price);
	}
	else 
	{
		rentals[i].price = rentNumberDays * cars[i].pricePerDay* + rentals[i].distance * cars[i].pricePerKm;
	console.log(rentals[i].price);
	}
    }
}

//Exercice 3 : Compute the amount that belongs to the insurance, to the assistance and to drivy.



function Compute_Commission()
{
	var commission;
	var rentDuration;
	var rentNumberDays;
	for(var i=0;rentals.length;i++)
	{
		commission = rentals[i].price*0.3;
		rentals[i].insurance=commission/2; //insurance
		
		//assistance
		rentDuration = Math.abs(convertDate(rentals[i].returnDate).getTime() - convertDate(rentals[i].pickupDate).getTime());
		rentNumberDays = Math.ceil(rentDuration / (1000 * 3600 * 24));
		rentals[i].assistance=rentNumberDays*1;
		
		//drivy
		rentals[i].drivy= commission - rentals[i].insurance ;
		
		console.log("commission: "+commission+", assistance: "+rentals[i].assistance+", drivy: "+rentals[i].drivy);
		
	}
}

//Exercice 4 : Compute the new amount price if the driver subscribed to deductible option.

function Deductible_Option()
{
	var rentDuration;
	var rentNumberDays;
	for(var i=0;rentals.length;i++)
	{
		rentDuration = Math.abs(convertDate(rentals[i].returnDate).getTime() - convertDate(rentals[i].pickupDate).getTime());
		rentNumberDays = Math.ceil(rentDuration / (1000 * 3600 * 24));
		if(rentals[i].deductibleReduction == true)
		{
			rentals[i].price += 4*rentNumberDays;
		}
	}
}

// Exercice 5 : 
// - Compute the debit for the driver
// - Compute the credit of the car owner, insurance, assistance and drivy.

function Compute_Debit_Credit(){
	
	for (i = 0; i< actors.length; i++)
	{
		if(actors[i].who == "driver"){
			actors[i].amount = rentals[i].price; // prix de la location
		}
		
		else if (actors[i].who = "owner"){
			actors[i].amount = rentals[i].price - rentals[i].price * 0.3; // prix de la location - la commission
		}
		
		else if (actors[i].who = "insurance"){ // 50% de la commission
			actors[i].amount = rentals[i].price * 0.3 * 0.5;
		}
		
		else if (actors[i].who == "assistance"){
			actors[i].amount = rentNumberDays * 1 // 1€ par jour
		}
		
		else if (actors[i].who == "drivy"){
			actors[i].amount = rentals[i].price -  rentals[i].price * 0.3 - rentals[i].price * 0.3 * 0.5 - rentNumberDays * 1; 
		}
	}
}

// Exercice 6 : Compute the debit for the driver and the credit of the car owner, insurance, assistance and drivy with the rental modification.

