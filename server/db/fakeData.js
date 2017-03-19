const { sequelize, Stay, Hotel, Customer } = require('./config');

fakeData = {
  customers: [{
    firstName: 'Sean',
    lastName: 'Ng',
    email: 'shonum@gmail.com',
    phoneNo: '96968828',
  },{
    firstName: 'Reggie',
    lastName: 'Miller',
    email: 'shonum2@gmail.com',
    phoneNo: '91910404',
  }, {
    firstName: 'Michael',
    lastName: 'Wong',
    email: 'michaelwong@gmail.com',
    phoneNo: '91280102',
  }, {
    firstName: 'Gigi',
    lastName: 'Wings',
    email: 'chickenwings@gmail.com',
    phoneNo: '99830203',
  }, {
    firstName: 'Fucking',
    lastName: 'Legend',
    email: 'afuckinglegend@gmail.com',
    phoneNo: '12345678',
  }],
  hotels: [{
    name: 'Regal Hotel Wanchai',
  }, {
    name: 'Sheraton Hotel Kowloon',
  }, {
    name: 'Stevenage Hotel',
  }, {
    name: 'Westin Hotel',
  }, {
    name: 'W Hotel'
  }],
  stays: [{
    hotelId: 1,
    customerId: 1,
    status: 'Checked Out',
    roomNumber: 410,
    bookingTime: 1469381804189,
    checkInTime: 1470381804189,
    checkOutTime: 1470381904189,
  }, {
    hotelId: 1,
    customerId: 2,
    status: 'Checked Out',
    roomNumber: 1029,
    bookingTime: 1469381804189,
    checkInTime: 1470381804189,
    checkOutTime: 1470381904189,
  }, {
    hotelId: 1,
    customerId: 3,
    status: 'Checked Out',
    roomNumber: 1023,
    bookingTime: 1469381804189,
    checkInTime: 1470381804189,
    checkOutTime: 1470381904189,
  }]
}

module.exports = {
  preloadData: () => {
    sequelize.sync(
      // if force true, it will first drop tables before recreating them.
      { force: true }
    )
    .then(function() {
      fakeData.customers.forEach(customer => {
        const { firstName, lastName, email, phoneNo } = customer;
        return Customer.create({ firstName, lastName, email, phoneNo });
      })
    })
    .then(function() {
      fakeData.hotels.forEach(hotel => {
        const { name } = hotel;
        return Hotel.create({ name });
      })
    })
    .then(function() {
      fakeData.stays.forEach(stay => {
        const { hotelId, customerId, status, roomNumber, bookingTime, checkInTime, checkOutTime } = stay;
        return Stay.create({ hotelId, customerId, status, roomNumber, bookingTime, checkInTime, checkOutTime });
      })
    })
    .then(function() {
      console.log('created fake db data!')
    })
  }
}