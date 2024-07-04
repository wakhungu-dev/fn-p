import { FadeLoader } from "react-spinners";



export  function Spinner ({className=""}) {
    return <>
    <FadeLoader className= {`${className}`}color='#36d7b7' size={90} />
    </>
}