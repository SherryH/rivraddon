/**
 * mini version of ajax adapted from:
 * https://github.com/simplaex/Prebid.js/blob/2e014637a9/src/ajax.js
 *
 */
const XHR_DONE = 4;

function ajax(url, callback, data, options) {
  let method = options.method || (data ? 'POST' : 'GET');
  const xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.setRequestHeader('Content-Type', options.contentType || 'text/plain');

  if (typeof callback === 'function') {
    callback.success = callback;
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XHR_DONE) {
      let status = xhr.status;
      if ((status >= 200 && status < 300) || status === 304) {
        callback.success(xhr.responseText, xhr);
      } else {
        callback.error(xhr.statusText, xhr);
      }
    }
  };

  xhr.onerror = function () {
    console.log('Request Failed');
  };
  if (method === 'POST' && data) {
    xhr.send(data);
  } else {
    xhr.send;
  }
}

module.exports = ajax;
