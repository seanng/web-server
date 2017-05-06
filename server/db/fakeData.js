const { sequelize, Surcharge, Stay, Hotel, Customer, Employee } = require('./config');

const fakeData = {
  customers: [{
    firstName: 'Sean',
    lastName: 'Ng',
    password: 'abc',
    email: 'shonum@gmail.com',
    phoneNo: '96968828',
  }, {
    firstName: 'Reggie',
    lastName: 'Miller',
    password: 'abc',
    email: 'shonum2@gmail.com',
    phoneNo: '91910404',
  }, {
    firstName: 'Michael',
    lastName: 'Wong',
    password: 'abc',
    email: 'michaelwong@gmail.com',
    phoneNo: '91280102',
  }, {
    firstName: 'Gigi',
    lastName: 'Wings',
    password: 'abc',
    email: 'chickenwings@gmail.com',
    phoneNo: '99830203',
  }, {
    firstName: 'Fucking',
    lastName: 'Legend',
    password: 'abc',
    email: 'afuckinglegend@gmail.com',
    phoneNo: '12345678',
  }],
  hotels: [{
    name: 'Regal Hotel Wanchai',
    rate: 400.00,
    currency: 'HKD',
  }, {
    name: 'Sheraton Hotel Kowloon',
    rate: 400.00,
    currency: 'HKD',
  }, {
    name: 'Stevenage Hotel',
    rate: 400.00,
    currency: 'HKD',
  }, {
    name: 'Westin Hotel',
    rate: 400.00,
    currency: 'HKD',
  }, {
    name: 'W Hotel',
    rate: 400.00,
    currency: 'HKD',
  }],
  employees: [{
    hotelId: 1,
    firstName: 'BigFat',
    lastName: 'Loser',
    email: 'tester@testhotel.com',
    password: 'asdfasdf',
  }, {
    hotelId: 1,
    firstName: 'BigFat',
    lastName: 'Winner',
    email: 'tester2@testhotel.com',
    password: 'asdfasdf',
  }, {
    hotelId: 2,
    firstName: 'Meow',
    lastName: 'Wolfcat',
    email: 'test@sheraton.com',
    password: 'asdfasdf',
  }],
  stays: [{
    id: 1,
    hotelId: 1,
    customerId: 1,
    status: 'Checked Out',
    roomNumber: 410,
    bookingTime: 1491015600000,
    checkInTime: 1491019200000,
    checkOutTime: 1491026400000,
    roomCharge: 800.00,
    totalCharge: 850.05,
  }, {
    id: 2,
    hotelId: 1,
    customerId: 2,
    status: 'Checked Out',
    roomNumber: 1029,
    bookingTime: 1491026400000,
    checkInTime: 1491031800000,
    checkOutTime: 1491042600000,
    roomCharge: 1200.00,
    totalCharge: 1338.00,
  }, {
    id: 3,
    hotelId: 1,
    customerId: 3,
    status: 'Checked Out',
    roomNumber: 1023,
    bookingTime: 1491129000000,
    checkInTime: 1491131700000,
    checkOutTime: 1491138900000,
    roomCharge: 800.00,
    totalCharge: 900.18,
  }],
  surcharges: [{
    stayId: 1,
    service: 'Massage',
    status: 'Unsettled',
    charge: 30.05,
  }, {
    stayId: 1,
    service: 'Room Service',
    status: 'Unsettled',
    charge: 20.00,
  }, {
    stayId: 2,
    service: 'Room Service',
    status: 'Unsettled',
    charge: 25.50,
  }, {
    stayId: 2,
    service: 'Room Service',
    status: 'Unsettled',
    charge: 102.50,
  }, {
    stayId: 2,
    service: 'Pay TV',
    status: 'Unsettled',
    charge: 10.00,
  }, {
    stayId: 3,
    service: 'Pay TV',
    status: 'Unsettled',
    charge: 100.18,
  }],
};

module.exports = {
  preloadData: () => {
    sequelize.sync(
      { force: true }
    )
    .then(() =>
      fakeData.customers.reduce((promiseChain, customer) => {
        const { firstName, lastName, email, phoneNo } = customer;
        return Customer.create({ firstName, lastName, email, phoneNo });
      }, Promise.resolve())
      .then(() =>
        fakeData.hotels.reduce((promiseChain, hotel) => {
          const { name, rate, currency } = hotel;
          return Hotel.create({ name, rate, currency });
        }, Promise.resolve())
        .then(() =>
          fakeData.stays.reduce((promiseChain, stay) => {
            const { hotelId, customerId, status, roomNumber, bookingTime, checkInTime, checkOutTime, totalCharge, roomCharge } = stay;
            return Stay.create({ hotelId, customerId, status, roomNumber, bookingTime, checkInTime, checkOutTime, totalCharge, roomCharge });
          }, Promise.resolve())
          .then(() =>
            fakeData.surcharges.reduce((promiseChain, surcharge) => {
              const { stayId, service, status, charge } = surcharge;
              return Surcharge.create({ stayId, service, status, charge });
            }, Promise.resolve())
            .then(() =>
              fakeData.employees.reduce((promiseChain, employee) => {
                const { hotelId, email, firstName, lastName, password } = employee;
                return Employee.create({ hotelId, email, firstName, lastName, password });
              }, Promise.resolve())
            )
          )
        )
      )
    );
  },
};
