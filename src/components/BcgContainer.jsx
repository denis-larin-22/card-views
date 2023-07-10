import '../styles/App.css';

import ReactPlayer from 'react-player';
import { CardList } from './card/CardList';
import { connect } from 'react-redux';
import { useState } from 'react';

const BcgContainerView = ({ currentBcg, list }) => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className="video-background">
            <ReactPlayer
                url={currentBcg.bcgUrl}
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
            <button className='hide-button' onClick={() => setIsVisible(!isVisible)}>{isVisible ? 'hide list' : 'show list'}</button>
            <div className="content">
                <header className='header'>
                    <h1>{currentBcg.name}</h1>
                    <h2>{currentBcg.text}</h2>
                </header>
                {isVisible && <CardList list={list} />}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentBcg: state.background.currentBcg,
    list: state.background.bcgList
})

export const BcgContainer = connect(mapStateToProps)(BcgContainerView); 