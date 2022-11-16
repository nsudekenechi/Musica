import Image1 from "../assets/Images/Rectangle 21.jpg"
// import Image2 from "../assets/Icons/"
import { useEffect, useRef, useState } from "react"
export default function MusicPlayer({ data, songIndex }) {

    const audioRef = useRef(null);
    const seekRef = useRef(null);
    const volumeRef = useRef(null);
    const [Index, setIndex] = useState(0);

    const [playing, setPlaying] = useState(false);
    const [vol, setVolume] = useState(0);
    let [playIcon, setPlayIcon] = useState("Play.svg");
    let [idInterval, setIdInterval] = useState(0);
    let [seekWidth, setSeekWidth] = useState(0);
    let [mute, setMute] = useState("volume-high.svg");
    let [repeats, setRepeats] = useState("repeat.svg");

    let index = Index;



    function playSong() {
        if (playing == false) {
            play();

        } else {
            pause();
        }
    }

    function play() {
        audioRef.current.play();
        setPlaying(!playing);
        seekTime();
        setPlayIcon("pause.svg");
    }

    function pause() {
        audioRef.current.pause();
        setPlaying(!playing);
        setPlayIcon("Play.svg");
        clearInterval(idInterval);
    }



    function next() {
        index++;

        if (index >= data.length) {
            index = 0;
        }
        setIndex(index);
        if (playIcon == "pause.svg") {
            audioRef.current.autoplay = true;
        } else {
            audioRef.current.autoplay = false;
        }
        seekTime(true, playIcon);

    }

    function prev() {
        index--;
        if (index <= 0) {
            index = data.length - 1;
        }
        setIndex(index);
        if (playIcon == "pause.svg") {
            audioRef.current.autoplay = true;

        } else {

            audioRef.current.autoplay = false;
        }
        seekTime(true, playIcon);
    }
    function random() {
        index = Math.floor(Math.random() * data.length);
        setIndex(index);
        audioRef.current.autoplay = true;
        seekTime(true);
        stop();
        setPlayIcon("pause.svg");
    }
    function seekTime(next = false, playIcon = "pause.svg") {

        let duration = data[Index].duration.split(":");
        let toSeconds = (parseInt(duration[0]) * 60) + parseInt(duration[1]);
        let timeTaken = 100 / toSeconds;
        let width = 0;
        let seconds = 0;
        if (next == true) {
            width = 0;
            setSeekWidth(0)
            clearInterval(idInterval);
        } else {
            width = seekWidth;
        }


        if (playIcon == "pause.svg") {
            // Setting Pause to Play 

            setPlaying(true);

            let id = setInterval(() => {
                if (parseInt(width) <= 100) {
                    // Start Moving Width
                    width += timeTaken;
                    setSeekWidth(width);
                    seconds++;

                } else {
                    // Stop moving seek

                }

            }, 1000)
            setIdInterval(id);
        } else {
            // Setting Play to pause when user hits next but play icon is paused
            setPlaying(false);

        }


    }

    function volume(e) {
        let volumeWidth = parseInt(e.clientX - volumeRef.current.getBoundingClientRect().left);
        if (volumeWidth <= 100) {
            volumeRef.current.style.width = `${volumeWidth}%`
        }

        setVolume(volumeWidth / 100);
        if (vol >= 0 && vol <= 1) {
            let mainVolume = vol;
            if (Math.sign(e.movementX) > 0) {
                mainVolume += 0.01
            } else {
                mainVolume -= 0.01
            }
            mainVolume = Number(parseFloat(mainVolume).toFixed(1));
            audioRef.current.volume = mainVolume;
        }



    }

    const muteAudio = () => {
        if (mute == "volume-high.svg") {
            setMute("volume-mute.svg")
            audioRef.current.muted = true;
        } else {
            setMute("volume-high.svg")

            audioRef.current.muted = false;
        }


    }

    const repeat = () => {
        if (repeats == "repeat.svg") {
            setRepeats("repeat-one.svg");
            audioRef.current.loop = true;
        } else {
            setRepeats("repeat.svg");
            audioRef.current.loop = false;


        }
    }
    useEffect(() => {
        if (data && data.length) {
            audioRef.current.volume = Number((volumeRef.current.getBoundingClientRect().width / 100).toFixed(1));
            setIndex(songIndex);

        }
    }, [songIndex, data]);

    return (
        <section className="position-fixed bottom-0 w-100 py-4 px-5 left-0" id="music-player">
            {data && data.length ? (
                <>
                    <audio src={data[Index]?.audio} ref={audioRef} ></audio>

                    <div className="row">
                        {/* <!- title  */}
                        <div className="col-2 d-flex " id="music-title">
                            <div className="col-3  overflow-hidden" id="img-con">
                                <img src={data[Index]?.cover} className="w-100 h-100" alt="" />
                                {data[Index]?.title}
                            </div>
                            <div className="col-12 mx-2 mt-1">
                                <h3 className="m-0">{data[Index]?.title}</h3>
                                <p className="fw-lighter">{data[Index]?.artist}</p>
                            </div>
                        </div>
                        {/* <!-c title */}

                        {/* <!- Icons  */}
                        <div className="col-8  d-flex flex-column align-items-center justify-content-between" id="music-icons">
                            <div className="d-flex  col-4 justify-content-between align-items-center">
                                <svg onClick={random} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.5 12.7593C14.5 12.746 14.4933 12.7327 14.4933 12.7193C14.4867 12.666 14.48 12.6127 14.46 12.566C14.4333 12.506 14.4 12.4593 14.36 12.4127C14.36 12.4127 14.36 12.406 14.3533 12.406C14.3067 12.3593 14.2533 12.326 14.1933 12.2993C14.1333 12.2727 14.0667 12.2593 14 12.2593L10.8867 12.2727C10.8867 12.2727 10.8867 12.2727 10.88 12.2727C10.48 12.2727 10.0933 12.086 9.85333 11.766L9.04 10.7193C8.87333 10.4993 8.56 10.4593 8.34 10.6327C8.12 10.806 8.08 11.1127 8.25333 11.3327L9.06666 12.3793C9.5 12.9393 10.18 13.2727 10.8867 13.2727H10.8933L12.7933 13.266L12.32 13.7393C12.1267 13.9327 12.1267 14.2527 12.32 14.446C12.42 14.546 12.5467 14.5927 12.6733 14.5927C12.8 14.5927 12.9267 14.546 13.0267 14.446L14.36 13.1127C14.4067 13.066 14.44 13.0127 14.4667 12.9527C14.4867 12.886 14.5 12.8193 14.5 12.7593Z"
                                        fill="white" />
                                    <path
                                        d="M5.61333 5.23266C5.18 4.63266 4.48667 4.27933 3.74667 4.27933C3.74 4.27933 3.74 4.27933 3.73333 4.27933L2 4.28599C1.72667 4.28599 1.5 4.51266 1.5 4.78599C1.5 5.05933 1.72667 5.28599 2 5.28599L3.74 5.27933H3.74667C4.16667 5.27933 4.56 5.47933 4.8 5.81933L5.52 6.81933C5.62 6.95266 5.77333 7.02599 5.92667 7.02599C6.02667 7.02599 6.13333 6.99266 6.22 6.93266C6.44667 6.76599 6.49333 6.45266 6.33333 6.23266L5.61333 5.23266Z"
                                        fill="white" />
                                    <path
                                        d="M14.4933 4.82597C14.4933 4.81263 14.5 4.7993 14.5 4.79263C14.5 4.72597 14.4867 4.6593 14.46 4.5993C14.4333 4.5393 14.4 4.48597 14.3533 4.4393L13.02 3.10597C12.8267 2.91263 12.5067 2.91263 12.3133 3.10597C12.12 3.2993 12.12 3.6193 12.3133 3.81263L12.7867 4.28597L10.9667 4.2793C10.96 4.2793 10.96 4.2793 10.9533 4.2793C10.1867 4.2793 9.46667 4.6593 9.04 5.30597L4.78 11.6926C4.54 12.0526 4.13333 12.2726 3.7 12.2726H3.69333L2 12.2593C1.72667 12.2593 1.5 12.4793 1.5 12.7593C1.5 13.0326 1.72 13.2593 2 13.2593L3.7 13.266C3.70667 13.266 3.70667 13.266 3.71333 13.266C4.48667 13.266 5.2 12.886 5.62667 12.2393L9.88667 5.85263C10.1267 5.49263 10.5333 5.27263 10.9667 5.27263H10.9733L14 5.28597C14.0667 5.28597 14.1267 5.27263 14.1933 5.24597C14.2533 5.2193 14.3067 5.18597 14.3533 5.1393C14.3533 5.1393 14.3533 5.13263 14.36 5.13263C14.4 5.08597 14.44 5.0393 14.46 4.9793C14.48 4.93263 14.4867 4.8793 14.4933 4.82597Z"
                                        fill="white" />
                                </svg>
                                <svg onClick={prev} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.4933 5.58597V11.966C13.4933 13.2726 12.0733 14.0926 10.94 13.4393L8.17334 11.846L5.40667 10.246C4.27334 9.59263 4.27334 7.9593 5.40667 7.30597L8.17334 5.70597L10.94 4.11263C12.0733 3.4593 13.4933 4.27263 13.4933 5.58597Z"
                                        fill="white" />
                                    <path
                                        d="M2.50668 13.3926C2.23335 13.3926 2.00668 13.166 2.00668 12.8926V4.65265C2.00668 4.37932 2.23335 4.15265 2.50668 4.15265C2.78002 4.15265 3.00668 4.37932 3.00668 4.65265V12.8926C3.00668 13.166 2.78002 13.3926 2.50668 13.3926Z"
                                        fill="white" />
                                </svg>
                                <div id="" onClick={playSong} className="circle d-flex justify-content-center align-items-center rounded-circle">
                                    <img src={`../public/Icons/${playIcon}`} alt="" />

                                </div>
                                <svg onClick={next} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.50667 5.58597V11.966C2.50667 13.2726 3.92667 14.0926 5.06 13.4393L7.82667 11.846L10.5933 10.246C11.7267 9.59263 11.7267 7.9593 10.5933 7.30597L7.82667 5.70597L5.06 4.11263C3.92667 3.4593 2.50667 4.27263 2.50667 5.58597Z"
                                        fill="white" />
                                    <path
                                        d="M13.4933 13.3926C13.22 13.3926 12.9933 13.166 12.9933 12.8926V4.65265C12.9933 4.37932 13.22 4.15265 13.4933 4.15265C13.7667 4.15265 13.9933 4.37932 13.9933 4.65265V12.8926C13.9933 13.166 13.7733 13.3926 13.4933 13.3926Z"
                                        fill="white" />
                                </svg>

                                <div className="col-2">
                                    <img onClick={repeat} src={`./Icons/${repeats}`} alt="" />

                                </div>
                            </div>
                            <div className="position-relative  rounded-pill mt-3 col-10 volume-con" id="">
                                <div className="volume  d-flex align-items-center justify-content-end" id="" ref={seekRef} style={{ width: `${parseInt(seekWidth)}%` }}>
                                    <div id="circle-seek" className="rounded-circle"></div>

                                </div>

                            </div>
                        </div>
                        {/*  Icons  */}

                        {/* Volume  */}
                        <div className="col-2  d-flex align-items-center" id="">
                            <img onClick={muteAudio} className="me-2" src={`./public/Icons/${mute}`} alt="" style={{ cursor: "pointer" }} />
                            <div className="position-relative overflow-hidden rounded-pill col-10 volume-con" onMouseMove={volume} id="">
                                <div className="volume" id="" ref={volumeRef}></div>
                            </div>
                        </div>
                        {/* Volume  */}
                    </div>
                </>
            ) : null}
        </section>
    )
}