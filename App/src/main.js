const API = 'https://api.waifu.pics/sfw/waifu';


async function anotherFnc(API) {
    const res = await fetch(API);
    const data = await res.json();

    if (res.status == 200) {
        console.log('todo fine ' + data.url );
        const imgContainer = document.querySelector('.background-img');
        const imgUrl = data.url;
        imgContainer.innerHTML = '';
        imgContainer.style.backgroundImage = `url(${imgUrl})`;
        
    } else {
        console.log('algo salio mal ' + res.status );
    };
};

const next = document.querySelector('.next');
next.onclick = () => {anotherFnc(API)};

const waifu = () => {
    anotherFnc(API);
};

waifu(API);