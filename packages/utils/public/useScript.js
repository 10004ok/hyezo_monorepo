'use strict';

var useAsync = require('./useAsync');

function useScript(url) {
  return useAsync(() => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    return new Promise((resolve, reject) => {
      script.addEventListener("load", resolve);
      script.addEventListener("error", reject);
      document.body.appendChild(script);
    });
  }, [url]);
}

module.exports = useScript;