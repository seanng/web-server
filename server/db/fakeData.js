const { sequelize, Stay, Hotel, Customer } = require('./config');

fakeData = {
  customers: [{
    id: 1,
    firstName: 'Sean',
    lastName: 'Ng',
    email: 'shonum@gmail.com',
    phoneNo: '96968828',
  },{
    id: 2,
    firstName: 'Reggie',
    lastName: 'Miller',
    email: 'shonum2@gmail.com',
    phoneNo: '91910404',
  }, {
    id: 3,
    firstName: 'Michael',
    lastName: 'Wong',
    email: 'michaelwong@gmail.com',
    phoneNo: '91280102',
  }, {
    id: 4,
    firstName: 'Gigi',
    lastName: 'Wings',
    email: 'chickenwings@gmail.com',
    phoneNo: '99830203',
  }, {
    id: 5,
    firstName: 'Fucking',
    lastName: 'Legend',
    email: 'afuckinglegend@gmail.com',
    phoneNo: '12345678',
  }],
  hotels: [{
    id: 1,
    name: 'Regal Hotel Wanchai',
  }, {
    id: 2,
    name: 'Sheraton Hotel Kowloon',
  }, {
    id: 3,
    name: 'Stevenage Hotel',
  }, {
    id: 4,
    name: 'Westin Hotel',
  }, {
    id: 5,
    name: 'W Hotel'
  }],
  stays: [{
    id: 1,
    hotelId: 1,
    customerId: 1,
    status: 'Checked Out',
    roomNumber: 410,
    bookingTime: 1469381804189,
    checkInTime: 1470381804189,
    checkOutTime: 1470381904189,
    totalCharge: 102.59,
    currency: 'HKD',
  }, {
    id: 2,
    hotelId: 1,
    customerId: 2,
    status: 'Checked Out',
    roomNumber: 1029,
    bookingTime: 1469381804189,
    checkInTime: 1470381804189,
    checkOutTime: 1470381904189,
    totalCharge: 1203.18,
    currency: 'HKD',
  }, {
    id: 3,
    hotelId: 1,
    customerId: 3,
    status: 'Checked Out',
    roomNumber: 1023,
    bookingTime: 1469381804189,
    checkInTime: 1470381804189,
    checkOutTime: 1470381904189,
    totalCharge: 1603.30,
    currency: 'HKD',
  }],
  surcharges: [{
    id: 1,
    stayId: 1,
    service: 'Massage',
    status: 'Unsettled',
    cost: 30.05,
    currency: 'HKD',
  }, {
    id: 2,
    stayId: 1,
    service: 'Room Service',
    status: 'Unsettled',
    cost: 20.00,
    currency: 'HKD',
  }, {
    id: 3,
    stayId: 2,
    service: 'Room Service',
    status: 'Unsettled',
    cost: 25.50,
    currency: 'HKD',
  }, {
    id: 4,
    stayId: 2,
    service: 'Room Service',
    status: 'Unsettled',
    cost: 102.50,
    currency: 'HKD',
  }, {
    id: 5,
    stayId: 2,
    service: 'Pay TV',
    status: 'Unsettled',
    cost: 10.00,
    currency: 'HKD',
  }, {
    id: 6,
    stayId: 3,
    service: 'Pay TV',
    status: 'Unsettled',
    cost: 100.18,
    currency: 'HKD',
  }]
}

module.exports = {
  preloadData: () => {
    sequelize.sync(
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
