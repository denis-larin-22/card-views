import { connect } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { appearanceListContainer, appearanceListItem } from '../../animation/index'
import { CardPreviewItem } from "./CardPreviewItem";

const CardPreviewPageView = ({ cardList, setCurrent }) => {
    return (
        <AnimatePresence>
            <motion.div
                className='overflow-hidden bg-main-bcg bg-center bg-no-repeat bg-cover min-h-screen py-[20px] flex flex-col items-center justify-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
            >
                <div className="container md:w-full text-right ">
                    <motion.h1
                        className="mt-[20px] px-[40px] text-white-0.6 italic text-[30px] exsm:text-[40px] md:text-[50px] leading-[40px] exsm:leading-[60px] md:leading-[80px] tracking-[0.5px]"
                        initial={{ opacity: 0, x: '-200px' }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2, delay: 0.5 }}
                    >Just listen and relax...</motion.h1>
                </div>
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
                <div className="container md:w-full text-left ">
                    <motion.h1
                        className="mt-[20px] px-[40px] text-white-0.6 italic text-[20px] md:text-[30px] leading-[30px] md:leading-[50px] tracking-[0.5px]"
                        initial={{ opacity: 0, x: '200px' }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 3, delay: 1.5 }}
                    >Sounds for your rest and recovery</motion.h1>
                </div>
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