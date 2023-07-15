import { Link } from "react-router-dom"
import { getFromPublic } from "../../_utils/getFromPublic"

export const CardPreviewItem = ({ cardItem, setCurrentHandler }) => {
    const assets = {
        iconPlay: getFromPublic('/assets/images/card-icons/Play.svg'),
        iconPause: getFromPublic('/assets/images/card-icons/Pause.png'),
    }

    return (
        <div className="flex flex-col items-center justify-center max-w-[219px] min-h-[263px] pt-[26px] pb-[16px] px-[40px] backdrop-blur-xl border-[2px] border-white-0.2 rounded-[32px]  ease-in duration-100 text-white-0.6 hover:scale-[1.05]">
            <img src={cardItem.previeImage} alt="" className="w-[138px] h-[77px] rounded-[9px]" />
            <div className="">
                <h4 className="w-[135px] pt-[20px] pb-[5px] text-[15px] leading-[22px] tracking-[0.17px] text-white  italic">{cardItem.title}</h4>
                <p className="pb-[13px] text-[12px] leading-[22px] tracking-[0.17px]">{cardItem.previeText}</p>
            </div>
            <Link
                onClick={setCurrentHandler}
                to={'/card-item'}
                className="flex items-center gap-x-[12px] px-[25px] py-[12px] rounded-[18px] italic bg-white-0.2 ease-in duration-300 hover:bg-white-0.6 hover:text-black active:scale-90"
            >
                <img src={assets.iconPlay} alt="icon-play" className="w-[15px] h-[16px]" />
                start
            </Link>
        </div>
    )
}