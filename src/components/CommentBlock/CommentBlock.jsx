import { useState } from "react"
import MyButton from "../MyButton/MyButton"
import "./CommentBlock.css"
import Comment from "../Comment/Comment"

const CommentBlock = () => {
    const [comments, setComments] = useState([])
    const [text, setText] = useState("")

    const addComment = (event) => {
        event.preventDefault()
        if (text.trim() === "") return;

        const updateComments = [ ...comments, text]
        
        setComments(updateComments)
        setText("")
    }

    
    return (
        <div className="CommentBlock">
            <div className="AddComment">
                <textarea value={text} onChange={e => setText(e.target.value)}></textarea>
                <MyButton text={"Добавить комментарий"} onClick={addComment}/>
            </div>

            <div className="Comments">
                <h2 className="comTitle">Комментарии:</h2>

                {comments.map((comment, index) => (
                    <div>
                        <hr style={{ border: "1px dashed black", margin: "10px 0" }} />
                        <Comment text={comment} key={index}/>
                    </div>
                    
                ))}
            </div>
        </div>
    )
}
export default CommentBlock