class Tooltips {
    constructor() {
        this.tooltips = document.querySelectorAll('[tooltip]');
        this.tooltip = document.createElement('div');
        this.tooltip.classList.add('tooltip');
        this.tooltip.innerHTML = '<p></p>';
        this.tooltip.style.display = 'none';
        document.body.appendChild(this.tooltip);
        this.bindEvents();
    }

    bindEvents() {
        this.tooltips.forEach(tooltip => {
            tooltip.addEventListener('mouseover', this.showTooltip.bind(this));
            tooltip.addEventListener('mouseout', this.hideTooltip.bind(this));
        });
    }

    showTooltip(e) {
        var el = e.target;
        if (!el.hasAttribute('tooltip')) {
            if (e.target.parentElement && e.target.parentElement.hasAttribute('tooltip')) {
                el = e.target.parentElement;
            } else {
                return;
            }
        }
        this.tooltip.querySelector('p').innerHTML = el.getAttribute('tooltip');
        this.tooltip.style.display = 'block';
        this.tooltip.style.top = e.pageY + 'px';
        this.tooltip.style.left = e.pageX + 'px';
    }

    hideTooltip() {
        this.tooltip.style.display = 'none';
    }

    destroy() {
        this.tooltips.forEach(tooltip => {
            tooltip.removeEventListener('mouseover', this.showTooltip.bind(this));
            tooltip.removeEventListener('mouseout', this.hideTooltip.bind(this));
        });
        document.body.removeChild(this.tooltip);
    }

    static init() {
        new Tooltips();
    }
}