import { connect } from "react-redux";
import { CardPreviewItem } from "./CardPreviewItem"

const CardPreviewPageView = ({ cardList, setCurrent }) => {

    return (
        <div className={`card-preview-wrap min-h-screen py-[20px] bg-mountains-bcg flex items-center justify-center `}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-x-[60px] md:gap-x-[116px] gap-y-[93px] max-w-[930px] px-[20px]">
                {cardList.map((item, index) => (
                    <CardPreviewItem key={index} cardItem={item} setCurrentHandler={() => setCurrent(item)} />
                ))}
            </div>
        </div >
    )
};

const mapStateToProps = ({ cardSetReducer }) => ({
    cardList: cardSetReducer.listTheme,
});

const mapDispatchToProps = (dispatch) => ({
    setCurrent: (item) => dispatch({ type: 'SET_CURRENT', payload: item })
})

export const CardPreviewPage = connect(mapStateToProps, mapDispatchToProps)(CardPreviewPageView); 