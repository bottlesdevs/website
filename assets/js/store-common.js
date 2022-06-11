function modal(url, markdown=false) {
    var modal = document.getElementsByClassName('modal');
    fetch(url).then(function (response) {
      return response.text().then(function (text) {
        modal[0].innerHTML = getModalMarkup();

        if (!markdown) {
            hljs.highlightAll();
        }
        
        modal[0].classList.add('show');

        function getModalMarkup() {
          return `<div>` +
          markdown ? `<div class="reader">${marked.parse(text)}</div>` : `<pre><code class="language-yaml">${text}</code></pre>` +
          `<div class="actions">
            <a class="button icon-slot" onclick="hide_element('modal')">
              <ion-icon class="icon" name="close-outline"></ion-icon>
                Close
            </a>
          </div>`;
        }
      }).catch(function (err) {
        console.log(err);
      });
    });
  }
  function hide_element(classToHide) {
    var allElements = document.getElementsByClassName(classToHide);
    for (var i = 0; i < allElements.length; i++) {
      allElements[i].classList.remove('show');
    }
  }
  document.addEventListener('keyup', function(e) {
    if (e.keyCode == 27) {
      hide_element('modal');
      hide_element('dropdown');
    }
  });
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
      hide_element('modal');
    }
    if (e.target.closest('.toggler')) {
      e.target.closest('.dropdown').classList.toggle('show');
    }
  });