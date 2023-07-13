import { getFromPublic } from "../_utils/getFromPublic"

export const Card = ({ isPlayingBcg, toggleBcg, isPlayingAudio, toggleAudio }) => {
    const assets = {
        cardImage: getFromPublic('/assets/images/card-img.png'),
        iconClose: getFromPublic('/assets/images/card-icons/Close.svg'),
        iconPlay: getFromPublic('/assets/images/card-icons/Play.svg'),
        iconPause: getFromPublic('/assets/images/card-icons/Pause.png'),
    }

    return (
        <div className="relative max-w-[960px] p-[24px] flex flex-col gap-[21px] backdrop-blur-xl border-[2px] border-white-0.2 rounded-[32px] text-white-0.6">
            <div className="flex items-center justify-center">
                <button className="absolute top-[15px] left-[15px] p-[10px] md:top-[24px] md:left-[24px] md:p-[15px] bg-white-0.1 rounded-[99px] ease-in duration-300 hover:bg-white-0.6">
                    <img src={assets.iconClose} alt="icon-close" />
                </button>
                <nav className="flex gap-[3px] mt-[30px] md:mt-0 text-cardNav-sm md:text-cardNav-md">
                    <button className="px-[24px] py-[12px] rounded-[99px] ease-in duration-300 hover:bg-white-0.2 hover:text-white btn-active">Info</button>
                    <button className="px-[24px] py-[12px] rounded-[99px] ease-in duration-300 hover:bg-white-0.2 hover:text-white">Chapters</button>
                    <button className="px-[24px] py-[12px] rounded-[99px] ease-in duration-300 hover:bg-white-0.2 hover:text-white">Up Next</button>
                </nav>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-[21px]">
                <img src={assets.cardImage} alt="card-img" className="rounded-[18px]" />
                <div className="max-w-[354px] text-cardText">
                    <h4 className="pb-[5px] text-[17px] leading-[23px] tracking-[0.17px] text-white  italic">Astonishing</h4>
                    <p className="pb-[5px]">Travel back 66 million years to when majestic
                        dinosaurs and extraordinary creatures roamed
                        the lands, seas, and skies.</p>
                    <p className=" text-[16px]">Documentary · 1 hr 3 min</p>
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