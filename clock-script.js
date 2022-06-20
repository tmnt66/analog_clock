setInterval(() => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let hrotation = 30*h + 0.5*m;
    let mrotation = 6*m;
    let srotation = 6*s;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    seconed.style.transform = `rotate(${srotation}deg)`;
}, 1000);