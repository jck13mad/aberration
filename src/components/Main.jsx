import React, { useEffect, useRef } from 'react'
import { gsap, CSSPlugin } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import wordLogo from '../pics/wordLogo.png'
import logo_rgb from '../pics/logo_rgb.png'
import apple from '../pics/apple.png'
import disney from '../pics/disney.png'
import sony from '../pics/sony.png'
import espn from '../pics/espn.png'
import amazon from '../pics/amazon.png'
import abe_grid from '../pics/abe_grid.png'
import VideoPlayer from './video-player'
import down_arrow from '../pics/down-arrow.png'

gsap.registerPlugin(ScrollTrigger, CSSPlugin);

export default function Main() {

    const ref = useRef(null);
    const didAnimate = useRef(false);

    const Wvh = coef => window.innerHeight * (coef/100);
    const Wvw = coef => window.innerWidth * (coef/100);

    useEffect(() => {
        if (didAnimate.current) { return; }
        let element = ref.current;

        gsap.from(
            element = document.querySelector("#first"), {
                opacity: 0,
                x: -20,

                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    end: "bottom 60%",
                    scrub: true
                }
            }
        );

        gsap.from(
            element = document.querySelector("#second"), {
                opacity: 0,
                x: -20,

                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    end: "bottom 60%",
                    scrub: true
                }
            }
        );

        gsap.from(
            element = document.querySelector("#third"), {
                opacity: 0,
                x: -20,

                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    end: "bottom 60%",
                    scrub: true
                }
            }
        );

        gsap.from(
            element = document.querySelector("#fourth"), {
                opacity: 0,
                x: -20,

                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    end: "bottom 60%",
                    scrub: true
                }
            }
        );

        gsap.from(
            element = document.querySelector("#trusted"), {
                opacity: 0,
                x: -20,

                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    end: "bottom 60%",
                    scrub: true
                }
            }
        );

        gsap.from(
            element = document.querySelector("#big_boys"), {
                opacity: 0,
                y: 40,

                scrollTrigger: {
                    trigger: element,
                    start: "top 70%",
                    end: "100 65%",
                    scrub: true,
                }
            }
        );

        gsap.from(
            element = document.querySelector("#help"), {
                opacity: 0,
                x: -20,

                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    end: "bottom 60%",
                    scrub: true
                }
            }
        );

        gsap.from(
            element = document.querySelector("#button"), {
                opacity: 0,
                y: -40,

                scrollTrigger: {
                    trigger: element,
                    start: "top 70%",
                    end: "-10 60%",
                    scrub: true,
                }
            }
        );

        gsap.to(
            element = document.querySelector("#circle"), {
                scrollTrigger: {
                    trigger: element,
                    start: "center center",
                    end: Wvh(125) + " center",
                    scrub: 3,
                    pin: "#circle",
                    toggleActions: 'restart none none none',
                }
            }
        )

        gsap.to(
            element = document.querySelector("#circle2"), {
                scrollTrigger: {
                    trigger: element,
                    start: "center center",
                    end: Wvh(60) + " center",
                    scrub: 3,
                    pin: "#circle2",
                    toggleActions: 'restart none none none',
                }
            }
        )

        gsap.to(
            element = document.querySelector('#sound'), {
                opacity: 0,
                scrollTrigger: {
                    trigger: element,
                    start: "top 70%",
                    end: "-10 60%",
                    scrub: true
                }
            }
        )

        gsap.to(
            element = document.querySelector('#scroll'), {
                opacity: 0,
                scrollTrigger: {
                    trigger: element,
                    start: "top 70%",
                    end: "-10 60%",
                    scrub: true,
                }
            }
        )

        gsap.to(
            element = document.querySelector('#view-video'), {
                opacity: 0,
                scrollTrigger: {
                    trigger: element,
                    start: "top 70%",
                    end: "-10 60%",
                    scrub: true,
                }
            }
        )

        didAnimate.current = true;
    }, []);
    ScrollTrigger.refresh()

    return (
        <div className='h-fit w-screen overscroll-x-none overflow-x-hidden' id='main-container'>
            <div className='top-0 right-0 relative' id='top'></div>

            <section className="flex flex-row fixed z-50 w-[100vw] h-[12vh] backdrop-blur-sm">
                <img src={wordLogo} alt='Aberration' className='relative left-12 w-40 h-6 top-[5vh]'></img>
                <div className='absolute flex flex-row w-fit h-fit right-8 top-[3vh] justify-items-center'>
                    <ul className='list-none text-left space-x-8 text-white flex flex-row'>
                        <a href='https://tfetn9etlwo.typeform.com/to/hPE8Baza' rel="noopener noreferrer" target="_blank" className='group pt-3' >
                            <div className='rounded-[80px] relative bg-white w-28 h-12 flex flex-row justify-center group-hover:bg-[#0d0d0d] border-2 border-white transition duration-200'>
                                <h3 className='pt-3 text-sm group-hover:text-white text-black transition duration-200'>Contact Us</h3>
                            </div>
                        </a>
                    </ul>
                    <div className=''>
                        <img src={logo_rgb} alt="RGB Logo" className='relative h-16 w-auto ml-12'></img>
                    </div>
                </div>
            </section>

            <section className='h-[100vh] w-[100vw] fixed z-20 flex align-items-center justify-center'>
                <div className='relative h-[95vh] w-[100vw]'>
                    {/* className='relative h-[95vh] mt-[2.5vh] ml-[1.5vw] opacity-100' */}
                    <VideoPlayer className='relative' />
                </div>
                <div className='w-fit absolute bottom-[3vh] right-[3vw] opacity-100' id='sound'>
                    <h3 className='text-white'>CLICK VIDEO FOR SOUND</h3>
                </div>
                <div className='absolute bottom-[3vh] flex flex-col space-y-2 justify-center opacity-100' id='scroll'>
                    <h3 className='text-white relative'>SCROLL</h3>
                    <img className='relative left-5 w-5 h-8' src={down_arrow} alt='down arrow'/>
                </div>
                <div className='absolute bottom-[3vh] left-[3vw] opacity-100' id='view-video'>
                    <a href='https://youtu.be/n1GTMn9MARw' rel="noopener noreferrer" target="_blank" className='group pt-3' >
                        <div className='rounded-[80px] relative bg-white w-28 h-12 flex flex-row justify-center group-hover:bg-[#0d0d0d] border-2 border-white transition duration-200'>
                            <h3 className='pt-3 text-sm group-hover:text-white text-black transition duration-200'>View Video</h3>
                        </div>
                    </a>
                </div>
            </section>

            <section className='w-[100vw] h-fit absolute mt-[100vh] pb-[5vh] bg-[#0d0d0d] rounded-[80px] z-30 flex flex-row border-2 border-white'>
                <div className='border-l-2 border-white w-1 h-[125vh] relative top-10 left-[8vw] z-40'></div>
                <div className='rounded-full w-5 h-5 bg-white relative top-10 left-[7.2vw] z-40' id='circle'></div>
                <div>
                    <div className='relative left-[20vw] h-fit w-fit' id='about'>
                        <h1 className='relative text-white text-[5.5vw] mt-[8vh]' id='first'><mark className='color-white bg-color-white'>Story</mark> Comes First.</h1>
                        <hr className='relative left-[15vw] w-[32vw] h-[1vh] bg-gradient-to-r from-red-500 via-blue-500 to-green-500'/>
                    </div>
                    <h3 className='relative left-[22vw] mt-24 text-3xl w-[55vw] text-left text-white' id='second'>We are a collective of experienced creatives drawn to the imperfections of chemical film, vintage lenses, and nostalgic set pieces. 
                        Aberration was formed because we discovered a shared passion for exploring the human experience with video production. 
                    </h3>
                    <h3 className='relative left-[22vw] mt-32 text-3xl w-[55vw] text-left text-white' id='third'>
                        Stories are what bind us together. We prioritize building long-lasting relationships that go well beyond the completion of a project. 
                    </h3>
                    <h3 className='relative left-[22vw] mt-32 text-3xl w-[55vw] text-left text-white pb-[12vh]' id='fourth'>
                        By the end of our first engagement, we want you to feel you`ve found the creative problem solvers you`ve always wanted on your team.
                    </h3>
                </div>
            </section>

            <div className='w-[100vw] h-fit absolute mt-[200vh] bg-[#0d0d0d] z-20 align-center justify-center flex overflow-x-hidden -left-3'>
                <div className='flex flex-row opacity-60 justify-center align-center space-x-2 overflow-x-hidden'>
                    <img src={abe_grid} alt="Aberration Background" className='relative h-[95vh] w-[97vw] mt-[2.5vh] ml-[1.5vw]' id='abe_grid'></img>
                    <img src={abe_grid} alt="Aberration Background" className='relative h-[95vh] w-[97vw] mt-[2.5vh] ml-[1.5vw]' id='abe_grid'></img>
                    <img src={abe_grid} alt="Aberration Background" className='relative h-[95vh] w-[97vw] mt-[2.5vh] ml-[1.5vw]' id='abe_grid'></img>
                    <img src={abe_grid} alt="Aberration Background" className='relative h-[95vh] w-[97vw] mt-[2.5vh] ml-[1.5vw]' id='abe_grid'></img>
                </div>

            </div>

            <section className='w-[100vw] h-[60vh] absolute mt-[249vh] pb-[13vh] bg-[#0d0d0d] rounded-[80px] z-30 border-2 border-white'>
                {/* <div className='border-l-2 border-white w-1 h-[60vh] relative top-10 left-[8vw] z-40'></div>
                <div className='rounded-full w-5 h-5 bg-white relative top-10 left-[7.2vw] z-40' id='circle2'></div> */}
                <div className='w-content flex flex-col justify-center relative left-[22vw] space-y-16'>
                    <div className='relative h-fit w-fit'>
                        <h1 className='relative text-white text-[4vw] mt-[6vh] left-[6.5vw]' id='trusted'>Our Team Is Trusted By</h1>
                    </div>
                    <div className='flex flex-col -space-y-3 justify-center right-5 relative' id='big_boys'>
                        <div className='relative flex flex-row w-[60vw] h-content space-x-96 justify-center align-center'>
                            <img src={disney} alt='Disney' className='h-[8vh] w-[6vw]'></img>
                            <img src={apple} alt='Apple' className='h-[6vh] w-[3vw]'></img>
                            <img src={sony} alt='Sony' className='relative h-[16vh] w-[7vw] bottom-10'></img>
                        </div>
                        <div className='relative flex flex-row w-[60vw] h-content space-x-56 justify-center align-center right-4'>
                            <img src={espn} alt='ESPN' className='relative h-[3vh] w-[7vw] top-3'></img>
                            <img src={amazon} alt='Amazon' className='relative h-[7vh] w-[7vw]'></img>
                        </div>
                    </div>
                </div>    
            </section>

            <section className='w-fit h-fit absolute mt-[310vh] pb-[20vh] bg-transparent z-30' id='contact'>
                <div className='relative left-[20vw] h-fit w-fit'>
                    <h1 className='relative text-white text-[5.5vw] mt-[20vh]' id='help'>How Can We Help?</h1>
                    <hr className='relative w-[35vw] h-[1vh] bg-gradient-to-r from-red-500 via-blue-500 to-green-500'/>
                </div>
                <div className='relative flex flex-row w-[60vw] h-fit space-x-20 justify-center align-center pt-[15vh] left-[20vw]'>
                    <a href='https://tfetn9etlwo.typeform.com/to/hPE8Baza' rel="noopener noreferrer" target="_blank" className='group' >
                        <div className='rounded-[80px] relative bg-white w-60 h-20 flex flex-row justify-center group-hover:bg-[#0d0d0d] border-2 border-white transition duration-200' id='button'>
                            <h3 className='pt-[2.5vh] text-2xl group-hover:text-white transition duration-200'>Contact Us</h3>
                        </div>
                    </a>
                </div>
                <div className='flex flex-row w-content relative mt-[13vh] justify-center align-center space-x-60 left-[22vw]'>
                    <div className='h-fit w-fit'>
                        <h3 className='text-white text-[2vw]'>317.500.0019</h3>
                    </div>
                    <div className='h-fit w-fit'>
                        <h3 className='text-white text-[2vw]'>Nashville, TN, USA</h3>
                    </div>
                </div>
            </section>

        </div>
    )
}