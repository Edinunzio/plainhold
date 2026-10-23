(function () {
  var buttons = document.querySelectorAll('.prompt button');

  function selectText(node) {
    var range = document.createRange();
    range.selectNodeContents(node);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  function copyText(node) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(node.textContent);
    }
    selectText(node);
    return document.execCommand('copy') ? Promise.resolve() : Promise.reject();
  }

  Array.prototype.forEach.call(buttons, function (button) {
    var label = button.textContent;
    var timer;

    button.setAttribute('aria-live', 'polite');

    function show(message) {
      button.textContent = message;
      clearTimeout(timer);
      timer = setTimeout(function () {
        button.textContent = label;
      }, 2500);
    }

    button.addEventListener('click', function () {
      var box = button.parentNode.querySelector('pre');
      copyText(box).then(
        function () {
          show('Copied');
        },
        function () {
          selectText(box);
          show('Press Ctrl+C (Cmd+C on a Mac) to copy');
        }
      );
    });
  });
})();
