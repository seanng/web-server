/*
 * ChargesModal Messages
 *
 * This contains all the text for the ChargesModal component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.ChargesModal.header',
    defaultMessage: 'Surcharges for {name} on {date}',
  },
  client: {
    id: 'app.components.ChargesModal.client',
    defaultMessage: 'Client',
  },
  date: {
    id: 'app.components.ChargesModal.date',
    defaultMessage: 'Date',
  },
  add: {
    id: 'app.components.ChargesModal.add',
    defaultMessage: 'Add',
  },
  cancel: {
    id: 'app.components.ChargesModal.cancel',
    defaultMessage: 'Cancel',
  },
  save: {
    id: 'app.components.ChargesModal.save',
    defaultMessage: 'Update Changes',
  },
  price: {
    id: 'app.components.ChargesModal.price',
    defaultMessage: 'Price ({currency})',
  },
  service: {
    id: 'app.components.ChargesList.service',
    defaultMessage: 'Service',
  },
});
