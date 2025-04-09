export default function Save({ attributes }) {
  return (
    <div className="event-countdown" 
      data-event-date={attributes.eventDate}
      data-timezone={attributes.timezone}>
      {/* Populated via REST API in frontend.js */}
    </div>
  );
}