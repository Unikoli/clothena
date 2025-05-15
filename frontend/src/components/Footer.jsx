export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 px-6 py-10 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-4">CLOTHENA</h2>
          <p className="text-sm">
            Elevate your style with CLOTHENA — your go-to destination for trendy and affordable fashion.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Shop</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Men</a></li>
            <li><a href="#" className="hover:underline">Women</a></li>
            <li><a href="#" className="hover:underline">New Arrivals</a></li>
            <li><a href="#" className="hover:underline">Best Sellers</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Support</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} CLOTHENA. All rights reserved.
      </div>
    </footer>
  );
}
