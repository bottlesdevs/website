class Donations {
    static people(dom, list) {
        var gpeople = list.github;
        var gother = list.other;
        var html = "";
        html += "<h4>GitHub</h4>";
        for (var i = 0; i < gpeople.length; i++) {
            html += `
            <div class="person">
                <img src="https://avatars.githubusercontent.com/${gpeople[i]}?s=120" alt="${gpeople[i]}">
                <span>${gpeople[i]}</span>
            </div>`;
        }
        html += "<h4>Other platforms</h4>";
        for (var i = 0; i < gother.length; i++) {
            html += `
            <div class="person no-pic">
                <span>${gother[i]}</span>
            </div>`;
        }
        document.querySelector(dom).innerHTML = html;
    }
}