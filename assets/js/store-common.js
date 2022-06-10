function modal(url, markdown=false) {
    var modal = document.getElementsByClassName('modal');
    fetch(url).then(function (response) {
      return response.text().then(function (text) {
        if (markdown) {
            modal[0].innerHTML = `<div>
                <div class="reader">${marked.parse(text)}</div>
                    <div class="actions">
                    <a class="button icon-slot" onclick="hide_element('modal')">
                      <ion-icon class="icon" name="close-outline"></ion-icon>
                        Close
                    </a>
                </div>`;
        } else {
            var data =
            modal[0].innerHTML = `<div>
                <pre><code class="language-yaml">${text}</code></pre>
                <div class="actions">
                <a class="button icon-slot" onclick="hide_element('modal')">
                  <ion-icon class="icon" name="close-outline"></ion-icon>
                    Close
                </a>
                </div>`;
            hljs.highlightAll();
        }
        modal[0].classList.add('show');
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