const tabs = (header, tabSelector, tabsContent, activeClass, display = 'block') => {
    const slider = document.querySelector(header),
        tabs = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(tabsContent);


    slider.addEventListener('click', (e) => {
        let target = e.target;
        tabs.forEach((tab, i) => {
            tab.classList.remove(activeClass);
            if (target && target == tab || target.parentNode == tab || target.parentNode.classList.contains(tabSelector.replace(/\./)) || target.classList.contains(tabSelector.replace(/\./))) {
                content.forEach(item => {
                    hideContent(item);
                    showContent(i);
                });


            }
        });
    });


    function showContent(i = 0) {
        content[i].style.display = display;
        tabs[i].classList.add(activeClass);
        if (tabs[i].classList.contains('glazing_block')) {
            tabs[i].querySelector('a').classList.add(activeClass);
        }
    }





    function hideContent(item) {
        item.style.display = 'none';

    }

    content.forEach(item => {
        hideContent(item);
    });

    showContent();


    // document.addEventListener('click', (e) => {
    //     console.log(e.target);


    // });



};

export default tabs;