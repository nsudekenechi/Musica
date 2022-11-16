import { Link } from "react-router-dom"
export default function PlayList({Img,title,artist,duration,id}) {
    return (
        <Link to={`single/${id}`} className="text-white">
            <div className="top-chart-con my-3 px-3 row align-items-center col-12">
                <div className="col-2 m-0 p-0 ">
                    <div className="top-chart-img col-12 p-0 rounded-3 overflow-hidden">
                        <img src={Img}  className="img-fluid w-100 h-100"
                            alt="" />
                    </div>

                </div>
                <div className="top-chart-text col-8">
                    <h6 className="top-chart-title m-0 fw-lighter">{title}</h6>
                    <p className="top-chart-artist p-0 fw-lighter m-0 my-1">{artist}</p>
                    <h6 className="top-chart-time fw-lighter m-0">{duration}</h6>
                </div>
                <div className="top-chart-like col-1">
                    <div
                        className="p-1 circle-con d-flex justify-content-center align-items-center  rounded-circle">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M2.15388 8.69874C1.34913 6.18624 2.28963 3.31449 4.92738 2.46474C6.31488 2.01699 7.84638 2.28099 8.99988 3.14874C10.0911 2.30499 11.6789 2.01999 13.0649 2.46474C15.7026 3.31449 16.6491 6.18624 15.8451 8.69874C14.5926 12.6812 8.99988 15.7487 8.99988 15.7487C8.99988 15.7487 3.44838 12.7277 2.15388 8.69874Z"
                                stroke="#FACD66" strokeWidth="0.5625" strokeLinecap="round"
                                strokeLinejoin="round" />
                            <path opacity="0.4"
                                d="M12 5.02501C12.8025 5.28451 13.3695 6.00076 13.4377 6.84151"
                                stroke="#FACD66" strokeWidth="0.5625" strokeLinecap="round"
                                strokeLinejoin="round" />
                        </svg>
                    </div>

                </div>
            </div>
        </Link>

    )
}