const checkNum = (input) => {
    function checkNum(input){
        input.forEach(item => {
            item.addEventListener('input', () => {
               item.value = item.value.replace(/\D/, "");
            });
        });

    }

    checkNum(input);
};

export default checkNum;