<?php
class EventCountdown {
  public function __construct() {
    add_action('init', [$this, 'register_block']);
    add_action('rest_api_init', [$this, 'register_rest_route']);
  }

  public function register_block() {
    register_block_type(__DIR__ . '/../../build', [
      'render_callback' => [$this, 'render_frontend'],
    ]);
  }

  public function render_frontend($attributes) {
    wp_enqueue_script('event-countdown-frontend');
    ob_start();
    ?>
    <div class="event-countdown" 
      data-event-date="<?= esc_attr($attributes['eventDate']) ?>"
      data-timezone="<?= esc_attr($attributes['timezone']) ?>">
      <!-- Rendered via JavaScript -->
    </div>
    <?php
    return ob_get_clean();
  }

  public function register_rest_route() {
    register_rest_route('event-countdown/v1', '/time-left', [
      'methods'  => 'GET',
      'callback' => [$this, 'calculate_time_left'],
      'args'     => [
        'eventDate' => ['required' => true],
        'timezone'  => ['default' => 'UTC'],
      ],
    ]);
  }

  public function calculate_time_left($request) {
    $event_date = $request->get_param('eventDate');
    $timezone   = new DateTimeZone($request->get_param('timezone'));
    $now        = new DateTime('now', $timezone);
    $event      = new DateTime($event_date, $timezone);

    if ($event < $now) {
      return new WP_REST_Response(['error' => 'Event date has passed'], 400);
    }

    return [
      'days'    => $now->diff($event)->format('%a'),
      'hours'   => $now->diff($event)->format('%h'),
      'minutes' => $now->diff($event)->format('%i'),
    ];
  }
}
new EventCountdown();