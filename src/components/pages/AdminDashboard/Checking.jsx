
export default function Checking() {
    return (

        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="flex flex-col items-center justify-center p-8 w-full max-w-md bg-gray-200 rounded-xl shadow-lg border border-gray-300 animate-pulse">
                {/* Simple Spinner Icon */}
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>

                <h2 className="text-xl font-bold text-gray-700">Verifying Access</h2>
                <p className="text-gray-500 mt-2">Please wait while we check your credentials...</p>
            </div>
        </div>
    )
}
