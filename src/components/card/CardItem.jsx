import '../../styles/App.css';

import ReactPlayer from "react-player"

export const CardItem = ({ item, buttonHandler }) => {
    return (
        <div className="card-item">
            <ReactPlayer
                url={item.bcgUrl}
                height={'fit-content'}
                width={'fit-content'}
                playing
                loop
                muted
            />
            <h3>{item.name}</h3>
            <p>{item.text}</p>
            <button className='card-button' onClick={buttonHandler}>Play</button>
        </div>
    )
}