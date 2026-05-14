// 画像の切り替え
const navmainImg =document.querySelector('.mainimg img');
const navsubImgAll=document.querySelectorAll('.subimg img');
const navumain=navmainImg.src;

const pmainimg=document.querySelector('.pmainimg img');
const psubmainAll=document.querySelectorAll('.psubmain img')


navsubImgAll.forEach((navsub)=>{
    navsub.addEventListener('mouseover',(event)=>{
        navmainImg.src=event.target.src;
        navmainImg.animate({opacity:[0,1]},500)
    });
});

navsubImgAll.forEach((navsub)=>{
    navsub.addEventListener('mouseleave',(event)=>{
        navmainImg.src=navumain;
        navmainImg.animate({opacity:[0,1]},500)
    });
});



// タスクバー
const getScrollPercent=()=>{
    const scrolled=window.scrollY;
    const pageHeight=document.documentElement.scrollHeight;
    const viewHeight=document.documentElement.clientHeight;
    const percentage=scrolled/(pageHeight-viewHeight)*100;
    document.querySelector('#bar').style.width=`${percentage}%`;
}
window.addEventListener('scroll',getScrollPercent);

// 監視対象
const showkirin=(entrise)=>{
    const keyframes={
        opacity:[0,1],
        translate:['200px 0',0],
    };
    entrise[0].target.animate(keyframes,600);
};

const kirinObsever=new IntersectionObserver(showkirin);

kirinObsever.observe(document.querySelector('#kirin'));