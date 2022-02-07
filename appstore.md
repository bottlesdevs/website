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
			<p>This functionality is new and we are still populating the database. 
      Do you want to <a href="https://maintainers.usebottles.com">contribute</a>?</p>
    </div>
    <br />
    <div class="filters">
      <span class="tag grade-all active" grade="All">All</span>
      <span class="tag grade-Platinum" grade="Platinum">Platinum</span>
      <span class="tag grade-Gold" grade="Gold">Gold</span>
      <span class="tag grade-Silver" grade="Silver">Silver</span>
      <span class="tag grade-Bronze" grade="Bronze">Bronze</span>
    </div>
    <br />
    <div class="store store-results">
    </div>
  </div>
</section>

<div class="modal" id="modal_installer"></div>
<div class="modal" id="modal_review"></div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/obsidian.min.css">
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

  document.querySelectorAll('.filters .tag').forEach(function(tag) {
    tag.addEventListener('click', function(e) {
      var grade = this.getAttribute('grade');
      document.querySelectorAll('.filters .tag').forEach(function(tag) {
        tag.classList.remove('active');
      });
      this.classList.add('active');
      document.querySelectorAll('.store .card').forEach(function(card) {
        if (grade == 'All') {
          card.style.display = 'block';
        } else {
          if (card.getAttribute('grade') == grade) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
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
          var card = `<div class="card" grade="${installer["Grade"]}">
            <div class="card-content">
              <div class="card-bg" style="background-image: url(${icon})"></div>
              <h3>
                <a href="/app#${item}">
                  <img src="${icon}" alt="${item}" />
                  ${installer["Name"]}
                </a>
              </h3>
              <div class="dropdown">
                <div class="toggler">
                  <span class="material-icons">expand_more</span>
                </div>
                <ul>
                  <li>
                    <a href='https://github.com/bottlesdevs/programs/issues/new/choose' title='Bug report'>
                      <span class="material-icons">bug_report</span> <span>Bug report</span>
                    </a>
                  </li>
                  <li>
                    <a onclick='modal("https://raw.githubusercontent.com/bottlesdevs/programs/main/${installer["Category"]}/${item}.yml")' title='Show installer'>
                      <span class="material-icons">code</span> <span>Show installer</span>
                    </a>
                  </li>
                </ul>
              </div>
              <p>${installer["Description"]}</p>
              <div class="tags">
                <span class="tag grade-${installer["Grade"]}">${installer["Grade"]}</span>
                <span class="tag tag-${installer["Category"]}">${installer["Category"]}</span>
              </div>
              <div class="actions">
                <a href='https://github.com/bottlesdevs/programs/blob/main/Reviews/${item}.md' title='Read review'>
                  <span class="material-icons-outlined">article</span>
                </a>
                <a href='https://docs.usebottles.com/bottles/installers#use-installers' title='How to install'> <!--bottles:${item}-->
                  <span class="material-icons-outlined">download</span> Install
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