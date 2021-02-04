(()=>{

    const loadText = document.querySelector('.loading-text');
    const bg = document.querySelector('.bg');


    let load = 0;
    
    const blurring = ()=>{
        load++;

        if(load > 99){
            clearInterval(interval);
        }
        console.log(load);

        loadText.innerHTML = `${load}%`;
        loadText.style.opacity = scale(load, 0, 100, 1, 0 );
        bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
    }

    const scale = (num, in_min, in_max, out_min, out_max)=>{
        return ((num - in_min) * (out_max - out_min) / (in_max - in_min)) + out_min;
    }
    
    let interval = setInterval(blurring, 30);

})();