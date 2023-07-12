import ReactPlayer from 'react-player';
import { Card } from './Card';

export const BcgContainer = () => {
    const assets = {
        bcgVideo: process.env.PUBLIC_URL + '/assets/media/video/space-bcg.mp4',
        bcgAudio: process.env.PUBLIC_URL + '/assets/media/audio/interstellar-Day_One.mp3'
    }

    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <audio controls playing={true} src={assets.bcgAudio}>asdfgh</audio>
            <ReactPlayer
                url={assets.bcgVideo}
                playing={true}
                loop
                muted
                width="100%"
                height="100%"
                className='absolute top-0 left-0 z-[-1] video-background'
            />
            <div className="container content flex items-center justify-center">
                <Card />
            </div>
        </div>
    )
}