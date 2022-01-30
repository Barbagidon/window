const checkInputs = function (state, forms, closeFunction, showFunction, pop, width, height, prop) {
    const firstInput = document.querySelector(width);
    const secondInput = document.querySelector(height);
    const allInputs = document.querySelectorAll(forms);

    const stop = () => {
        allInputs.forEach(item => {
            item.style.borderColor = 'red';
        });
    };

    const next = () => {
        allInputs.forEach(item => {
            item.style.borderColor = '';
            item.value = '';
        });
        closeFunction();
        showFunction(pop);
    };
    
    switch (firstInput.getAttribute('type')) {
        case 'checkbox':
            if (!firstInput[prop] && !secondInput[prop] || !state.type) {
                stop();
            } else {
                next();
            }
            break;
        case 'text':
            if (!state.form || !firstInput[prop] && !secondInput[prop] || !firstInput[prop] || !secondInput[prop]) {
                stop();
            } else {
               next();
            }
            break;
    }

};





export {
    checkInputs
};