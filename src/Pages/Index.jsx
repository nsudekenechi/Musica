
import Image1 from "../assets/Images/pexels-rahul-1023044.jpg";
import Image2 from "../assets/Images/pexels-daniel-reche-3721941.jpg";
import Image3 from "../assets/Images/eric.png";
import Image4 from "../assets/Icons/Vector.svg";
import Image5 from "../assets/Images/pexels-mason-cook-2091399.jpg";

import { useEffect, useState } from "react";
import NewReleases from "../Components/NewReleases";
import PlayList from "../Components/PlayList";
import Navbar from "../Components/Navbar";
import MusicPlayer from "../Components/MusicPlayer";
import Loader from "../Components/Loader";
export default function Index() {
    const [data, setData] = useState({ newRelease: [], popular: [], playList: [] });
    const [index, setIndex] = useState(0);
    async function makeRequest() {
        let reqNew = await fetch("https://musica-api.up.railway.app/new");
        let resNew = await reqNew.json();
        let reqPopular = await fetch("https://musica-api.up.railway.app/Popular");
        let resPopular = await reqPopular.json();
        let reqPlaylist = await fetch("https://musica-api.up.railway.app/Playlist");
        let resPlaylist = await reqPlaylist.json();
        return setData({ newRelease: resNew, popular: resPopular, playList: resPlaylist })
    }
    function handleClick(id) {
        let songs = [...data?.newRelease, ...data?.popular];
        let index = 0;
        songs.forEach((song, i) => {
            if (song.id == id) {
                index = i;
            }
        })
        setIndex(index);

    }
    useEffect(() => {
        makeRequest();
    }, [data])

    return (
        <>
            {
            data?.newRelease && data?.newRelease.length ? (
                <div className="row m-0 p-0 py-3 text-white position-relative" id="container">
                    <Navbar />
                    <section className="col-11 text-white">
                        <section className="row gap-5 py-5">

                            <div className="col-7 px-5 row overflow-hidden position-relative" id="banner">
                                {/* Banner Text  */}
                                <div className="col-7 d-flex  flex-column justify-content-between align-items-start">
                                    <p className="fw-lighter py-5">Currated playlist</p>
                                    <div className="col-8">
                                        <h1 >R & B Hits</h1>
                                        <p className="fw-lighter">All mine, Lie again, Petty call me everyday, Out of time, No love, Bad
                                            habit,and so much more</p>
                                    </div>
                                    <div className=" my-5 d-flex  align-items-center">
                                        <div className="d-flex  align-items-center">
                                            <div className="rounded-circle overflow-hidden circle">
                                                <img className="w-100 h-100" src={Image1} alt="" />
                                            </div>
                                            <div className="rounded-circle overflow-hidden circle position-relative"
                                                style={{ left: "-20%" }}>
                                                <img className="h-100 w-100" src={Image2} alt="" />
                                            </div>
                                        </div>


                                        <div className="d-flex align-items-center">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M5.51981 1.66697C5.93981 1.67975 6.34647 1.75308 6.74047 1.88708H6.77981C6.80647 1.89975 6.82647 1.91375 6.83981 1.92641C6.98714 1.97375 7.12647 2.02708 7.25981 2.10041L7.51314 2.21375C7.61314 2.26708 7.73314 2.36641 7.79981 2.40708C7.86647 2.44641 7.93981 2.48708 7.99981 2.53308C8.74047 1.96708 9.63981 1.66041 10.5665 1.66697C10.9871 1.66697 11.4071 1.72641 11.8065 1.86041C14.2671 2.66041 15.1538 5.36041 14.4131 7.72041C13.9931 8.92641 13.3065 10.0271 12.4071 10.9264C11.1198 12.1731 9.70714 13.2797 8.18647 14.2331L8.01981 14.3337L7.84647 14.2264C6.32047 13.2797 4.89981 12.1731 3.60047 10.9197C2.70714 10.0204 2.01981 8.92641 1.59314 7.72041C0.839808 5.36041 1.72647 2.66041 4.21381 1.84641C4.40714 1.77975 4.60647 1.73308 4.80647 1.70708H4.88647C5.07381 1.67975 5.25981 1.66697 5.44647 1.66697H5.51981ZM11.4598 3.77375C11.1865 3.67975 10.8865 3.82708 10.7865 4.10708C10.6931 4.38708 10.8398 4.69375 11.1198 4.79308C11.5471 4.95308 11.8331 5.37375 11.8331 5.83975V5.86041C11.8205 6.01308 11.8665 6.16041 11.9598 6.27375C12.0531 6.38708 12.1931 6.45308 12.3398 6.46708C12.6131 6.45975 12.8465 6.24041 12.8665 5.95975V5.88041C12.8865 4.94641 12.3205 4.10041 11.4598 3.77375Z"
                                                    fill="white" />
                                            </svg>
                                            <p className="fw-lighter p-0 m-0 ms-1">33k Like</p>
                                        </div>


                                    </div>
                                </div>
                                {/* Banner Image  */}
                                <div className="col-4">
                                    <img src={Image3} className=" h-100 position-relative" style={{ zIndex: 10 }} alt="" />

                                </div>
                                <img src={Image4} className="position-absolute top-0 left-0" alt="" />
                            </div>

                            {/* Playlist */}
                            <div className="col-4   m-0 overflow-auto" id="top-chart">
                                <h4>Playlists</h4>
                                {
                                    data?.playList?.map(item => <PlayList key={item.id} Img={item.cover} title={item.title} id={item.id} artist={item.artist} duration={item.duration} />)
                                }

                            </div>

                            {/* New Releases */}
                            <section className="my-3 releases-section" id="new-releases">
                                <h4>New releases</h4>


                                <div className="d-flex gap-3" id="new-release-con">
                                    {
                                        data?.newRelease?.map(item => <NewReleases key={item.id} Img={item.cover} title={item.title} artist={item.artist} handleClick={() => { handleClick(item.id) }} />)
                                    }
                                </div>

                            </section>

                            {/* Popular */}
                            <section className="my-3 releases-section" id="new-releases">
                                <h4>Popular releases</h4>
                                <div className="d-flex gap-3" id="new-release-con">
                                    {
                                        data?.popular?.map(item => <NewReleases key={item.id} Img={item.cover} title={item.title} artist={item.artist} />)
                                    }
                                </div>

                            </section>
                        </section>

                    </section>
                    <MusicPlayer data={[...data?.newRelease, ...data?.popular]} songIndex={index} />
                </div>
            ) :
                <Loader />
            }


        </>

    )
}