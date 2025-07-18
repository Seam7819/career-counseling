import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="bg-amber-500 min-h-screen justify-center flex items-center">
            <div>
                <img className="max-w-52 md:max-w-lg shadow-2xl rounded-lg" src="/public/website-page-found-error-robot-character-broken-chatbot-mascot-disabled-site-technical-work_502272-1888.jpg" alt="" />
            <div className="flex justify-center mt-10">
                <Link className="btn btn-soft btn-error" to='/'>Back To Home</Link >
            </div>
            </div>
        </div>
    );
};

export default Error;