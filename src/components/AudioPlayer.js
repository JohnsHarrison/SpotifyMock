import React from 'react'
import AudioPlay from "../Assets/AudioPlay.svg"
import Skip from "../Assets/Skip.svg"
import Shuffle from "../Assets/Shuffle.svg"
import Repeat from "../Assets/Repeat.svg"
import AudioPause from "../Assets/AudioPause.svg"
import Mute from "../Assets/Mute.svg"
import Low from "../Assets/Low.svg"
import Medium from "../Assets/Medium.svg"
import Full from "../Assets/Full.svg"
import Connect from "../Assets/Connect.svg"
import Que from "../Assets/Que.svg"
import Wake from "../Assets/Wake.jpg"
import HTP from "../Assets/HTP.mp3"
import { useState, useEffect, useRef } from 'react'

function AudioPlayer() {
    // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentVolume, setCurrentVolume] = useState(5)

    // references
    const audioPlayer = useRef(); 
    const progressBar = useRef();   
    const animationRef = useRef();
    const volumeRef = useRef()

    useEffect(() => {
        audioPlayer.current.volume =0.5
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);


  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
        audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }

  const changeVolume = () =>{
    audioPlayer.current.volume = volumeRef.current.value / 100;
    setCurrentVolume(volumeRef.current.value / 10)
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }



    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }


  return (
<div className='MusicPlayer'>

    <div className='Song'>
        <img style={{"boxShadow":"2px 3px 20px black","height":"56px"}} src={Wake} alt=''></img>
        <div style={{"display":"flex", "flexDirection":"column", "marginLeft":"15px"}}>
            <span style={{"fontWeight":"500", "fontSize":"14px", "color":"white"}} >Human Target Practice</span>
            <span style={{"fontSize":"12px", "fontWeight":"500"}} >Hail The Sun</span>
        </div>
    </div>

    <div className='Audio'>
        <div className='PlayerButtons'>
            <audio ref={audioPlayer} src={HTP} preload="metadata"></audio>
            <img style={{"cursor":"pointer"}} src={Shuffle} alt=""></img>
            <img style={{"cursor":"pointer","transform":"rotatey(180deg)"}} src={Skip} alt=""></img>
            <img style={{"cursor":"pointer"}} onClick={togglePlayPause} src={isPlaying? AudioPause: AudioPlay} alt=""></img>
            <img style={{"cursor":"pointer"}} src={Skip} alt=""></img>
            <img style={{"cursor":"pointer"}} src={Repeat} alt=""></img>
        </div>

        <div style={{"display":"flex", "alignItems":"center"}}>
                {/* current time */}
            <div className='Current'>{calculateTime(currentTime)}</div>

            {/* progress bar */}
            <div>
            <input type="range" className="Progress" defaultValue="0" ref={progressBar} onChange={changeRange}/>
            </div>

            {/* duration */}
            <div className='Duration'>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
  
        </div>
     

    </div>

    <div className='Volume'>
        <img src={Que} alt=""></img>
        <img  style={{"marginTop":"8px"}}src={Connect} alt=""></img>
        <img src={ 
            currentVolume > 0  && currentVolume <= 3 ? Low
            : currentVolume > 3 && currentVolume <= 6 ? Medium
            : currentVolume > 6 ? Full
            : Mute

        } alt=""></img>
        <input type="range" defaultValue="50" ref={volumeRef} onChange={changeVolume}></input>

    </div>
</div>
  )
}

export {AudioPlayer}