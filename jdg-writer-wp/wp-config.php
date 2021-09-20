<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'jdg-writer-site' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '*t*NcpmGI.V)-spSU`DwT3|Q;g6l&*JFvXm40|RqX^l!Afi:MFsjFgNvCB0L~{Vn' );
define( 'SECURE_AUTH_KEY',  'NZSXrJ`dZQhl!w/Q7(DPL;u/YkHnUW+5o`8*[?KM)^9$)o]/;Y@kvwBkTvlI>eoD' );
define( 'LOGGED_IN_KEY',    'ni,>f,G]do3rqyPF5 !#{Fn0?]FkA 2JF`E!?))_4@Vv;0jYcEXn%Sq*7uy>$m+s' );
define( 'NONCE_KEY',        'nLb%-BZ7.ZjS zX:D:F/HXY:#L9n12r~A2=L4KbRJF~AXmM<EG?WObkkQXjY)tfn' );
define( 'AUTH_SALT',        ';CsEDb` jkct g$Ln,r08z!k[seJfdp6GzH#u01QKLrR/p2f1M[(/=,4opMoIiuT' );
define( 'SECURE_AUTH_SALT', 'W{AC;KiZ8Lwhn#9c8D,d<H:Bj(=TS97{~QCY#1q5WPlZ)q8^xGe 0z)nNv:`{:qb' );
define( 'LOGGED_IN_SALT',   '] >-@/fF]~SXKT([.o=vlT4HzTX?8|Bqm AObW2)ql]6a%yU~.pX-6 vgZ>a,%AH' );
define( 'NONCE_SALT',       'CM*7bE;deuBSY.H|S~o[$+=g4.nDNsx(xzj+Tsp%LsBu;+K0PdshU]bFr]![S7Qs' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
