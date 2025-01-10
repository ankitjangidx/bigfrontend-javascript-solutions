
function debounce(func, wait) {
    // your code here
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, wait);
    }
  }