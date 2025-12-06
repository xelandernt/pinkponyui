// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Pink Pony Running Club';
export const SITE_DESCRIPTION = 'Run Pony Run!';
export const INSTAGRAM_URL = 'https://instagram.com/pinkponyrunningclub';

// Color Theme Constants
export const COLORS = {
	// Primary colors
	PRIMARY_PINK: '#ff1493',
	SECONDARY_PINK: '#ff69b4',
	LIGHT_PINK: '#e6b3e6',
	ORCHID: '#da70d6',
	
	// Background colors
	BLACK: '#000',
	DARK_PURPLE: '#1a0a1a',
	DARKER_PURPLE: '#2d1b2d',
	MEDIUM_PURPLE: 'rgba(45, 27, 45, 0.85)',
	
	// Text colors
	WHITE: '#fff',
};

// Physics constants for header letter animation
// Gravity: Controls how fast letters fall (lower = slower, higher = faster)
// Recommended range: 0.01 - 0.1
export const LETTER_GRAVITY = 0.01;

// Mouse push radius: Distance (in pixels) at which mouse starts pushing letters away
// Larger values mean letters react to mouse from further away
// Recommended range: 80 - 200
export const MOUSE_PUSH_RADIUS = 150;
