import {useNavigate} from "react-router-dom";

const PageNotFound = () => {
    const navigate = useNavigate()
    const returnHomePage = () => {
        navigate('/home')
    }

    return (
        <>
            404: Page not found
            <button onClick={returnHomePage}>Return Home </button>
        </>
    )
}

export default PageNotFound;
