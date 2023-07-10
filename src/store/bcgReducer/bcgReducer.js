import defaultBcg from '../../assets/media/video/default-bcg.mp4';
import sky from '../../assets/media/video/sky.mp4';
import cave from '../../assets/media/video/cave.mp4';
import earth from '../../assets/media/video/earth.mp4';
import nightSky from '../../assets/media/video/night-sky.mp4';
import rain from '../../assets/media/video/rain.mp4';
import waterfall from '../../assets/media/video/waterfall.mp4';

const initialState = {
    currentBcg:  { name: 'Hello world', text: 'Enjoy great views',  bcgUrl: defaultBcg},
    bcgList: [
        { name: 'Sky at dawn', text: 'Enjoy the new day...',  bcgUrl: sky},
        { name: 'Deep cave', text: 'At the same moment, Alice darted after him, not thinking about how she would get back.',  bcgUrl: cave},
        { name: 'Our home', text: 'The beauty and grandeur of our planet',  bcgUrl: earth},
        { name: 'Night sky', text: 'Make a wish as the star falls...',  bcgUrl: nightSky},
        { name: 'Rain', text: 'Rain outside the window only adds comfort',  bcgUrl: rain},
        { name: 'Waterfall', text: 'The eternal beauty of nature...',  bcgUrl: waterfall},
    ]
}

export const bcgReducer = (state = initialState, action) => {
    switch (action.type){
        case 'SET_CURRENT':
            return {
                ...state,
                currentBcg: action.payload
            }


        default: 
            return state
    }
}