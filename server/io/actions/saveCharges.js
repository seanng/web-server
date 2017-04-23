const { Surcharge, Stay } = require('../../db/config');
const { reply } = require('../helpers');

const saveCharges = (charges, totalCharge, stayId, respond) => {
  console.log('incoming charges', charges);
  // save charges into Surcharge
  return charges.reduce((promiseChain, charge) => {
    console.log('creating surcharge.')
    return Surcharge.create(charge)
  }, Promise.resolve())
  .then(() => {
    console.log('created surcharges.')
    return Stay.update({ totalCharge }, { where: { id: stayId } })
    .then(() => 
      Surcharge.findAll({ where: { stayId } })
      .then(charges => respond(null, charges, totalCharge))
    )
  })
}

module.exports = (client, action) => {
  const { charges, newTotal, stayId } = action;
  return saveCharges(charges, newTotal, stayId, (err, charges) => {
    if (err) {
      console.log('error!', err)
      return reply(client, {
        type: 'SAVE_CHARGES_ERROR'
      })
    }
    return reply(client, {
      type: 'SAVE_CHARGES_SUCCESS',
      charges,
      stayId,
      newTotal
    })
  })
}
