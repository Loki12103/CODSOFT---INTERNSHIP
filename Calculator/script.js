const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');
let resetDisplay = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (resetDisplay && '0123456789'.includes(value)) {
            display.value = '';
            resetDisplay = false;
        }

        if (value === 'C') {
            display.value = '';
        } else if (value === 'CE' || value === '←') {
            display.value = display.value.slice(0, -1);
        } else if (value === '=') {
            try {
                display.value = eval(display.value);
                resetDisplay = true;
            } catch {
                display.value = 'Error';
                resetDisplay = true;
            }
        } else if (value === '1/x') {
            display.value = 1 / parseFloat(display.value);
        } else if (value === 'x²') {
            display.value = Math.pow(parseFloat(display.value), 2);
        } else if (value === '√x') {
            display.value = Math.sqrt(parseFloat(display.value));
        } else if (value === '+/-') {
            display.value = parseFloat(display.value) * -1;
        } else {
            display.value += value;
        }
    });
});