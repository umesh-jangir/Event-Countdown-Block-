import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, DateTimePicker, SelectControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__('Settings')}>
          <DateTimePicker
            currentDate={attributes.eventDate}
            onChange={(eventDate) => setAttributes({ eventDate })}
          />
          <SelectControl
            label={__('Timezone')}
            value={attributes.timezone}
            options={[
              { label: 'UTC', value: 'UTC' },
              { label: 'New York', value: 'America/New_York' },
            ]}
            onChange={(timezone) => setAttributes({ timezone })}
          />
        </PanelBody>
      </InspectorControls>
      <h3>{__('Countdown to Event')}</h3>
      <div className="event-date">
        {attributes.eventDate || __('Select a date in the sidebar')}
      </div>
    </div>
  );
}