function modal(url, markdown=false) {
    var modal = document.getElementsByClassName('modal');
    fetch(url).then(function (response) {
      return response.text().then(function (text) {
        if (markdown) {
            modal[0].innerHTML = `<div>
                <div class="reader">${marked.parse(text)}</div>
                    <div class="actions">
                    <a class="button icon-slot" onclick="modal_close()">
                      <ion-icon class="icon" name="close-outline"></ion-icon>
                        Close
                    </a>
                </div>`;
        } else {
            var data =
            modal[0].innerHTML = `<div>
                <pre><code class="language-yaml">${text}</code></pre>
                <div class="actions">
                <a class="button icon-slot" onclick="modal_close()">
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
  function modal_close() {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
      modals[i].classList.remove('show');
    }
  }
  function dropdown_reset() {
    var dropdowns = document.getElementsByClassName('dropdown');
    for (var i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove('show');
    }
  }
  document.addEventListener('keyup', function(e) {
    if (e.keyCode == 27) {
      modal_close();
      dropdown_reset();
    }
  });
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
      modal_close();
    }
    if (e.target.closest('.toggler')) {
      e.target.closest('.dropdown').classList.toggle('show');
    }
  });