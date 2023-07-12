import ReactPlayer from 'react-player';
import { Card } from './Card';
import { useRef, useState } from 'react';

export const BcgContainer = () => {
    const assets = {
        bcgVideo: process.env.PUBLIC_URL + '/assets/media/video/space-bcg.mp4',
        bcgAudio: process.env.PUBLIC_URL + '/assets/media/audio/interstellar-Day_One.mp3'
    };

    const [isPlayingBcg, setIsPlayingBcg] = useState(false);
    const [isPlayingAudio, setIsPlayingAudio] = useState(false);
    const audioRef = useRef(null);

    const togglePlayAudio = () => {
        isPlayingAudio ? audioRef.current.pause() : audioRef.current.play();
        setIsPlayingAudio(!isPlayingAudio);
    };

    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <audio ref={audioRef} loop src={assets.bcgAudio} className=''></audio>
            <ReactPlayer
                url={assets.bcgVideo}
                playing={isPlayingBcg}
                loop
                muted
                width="100%"
                height="100%"
                className='absolute top-0 left-0 z-[-1] video-background'
            />
            <div className="container flex items-center justify-center content">
                <Card isPlayingAudio={isPlayingAudio} toggleAudio={togglePlayAudio} isPlayingBcg={isPlayingBcg} toggleBcg={() => setIsPlayingBcg(!isPlayingBcg)} />
            </div>
        </div>
    )
}