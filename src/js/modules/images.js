const images = () => {
    const workSection = document.querySelector('.works'),
        imagePopup = document.createElement('div'),
        image = document.createElement('img');

    workSection.append(imagePopup);
    imagePopup.append(image);
    imagePopup.classList.add('popup');
    imagePopup.style.justifyContent = 'center';
    imagePopup.style.alignItems = 'center';
    imagePopup.style.display = 'none';


    workSection.addEventListener('click', e => {
        e.preventDefault();
        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imagePopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            console.log(path);
            image.setAttribute('src', path);
            image.style.display = 'block';
            image.style.width = '50%';
            document.body.style.overflow = 'hidden';
        }
        if (target && target.classList.contains('popup')){
            imagePopup.style.display = 'none';
            document.body.style.overflow = '';
        }

    });




};

export default images;