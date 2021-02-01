        $(document).ready(function(){
            $('#profile-ripple').ripples({
                resolution: 512,
                dropRadius:9
            })

    //Skill Level
            const bars = document.querySelectorAll('.progress__bar');

            bars.forEach(function(bar){
                let percentage = bar.dataset.percent;

                let tooltip = bar.children[0]

                tooltip.innerText = percentage + '%';
                bar.style.width = percentage + '%'
                
            })


            //Counter

         


        // Image Filter

        var $wrapper = $('.portfolio__wrapper');


        // Initialie isotope

        $wrapper.isotope({
            filter : '*',
            leyoutMode : 'masonry',
            animationOptions : {
                duration : 750,
                easing : 'linear'
            }
        });

        let links = document.querySelectorAll('.tabs a')


        links.forEach(link =>{
            let selector = link.dataset.filter
            link.addEventListener('click',function(e){
                e.preventDefault();
                link.classList.add('active')


                $wrapper.isotope({
                    filter : selector,
                    leyoutMode : 'masonry',
                    animationOptions : {
                        duration : 750,
                        easing : 'linear'
                    }
                });



                links.forEach(link =>{
                    link.classList.remove('active')
                })

                e.target.classList.add('active');



            })
        })


      
        // Magnify Popup

        $('.magnify').magnificPopup({
            type : 'image',
            gallery : {
                enabled : true
            },
            zoom : {
                enable : true
            }
        })


      
        
        
        //Slider

        $('.slider').slick({
            arrows : false,

            autoplay: true
        })





        //Award Counter

    //     const counters = document.querySelectorAll('.counter');

    //     function runCounter () {
    //         counters.forEach(counter => {
    //             counter.innerText = 0;
    //             let target = +counter.dataset.count;
    //             let step = target / 100;
                
    //             let countIt = function() {
    //                 let displayedCount = +counter.innerText;
    //                 if(displayedCount < target) {
    //                     counter.innerText = Math.ceil(displayedCount + step);
    //                     setTimeout(countIt, 1);
    //                 } else {
    //                     counter.innerText = target;
    //                 }
    //             }
    //             countIt();
        
    //         })
        
    //     }

        

    // runCounter();


    // let counterSection = document.querySelector('.counter__section');

    // let options = {
    //     rootMargin : '0px 0px -200px 0px'
    // }
    // let done =0

    // const sectionObserver = new IntersectionObserver(function(entries){

    //     if(entries[0].isIntersecting && done!==1){
    //         done = 1;
    //         runCounter();

    // }

    // },options)

    // sectionObserver.observe(counterSection)



          })