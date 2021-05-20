const ajax = require('../lib/ajax');
const XHR_DONE = 4;

const rivraddon = (function () {
  // we can potentially receive the second arg although it is not used here
  // https://github.com/simplaex/Prebid.js/blob/2e014637a940a32912b7d13aa73011dfa29c0248/modules/rivrAnalyticsAdapter.js
  function trackPbjsEvent({ eventType, args }) {
    const url = 'https://tracker.simplaex-code-challenge.com/';
    const callback = {
      success: (responseText) => console.log(responseText),
      error: (statusText) => console.log(statusText),
    };

    const data = JSON.stringify({ eventType });
    const options = {
      contentType: 'application/json; charset=utf-8',
    };
    ajax(url, callback, data, options);
  }

  return {
    analytics: {
      enableAnalytics: function () {
        console.log(
          'SIMPLAEX CODE CHALLENGE LOG rivraddon analytics.enableAnalytics'
        );
      },
      trackPbjsEvent,
    },
  };
})();

window.rivraddon = rivraddon;
module.exports = rivraddon;
