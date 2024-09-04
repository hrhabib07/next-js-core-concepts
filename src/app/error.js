"use client";

const ErrorPage = ({ error, reset }) => {
  return (
    <div>
      <h2 className="text-4xl text-center text-red-500 my-4">
        {" "}
        Something went wrong
      </h2>
      <h2 className="text-2xl text-center text-red-500 my-4">
        {" "}
        Error Massage: {error.message}
      </h2>
      <div className="text-center">
        <button className="uppercase  p-2 bg-red-500 w-32 text-white font-bold ">
          Try again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
