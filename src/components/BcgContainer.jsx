import '../styles/App.css';

import ReactPlayer from 'react-player';

export const BcgContainer = () => {
    return (
        <div className="video-background">
            <ReactPlayer
                url={null}
                playing
                loop
                muted
                width="100%"
                height="100%"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: '-1',
                }}
            />
            <div className="content">

            </div>
        </div>
    )
}