import checkNum from './checkNum';
const forms = () => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        inputsPhone = document.querySelectorAll('input[name = "user_phone"]');



    const messages = {
        ok: 'Ваша заявка принята, спасибо за обращение.',
        loading: 'Загрузка...',
        wrong: "Что - то пошло не так..."
    };

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            body: data,
        });
        console.log(res);
        return await res.text();
    };


    

    checkNum(inputsPhone);

    



    function createMessage() {
        form.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();
                let message = document.createElement('div');
                message.classList.add('status');
                message.textContent = messages.loading;
                item.append(message);
                const formData = new FormData(item);
                postData('assets/server.php', formData)
                    .then(res => {
                        console.log(res);
                        message.textContent = messages.ok;
                    })
                    .catch(() => message.textContent = messages.wrong)
                    .finally(() => {
                        setTimeout(() => {
                            message.remove();
                        }, 4000);

                        item.reset();
                    });



            });

        });
    }

    createMessage();
};
export default forms;