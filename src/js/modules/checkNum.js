const checkNum = (input) => {

    input.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, "");
        });
    });

  



};

export default checkNum;