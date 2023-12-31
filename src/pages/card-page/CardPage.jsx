import { getFromPublic } from '../../_utils/getFromPublic';
import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from './Card';

const CardPageView = ({ currentTheme, listThemes }) => {
    //Icons
    const showIcon = getFromPublic('/assets/images/card-icons/Open.png');
    //Values from current state
    const { bcgImage, bcgVideo, audio, ...cardTheme } = currentTheme;
    //Animation styles for card content
    const [isVisibleCard, setIsVisibleCard] = useState(true)
    const [isPlayingBcg, setIsPlayingBcg] = useState(false);
    const [isPlayingAudio, setIsPlayingAudio] = useState(false);
    const audioRef = useRef(null);

    const togglePlayAudio = () => {
        isPlayingAudio ? audioRef.current.pause() : audioRef.current.play();
        setIsPlayingAudio(!isPlayingAudio);
    };

    return (
        <motion.div
            className="relative w-screen h-screen overflow-hidden bg-black z-[10] origin-top-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
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
            <AnimatePresence>
                {isPlayingBcg ? null : <motion.img
                    src={bcgImage}
                    alt="default-background"
                    className="w-[100%] h-[100%] absolute top-0 left-0 z-[-1] object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />}
            </AnimatePresence>

            <main className="container absolute top-2/4 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50 flex items-center justify-center">
                <AnimatePresence>
                    {isVisibleCard && <motion.div
                        className="border-[2px] border-white-0.2 rounded-[32px] backdrop-blur-xl"
                        initial={{ y: "100px", opacity: 0 }}
                        animate={{ y: "0", opacity: 1 }}
                        exit={{ y: "100px", opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card
                            isVisibleHandler={() => setIsVisibleCard(!isVisibleCard)}
                            cardTheme={cardTheme}
                            listThemes={listThemes}
                            isPlayingAudio={isPlayingAudio}
                            toggleAudio={togglePlayAudio}
                            isPlayingBcg={isPlayingBcg}
                            toggleBcg={() => setIsPlayingBcg(!isPlayingBcg)}
                        />
                    </motion.div>}
                </AnimatePresence>

                {!isVisibleCard && <motion.button
                    className='flex items-center gap-x-[5px] fixed right-0 p-[10px] md:p-[15px] bg-white-0.1 rounded-[99px] ease-in duration-300 hover:bg-white-0.6 hover:text-black active:scale-90'
                    onClick={() => setIsVisibleCard(!isVisibleCard)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <img src={showIcon} alt="show-card" />
                    Show card
                </motion.button>}
            </main>
        </motion.div>
    )
};
//Redux
const mapStateToProps = (state) => ({
    currentTheme: state.cardSetReducer.currentTheme,
    listThemes: state.cardSetReducer.listTheme,
});

export const CardPage = connect(mapStateToProps)(CardPageView);