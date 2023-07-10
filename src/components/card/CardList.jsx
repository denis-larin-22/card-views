import { connect } from "react-redux"
import { CardItem } from "./CardItem"

const CardListView = ({ list, setCurrentBcg }) => {
    return (
        <div className="card-list">
            {list.map((item, index) => (
                <CardItem key={index} item={item} buttonHandler={() => setCurrentBcg(item)} />
            ))}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentBcg: (bcgItem) => dispatch({ type: 'SET_CURRENT', payload: bcgItem })
})

export const CardList = connect(null, mapDispatchToProps)(CardListView);

