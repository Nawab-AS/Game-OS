const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let current = '';
let resetNext = false;

function updateDisplay(val) {
    display.value = val;
}

buttons.forEach(btn => {
    btn.addEventListener('click', function () {
        const value = this.getAttribute('data-value');
        if (this.id === 'clear') {
            current = '';
            updateDisplay('');
        } else if (this.id === 'equals') {
            try {
                let result = eval(current.replace(/x/g, '*'));
                if (result === undefined) result = '';
                updateDisplay(result);
                current = result.toString();
                resetNext = true;
            } catch {
                updateDisplay('Error');
                current = '';
                resetNext = true;
            }
        } else {
            if (resetNext) {
                current = '';
                resetNext = false;
            }
            current += value;
            updateDisplay(current);
        }
    });
});
