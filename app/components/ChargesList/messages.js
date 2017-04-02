/*
 * ChargesList Messages
 *
 * This contains all the text for the ChargesList component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  service: {
    id: 'app.components.ChargesList.service',
    defaultMessage: 'Service',
  },
  settled: {
    id: 'app.components.ChargesList.settled',
    defaultMessage: 'Settled?',
  },
  updated: {
    id: 'app.components.ChargesList.updated',
    defaultMessage: 'Updated?',
  },
  price: {
    id: 'app.components.ChargesList.price',
    defaultMessage: 'Price ({currency})',
  },
  total: {
    id: 'app.components.ChargesList.total',
    defaultMessage: 'Total',
  },
});
