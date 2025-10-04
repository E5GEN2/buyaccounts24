import Link from 'next/link';
import { Send, Github, Twitter, Mail, Sparkles, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: 'Social Media', href: '/social' },
    { name: 'Streaming', href: '/streaming' },
    { name: 'Gaming', href: '/gaming' },
    { name: 'Tools & VPN', href: '/tools' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Support', href: '/support' },
    { name: 'FAQ', href: '/faq' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Refund Policy', href: '/refunds' },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-md opacity-70"></div>
                <div className="relative bg-black rounded-lg p-2">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold text-white">
                Buy<span className="gradient-text">Accounts</span>
              </span>
            </Link>

            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Your trusted marketplace for premium digital accounts. We provide instant access to verified accounts with lifetime warranty and 24/7 support.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://t.me/buyaccounts24"
                className="group w-10 h-10 glass-effect rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all hover:bg-white/10"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="group w-10 h-10 glass-effect rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all hover:bg-white/10"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="group w-10 h-10 glass-effect rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all hover:bg-white/10"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:support@buyaccounts24.com"
                className="group w-10 h-10 glass-effect rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all hover:bg-white/10"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors group flex items-center"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors group flex items-center"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors group flex items-center"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="glass-effect rounded-2xl p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              Get the latest <span className="gradient-text">updates</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for exclusive deals and new product announcements.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover-glow transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} BuyAccounts24. All rights reserved.
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>All systems operational</span>
            </div>

            <Link href="/status" className="text-gray-400 hover:text-white transition-colors">
              System Status
            </Link>
          </div>
        </div>
      </div>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/5 to-transparent pointer-events-none"></div>
    </footer>
  );
}