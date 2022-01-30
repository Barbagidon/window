import checkNum from './checkNum';
import clearInfo from "../main";
import {hideContent} from './modals';
const forms = (state) => {
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


    function createMessage() {
        form.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();
                let message = document.createElement('div');
                message.classList.add('status');
                message.textContent = messages.loading;
                item.append(message);
                const formData = new FormData(item);
                if (item.getAttribute('data-calc') === 'end') {
                    for (let key in state) {
                        formData.append(key, state[key]);
                    }
                }

                postData('assets/server.php', formData)
                    .then(res => {
                        console.log(res);
                        message.textContent = messages.ok;
                        state = {};
                    })
                    .catch(() => message.textContent = messages.wrong)
                    .finally(() => {
                        setTimeout(() => {
                            message.remove();
                            state ={};
                            // document.querySelector('.popup_calc_end').classList.remove('show');
                            const endWindow =  document.querySelector('.popup_calc_end');
                            
                           hideContent(endWindow, 'show', 'hide');
                           item.reset();
                        }, 4000);

                        
                    
                        

                    });



            });

        });
    }

    checkNum(inputsPhone);
    createMessage();
};
export default forms;