

function VideoPlayer(props) {

    if(props.data.play) {
        console.log(props)
        return ( 
            <div className="videoplayer">
               <div onClick={props.closePlayer}> close </div>
               <iframe width="320" height="221" src={`https://www.youtube.com/embed/${props.data.info.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        )
    } else {
        return <h1>test</h1>
    }
}

export default VideoPlayer