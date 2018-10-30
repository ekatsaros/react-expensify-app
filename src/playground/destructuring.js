//
///Object destructuring
//

// const person = {
// 	name: 'Vagos',
// 	age: 34,
// 	location: {
// 		city: 'Philadeplhia',
// 		temp: 88
// 	}
// };

// const {name: firstName = 'Anonymus' , age} = person; // defaults when destructuring
// console.log(`${firstName} is ${age}`)


// const { city, temp: temprature } = person.location; // ability to change name variable in destructuring
// if (city && temprature){
	
// console.log(`It's ${temprature} in ${city}.`)
// }



//
/// Array detructuring
//

const address = ['1299 S Junipero Street', 'Philadeplhia', 'Pennsylvania', '19147']

const [, city, state = 'New York'] = address 

console.log(`You are in ${city} ${state}`)

const item = ['Coffee (iced)', '$2.00', '$2.50', '$2.75'];

const [itemName, , price] = item

console.log(`A medium ${itemName} costs ${price}`)