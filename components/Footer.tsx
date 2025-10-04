import Link from 'next/link';
import { Send, Twitter, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-gray-400 mb-4">
              Your trusted source for premium digital accounts since 2020
            </p>
            <div className="flex gap-3">
              <a
                href="https://t.me/buyaccounts24"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/category/social" className="text-gray-400 hover:text-white transition">
                  Social Media
                </Link>
              </li>
              <li>
                <Link href="/category/streaming" className="text-gray-400 hover:text-white transition">
                  Streaming Services
                </Link>
              </li>
              <li>
                <Link href="/category/gaming" className="text-gray-400 hover:text-white transition">
                  Gaming Platforms
                </Link>
              </li>
              <li>
                <Link href="/category/other" className="text-gray-400 hover:text-white transition">
                  Other Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2">
                <Send className="w-4 h-4" /> @buyaccounts24
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> support@buyaccounts24.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>&copy; 2024 BuyAccounts24. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}