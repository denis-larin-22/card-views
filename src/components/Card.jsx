import { Link } from "react-router-dom";
import { getFromPublic } from "../_utils/getFromPublic"

export const Card = ({ isVisibleHandler, cardTheme, isPlayingBcg, toggleBcg, isPlayingAudio, toggleAudio }) => {
    const assets = {
        iconClose: getFromPublic('/assets/images/card-icons/Close.svg'),
        iconHide: getFromPublic('/assets/images/card-icons/Hide.png'),
        iconPlay: getFromPublic('/assets/images/card-icons/Play.svg'),
        iconPause: getFromPublic('/assets/images/card-icons/Pause.png'),
    }

    const { title, text, description, previeImage } = cardTheme;

    return (
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

                <nav className="flex gap-[3px] mt-[30px] md:mt-0 text-cardNav-sm md:text-cardNav-md">
                    <button className="px-[24px] py-[12px] rounded-[99px] ease-in duration-300 hover:bg-white-0.2 hover:text-white btn-active">Info</button>
                    <button className="px-[24px] py-[12px] rounded-[99px] ease-in duration-300 hover:bg-white-0.2 hover:text-white">Chapters</button>
                    <button className="px-[24px] py-[12px] rounded-[99px] ease-in duration-300 hover:bg-white-0.2 hover:text-white">Up Next</button>
                </nav>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-[21px]">
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
            </div>
        </div>
    )
};