/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const TEST_SOCKET = 'server/test_socket';
export const CHECK_AUTH = 'server/CHECK_AUTH';
export const DEFAULT_LOCALE = 'en';
export const TOKEN_VALIDATED = 'app/app/TOKEN_VALIDATED'
export const TOKEN_INVALID = 'app/app/INVALIDATE_CURRENT_USER'
export const LOGOUT = 'app/app/LOGOUT'
