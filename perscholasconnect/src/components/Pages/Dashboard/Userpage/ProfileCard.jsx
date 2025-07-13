export default function ProfileCard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow text-center">
      <div className="w-24 h-24 mx-auto rounded-full bg-gray-300 mb-4"></div>
      <h3 className="font-bold text-lg">Natalya Herrington</h3>
      <p className="text-sm text-gray-500">UI/UX Designer</p>

      <div className="flex justify-center gap-4 mt-6">
        <div className="text-center">
          <p className="text-lg font-bold text-pink-600">30%</p>
          <p className="text-sm text-gray-500">Viewed</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-yellow-500">20%</p>
          <p className="text-sm text-gray-500">Saved</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-green-500">50%</p>
          <p className="text-sm text-gray-500">Applied</p>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg mt-6 text-left">
        <p className="text-sm text-gray-600 font-medium mb-2">Last Activity</p>
        <p className="text-xs text-gray-700">
          Your application for{" "}
          <span className="font-semibold text-blue-500">UI/UX Designer</span> is
          viewed
        </p>
      </div>
    </div>
  );
}
