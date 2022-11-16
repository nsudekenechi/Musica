export default function NewReleases({Img,title,artist,handleClick}) {
    
    return (
       
            <div onClick={handleClick} className="col-2 my-2 new-release">
                <div className="col-10 img-con  overflow-hidden">
                    <img className="h-100 w-100" src={Img} alt="" />
                </div>
                <div className="my-2">
                    <p className="fw-lighter m-0">{title}</p>
                    <p className="fw-lighter artist m-0">{artist}</p>

                </div>
            </div>
       
    )
}