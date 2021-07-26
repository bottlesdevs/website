---
title: AppStore
---

<section class="heading">
  <div class="container large">
    <h1>AppStore</h1>
    <p>Overview of the installers available in Bottles.</p>
  </div>
</section>

<section class="page">
  <div class="container large">
    <div class="warning">
      <p>This AppStore as the installer feature, is in early development.</p>
    </div>
    <br />
    <div class="store">
    </div>
  </div>
</section>

<div class="modal" id="modal_installer"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js"></script>
<script>
  function modal(url) {
    var modal = document.getElementsByClassName('modal');
    fetch(url).then(function (response) {
      return response.text().then(function (text) {
        var data =
          modal[0].innerHTML = `<div>
            <pre>${text}</pre>
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
          var card = `<div class="card">
            <div class="card-content">
              <h3>
                <img src="https://github.com/bottlesdevs/programs/blob/main/data/${item}/${installer["Icon"]}?raw=true" alt="${item}" />
                ${installer["Name"]}
              </h3>
              <p>${installer["Description"]}</p>
              <div class="tags">
                <span class="tag tag-${installer["Category"]}">${installer["Category"]}</span>
              </div>
              <div class="actions">
                <a onclick='modal("https://raw.githubusercontent.com/bottlesdevs/programs/main/${installer["Category"]}/${item}.yml")'>Show installer</a>
                <a href='https://github.com/bottlesdevs/programs/issues/new/choose'>Report problem</a>
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