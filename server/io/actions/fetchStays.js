const { Stay, Customer, Hotel } = require('../../db/config');
const { reply } = require('../helpers');

const fetchStays = (hotelId, respond) => {
  Stay.findAll({
    attributes: ['id', 'bookingTime', 'checkInTime', 'checkOutTime', 'roomNumber', 'roomCharge', 'totalCharge'],
    where: { hotelId },
    include: [ Customer, Hotel ]
  })
  .then(stays => {
    console.log('stays!!!', stays)
    newStays = stays.map(stay => {
      return {
        id: stay.id,
        bookingTime: stay.bookingTime,
        checkInTime: stay.checkInTime,
        checkOutTime: stay.checkOutTime,
        currency: stay.hotel.currency,
        customerName: `${stay.customer.firstName} ${stay.customer.lastName}`,
        roomNumber: stay.roomNumber,
        roomCharge: stay.roomCharge,
        totalCharge: stay.totalCharge,
      }
    })
    console.log('newStays', newStays)
    respond(null, newStays)
  })
  .catch(err => respond(err))
}

module.exports = (client, action) => {
  return fetchStays(1, (err, stays) => {
    if (err) {
      console.log('error!', err)
      return reply(client, {
        type: 'FETCH_STAYS_ERROR'
      })
    }
    return reply(client, {
      type: 'FETCH_STAYS_SUCCESS',
      stays
    })
  })
}
