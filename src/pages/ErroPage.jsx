import { useRouteError } from "react-router";


const ErrorPage = () => {

    const {error} = useRouteError()

    console.log(error?.message);
    

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold">Something went wrong</h2>

        <p className="mt-4 text-red-500 text-lg">{error?.message}</p>
      </div>
    </>
  );
};
export default ErrorPage;
