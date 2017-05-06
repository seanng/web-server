const jwt = require('jsonwebtoken');
const { Hotel, Stay, Customer, Employee, sequelize } = require('./config');
const secret = '19ajsadijmvz';

const retrieveStays = (hotelId, respond) => {
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

const signToken = function signToken(id) {
  return jwt.sign({ userId: id }, secret, { expiresIn: 36000 });
};

const validateToken = function validateToken(token, cb) {
  return jwt.verify(token, secret, cb);
};

module.exports = {
  retrieveStays,
  signToken,
  validateToken,
};
