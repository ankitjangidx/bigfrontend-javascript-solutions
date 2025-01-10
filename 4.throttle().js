//   1st approach
function throttle(func, wait) {
  // your code here
  let last = 0;
  return function (...args) {
    let currentTime = new Date().getTime();
    if (currentTime - last < wait) return;
    last = currentTime;
    return func(...args);
  };
}

// 2nd approach
function throttle(func, wait) {
  // your code here
  let lastArgs = null,
    waiting = false;
  return function (...args) {
    if (!waiting) {
      func.apply(this, args);
      waiting = true;
      let timeout = () =>
        setTimeout(() => {
          waiting = false;
          if (lastArgs) {
            func.apply(this, lastArgs);
            waiting = true;
            lastArgs = null;
            timeout();
          }
        }, wait);
      timeout();
    } else lastArgs = args;
  };
}
