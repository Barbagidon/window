import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';

let windowInfo = {
    form: 1,
    type: 'tree'
};


function clearInfo() {
    for (let key in windowInfo) {
        delete windowInfo[key];
    }
    
    windowInfo.form = 1;
    windowInfo.type = 'tree';

    



}







window.addEventListener('DOMContentLoaded', () => {
    'use strict';





    
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img img', 'do_image_more', 'inline-block');
    changeModalState(windowInfo);
    forms(windowInfo);
    modals(windowInfo);
    



    console.log(1);

});

export default clearInfo;