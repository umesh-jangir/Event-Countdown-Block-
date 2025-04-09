import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import './styles.scss';

registerBlockType('custom/event-countdown', {
  title: 'Event Countdown',
  icon: 'clock',
  category: 'widgets',
  attributes: {
    eventDate: { type: 'string', default: '' },
    timezone: { type: 'string', default: 'UTC' },
  },
  edit: Edit,
  save: Save,
});