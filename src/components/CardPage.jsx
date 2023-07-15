import ReactPlayer from 'react-player';
import { useRef, useState } from 'react';
import { Card } from './Card';
import { connect } from 'react-redux';
import { getFromPublic } from '../_utils/getFromPublic';

const CardPageView = ({ currentTheme }) => {
    const showIcon = getFromPublic('/assets/images/card-icons/Open.png');

    const { bcgImage, bcgVideo, audio, ...cardTheme } = currentTheme;

    const [isVisibleCard, setIsVisibleCard] = useState(true)
    const [isPlayingBcg, setIsPlayingBcg] = useState(false);
    const [isPlayingAudio, setIsPlayingAudio] = useState(false);
    const audioRef = useRef(null);

    const togglePlayAudio = () => {
        isPlayingAudio ? audioRef.current.pause() : audioRef.current.play();
        setIsPlayingAudio(!isPlayingAudio);
    };

    return (
        <div className="relative w-screen h-screen overflow-hidden bg-black z-[10]">
            <audio ref={audioRef} loop src={audio} className=''></audio>
            <ReactPlayer
                url={bcgVideo}
                playing={isPlayingBcg}
                loop
                muted
                width="100%"
                height="100%"
                className='absolute top-0 left-0 z-[-1] video-background'
            />
            {isPlayingBcg ? null : <img src={bcgImage} alt="default-background" className="w-[100%] h-[100%] absolute top-0 left-0 z-[-1] object-cover" />}

            <main className="container flex items-center justify-center content">
                {isVisibleCard ?
                    <Card
                        isVisibleHandler={() => setIsVisibleCard(!isVisibleCard)}
                        cardTheme={cardTheme}
                        isPlayingAudio={isPlayingAudio}
                        toggleAudio={togglePlayAudio}
                        isPlayingBcg={isPlayingBcg}
                        toggleBcg={() => setIsPlayingBcg(!isPlayingBcg)} />
                    :
                    <button className='flex items-center gap-x-[5px] fixed right-0 bottom-0 p-[10px] md:p-[15px] bg-white-0.1 rounded-[99px] ease-in duration-300 hover:bg-white-0.6 hover:text-black active:scale-90' onClick={() => setIsVisibleCard(!isVisibleCard)}>
                        <img src={showIcon} alt="show-card" />
                        Show card
                    </button>
                }
            </main>
        </div>
    )
};

const mapStateToProps = (state) => ({
    currentTheme: state.cardSetReducer.currentTheme
})

export const CardPage = connect(mapStateToProps)(CardPageView);