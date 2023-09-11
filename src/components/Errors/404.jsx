export default function NotFound() {
  return (
    <>
      <div className="flex justify-center items-center bg-gray-200 h-screen hero">
        <div className="container mx-auto px-8 py-6">
          <div className="flex flex-col items-center justify-center gap-4 text-gray-600">
            <h1 className="text-6xl font-bold text-gray-400">404</h1>
            <h2 className="text-2xl font-semibold text-gray-400">
              Page Not Found
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
