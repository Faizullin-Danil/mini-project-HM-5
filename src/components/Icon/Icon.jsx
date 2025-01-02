

const Icon = ({icon, onClick}) => {

    return(
        <span onClick={onClick} style={{ cursor: 'pointer' }}>
            {icon}
        </span>
    )
}
export default Icon