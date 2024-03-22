import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="text-center">
        <h2 className="text-[300px]">
          4<span className="text-[250px] text-red-400">0</span>4
        </h2>
        <p className="text-6xl mb-4">page not found</p>
        <p>
          <Link href="/" className="btn btn-link text-3xl mt-4">
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
