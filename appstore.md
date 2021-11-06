---
title: AppStore
---

<section class="heading">
  <div class="container large center">
    <h1>AppStore</h1>
    <p>Overview of the installers available in Bottles.</p>
    <input class="store-search" type="search" autocomplete="off" placeholder="Epic Games Store" />
  </div>
</section>

<section class="page">
  <div class="container large">
    <div class="warning">
      <p>This AppStore as the installer feature, is in early development.</p>
    </div>
    <br />
    <div class="store store-results">
    </div>
  </div>
</section>

<div class="modal" id="modal_installer"></div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/languages/yaml.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js"></script>
<script>
  document.querySelector('.store-search').addEventListener('keyup', function(e) {
    var search = this.value.toLowerCase();
    var cards = document.querySelectorAll('.store .card');
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var text = card.innerText.toLowerCase();
      if (text.indexOf(search) > -1) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    }
  });
  
  function modal(url) {
    var modal = document.getElementsByClassName('modal');
    fetch(url).then(function (response) {
      return response.text().then(function (text) {
        var data =
          modal[0].innerHTML = `<div>
            <pre><code class="language-yaml">${text}</code></pre>
            <div class="actions">
              <a class="button icon-slot" onclick="modal_close()">
                <span class="mdi material-icons">close</span>
                Close
              </a>
              <a class="button icon-slot" href="https://github.com/bottlesdevs/programs">
                <span class="mdi material-icons">create</span>
                Edit
              </a>
            </div>`;
        modal[0].classList.add('show');
        hljs.highlightAll();
      }).catch(function (err) {
        console.log(err);
      });
    });
  }


  function modal_close() {
    var modal = document.getElementsByClassName('modal');
    modal[0].classList.remove('show');
  }

  var store = document.getElementsByClassName("store");
  document.addEventListener("DOMContentLoaded", function () {
    fetch('https://raw.githubusercontent.com/bottlesdevs/programs/main/index.yml')
      .then(response => response.text())
      .then((data) => {
        console.info("Installers database index found.");
        data = jsyaml.load(data)
        for (var item in data) {
          installer = data[item];
          icon = `https://github.com/bottlesdevs/programs/blob/main/data/${item}/${installer["Icon"]}?raw=true`;
          var card = `<div class="card">
            <div class="card-content">
              <div class="card-bg" style="background-image: url(${icon})"></div>
              <h3>
                <img src="${icon}" alt="${item}" />
                ${installer["Name"]}
              </h3>
              <p>${installer["Description"]}</p>
              <div class="tags">
                <span class="tag tag-${installer["Category"]}">${installer["Category"]}</span>
              </div>
              <div class="actions">
                <a onclick='modal("https://raw.githubusercontent.com/bottlesdevs/programs/main/${installer["Category"]}/${item}.yml")' title='Show installer'>
                  <span class="material-icons">code</span>
                </a>
                <a href='https://github.com/bottlesdevs/programs/issues/new/choose' title='Report problem'>
                  <span class="material-icons">bug_report</span>
                </a>
                <a href='https://github.com/bottlesdevs/programs/blob/main/Reviews/${item}.md' title='Read review'>
                  <span class="material-icons">book</span>
                </a>
                <a href='https://docs.usebottles.com/bottles/installers#use-installers' title='How to install'>
                  <span class="material-icons">download</span>
                </a>
              </div>
            </div>
          </div>`;
          store[0].innerHTML += card;
        }
      })
      .catch(err => {
        console.error("Failed to fetch Installers database index!");
        throw err
      });
  });
</script>