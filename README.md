# 🎯 Event Countdown Block for WordPress

**A dynamic Gutenberg block** that displays real-time countdowns to events with timezone support, server-side rendering, and REST API integration. Perfect for event websites, product launches, or promotional campaigns.

![Event Countdown Block Screenshot](screenshot.png) *(Replace with actual screenshot)*

## ✨ Features
- **Interactive Editor**: Set event dates and timezones using React components (`DateTimePicker`, `SelectControl`).
- **Real-Time Updates**: Calculates time remaining via WordPress REST API.
- **SEO-Friendly**: Server-rendered HTML with Schema.org structured data.
- **Performance Optimized**: Uses transient caching for API responses.
- **Mobile Responsive**: Built with SCSS for seamless cross-device styling.

## 🛠️ Technologies
- **Frontend**: React, WordPress Gutenberg Components (`@wordpress/blocks`, `@wordpress/components`).
- **Backend**: PHP (WordPress REST API, `register_block_type`, `render_callback`).
- **Build Tools**: Webpack, `@wordpress/scripts`.
- **Security**: Input sanitization (`esc_attr`), nonce verification.

## 📦 Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/event-countdown-block.git
   cd event-countdown-block
