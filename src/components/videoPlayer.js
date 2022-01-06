
function VideoPlayer(props) {
  const { play, info } = props.data;

  if(play) {
    return ( 
      <div className="videoplayer">
        <div> 
          <span 
            onClick={props.closePlayer}
            className="videoplayerCloseBtn"
          > close
          </span> 
        </div>
        <iframe 
          width="420" 
          height="221" 
          src={`https://www.youtube.com/embed/${info.videoId}`} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    )
  } else {
    return <></>
  }
}

export default VideoPlayer