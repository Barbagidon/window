const modals = () => {

    function modalContent(trigger, item, closeTrigger, closeStrict = false) {
        const btn = document.querySelectorAll(trigger),
            pop = document.querySelector(item),
            close = document.querySelector(closeTrigger),
            activeClass = 'show',
            hideClass = 'hide',
            windows = document.querySelectorAll('[data-modal]');


        function closeWindow() {
            windows.forEach(item => {
                item.classList.remove('show');
                item.classList.add('hide');
            });
        }
        

        btn.forEach(item => {
            showHidePop(item, pop, close);
        });


        function showContent(item) {
            item.classList.add(activeClass);
            item.classList.remove(hideClass);
            document.body.style.overflow = 'hidden';
            // clearInterval(timerId);
        }

        function hideContent(item) {
            item.classList.remove(activeClass);
            item.classList.add(hideClass);
            document.body.style.overflow = '';

        }

        function showHidePop(trigger, item, closeTrigger) {

            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                if (closeStrict) {
                    closeWindow();
                    showContent(item);
                }
                if (closeStrict == false) {
                    showContent(item);
                }
            });

            item.addEventListener('click', (e) => {
                const target = e.target;
                if (closeStrict) {
                    if (target && target == closeTrigger || target == closeTrigger.children[0]) {
                        hideContent(item);

                    }
                } else {
                    if (target && target == closeTrigger || target == item || target == closeTrigger.children[0]) {
                        hideContent(item);
                    }

                }


            });

        }

        // document.addEventListener('click', (e) => {
        //     console.log(e.target);


        // });

        // let timerId = setTimeout(() => {
        //     showContent(linkPop);
        // }, 6000);
    }



    modalContent('.header_btn', '.popup_engineer', '.popup_engineer .popup_close');
    modalContent('.phone_link', '.popup', '.popup .popup_close');
    modalContent('.glazing_price_btn', '.popup_calc', '.popup_calc_close');
    modalContent('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', true);
    modalContent('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', true);

};




export default modals;