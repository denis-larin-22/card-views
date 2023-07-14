import { getFromPublic } from "../../_utils/getFromPublic";

const initState = {
    currentTheme: null,
    listTheme: [
        {
            title: 'Tyrannosaurus rex',
            previeText: 'Mав велику голову з гострими ...',
            text: 'Travel back 66 million years to when majestic dinosaurs and extraordinary creatures roamed the lands, seas, and skies.',
            description: 'Documentary · 1 hr 3 min',
            previeImage: getFromPublic('/assets/images/dino-1.png'),
            bcgImage: getFromPublic('/assets/media/video/space-bcg.mp4'),
            audio: getFromPublic('/assets/media/audio/interstellar-Day_One.mp3')
        },
        {
            title: 'Tyrannosaurus rex',
            previeText: 'Mав велику голову з гострими ...',
            text: 'Travel back 66 million years to when majestic dinosaurs and extraordinary creatures roamed the lands, seas, and skies.',
            description: 'Documentary · 1 hr 3 min',
            previeImage: getFromPublic('/assets/images/dino-1.png'),
            bcgImage: getFromPublic('/assets/media/video/space-bcg.mp4'),
            audio: getFromPublic('/assets/media/audio/interstellar-Day_One.mp3')
        },
        {
            title: 'Tyrannosaurus rex',
            previeText: 'Mав велику голову з гострими ...',
            text: 'Travel back 66 million years to when majestic dinosaurs and extraordinary creatures roamed the lands, seas, and skies.',
            description: 'Documentary · 1 hr 3 min',
            previeImage: getFromPublic('/assets/images/dino-1.png'),
            bcgImage: getFromPublic('/assets/media/video/space-bcg.mp4'),
            audio: getFromPublic('/assets/media/audio/interstellar-Day_One.mp3')
        },
        {
            title: 'Tyrannosaurus rex',
            previeText: 'Mав велику голову з гострими ...',
            text: 'Travel back 66 million years to when majestic dinosaurs and extraordinary creatures roamed the lands, seas, and skies.',
            description: 'Documentary · 1 hr 3 min',
            previeImage: getFromPublic('/assets/images/dino-1.png'),
            bcgImage: getFromPublic('/assets/media/video/space-bcg.mp4'),
            audio: getFromPublic('/assets/media/audio/interstellar-Day_One.mp3')
        },
        {
            title: 'Tyrannosaurus rex',
            previeText: 'Mав велику голову з гострими ...',
            text: 'Travel back 66 million years to when majestic dinosaurs and extraordinary creatures roamed the lands, seas, and skies.',
            description: 'Documentary · 1 hr 3 min',
            previeImage: getFromPublic('/assets/images/dino-1.png'),
            bcgImage: getFromPublic('/assets/media/video/space-bcg.mp4'),
            audio: getFromPublic('/assets/media/audio/interstellar-Day_One.mp3')
        },
        {
            title: 'Tyrannosaurus rex',
            previeText: 'Mав велику голову з гострими ...',
            text: 'Travel back 66 million years to when majestic dinosaurs and extraordinary creatures roamed the lands, seas, and skies.',
            description: 'Documentary · 1 hr 3 min',
            previeImage: getFromPublic('/assets/images/dino-1.png'),
            bcgImage: getFromPublic('/assets/media/video/space-bcg.mp4'),
            audio: getFromPublic('/assets/media/audio/interstellar-Day_One.mp3')
        }
    ]
}

export const cardSetReducer = (state = initState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
}