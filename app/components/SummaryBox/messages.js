/*
 * SummaryBox Messages
 *
 * This contains all the text for the SummaryBox component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.SummaryBox.header',
    defaultMessage: 'Summary',
  },
  inbound: {
    id: 'app.components.SummaryBox.inbound',
    defaultMessage: 'Inbound',
  },
  checkedin: {
    id: 'app.components.SummaryBox.checkedin',
    defaultMessage: 'Checked In',
  },
  checkedout: {
    id: 'app.components.SummaryBox.checkedout',
    defaultMessage: 'Checked Out',
  },
  available: {
    id: 'app.components.SummaryBox.available',
    defaultMessage: 'Available',
  },
  total: {
    id: 'app.components.SummaryBox.total',
    defaultMessage: 'Total',
  },
});
