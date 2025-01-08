import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyButton from "../MyButton/MyButton";
import "./CommentBlock.css";
import Comment from "../Comment/Comment";
import { addComment } from "../../store/actions/commentActions";

const CommentBlock = ({ filmId }) => {
    const [text, setText] = useState("");
    const comments = useSelector((state) => state.comments.commentsByFilm[filmId] || []);
    const dispatch = useDispatch();

    const addCommentHandler = (event) => {
        event.preventDefault();
        if (text.trim() === "") return;

        dispatch(addComment(filmId, text));
        setText("");
    };

    return (
        <div className="CommentBlock">
            <div className="AddComment">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>
                <MyButton text={"Добавить комментарий"} onClick={addCommentHandler} />
            </div>

            <div className="Comments">
                <h2 className="comTitle">Комментарии:</h2>
                {comments.map((comment, index) => (
                    <div key={index}>
                        <hr style={{ border: "1px dashed black", margin: "10px 0" }} />
                        <Comment text={comment} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommentBlock;
