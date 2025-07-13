export default function Footer() {
  return (
    <footer className="bg-gray-50 p-6 mt-8">
      <div className="grid grid-cols-4 gap-6">
        <div>
          <h3 className="font-bold">Services</h3>
          <ul className="text-sm">
            <li>Web Development</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
        {/* More columns */}
      </div>
    </footer>
  );
}
