import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

const {isEmpty} = Ember;

export default Base.extend({
  authorize(data, block) {
    if (!isEmpty(data.hash)) {
      block('Authorization', `Basic ${data.hash}`);
//      block('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImEyY2RmYjAwMDA5NmU1OTIwZTQ1YTc5YWZiZGZiN2MzNzU1ZjI0ZTdhNmJiMTZmNmY4ZTliZjU1OWJhMzNjOGY5MzEwZDE1MzUyZGQ3MzAyIn0.eyJhdWQiOiI1ZTRkNGFlNS02NGY4LTQ3NTktODM3Yi05OGFjMDljZTg3M2YiLCJqdGkiOiJhMmNkZmIwMDAwOTZlNTkyMGU0NWE3OWFmYmRmYjdjMzc1NWYyNGU3YTZiYjE2ZjZmOGU5YmY1NTliYTMzYzhmOTMxMGQxNTM1MmRkNzMwMiIsImlhdCI6MTQ4MTkyMDE2NSwibmJmIjoxNDgxOTIwMTY1LCJleHAiOjE0ODE5MjA0NjUsInN1YiI6IjUyIiwic2NvcGVzIjpbImF1dGhlbnRpY2F0ZWQiXX0.nMHHnz4OyPXBAZBmBx6Ec7ikYrSsP-3j0ukXDoQOgVQ3YdXCoAG_cc22YOpXaUgca-WXw87e72ukOu5Mz-ixp91U6BRqfI9KByldUS1G6euK_S5soDmEZBAyDb5zkGtow_0UADuiSnjw7LWozbkc_Xbwh2SGvrssbodS72bhLMB-2P-8YpTMiqN8l-TYPRKhM29BpWkkh-taUipdqDtvWlue9RRKpujGG13Wshs45M_wBMpTb6TGNYnyeO5PXjngDvGsY_S8GGZnejX6giYQJEqFlMCPhQ_eUY9VJiahGCYpyhzC_GYYBE5TjrnOA1NrGFrQ9l01mXM1RSbuzCH4hw');
    }
  }
});
