import { getFromPublic } from "../../_utils/getFromPublic";
import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const CardView = ({
    isVisibleHandler,
    listThemes,
    cardTheme,
    isPlayingBcg,
    toggleBcg,
    isPlayingAudio,
    toggleAudio,
    upNext,
    setCurrent
}) => {
    //Icons from public
    const assets = {
        iconClose: getFromPublic('/assets/images/card-icons/Close.svg'),
        iconHide: getFromPublic('/assets/images/card-icons/Hide.png'),
        iconPlay: getFromPublic('/assets/images/card-icons/Play.svg'),
        iconPause: getFromPublic('/assets/images/card-icons/Pause.png'),
    }

    const { title, text, description, previeImage } = cardTheme;
    const [activeContent, setActiveContent] = useState('Info');
    //Styles for card components
    const navLinkStyles = (title) => (`${activeContent === title && 'btn-active'} px-[15px] py-[10px] md:px-[24px] md:py-[12px] rounded-[99px] ease-in duration-300 hover:bg-white-0.2 hover:text-white`);
    const buttonsStyle = {
        navButtons: 'p-[10px] md:p-[15px] bg-white-0.1 rounded-[99px] ease-in duration-300 hover:bg-white-0.6',
        mainButtons: 'px-[32px] py-[18px] rounded-[18px] italic bg-white-0.2 ease-in duration-300 hover:bg-white-0.6 hover:text-black active:scale-90'
    }
    //Animation styles for card content
    const cardContentAnim = {
        hidden: { opacity: 0, x: '-50px' },
        visible: { opacity: 1, x: 0 },
    }


    return (
        <AnimatePresence>
            <div className="relative p-[24px] flex flex-col gap-[10px] md:gap-[21px] text-white-0.6">
                <header className="flex items-center justify-center">
                    <div className="flex gap-x-[5px] absolute top-[15px] left-[15px] md:top-[24px] md:left-[24px]">
                        <Link to={'..'} className={`${buttonsStyle.navButtons}`}>
                            <img src={assets.iconClose} alt="icon-close" />
                        </Link>
                        <button className={`${buttonsStyle.navButtons}`} onClick={isVisibleHandler}>
                            <img src={assets.iconHide} alt="icon-hide" />
                        </button>
                    </div>

                    <nav className="flex gap-[3px] pt-[30px] exsm:pt-0 exsm:mt-0 text-cardNav-sm exsm:text-cardNav-md">
                        <button className={`${navLinkStyles('Info')}`} onClick={() => setActiveContent('Info')}>Info</button>
                        <button className={`${navLinkStyles('Chapters')}`} onClick={() => setActiveContent('Chapters')}>Chapters</button>
                        <button className={`${navLinkStyles(null)}`} onClick={upNext}>Up Next</button>
                    </nav>
                </header>

                {activeContent === 'Info' &&
                    <motion.main
                        className="flex flex-col exsm:flex-row items-center max-w-[912px] gap-[10px] md:gap-[21px]"
                        initial={cardContentAnim.hidden}
                        animate={cardContentAnim.visible}
                        exit={{ opacity: 0, x: '50px' }}
                    >
                        <img src={previeImage} alt="card-img" className="rounded-[18px] max-w-[224px] max-h-[128px]" />
                        <section className="flex flex-col exsm:flex-col md:flex-row items-center gap-[10px] md:gap-[21px]">
                            <div className="max-w-[354px] text-cardText text-left exsm:text-center md:text-left">
                                <h4 className="pb-[5px] text-[17px] leading-[23px] tracking-[0.17px] text-white  italic">{title}</h4>
                                <p className="pb-[5px]">{text}</p>
                                <p className=" text-[16px]">{description}</p>
                            </div>
                            <div className="min-w-[251px] flex flex-col gap-y-[12px] text-cardBtn text-white">
                                <button
                                    className={`flex items-center gap-x-[12px] ${buttonsStyle.mainButtons}`}
                                    onClick={toggleAudio}
                                >
                                    <img src={isPlayingAudio ? assets.iconPause : assets.iconPlay} alt="icon-play" className="w-[15px] h-[16px]" />
                                    From Beginning
                                </button>
                                <button
                                    className={buttonsStyle.mainButtons}
                                    onClick={toggleBcg}
                                >
                                    {isPlayingBcg ? 'Stop playing' : 'Go to Series'}
                                </button>
                            </div>
                        </section>
                    </motion.main>}

                {activeContent === 'Chapters' &&
                    <motion.main
                        className="max-w-[912px] grid grid-cols-2 exsm:grid-cols-3 md:flex items-center gap-[21px]"
                        initial={cardContentAnim.hidden}
                        animate={cardContentAnim.visible}
                        exit={{ opacity: 0, x: '50px' }}
                    >
                        {listThemes.map((item, index) => {
                            if (item.title === title) return null;
                            return (
                                <button key={index} className="w-full h-full rounded-[18px] overflow-hidden ease-in duration-300 hover:scale-105 hover:rotate-6 active:scale-90" onClick={() => setCurrent(item)}>
                                    <img src={item.previeImage} alt="preview" className="min-h-full min-w-full md:min-h-[128px]" />
                                </button>
                            )
                        })}
                    </motion.main>}
            </div>
        </AnimatePresence>
    )
};
// Redux
const mapDispatchToProps = (dispatch) => ({
    upNext: () => dispatch({ type: 'UP_NEXT' }),
    setCurrent: (item) => dispatch({ type: 'SET_CURRENT', payload: item })
})

export const Card = connect(null, mapDispatchToProps)(CardView);