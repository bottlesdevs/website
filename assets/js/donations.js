class Donations {
    static people(dom, list) {
        var gpeople = list.github;
        var gother = list.other;
        var html = "";

        addSection('GitHub', gpeople, true);
        addSection('Other platforms', gother);

        function addSection(sectionTitle, personList, hasPic = false) {
            html += `<h4>${sectionTitle}</h4>`;
            const personClasses = hasPic ? 'person' : 'person no-pic';

            personList.forEach(person => {
                html += getPersonMarkup(person, personClasses, hasPic);
            });
        }

        function getPersonMarkup(person, personClasses, hasPic) {
            return `<div class="${personClasses}">` +
            (hasPic ? `<img src="https://avatars.githubusercontent.com/${person}?s=120" alt="${person}">` : ``) +
            `<span>${person}</span>
            </div>`;
        }

        document.querySelector(dom).innerHTML = html;
    }
}