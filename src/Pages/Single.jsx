import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Image2 from "../assets/Icons/Play-square.svg";
import Image3 from "../assets/Icons/music-square-add.svg";
import Image4 from "../assets/Icons/Heart-Red.svg";
import Image5 from "../assets/Icons/Heart-2.svg";

import Navbar from "../Components/Navbar";
import MusicPlayer from "../Components/MusicPlayer";
import Loader from "../Components/Loader";
const Single = () => {
    const { id } = useParams();
    const [playList, setPlayList] = useState([]);
    const [playListDuration, setPlayListDuration] = useState("");
    const [Index, setIndex] = useState(0);

    async function makeRequest() {
        let reqPlaylist = await fetch("https://musica-api.up.railway.app/Playlist");
        let resPlaylist = await reqPlaylist.json();
        let singlePlaylist = resPlaylist.filter(playlist => playlist.id == id);
        singlePlaylist = [...singlePlaylist];

        let duration = 0;
        let minutes = 0;

        setPlayList(...singlePlaylist);

        playList?.files?.forEach(file => {
            // Getting the total seconds of all files by splitting it by : to get minutes and seconds
            duration += Number(file.duration.split(":")[0]) * 60 + Number(file.duration.split(":")[1]);
        })


        minutes = duration / 60;
        let text = "";

        if (Math.floor(minutes) < 60) {

            // Getting decimal part 
            let seconds = (Math.abs(minutes) - Math.floor(minutes)) * 60;

            if (seconds > 0) {
                text = `${Math.floor(minutes)} minutes ${parseInt(seconds)} seconds`
            } else {
                text = `${Math.floor(minutes)} minutes`
            }
        }

        setPlayListDuration(text);

    }

    const handleClick = (id) => {
        let newIndex;
        let i = playList?.files?.forEach((file, index) => {
            if (file.id == id) {
                newIndex = index
            }
        })
        setIndex(newIndex)

    }

    useEffect(() => {
        makeRequest();
    }, [playListDuration]);

    return (
        <>
            {playListDuration ? (
                <div className="row m-0 p-0 py-3 text-white position-relative" id="container">
                    <div id="single_cover" className="m-0 p-0 position-absolute top-0 col-12 left-0 ">
                        <img src={playList?.cover} className=" w-100 h-100" alt="" />
                    </div>
                    <Navbar />
                    <section className="col-11 p-0 text-white py-3 position-relative" id="single">

                        {/* <!-- Main Section --> */}
                        <div className="position-relative container" style={{ zIndex: 10 }}>
                            {/* <!-- Search Bar Section--> */}
                            <div id="search-bar" className="d-flex align-items-center p-0 py-2 position-relative">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                                        stroke="white" strokeOpacity="0.25" strokeWidth="1.33333" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                    <path d="M14 14L11.1 11.1" stroke="white" strokeOpacity="0.25" strokeWidth="1.33333"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <input type="text" className="ps-2 fs-6" placeholder="Search Artists" />
                            </div>

                            {/* <!-- Section --> */}
                            <section>
                                <div className="row my-4 align-items-center gap-3">
                                    <div className="col-3 overflow-hidden  p-0" id="single_img-con">
                                        <img src={playList?.cover} className="img-fluid h-100 w-100" alt="" />
                                    </div>

                                    <div className="col-8" id="single_text-con">
                                        <h3>{playList?.title}</h3>
                                        <p>{playList?.info}</p>
                                        <p>{playList?.files?.length} songs ~ {playListDuration}</p>
                                        <div className="row gap-4">
                                            <button
                                                className="btn text-white py-2  col-2 d-flex align-items-center justify-content-center">
                                                <img src={Image2} className="me-2" alt="" />
                                                Play all
                                            </button>

                                            <button
                                                className="btn text-white  py-2 col-3 d-flex align-items-center justify-content-center">
                                                <img src={Image3} className="me-2" alt="" />
                                                Add to collection
                                            </button>

                                            <div className="col-1 d-flex align-items-center justify-content-center">
                                                <button className="btn  circle d-flex justify-content-center align-items-center">
                                                    <img src={Image4} alt="" />

                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div className="my-5 ps-3 pe-5 overflow-auto " style={{ height: "30vh" }} id="single_other-playlists">
                                    {
                                        playList?.files?.map(file => {
                                            return (
                                                <div onClick={() => handleClick(file.id)} key={file.cover} className="row px-4 my-3 py-3 align-items-center justify-content-between"
                                                    id="single_other-playlist">
                                                    <div className="row  col-1 align-items-center">
                                                        <div className="m-0  p-0 img-con col-6  overflow-hidden">
                                                            <img src={file.cover} className="w-100 h-100" alt="" />
                                                        </div>
                                                        <div className="ms-2  p-0 col-1">
                                                            <img src={Image5} alt="" />
                                                        </div>
                                                    </div>
                                                    <h3 className="col-3 ">{file.title} - {file.artist}</h3>
                                                    <h3 className="col-3">Single</h3>
                                                    <h3 className="col-3">{file.duration}</h3>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </section>
                        </div>
                    </section>

                    <MusicPlayer data={playList?.files} songIndex={Index} />


                </div>
            ) : <Loader />}

        </>
    )
}

export default Single;