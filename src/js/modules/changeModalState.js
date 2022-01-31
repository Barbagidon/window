import checkNum from './checkNum';

const changeModalState = (state) => {
    const typeWindow = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        viewType = document.querySelectorAll('#view_type'),
        windowCheckbox = document.querySelectorAll('.checkbox');

    checkNum(windowWidth);
    checkNum(windowHeight);

    function actionElement(elem, action, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(action, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        state[prop] = i + 1;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') == 'checkbox') {
                            i == 0 ? state[prop] = "cold" : state[prop] = 'warm';
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    elem[j].checked = true;
                                }
                            });
                            break;
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }

                console.log(state);
            });
        });

    }

    actionElement(typeWindow, 'click', 'form');
    actionElement(windowCheckbox, 'change', 'profile');
    actionElement(windowWidth, 'input', 'width');
    actionElement(windowHeight, 'input', 'height');
    actionElement(viewType, 'change', 'type');






};

export default changeModalState;