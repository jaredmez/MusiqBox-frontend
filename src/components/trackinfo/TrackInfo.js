import {getTrackInfo} from '../../services/musiq'
import { useState, useEffect } from 'react'
import playImg from '../../images/play-button.png'
import saveImg from '../../images/plus-save.png'
import "./trackinfo.css"

function TrackInfo(props) {
  const internalData = {
    artist: props.track.artist.name,
    artistId: props.track.artist.mbid,
    name: props.track.name,
    playcount: props.track.playcount
  }
  const [vidId, setVidId] = useState("");
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    setVidId("");
    setShowVideo(false);
  }, [props])

  const onPlay = async () => {
    const youtubeInfo = await getTrackInfo(internalData.artist, internalData.name)
    internalData.videoId = youtubeInfo;
    setVidId(youtubeInfo);
    setShowVideo(true);
  }

  if (showVideo) {
    return (
      <div className="trackContent">
        <p>{props.num + 1}</p>
        <div className="trackName">
          <p><strong>{props.track.name}</strong></p>
          <p>plays: {props.track.playcount}</p>
        </div>
        <img
          id="playButton"
          onClick={onPlay}
          src={playImg} 
          alt="play-button" 
        />
        <img
          id="saveButton"
          onClick={() => props.saveSong(internalData)}
          src={saveImg}
          alt="save-button"
        />

        <iframe width="420" height="281" src={`https://www.youtube.com/embed/${vidId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    )
  }
  
  return (
    <div className="trackContent">
      <p>{props.num + 1}</p>
      <div className="trackName">
          <p><strong>{props.track.name}</strong></p>
          <p>plays: {props.track.playcount}</p>
      </div>
      <img
        id="playButton"
        onClick={onPlay}
        src={playImg}
        alt="play-button"
      />
      <img 
        id="saveButton"
        onClick={() => props.saveSong(internalData)}
        src={saveImg}
        alt="save-button"
      />
    </div>
  )
}

export default TrackInfo