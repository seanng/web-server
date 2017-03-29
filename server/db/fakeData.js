const { sequelize, Surcharge, Stay, Hotel, Customer } = require('./config');

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
    stayId: 1,
    service: 'Massage',
    status: 'Unsettled',
    cost: 30.05,
  }, {
    stayId: 1,
    service: 'Room Service',
    status: 'Unsettled',
    cost: 20.00,
  }, {
    stayId: 2,
    service: 'Room Service',
    status: 'Unsettled',
    cost: 25.50,
  }, {
    stayId: 2,
    service: 'Room Service',
    status: 'Unsettled',
    cost: 102.50,
  }, {
    stayId: 2,
    service: 'Pay TV',
    status: 'Unsettled',
    cost: 10.00,
  }, {
    stayId: 3,
    service: 'Pay TV',
    status: 'Unsettled',
    cost: 100.18,
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
        const { hotelId, customerId, status, roomNumber, bookingTime, checkInTime, checkOutTime, totalCharge, currency } = stay;
        return Stay.create({ hotelId, customerId, status, roomNumber, bookingTime, checkInTime, checkOutTime, totalCharge, currency });
      })
    })
    .then(function() {
      fakeData.surcharges.forEach(surcharge => {
        const { stayId, service, status, cost, currency } = surcharge;
        return Surcharge.create({ stayId, service, status, cost, currency });
      })
    })
    .then(function() {
      console.log('created fake db data!')
    })
  }
}
