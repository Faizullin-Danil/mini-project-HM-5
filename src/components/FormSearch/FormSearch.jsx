import Input from "../Input/Input.jsx"
import MultiSelect from "../MultiSelect/MultiSelect.jsx"
import MyButton from "../MyButton/MyButton.jsx"

const FormSearch = () => {

    return (
        <form>
            <MultiSelect />
            <Input inputName={"Название фильма"} type={"text"} placeholder={"Введите название фильма"}/>
            <MyButton text={"Поиск фильма"}/>
        </form>
    )
}
export default FormSearch