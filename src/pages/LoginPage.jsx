import { Link } from "react-router"

const LoginPage = () => {
    return(
        <>
        <h2 className="text-center py-10 font-bold text-2xl">Login Page</h2>
        <Link to={"/app"}>Go to Dashboard</Link>
        </>
    )
}
export default LoginPage