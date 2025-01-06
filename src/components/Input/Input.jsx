import "./Input.css"

const Input = ({type, onChange, placeholder, inputName}) => {

    return (
        <div className="input">
            <label>{inputName}</label>
            <input type={type} onChange={onChange} placeholder={placeholder}/>
        </div>
    )
}
export default Input