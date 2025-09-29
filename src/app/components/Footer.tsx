// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 text-center py-6 mt-10">
      <p className="text-sm">© {new Date().getFullYear()} MyShop. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-2 text-sm">
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <a href="#" className="hover:text-white">Terms of Service</a>
        <a href="#" className="hover:text-white">Contact</a>
      </div>
    </footer>
  );
}
