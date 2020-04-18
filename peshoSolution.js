solveC()

// Common solution
function solveA() {
    const links = document.querySelectorAll('a');

    links.forEach(node => {
        const p = node.nextElementSibling;

        node.addEventListener('click', () => {
            const split = p.textContent.split(' ');
            const count = Number(split[1]) + 1;

            p.textContent = `Visited ${count} times`;
        })
    })
}

// Old school with `this` and no arrow functions
function solveB() {
    const links = document.querySelectorAll('.link-1 a');

    links.forEach(function (linkElement) {
        linkElement.addEventListener('click', onLinkClick);
    })

    // `this` refers (is bound) to the current node the function is called from
    function onLinkClick() {
        const p = this.nextElementSibling;

        const [unusedWord, count] = p.textContent.split(' ');
        const newCount = Number(count) + 1;

        p.textContent = `Visited ${newCount} times`;
    }
}

// Single listener
function solveC() {
    const containerElement = document.querySelector('.middled');

    containerElement.addEventListener('click', (event) => {
        const parent = event.target && event.target.parentElement;

        if (parent && parent.tagName == 'A') {

            const [digits] = parent.nextElementSibling.textContent.match(/\d+/);
            const newCount = Number(digits) + 1;
            parent.nextElementSibling.textContent = `Visited ${newCount} times`;

        }
    })
}
