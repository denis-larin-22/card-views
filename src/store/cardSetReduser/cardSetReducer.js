import { getFromPublic } from "../../_utils/getFromPublic";

const initState = {
    currentTheme: null,
    listTheme: [
        {
            title: 'Space journey',
            previeText: 'Deep space music from Interstellar',
            text: 'Travel the infinity of space to the soundtrack of Hans Zimmer from the movie Interstellar.',
            description: 'Documentary · 1 hr 3 min',
            previeImage: getFromPublic('/assets/images/space/space-preview.jpg'),
            bcgImage: getFromPublic('/assets/images/space/space.jpg'),
            bcgVideo: getFromPublic('/assets/media/video/space.mp4'),
            audio: getFromPublic('/assets/media/audio/space.mp3'),
        },
        {
            title: 'It`s raining outside',
            previeText: 'Sounds of raindrops with thunder',
            text: 'The meaning of life is not to wait for the storm to end, but to learn to dance in the rain.',
            description: 'Documentary · 1 hr 3 min',
            previeImage: getFromPublic('/assets/images/rain/rain-preview.jpg'),
            bcgImage: getFromPublic('/assets/images/rain/rain.jpg'),
            bcgVideo: getFromPublic('/assets/media/video/rain.mp4'),
            audio: getFromPublic('/assets/media/audio/rain.mp3'),
        },
        {
            title: 'Burning fire',
            previeText: 'Sounds and crackling of a fire in nature',
            text: 'The sounds and crackling of a fire in nature, just imagine that you are far from the city.',
            description: 'Documentary · 1 hr 3 min',
            previeImage: getFromPublic('/assets/images/fire/fire-preview.jpg'),
            bcgImage: getFromPublic('/assets/images/fire/fire.jpg'),
            bcgVideo: getFromPublic('/assets/media/video/fire.mp4'),
            audio: getFromPublic('/assets/media/audio/fire.mp3'),
        },
        {
            title: 'Ocean',
            previeText: 'The sound of the waves on the ocean',
            text: 'Because every person is an ocean, and it is stupid to sincerely consider yourself a puddle all your life, even if it is the deepest and most non-drying one in the microdistrict.',
            description: 'Documentary · 1 hr 3 min',
            previeImage: getFromPublic('/assets/images/ocean/ocean-preview.jpg'),
            bcgImage: getFromPublic('/assets/images/ocean/ocean.jpg'),
            bcgVideo: getFromPublic('/assets/media/video/ocean.mp4'),
            audio: getFromPublic('/assets/media/audio/ocean.mp3'),
        },
        {
            title: 'Night nature',
            previeText: 'Sounds of the nightlife of nature',
            text: 'However, such is the peculiarity of the starry sky: everyone who looks at it has a sweet heart aching. Perhaps we really come from somewhere there?',
            description: 'Documentary · 1 hr 3 min',
            previeImage: getFromPublic('/assets/images/evening/evening-preview.jpg'),
            bcgImage: getFromPublic('/assets/images/evening/evening.jpg'),
            bcgVideo: getFromPublic('/assets/media/video/evening.mp4'),
            audio: getFromPublic('/assets/media/audio/evening.mp3'),
        },
        {
            title: 'Winter',
            previeText: 'Sounds of snow and blizzards outside the window',
            text: 'Winter awakens the appetite. As long as there is snow on the streets, chocolate cake is the best medicine.',
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
    };
};