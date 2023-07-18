import { getFromPublic } from "../../_utils/getFromPublic";
//космос, дождь, костер, оккеан, поездка в поезде, снег  
const initState = {
    currentTheme: null,
    listTheme: [
        {
            title: 'Space journey',
            previeText: 'Mав велику голову з гострими ...',
            text: 'Travel back 66 million years to when majestic dinosaurs and extraordinary creatures roamed the lands, seas, and skies.',
            description: 'Documentary · 1 hr 3 min',
            previeImage: getFromPublic('/assets/images/space/space-preview.jpg'),
            bcgImage: getFromPublic('/assets/images/space/space.jpg'),
            bcgVideo: getFromPublic('/assets/media/video/space.mp4'),
            audio: getFromPublic('/assets/media/audio/space.mp3'),
        },
        {
            title: 'It`s raining outside',
            previeText: 'Mав велику голову з гострими ...',
            text: 'Travel back 66 million years to when majestic dinosaurs and extraordinary creatures roamed the lands, seas, and skies.',
            description: 'Documentary · 1 hr 3 min',
            previeImage: getFromPublic('/assets/images/rain/rain-preview.jpg'),
            bcgImage: getFromPublic('/assets/images/rain/rain.jpg'),
            bcgVideo: getFromPublic('/assets/media/video/rain.mp4'),
            audio: getFromPublic('/assets/media/audio/rain.mp3'),
        },
        {
            title: 'Burning fire',
            previeText: 'Mав велику голову з гострими ...',
            text: 'Travel back 66 million years to when majestic dinosaurs and extraordinary creatures roamed the lands, seas, and skies.',
            description: 'Documentary · 1 hr 3 min',
            previeImage: getFromPublic('/assets/images/fire/fire-preview.jpg'),
            bcgImage: getFromPublic('/assets/images/fire/fire.jpg'),
            bcgVideo: getFromPublic('/assets/media/video/fire.mp4'),
            audio: getFromPublic('/assets/media/audio/fire.mp3'),
        },
        {
            title: 'Ocean',
            previeText: 'Mав велику голову з гострими ...',
            text: 'Travel back 66 million years to when majestic dinosaurs and extraordinary creatures roamed the lands, seas, and skies.',
            description: 'Documentary · 1 hr 3 min',
            previeImage: getFromPublic('/assets/images/ocean/ocean-preview.jpg'),
            bcgImage: getFromPublic('/assets/images/ocean/ocean.jpg'),
            bcgVideo: getFromPublic('/assets/media/video/ocean.mp4'),
            audio: getFromPublic('/assets/media/audio/ocean.mp3'),
        },
        {
            title: 'Night nature',
            previeText: 'Mав велику голову з гострими ...',
            text: 'Travel back 66 million years to when majestic dinosaurs and extraordinary creatures roamed the lands, seas, and skies.',
            description: 'Documentary · 1 hr 3 min',
            previeImage: getFromPublic('/assets/images/evening/evening-preview.jpg'),
            bcgImage: getFromPublic('/assets/images/evening/evening.jpg'),
            bcgVideo: getFromPublic('/assets/media/video/evening.mp4'),
            audio: getFromPublic('/assets/media/audio/evening.mp3'),
        },
        {
            title: 'Winter',
            previeText: 'Mав велику голову з гострими ...',
            text: 'Travel back 66 million years to when majestic dinosaurs and extraordinary creatures roamed the lands, seas, and skies.',
            description: 'Documentary · 1 hr 3 min',
            previeImage: getFromPublic('/assets/images/snow/snow-preview.jpg'),
            bcgImage: getFromPublic('/assets/images/snow/snow.jpg'),
            bcgVideo: getFromPublic('/assets/media/video/snow.mp4'),
            audio: getFromPublic('/assets/media/audio/snow.mp3'),
        },
    ]
}

export const cardSetReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_CURRENT': 
            return {
                ...state,
                currentTheme: action.payload
            }

        case 'UP_NEXT': 
            const {currentTheme, listTheme} = state; 
            const {title} = currentTheme;
            let currentIndexTheme = listTheme.findIndex((item) => item.title === title);
            let nextTheme;
            if (currentIndexTheme >= listTheme.length - 1) {
                nextTheme = listTheme[0];
            } else {
                currentIndexTheme++
                nextTheme = listTheme[currentIndexTheme];
            }

            return {
                ...state,
                currentTheme: nextTheme
            }; 

        default: 
            return state;
    }
}