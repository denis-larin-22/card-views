import { connect } from "react-redux";
import { CardPreviewItem } from "./CardPreviewItem";
import { AnimatePresence, motion } from "framer-motion";
import { appearanceListContainer, appearanceListItem } from '../../animation/index'

const CardPreviewPageView = ({ cardList, setCurrent }) => {
    return (
        <AnimatePresence>
            <motion.div
                className='card-preview-wrap min-h-screen py-[20px] flex items-center justify-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
            >
                <motion.ul
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[20px] md:gap-x-[116px] gap-y-[20px] md:gap-y-[93px] max-w-[930px] px-[20px]"
                    variants={appearanceListContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {cardList.map((item, index) => (
                        <motion.li
                            key={index}
                            className=" md:max-w-[219px] min-h-[263px] pt-[26px] pb-[16px] px-[40px] border-[2px] border-white-0.2 rounded-[32px] backdrop-blur-xl text-white-0.6"
                            variants={appearanceListItem}
                        >
                            <CardPreviewItem cardItem={item} setCurrentHandler={() => setCurrent(item)} />
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </AnimatePresence>

    )
};

const mapStateToProps = ({ cardSetReducer }) => ({
    cardList: cardSetReducer.listTheme,
});

const mapDispatchToProps = (dispatch) => ({
    setCurrent: (item) => dispatch({ type: 'SET_CURRENT', payload: item })
})

export const CardPreviewPage = connect(mapStateToProps, mapDispatchToProps)(CardPreviewPageView); 