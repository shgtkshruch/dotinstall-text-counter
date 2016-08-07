(() => {
  'use strict';

  const comment = document.getElementById('js-comment');
  const label = document.getElementById('js-label');

  const LIMIT = 30;
  const WARNING = 10;

  label.textContent = LIMIT;

  comment.addEventListener('keyup', function(e) {
    const remaining = LIMIT - this.value.length;
    label.textContent = remaining;

    if (remaining < WARNING) {
      label.classList.add('textCounter__leftText--warning');
    } else {
      label.classList.remove('textCounter__leftText--warning');
    }
  }, false);

})();
