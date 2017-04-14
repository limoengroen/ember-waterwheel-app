/**
 * Have ember-simple-auth use a Cookie-based store for its session store, to
 * support FastBoot.
 *
 * @todo - If FastBoot is not needed and you would prefer it use the browser's
 * localStorage instead, then comment-out or delete this file completely.
 */

import CookieStore from 'ember-simple-auth/session-stores/cookie';

export default CookieStore.extend();
