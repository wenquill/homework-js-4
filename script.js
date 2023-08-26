//1.......................................
const customer = {
    firstName: 'Arsenii',
    lastName: 'Silkov',
    email: 'arseniisilkov22@gmail.com',
    password: '123456',
    phone: '+38012345678',
    adress: {
        country: 'Ukraine',
        city: 'Kyiv',
        street: 'Sadova',
        flat: 21, 
    },
    showAdress () {
        for (key in this.adress) {
            console.log(`${key} : ${this.adress[key]}`)
        }
    }, 
    changeNumber (newNumber) {
        this.phone = newNumber;
    },
}

customer.showAdress();
customer.isMale = true;
delete customer.adress;

for (key in customer) {
    console.log(`customer -->  ${key}: ${customer[key]}`)
}

const newCustomer = Object.assign({}, customer);
console.dir(newCustomer);
const newCustomer2 = {...customer};
console.dir(newCustomer2);

//2.......................................
const cat = {
    name: 'Murka',
    color: 'black',
    isMale: false,
    isFurnitureDemage: true,
}

for (key in cat) {
    console.log(`cat --> ${key}: ${cat[key]}`);
}



//3.................................
function Book (author, name, year, publish, price) {
    this.author = author;
    this.name = name;
    this.year = year;
    this.publishingHouse = publish;
    this.price = price;

    this.ageCalc = function (currentYear) {
        return currentYear - this.year;
    }

    this.changePrice = function (newPrice) {
        this.price = newPrice;
    }
}

const book1 = new Book ('Stephen King', 'Outsider', 2015, {name: 'Force', city: 'New York'}, 300);
console.log(book1);

console.log(book1.ageCalc(2023));
console.log(book1.changePrice(400));
console.log(book1);