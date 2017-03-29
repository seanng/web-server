const Sequelize = require('sequelize');

// placeholder username and password
// TODO: move pw and username to a separate settings file
const sequelize = new Sequelize('haven', 'root', 'Ca$hmere1', {
  dialect: 'postgres',
});

const Customer = sequelize.define('customer', {
  regDate: Sequelize.DATE,
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING,
  phoneNo: Sequelize.STRING,
  accountStatus: Sequelize.INTEGER,
  paymentAuthStatus: Sequelize.INTEGER,
  stripeKey: Sequelize.STRING, // <-- this needs to be looked into further
  rating: Sequelize.DECIMAL,
});

const Hotel = sequelize.define('hotel', {
  regDate: Sequelize.DATE,
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  photos: Sequelize.ARRAY(Sequelize.STRING), // array[0] would be the primary photoURL
  lat: Sequelize.DECIMAL,
  long: Sequelize.DECIMAL,
  address: Sequelize.STRING,
  paymentInfo: Sequelize.JSON, // <-- this needs to be looked into further
  rate: Sequelize.DECIMAL, // <-- hourly? or per minute?
  rateCurrency: Sequelize.STRING,
  rating: Sequelize.DECIMAL,
});

const Stay = sequelize.define('stay', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  status: Sequelize.STRING,
  bookingTime: Sequelize.DATE,
  checkInTime: Sequelize.DATE, // Update on check in
  checkOutTime: Sequelize.DATE, // Update on check out
  roomNumber: Sequelize.STRING, // Update on create Room
  roomType: Sequelize.STRING,
  roomCharge: Sequelize.JSON,
  /* example roomCharge: {
    status: string
    amount: decimal
    currency: string
  } // Update on check out */
  totalCharge: Sequelize.DECIMAL(10,2), // Update on any charge change
  currency: Sequelize.STRING,
});

const Surcharge = sequelize.define('surcharge', {
  service: Sequelize.STRING,
  status: Sequelize.STRING,
  cost: Sequelize.DECIMAL(10,2),
})
// many-to-many relationship between customers and hotels

Customer.belongsToMany(Hotel, { through: Stay });
Hotel.belongsToMany(Customer, { through: Stay });

Customer.hasMany(Stay);
Stay.belongsTo(Customer);

Hotel.hasMany(Stay);
Stay.belongsTo(Hotel);

Stay.hasMany(Surcharge);
Surcharge.belongsTo(Stay);

const Employee = sequelize.define('employee', {
  regDate: Sequelize.DATE,
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING,
  phoneNo: Sequelize.STRING,
  admin: Sequelize.INTEGER, // level 1: staff, level 2: admin, level 3: super-user? (i.e. customer service)
});

// one-to-many relationship
Hotel.hasMany(Employee);

// Customer.sync();
// Hotel.sync();
// Stay.sync();
// Employee.sync();

module.exports = {
  sequelize,
  Customer,
  Hotel,
  Stay,
  Employee,
  Surcharge,
};
