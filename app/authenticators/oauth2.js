import Ember from 'ember';
import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

const { RSVP, makeArray, isEmpty, run } = Ember;

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: "http://ember-crud.dd:8080/oauth/token",
  client_id: "2290e7d0-ddef-44ca-ab22-72dfa9b686f5",
  client_secret: "%n&pjgs!VR3HAZw4",

  authenticate(username, password, scope = [], headers = {}) {
    return new RSVP.Promise((resolve, reject) => {
      const client_id = this.get("client_id");
      const client_secret = this.get("client_secret");
      const data = { 'grant_type': 'password', username, password, client_id, client_secret };
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
  }
});
