import packageInfo from "../../package.json";

// How to use this:
// ============================================================
// This file is used to store all the environment variables and constants used in the application.

// # To add a new variable:
// ============================================================
// - For environment variables & constants that are the same across all environments, add them to the GLOBAL_CONSTANTS object.
// - For environment-specific variables (i.e they change depending on the environemnt), add them to the environment's object in each of the CONFIG_BUILDER object.

// # To add a new environment:
// ============================================================
// 1. Add a new key to the CONFIG_BUILDER object with the environment name.
// 2. Duplicate the development object and replace the values with the new environment's values.

const APP_VERSION = packageInfo.version;

const NODE_ENV = import.meta.env.MODE || "development";
// const NODE_ENV = "production";

const GLOBAL_CONSTANTS = {
	// System Constants
	// ============================================================
	APP_NAME: packageInfo.name,
};

const CONFIG_BUILDER = {
	development: {
		...GLOBAL_CONSTANTS,

		// System Constants
		// ============================================================
		URL: {
			API_BASE_URL: import.meta.env.VITE_DEV_API_BASE_URL,
			API_VERSION: import.meta.env.VITE_APP_API_VERSION,
			CLIENT_URL: import.meta.env.VITE_DEV_CLIENT_URL,
		},

		// App Level Configs
		// ============================================================

		EXAMPLE_APP: {
			APP_ID: import.meta.env.VITE_APP_ID,
		},
	},

	production: {
		...GLOBAL_CONSTANTS,

		// System Constants
		// ============================================================
		URL: {
			API_BASE_URL: import.meta.env.VITE_PROD_API_BASE_URL,
			API_VERSION: import.meta.env.VITE_APP_API_VERSION,
			CLIENT_URL: import.meta.env.VITE_PROD_CLIENT_URL,
		},

		// App Level Configs
		// ============================================================

		EXAMPLE_APP: {
			APP_ID: import.meta.env.VITE_APP_ID,
		},
	},
} as const;

// Check if NODE_ENV is valid
if (!Object.keys(CONFIG_BUILDER).includes(NODE_ENV)) {
	throw new Error(`Invalid NODE_ENV: ${NODE_ENV}`);
}

const CONFIGS = CONFIG_BUILDER[NODE_ENV as keyof typeof CONFIG_BUILDER];

// Uncomment below to check configs set
// console.log("CONFIGS:", CONFIGS);

export { NODE_ENV, APP_VERSION, CONFIGS };
