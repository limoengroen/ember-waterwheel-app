import Ember from 'ember';
import ENV from '../config/environment';
import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

//const { RSVP, makeArray, isEmpty, run, assign, testing, warn } = Ember;

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: ENV.APP.host + ENV.APP.oauth2TokenEndpoint,
  clientId: ENV.APP.oauth2ClientId,

/*  authenticate(username, password, scope = [], headers = {}) {
    return new RSVP.Promise((resolve, reject) => {
      const data = {
        grant_type: 'password',
        client_id: ENV.APP.oauth2ClientId,
        client_secret: ENV.APP.oauth2ClientSecret,
        username,
        password
      };
      const serverTokenEndpoint = this.get('serverTokenEndpoint');
      const useResponse = this.get('rejectWithResponse');
      const scopesString = makeArray(scope).join(' ');
      if (!isEmpty(scopesString)) {
        data.scope = scopesString;
      }
      this.makeRequest(serverTokenEndpoint, data, headers).then((response) => {
        run(() => {
          if (!this._validate(response)) {
            reject('access_token is missing in server response');
          }

          const expiresAt = this._absolutizeExpirationTime(response['expires_in']);
          this._scheduleAccessTokenRefresh(response['expires_in'], expiresAt, response['refresh_token']);
          if (!isEmpty(expiresAt)) {
            response = assign(response, { 'expires_at': expiresAt });
          }

          resolve(response);
        });
      }, (response) => {
        run(null, reject, useResponse ? response : response.responseJSON);
      });
    });
  },

  _scheduleAccessTokenRefresh(expiresIn, expiresAt, refreshToken) {
    const refreshAccessTokens = this.get('refreshAccessTokens');
    if (refreshAccessTokens) {
      const now = (new Date()).getTime();
      if (isEmpty(expiresAt) && !isEmpty(expiresIn)) {
        expiresAt = new Date(now + expiresIn * 1000).getTime();
      }
      const offset = this.get('tokenRefreshOffset');
      if (!isEmpty(refreshToken) && !isEmpty(expiresAt) && expiresAt > now - offset) {
        run.cancel(this._refreshTokenTimeout);
        delete this._refreshTokenTimeout;
        if (!testing) {
          this._refreshTokenTimeout = run.later(this, this._refreshAccessToken, expiresIn, refreshToken, expiresAt - now - offset);
        }
      }
    }
  },

  _refreshAccessToken(expiresIn, refreshToken) {
    const data = { 'grant_type': 'refresh_token', 'refresh_token': refreshToken };
    const serverTokenEndpoint = this.get('serverTokenEndpoint');
    return new RSVP.Promise((resolve, reject) => {
      this.makeRequest(serverTokenEndpoint, data).then((response) => {
        run(() => {
          expiresIn = response['expires_in'] || expiresIn;
          refreshToken = response['refresh_token'] || refreshToken;
          const expiresAt = this._absolutizeExpirationTime(expiresIn);
          const data = assign(response, { 'expires_in': expiresIn, 'expires_at': expiresAt, 'refresh_token': refreshToken });
          this._scheduleAccessTokenRefresh(expiresIn, null, refreshToken);
          this.trigger('sessionDataUpdated', data);
          resolve(data);
        });
      }, (response) => {
        warn(`Access token could not be refreshed - server responded with ${response.responseJSON}.`);
        reject();
      });
    });
  },

  _absolutizeExpirationTime(expiresIn) {
    if (!isEmpty(expiresIn)) {
      return new Date((new Date().getTime()) + expiresIn * 1000).getTime();
    }
  },

  _validate(data) {
    return !isEmpty(data['access_token']);
  },*/
});
