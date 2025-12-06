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

// Layout Constants
export const LAYOUT = {
	MAX_CONTENT_WIDTH: '1200px',      // Maximum width for content containers
	MOBILE_BREAKPOINT: '768px',        // Mobile breakpoint for responsive design
	BORDER_RADIUS_SMALL: '15px',       // Small border radius for cards
	BORDER_RADIUS_LARGE: '50px',       // Large border radius for buttons
};

// Animation Constants
export const ANIMATION = {
	BOUNCE_DURATION: '2s',             // Duration of bounce animation
	TRANSITION_SPEED: '0.3s',          // Standard transition speed
};

// Physics constants for header letter animation
// Gravity: Controls how fast letters fall (lower = slower, higher = faster)
// Recommended range: 0.01 - 0.1
export const LETTER_GRAVITY = 0.01;

// Mouse push radius: Distance (in pixels) at which mouse starts pushing letters away
// Larger values mean letters react to mouse from further away
// Recommended range: 80 - 200
export const MOUSE_PUSH_RADIUS = 150;

// Additional physics constants
export const PUSH_STRENGTH = 2;           // Force multiplier for push effect
export const DAMPING = 0.99;              // Air resistance coefficient (0-1)
export const ROTATION_FACTOR = 2;         // How much letters rotate based on velocity
export const INITIAL_PUSH_MIN = -3;       // Minimum initial velocity
export const INITIAL_PUSH_MAX = 3;        // Maximum initial velocity
export const LETTER_RADIUS = 20;          // Collision radius for letters (pixels)
export const COLLISION_DAMPING = 0.8;     // Energy loss on collision (0-1)

// Blog Navigation Constants
export const BLOG_NAV_CIRCLE_SIZE = 200;           // Size of the navigation circle (in pixels)
export const BLOG_NAV_CIRCLE_EXPANDED_SIZE = 250;  // Size when hovered (in pixels)
export const BLOG_NAV_TRANSITION_DURATION = '0.3s'; // Transition duration for hover effect
