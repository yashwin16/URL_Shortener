import UrlForm from "../components/UrlForm"
import UserUrl from "../components/UserUrl"

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          URL Shortener
        </h1>
        <p className="text-gray-600">Welcome to your dashboard!</p>
        <UrlForm/>
        <UserUrl/>
      </div>
    </div>
  )
}

export default DashboardPage
