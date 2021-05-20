const XHR_DONE = 4;

const rivraddon = (function () {
  // we can potentially receive the second arg although it is not used here
  // https://github.com/simplaex/Prebid.js/blob/2e014637a940a32912b7d13aa73011dfa29c0248/modules/rivrAnalyticsAdapter.js
  function trackPbjsEvent({ eventType, args }) {
    // report the events to the tracker
    // what event types are there? bidding and analytics
    // it prob needs to be hooked in with analytics
    // https://docs.prebid.org/dev-docs/integrate-with-the-prebid-analytics-api.html
    // assumption:
    // rivraddon is to be called inside rivr analytics to track prebid events
    // check the repo on other analytics adaptor!
    // what event types are to be recorded?
    // this is an ENDPOINT adapter
    // eventType and args are sent on firing ajax req.
    // https://github.com/prebid/Prebid.js/blob/master/src/AnalyticsAdapter.js

    // now I have got 6 eventTypes
    // I should send the events via xhr

    // where do I fire the ajax req? here?

    const xhr = new XMLHttpRequest();
    console.log('hi');
    xhr.open('POST', 'https://tracker.simplaex-code-challenge.com/');
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    console.log({ eventType });
    // support all browsers, not just modern browsers
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XHR_DONE) {
        let status = xhr.status;
        debugger;
        if ((status >= 200 && status < 300) || status === 304) {
          console.log('success');
          console.log(xhr.responseText);
          console.log(JSON.stringify(xhr.response));
        } else {
          console.log('error!');
          console.log(xhr.statusText);
        }
      }
    };

    xhr.onerror = function () {
      console.log('Request Failed');
    };

    xhr.send(JSON.stringify({ eventType }));
  }

  // there is no original window.rivraddon
  // this is called from within the adaptor automatically!!

  // to try out
  // trackPbjsEvent received callbacks
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
