const lineNumbersEl = document.querySelector('.line-numbers');
const textAreaEl = document.querySelector('.text-area');

const updateLineNumbers = () => {
    const lines = textAreaEl.value.split('\n');
    const totalLines = lines.length;
    let lineNumbersHtml = '';

    for (let i = 1; i <= totalLines; i++) {
        lineNumbersHtml += `<span class="block">${i}</span>`;
    }

    lineNumbersEl.innerHTML = lineNumbersHtml;
};

textAreaEl.addEventListener('input', updateLineNumbers);

let string = "";

const btn = document.querySelector('button');
const filename = document.querySelector('#file_name');
const language = document.querySelector('#language-select');
btn.addEventListener('click', () => {
    file_content = textAreaEl.value;
    file_name = filename.value;
    extension = language.value;
    file_name = file_name + "." + extension;
    console.log(file_name);
    console.log(file_content);

    const element = document.createElement('a');
    const blob = new Blob([content], {
        type: "plain/text"
    });

    const fileUrl = URL.createObjectURL(blob);
    element.setAttribute('href', fileUrl);
    element.setAttribute('download', file_name);
    element.style.display = 'none';

    document.body.appendChild(element);
    element.click();

    document.body.removeChild(element);
});
