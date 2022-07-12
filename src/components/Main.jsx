import React, { useEffect, useRef } from 'react'
import wordLogo from '../pics/wordLogo.png'
import table from '../pics/table.jpg'
import logo_rgb from '../pics/logo_rgb.png'
import apple from '../pics/apple.png'
import disney from '../pics/disney.png'
import sony from '../pics/sony.png'
import abe_grid from '../pics/abe_grid.png'
import { gsap, CSSPlugin } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {Link} from 'react-scroll'

gsap.registerPlugin(ScrollTrigger, CSSPlugin);

export default function Main() {

    const ref = useRef(null);
    const didAnimate = useRef(false);

    const Wvh = (coef) => window.innerHeight * (coef/100);
    const Wvw = (coef) => window.innerWidth * (coef/100);

    useEffect(() => {
        if (didAnimate.current) { return; }
        let element = ref.current;

        // gsap.to(
        //     element = document.querySelector("#table"), {
        //         opacity: 0,
                
        //         scrollTrigger: {
        //             start: '1500 bottom',
        //             end: '1501 bottom',
        //             scrub: true,
        //             toggleActions: 'restart none reverse none'
        //         }
        //     }
        // )

        // gsap.from(
        //     element = document.querySelector("#table"), {
        //         opacity: 1,

        //         scrollTrigger: {
        //             start: '2900 bottom',
        //             end: '2901 bottom',
        //             scrub: true,
        //             toggleActions: 'restart none reverse none'
        //         }
        //     }
        // )
        
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
                    start: "top 65%%",
                    end: "100 40%",
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
                    trigger: "#circle",
                    start: "center center",
                    end: Wvh(112) + " center",
                    scrub: 3,
                    pin: "#circle",
                    toggleActions: 'restart none none none',
                }
            }
        )

        gsap.to(
            element = document.querySelector("#circle2"), {
                scrollTrigger: {
                    trigger: "#circle2",
                    start: "center center",
                    end: Wvh(85) + " center",
                    scrub: 3,
                    pin: "#circle2",
                    toggleActions: 'restart none none none',
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
                        <Link activeClass="active" to="top" spy={true} smooth={true}>
                            <div className='flex flex-row space-x-3 group mt-6 cursor-pointer'>
                                <h2 className='group-hover:visible invisible'>[</h2>
                                    <h2>Top</h2>
                                <h2 className='group-hover:visible invisible'>]</h2>
                            </div>
                        </Link>
                        <Link to="about" spy={true} smooth={true}>
                            <div className='flex flex-row space-x-3 group mt-6 cursor-pointer'>
                                <h2 className='group-hover:visible invisible'>[</h2>
                                    <h2>About</h2>
                                <h2 className='group-hover:visible invisible'>]</h2>
                            </div>
                        </Link>
                        <Link to="contact" spy={true} smooth={true}>
                            <div className='flex flex-row space-x-3 group mt-6 cursor-pointer'>
                                <h2 className='group-hover:visible invisible'>[</h2>
                                    <h2>Contact</h2>
                                <h2 className='group-hover:visible invisible'>]</h2>
                            </div>
                        </Link>
                    </ul>
                    <div className=''>
                        <img src={logo_rgb} alt="RGB Logo" className='relative h-16 w-auto ml-12'></img>
                    </div>
                </div>
            </section>

            <section className='h-[100vh] w-[100vw] fixed z-20'>
                <div className='relative h-[95vh] w-[97vw]'>
                    <img src={table} alt="Video background" className='relative h-[95vh] w-[97vw] mt-[2.5vh] ml-[1.5vw] opacity-100' id='table'></img>
                </div>
            </section>

            <section className='w-[100vw] h-fit absolute mt-[100vh] pb-[5vh] bg-[#101820] rounded-[80px] z-30 flex flex-row border-2 border-white'>
                <div className='border-l-2 border-white w-1 h-[112vh] relative top-10 left-[8vw] z-40'></div>
                <div className='rounded-full w-5 h-5 bg-white relative top-10 left-[7.2vw] z-40' id='circle'></div>
                <div>
                    <div className='relative left-[20vw] h-fit w-fit' id='about'>
                        <h1 className='relative text-white text-[5.5vw] mt-[8vh]' id='first'>Story Comes <mark className='color-white bg-color-white'>First.</mark></h1>
                        <hr className='relative w-[35vw] h-[1vh] bg-gradient-to-r from-red-500 via-blue-500 to-green-500'/>
                    </div>
                    <h2 className='first-letter:font-bold first-letter:float-left first-letter:text-7xl first-letter:mr-3 relative left-[22vw] mt-24 text-4xl w-[55vw] text-left text-white' id='second'>We are a collective of experienced creatives drawn to the imperfections of chemical film, vintage lenses, and nostalgic set pieces. 
                        Aberration was formed because we discovered a shared passion for exploring the human experience. 
                    </h2>
                    <h2 className='first-letter:font-bold first-letter:float-left first-letter:text-7xl first-letter:mr-3  relative left-[22vw] mt-32 text-4xl w-[55vw] text-left text-white' id='third'>
                        Stories are what bind us together. We prioritize building long-lasting relationships that go well beyond the completion of a project. 
                    </h2>
                    <h2 className='first-letter:font-bold first-letter:float-left first-letter:text-7xl first-letter:mr-3  relative left-[22vw] mt-32 text-4xl w-[55vw] text-left text-white pb-10' id='fourth'>
                        By the end of our first engagement, we want you to feel you`ve found the creative problem solvers you`ve always wanted on your team.
                    </h2>
                </div>
            </section>

            <div className='w-[100vw] h-fit absolute mt-[200vh] bg-[#101820] z-20 align-center justify-center flex overflow-x-hidden'>
                <div className='flex flex-row opacity-60 justify-center align-center space-x-2 overflow-x-hidden'>
                    <img src={abe_grid} alt="Aberration Background" className='relative h-[95vh] w-[97vw] mt-[2.5vh] ml-[1.5vw]' id='abe_grid'></img>
                    <img src={abe_grid} alt="Aberration Background" className='relative h-[95vh] w-[97vw] mt-[2.5vh] ml-[1.5vw]' id='abe_grid'></img>
                    <img src={abe_grid} alt="Aberration Background" className='relative h-[95vh] w-[97vw] mt-[2.5vh] ml-[1.5vw]' id='abe_grid'></img>
                    <img src={abe_grid} alt="Aberration Background" className='relative h-[95vh] w-[97vw] mt-[2.5vh] ml-[1.5vw]' id='abe_grid'></img>
                </div>

            </div>

            <section className='w-[100vw] h-[95vh] absolute mt-[250vh] pb-[13vh] bg-[#101820] rounded-[80px] z-30 flex flex-row border-2 border-white'>
                <div className='border-l-2 border-white w-1 h-[85vh] relative top-10 left-[8vw] z-40'></div>
                <div className='rounded-full w-5 h-5 bg-white relative top-10 left-[7.2vw] z-40' id='circle2'></div>
                <div>
                    <div className='relative left-[20vw] h-fit w-fit'>
                        <h1 className='relative text-white text-[5.5vw] mt-[10vh]' id='trusted'>Our Team Is <mark>Trusted By</mark></h1>
                        <hr className='relative w-[35vw] h-[1vh] bg-gradient-to-r from-red-500 via-blue-500 to-green-500'/>
                    </div>
                    <div className='relative flex flex-row w-[60vw] h-fit space-x-32 justify-center align-center pt-[20vh] left-[22vw]' id='big_boys'>
                        <img src={apple} alt='Apple' className='h-[10vh] w-[6vw]'></img>
                        <img src={disney} alt='Disney' className='h-[12vh] w-[17vw]'></img>
                        <img src={sony} alt='Sony' className='relative h-[21vh] w-[17vw] bottom-7'></img>
                    </div>
                </div>
            </section>

            <section className='w-[100vw] h-[100vh] absolute mt-[344vh] bg-transparent z-30' id='contact'>
                <div className='relative left-[20vw] h-fit w-fit'>
                    <h1 className='relative text-white text-[5.5vw] mt-[20vh]' id='help'>How Can We Help?</h1>
                    <hr className='relative w-[35vw] h-[1vh] bg-gradient-to-r from-red-500 via-blue-500 to-green-500'/>
                </div>
                <div className='relative flex flex-row w-[60vw] h-fit space-x-20 justify-center align-center pt-[20vh] left-[20vw]'>
                    <a href='https://tfetn9etlwo.typeform.com/to/hPE8Baza' rel="noopener noreferrer" target="_blank" className='group' >
                        <div className='rounded-[80px] relative bg-white w-72 h-28 flex flex-row justify-center group-hover:bg-[#101820] group-hover:border-2 border-white transition duration-200' id='button'>
                            <h2 className='pt-10 text-3xl group-hover:text-white transition duration-200'>Contact Us</h2>
                        </div>
                    </a>
                </div>
                <div className='left-[22vw] relative h-fit w-fit mt-[10vh]'>
                    <h3 className='text-white text-[3vw]'>317.500.0019</h3>
                </div>
            </section>

        </div>
    )
}