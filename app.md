---
title: AppStore
---

<section class="heading no-bg">
    <div class="card-bg" id="app_bg"></div>
    <div class="container large center">
        <h1 id="app_name">Loading…</h1>
        <p id="app_description">Loading…</p>
        <div class="tags" id="app_tags"><p>Fetching data from repository…</p></div>
    </div>
</section>

<section class="store-screenshot">
    <div class="container medium" id="app_screenshot"></div>
</section>

<section class="page loading">
  <div class="container large">
    <div class="app-details">
        <aside>
            <a href="https://docs.usebottles.com/bottles/installers#use-installers" class="button" id="app_download">
                <span class="mdi material-icons-outlined">file_download</span> How to install
            </a>
            <a class="button secondary" id="app_review">
                <span class="mdi material-icons-outlined">auto_stories</span> Read review
            </a>
            <small>Bottles does not re-distribute or host the files but just 
            download them from the vendor's official sources. These files are 
            checked by our maintainers and do not contain viruses. However, 
            they may be subject to copyright or licenses of different types, 
            including proprietary ones.</small>
        </aside>
        <section>
            <p>This installer require a <b id="app_arch_req"></b> bottle to works.
                If you don't see the the installer in the list, please check if your
                bottle has the right architecture, if not please <a href="https://docs.usebottles.com/getting-started/environments">make a new one</a>.</p>
            <hr />
            <h3>About the <span id="app_grade_ex"></span> grade</h3>
            <p id="app_grade_description">Loading…</p>
            <hr />
            <h3>Dependencies</h3>
            <p>The following dependencies will be automatically installed with this app:</p>
            <ul class="cards has-hover" id="app_dependencies"></ul>
            <hr />
            <h3>Configuration</h3>
            <p>The following configuration will be applied to your bottle:</p>
            <ul class="list" id="app_configuration"></ul>
        </section>
    </div>
  </div>
</section>

<div class="modal" id="modal_installer"></div>
<div class="modal" id="modal_review"></div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/obsidian.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/marked/4.0.2/marked.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/languages/yaml.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js"></script>
<script src="/assets/js/store-common.js"></script>
<script>
    var architectures = {
        "win64": "64-bit",
        "win32": "32-bit"
    }
    var grade_descriptions = {
        "Bronze": `This application works but not in the best way. 
                    The installer has configured your bottle to give you the best 
                    possible experience but you have to expect glitches, inaccessible 
                    features (e.g. multiplayer if it's a game) and any other problems. 
                    In the future this installer may receive updates to improve the result.`,
        "Silver": `This application works fine. There are some glitches, but they
                    don't affect the application's functionality. All features
                    are accessible and works as expected.`,
        "Gold": `This application works in the best way. There may be rare glitches
                    but they don't affect the application's functionality. All features
                are accessible and works as expected.`,
        "Platinum": `This application works in the best way. There are no glitches.
                    All features are accessible and works as expected, the whole
                    experience and feedback is smooth.`,
    }
    window.onhashchange = function() {
        var hash = window.location.hash.substr(1);
        if (hash == "") {
            window.location = "/appstore";
            return;
        }
        location.reload();
    };
    function resourceExists(url) {
        var http = new XMLHttpRequest();
        http.open('HEAD', url, false);
        http.send();
        return http.status != 404;
    }
    fetch('https://raw.githubusercontent.com/bottlesdevs/programs/main/index.yml') 
    .then(response => response.text())
    .then((data) => {
        console.info("Installers database index found.");
        installers_index = jsyaml.load(data)
        var hash = window.location.hash.substring(1);
        if (hash && installers_index[hash]) {
            var entry = installers_index[hash];
            fetch(`https://raw.githubusercontent.com/bottlesdevs/programs/main/${entry['Category']}/${hash}.yml`)
            .then(response => response.text())
            .then((data) => {
                console.info("Installer found.");
                var app = jsyaml.load(data);
                var screenshot = `https://raw.githubusercontent.com/bottlesdevs/programs/main/data/${hash}/screenshot.png`;
                var icon = `https://raw.githubusercontent.com/bottlesdevs/programs/main/data/${hash}/${entry['Icon']}`;
                var review = `https://raw.githubusercontent.com/bottlesdevs/programs/main/Reviews/${hash}.md`;
                document.getElementById('app_bg').style.backgroundImage = `url(${icon})`;
                document.getElementById('app_name').innerHTML = `<img src="${icon}" class="icon"> ${entry['Name']}`;
                document.getElementById('app_description').innerHTML = app['Description'];
                if (resourceExists(screenshot)) {
                    document.getElementById('app_screenshot').innerHTML = `<img class="card" src="${screenshot}" alt="Screenshot" />`;
                }
                document.getElementById('app_tags').innerHTML = `
                    <span class="tag grade-${app['Grade']}">${app['Grade']}</span>
                    <span class="tag tag-${entry['Category']}">${entry['Category']}</span>
                    <span class="tag tag-${entry['Arch']}">${entry['Arch']}</span>
                `;
                if (resourceExists(review)) {
                    document.getElementById('app_review').onclick = function() {
                        modal(review, markdown=true);
                    }
                } else {
                    document.getElementById('app_review').setAttribute('disabled', 'disabled');
                }
                document.getElementById('app_arch_req').innerHTML = architectures[entry['Arch']];
                document.getElementById('app_grade_ex').innerHTML = app['Grade'];
                document.getElementById('app_grade_description').innerHTML = grade_descriptions[app['Grade']];

                fetch(`https://raw.githubusercontent.com/bottlesdevs/dependencies/main/index.yml`)
                .then(response => response.text())
                .then((data) => {
                    console.info("Dependencies index found.");
                    var dependencies_index = jsyaml.load(data);
                    for (var dep in app['Dependencies']) {
                        var app_dep_entry = app['Dependencies'][dep];
                        var dep_entry = dependencies_index[app_dep_entry];
                        document.getElementById('app_dependencies').innerHTML += `
                            <li class="link">
                                <a href="https://github.com/bottlesdevs/dependencies/blob/main/${dep_entry['Category']}/${app_dep_entry}.yml" target="_blank">
                                    ${app_dep_entry}<br/>
                                    <small>${dep_entry['Description']}</small>
                                </a>
                            </li>
                            `;
                    }
                })
                .catch(function (err) {
                    console.error("Failed to fetch dependencies index.");
                    console.log(err);
                });
                for (var param in app['Parameters']) {
                    var value = app['Parameters'][param];
                    if (value) {
                        value = "enabled";
                    } else if (value == "false") {
                        value = "disabled";
                    }
                    document.getElementById('app_configuration').innerHTML += `<li>${param}: ${value}</li>`;
                }

            })
            .catch(err => {
                console.error("Failed to fetch installer!");
                throw err
            });
        }
    })
    .catch(err => {
        console.error("Failed to fetch Installers database index!");
        throw err
    });
    
</script>