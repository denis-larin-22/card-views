import ReactPlayer from 'react-player';
import { useRef, useState } from 'react';
import { Card } from './Card';
import { getFromPublic } from '../_utils/getFromPublic';

export const CardPage = () => {
    const assets = {
        bcgImage: getFromPublic('/assets/images/bcg-image.jpg'),
        bcgVideo: getFromPublic('/assets/media/video/space-bcg.mp4'),
        bcgAudio: getFromPublic('/assets/media/audio/interstellar-Day_One.mp3')
    };

    const [isPlayingBcg, setIsPlayingBcg] = useState(false);
    const [isPlayingAudio, setIsPlayingAudio] = useState(false);
    const audioRef = useRef(null);

    const togglePlayAudio = () => {
        isPlayingAudio ? audioRef.current.pause() : audioRef.current.play();
        setIsPlayingAudio(!isPlayingAudio);
    };

    return (
        <div className="relative w-screen h-screen overflow-hidden bg-black z-[10]">
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
            {isPlayingBcg ? null : <img src={assets.bcgImage} alt="default-background" className="w-[100%] h-[100%] absolute top-0 left-0 z-[-1] object-cover" />}

            <main className="container flex items-center justify-center content">
                <Card isPlayingAudio={isPlayingAudio} toggleAudio={togglePlayAudio} isPlayingBcg={isPlayingBcg} toggleBcg={() => setIsPlayingBcg(!isPlayingBcg)} />
            </main>
        </div>
    )
};