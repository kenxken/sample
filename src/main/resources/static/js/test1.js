


// - call
// - show
const showDialog = () => {
    const data = [["column1", "column2", "column3"],
                  ["content1", "content2", "content3"],
                  ["content4", "content5", "content6"],
                  ["content4", "content5", "content6"],
                  ["content7", "content8", "content9"]
                 ];

    const table = document.createElement('table');
    table.className = 'table';
    for (let i = 0; i < data.length; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < data[i].length; j++) {
            const target = i === 0 ? 'th' : 'td';
            const element = document.createElement(target);
            element.textContent = data[i][j];
            tr.appendChild(element);
        }
        table.appendChild(tr);
    }

    const content = document.getElementById('dialog-content');
    content.appendChild(table);

    const dialog = document.getElementById('dialog-sample');
    dialog.showModal();
};

const registerTable = () => {
    const table = document.getElementById('table');
    table.addEventListener('click', () => {
        showDialog();
    });
};

const registerClose = () => {
    const dialog = document.getElementById('dialog-sample');
    dialog.addEventListener('click', () => {
        dialog.close();

        const content = document.getElementById('dialog-content');
        content.innerHTML = '';
    });
};

window.addEventListener('load', () => {
    registerTable();
    registerClose();

    const server = document.getElementById('server');
    server.textContent = `
        aaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaa
    `;
});