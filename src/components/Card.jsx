import { Link } from "react-router-dom";
import { getFromPublic } from "../_utils/getFromPublic"
import { connect } from "react-redux";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CardView = ({ isVisibleHandler, listThemes, cardTheme, isPlayingBcg, toggleBcg, isPlayingAudio, toggleAudio, upNext, setCurrent }) => {
    const assets = {
        iconClose: getFromPublic('/assets/images/card-icons/Close.svg'),
        iconHide: getFromPublic('/assets/images/card-icons/Hide.png'),
        iconPlay: getFromPublic('/assets/images/card-icons/Play.svg'),
        iconPause: getFromPublic('/assets/images/card-icons/Pause.png'),
    }

    const { title, text, description, previeImage } = cardTheme;
    const [activeContent, setActiveContent] = useState('Info');

    const linkesStyles = (title) => {
        return `${activeContent === title && 'btn-active'} px-[15px] py-[10px] md:px-[24px] md:py-[12px] rounded-[99px] ease-in duration-300 hover:bg-white-0.2 hover:text-white`
    }

    return (
        <AnimatePresence>
            <div className="relative max-w-[960px] p-[24px] flex flex-col gap-[21px]  text-white-0.6">
                <div className="flex items-center justify-center">
                    <div className="flex gap-x-[5px] absolute top-[15px] left-[15px] md:top-[24px] md:left-[24px] ">
                        <Link
                            to={'..'}
                            className="p-[10px] md:p-[15px] bg-white-0.1 rounded-[99px] ease-in duration-300 hover:bg-white-0.6"
                        >
                            <img src={assets.iconClose} alt="icon-close" />
                        </Link>
                        <button
                            className="p-[10px] md:p-[15px] bg-white-0.1 rounded-[99px] ease-in duration-300 hover:bg-white-0.6"
                            onClick={isVisibleHandler}
                        >
                            <img src={assets.iconHide} alt="icon-hide" />
                        </button>
                    </div>

                    <nav className="relative flex gap-[3px] mt-[30px] md:mt-0 text-cardNav-sm md:text-cardNav-md">
                        <button className={`${linkesStyles('Info')}`} onClick={() => setActiveContent('Info')}>Info</button>
                        <button className={`${linkesStyles('Chapters')}`} onClick={() => setActiveContent('Chapters')}>Chapters</button>
                        <button className="px-[15px] py-[10px] md:px-[24px] md:py-[12px] rounded-[99px] ease-in duration-300 hover:bg-white-0.2 hover:text-white" onClick={upNext}>Up Next</button>
                    </nav>
                </div>

                {activeContent === 'Info' &&
                    <motion.div
                        className="flex flex-col md:flex-row items-center gap-[21px]"
                        initial={{ opacity: 0, x: '-50px' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '50px' }}
                    >
                        <img src={previeImage} alt="card-img" className="rounded-[18px] max-w-[224px] max-h-[128px]" />
                        <div className="max-w-[354px] text-cardText">
                            <h4 className="pb-[5px] text-[17px] leading-[23px] tracking-[0.17px] text-white  italic">{title}</h4>
                            <p className="pb-[5px]">{text}</p>
                            <p className=" text-[16px]">{description}</p>
                        </div>
                        <div className="min-w-[251px] flex flex-col gap-y-[12px] text-cardBtn text-white">
                            <button
                                className="flex items-center gap-x-[12px] px-[32px] py-[18px] rounded-[18px] italic bg-white-0.2 ease-in duration-300 hover:bg-white-0.6 hover:text-black active:scale-90"
                                onClick={toggleAudio}
                            >
                                <img src={isPlayingAudio ? assets.iconPause : assets.iconPlay} alt="icon-play" className="w-[15px] h-[16px]" />
                                From Beginning
                            </button>
                            <button
                                className="px-[32px] py-[18px] rounded-[18px] italic bg-white-0.2 ease-in duration-300 hover:bg-white-0.6 hover:text-black active:scale-90"
                                onClick={toggleBcg}
                            >
                                {isPlayingBcg ? 'Stop playing' : 'Go to Series'}
                            </button>
                        </div>
                    </motion.div>}

                {activeContent === 'Chapters' &&
                    <motion.div
                        className="max-w-[912px] md:min-h-[128px] grid grid-cols-2 md:flex items-center gap-[21px]"
                        initial={{ opacity: 0, x: '-50px' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '50px' }}
                    >
                        {listThemes.map((item, index) => {
                            if (item.title === title) return null;
                            return (
                                <button key={index} className="w-full h-full rounded-[18px] overflow-hidden object-cover" onClick={() => setCurrent(item)}>
                                    <img src={item.previeImage} alt="preview" className="" />
                                </button>
                            )
                        })}
                    </motion.div>}
            </div>
        </AnimatePresence>
    )
};

const mapDispatchToProps = (dispatch) => ({
    upNext: () => dispatch({ type: 'UP_NEXT' }),
    setCurrent: (item) => dispatch({ type: 'SET_CURRENT', payload: item })
})

export const Card = connect(null, mapDispatchToProps)(CardView) 