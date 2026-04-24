

export const TodoItem = ({title, hour, date}) => {

    return (
        <div className="item-card">
            <div className="item-content-info">
                <div className="image-item">
                    <img alt="check icon"/>
                </div>
                <div>
                    <h2 className="item-title">{title}</h2>
                    <div>
                        <span className="item-hour">{hour}</span>
                        <span className="item-date">{date}</span>
                    </div>
                </div>
            </div>
            <div className="item-content-buttons">
                <button className="item-button"><img alt="delete icon"/></button>
                <button className="item-button"><img alt="edit icon"/></button>
            </div>
        </div>
    )
}