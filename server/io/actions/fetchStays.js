const { Hotel, Stay, Customer, Employee, sequelize } = require('../../db/config');
const { reply } = require('../helpers');

const fetchStays = (hotelId, respond) => {
  Stay.findAll({
    where: { hotelId },
    include: [ Customer ]
  })
  .then(stays => {
    console.log("mamama stays", stays)
    newStays = stays.map(stay => {
      return {
        bookingTime: stay.bookingTime,
        checkInTime: stay.checkInTime,
        checkOutTime: stay.checkOutTime,
        customerName: `${stay.customer.firstName} ${stay.customer.lastName}`,
        roomNumber: stay.roomNumber,
        totalCharge: stay.totalCharge
      }
    })
    console.log('newStays', newStays)
    respond(null, newStays)
  })
  .catch(err => respond(err))
}

module.exports = (client, action) => {
  console.log('fetching stays.')
  return fetchStays(1, (err, stays) => {
    if (err) {
      console.log('error!', err)
      return reply(client, {
        type: 'FETCH_STAYS_ERROR'
      })
    }
    console.log('fetched stays!', stays)
    return reply(client, {
      type: 'FETCH_STAYS_SUCCESS',
      stays
    })
  })
}