solveA()

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
