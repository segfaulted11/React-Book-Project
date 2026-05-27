import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-center font-extrabold text-4xl text-red-600">Error! Page Not Found</h2>
            <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow">Go Home
            </Link>
        </div>
    );
};

export default ErrorPage;