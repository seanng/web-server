const Sequelize = require('sequelize');

// placeholder username and password
// TODO: move pw and username to a separate settings file
const sequelize = new Sequelize('haven', 'root', 'ca$hmere');

const Customer = sequelize.define('Customer', {
	username: Sequelize.STRING,
	password: Sequelize.STRING,
	firstName: Sequelize.STRING,
	lastName: Sequelize.STRING,
	email: Sequelize.STRING,
	phoneNo: Sequelize.STRING,
	accountStatus: Sequelize.INTEGER,
	paymentAuthStatus: Sequelize.INTEGER,
	stripeKey: Sequelize.STRING,
	regDate: Sequelize.DATE,
	rating: Sequelize.DECIMAL
});

const Hotel = sequelize.define('Hotel', {
	name: Sequelize.STRING,
	description: Sequelize.STRING,
	lat: Sequelize.DECIMAL,
	long: Sequelize.DECIMAL,
	rating: Sequelize.DECIMAL,
	availableRooms: Sequelize.INTEGER,
	rate: Sequelize.DECIMAL
});

const Stay = sequelize.define('Stay', {
	status: Sequelize.INTEGER,
	date: Sequelize.DATE,
	duration: Sequelize.INTEGER, //in minutes?
	totalAmount: Sequelize.DECIMAL,
	transactionStatus: Sequelize.INTEGER
});

// many-to-many relationship between customers and hotels
Customer.belongsToMany(Hotel, {through: Stay});
Hotel.belongsToMany(Customer, {through: Stay});

const Employee = sequelize.define('Employee', {
	username: Sequelize.STRING,
	password: Sequelize.STRING,
	firstName: Sequelize.STRING,
	lastName: Sequelize.STRING,
	email: Sequelize.STRING,
	phoneNo: Sequelize.STRING,
	admin: Sequelize.INTEGER
});

// one-to-many relationship
Hotel.hasMany(Employee);

Customer.sync();
Hotel.sync();
Stay.sync();
Employee.sync();

module.exports = {
	sequelize,
	Customer,
	Hotel,
	Stay,
	Employee
};
