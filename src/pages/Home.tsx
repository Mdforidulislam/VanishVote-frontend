import { Link } from "react-router";


const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center">
      <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
      <p className="text-gray-500 mt-2 max-w-lg">
        Create polls that vanish after a set time. Perfect for quick decisions, anonymous feedback, or time-sensitive questions.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center mt-10 space-y-8 md:space-y-0 md:space-x-10">
        <div className="flex flex-col items-center max-w-xs">
          <div className="w-16 h-16 bg-purple-100 flex items-center justify-center rounded-full text-purple-600 text-2xl font-bold">
            1
          </div>
          <h3 className="text-xl font-semibold mt-4">Create a Poll</h3>
          <p className="text-gray-500 mt-2">Set your question, add options, and choose when it expires.</p>
        </div>

        <div className="flex flex-col items-center max-w-xs">
          <div className="w-16 h-16 bg-purple-100 flex items-center justify-center rounded-full text-purple-600 text-2xl font-bold">
            2
          </div>
          <h3 className="text-xl font-semibold mt-4">Share the Link</h3>
          <p className="text-gray-500 mt-2">Send the unique link to anyone you want to vote.</p>
        </div>

        <div className="flex flex-col items-center max-w-xs">
          <div className="w-16 h-16 bg-purple-100 flex items-center justify-center rounded-full text-purple-600 text-2xl font-bold">
            3
          </div>
          <h3 className="text-xl font-semibold mt-4">Get Results</h3>
          <p className="text-gray-500 mt-2">View anonymous votes until the poll expires and vanishes.</p>
        </div>
      </div>

      

 

      <div className="md:flex gap-9">

      
        <Link to={"/pull-result"}>
          <button  className="cursor-pointer mt-10 px-6 py-3 text-white text-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-md hover:shadow-lg transition">
            View pull Result →
          </button>
        </Link>

      </div>
    </div>
  );
};

export default HomePage;