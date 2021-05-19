window.rivraddon = (function () {
  function trackPbjsEvent({ eventType, args }) {
    console.log('hi');
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

    // where do I fire the ajax req? here?
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://tracker.simplaex-code-challenge.com/');
    console.log({ eventType });
    xhr.onload = function () {
      const res = xhr.response;
      console.log({ res });
    };
    xhr.send({ eventType });
  }

  // there is no original window.rivraddon
  // this is called from within the adaptor automatically!!

  // to try out
  // trackPbjsEvent received callbacks
  return {
    enableAnalytics: function () {
      console.log(
        'SIMPLAEX CODE CHALLENGE LOG rivraddon analytics.enableAnalytics'
      );
    },
    analytics: {
      trackPbjsEvent,
    },
    trackPbjsEvent,
  };
})();
