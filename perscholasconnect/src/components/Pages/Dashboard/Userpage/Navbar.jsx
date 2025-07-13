export default function Navbar() {
  return (
    <div className="ml-64 h-16 bg-white shadow-sm flex items-center justify-between px-6 bg-blue">
      <input
        type="text"
        placeholder="Search..."
        className="border px-4 py-1 rounded"
      />
      <div className="flex gap-4 items-center">
        <i className="fa fa-bell"></i>
        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
}
