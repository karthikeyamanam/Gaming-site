const nextbutton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video')
const movieList =['https://res.cloudinary.com/dsejbqhm0/video/upload/v1744286285/hero-1_rhxdvp.mp4','https://res.cloudinary.com/dsejbqhm0/video/upload/v1744286258/hero-2_eqat4h.mp4','https://res.cloudinary.com/dsejbqhm0/video/upload/v1744286256/hero-3_comhgq.mp4','https://res.cloudinary.com/dsejbqhm0/video/upload/v1744286260/hero-4_uu0snv.mp4'];
let index=0;
nextbutton.addEventListener('click',function(){
    index += 1
    video.src = movieList[index];
    if(index===3){
        index = -1;
    }
})
