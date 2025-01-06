import "./Comment.css"

const Comment = ({text}) => {

    return (
        <div className="comment">
            <h4>Анонимный пользователь</h4>
            <p>{text}</p>
        </div>
    )
}
export default Comment