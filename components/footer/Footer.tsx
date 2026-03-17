import React from "react";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Sparkles, 
  Calculator, 
  Infinity, 
  Brain,
  Github,
  Twitter,
  Linkedin,
  Mail,
  ChevronUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative mt-20">
      {/* Background with gradient and blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-pink-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Main decorative wave */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Section - 5 columns */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  AlgeNova
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Advanced Math Solver
                </p>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed max-w-md">
              Empowering students and professionals with intelligent step-by-step math solutions. 
              {" "}From basic algebra to advanced calculus, {"we've"} got you covered.
            </p>
            
            {/* Creator Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-indigo-100 dark:border-gray-700 shadow-sm">
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Created with passion by 
                <span className="font-semibold text-indigo-600 dark:text-indigo-400 ml-1">
                  Nurmuhammad
                </span>
              </span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Badges Section - 7 columns */}
          <div className="lg:col-span-7 space-y-6">
            {/* Feature Badges */}
            <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-xl">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-500" />
                Key Features
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="badge-custom bg-gradient-to-r from-indigo-500 to-indigo-600 text-white border-none shadow-md">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Step-by-Step Explanations
                </Badge>
                <Badge className="badge-custom bg-gradient-to-r from-purple-500 to-purple-600 text-white border-none shadow-md">
                  <Calculator className="w-3 h-3 mr-1" />
                  Algebra • Geometry • Calculus
                </Badge>
                <Badge className="badge-custom bg-gradient-to-r from-pink-500 to-pink-600 text-white border-none shadow-md">
                  <Infinity className="w-3 h-3 mr-1" />
                  Covers All Math Levels
                </Badge>
                <Badge className="badge-custom bg-gradient-to-r from-blue-500 to-blue-600 text-white border-none shadow-md">
                  <Brain className="w-3 h-3 mr-1" />
                  Fast & Accurate Results
                </Badge>
                <Badge className="badge-custom bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-none shadow-md">
                  Interactive Learning
                </Badge>
                <Badge className="badge-custom bg-gradient-to-r from-orange-500 to-orange-600 text-white border-none shadow-md">
                  AI-Powered Solutions
                </Badge>
                <Badge className="badge-custom bg-gradient-to-r from-cyan-500 to-cyan-600 text-white border-none shadow-md">
                  Multiple Methods
                </Badge>
                <Badge className="badge-custom bg-gradient-to-r from-rose-500 to-rose-600 text-white border-none shadow-md">
                  Practice Problems
                </Badge>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Problems Solved", value: "10K+", icon: Calculator },
                { label: "Happy Students", value: "5K+", icon: Heart },
                { label: "Math Topics", value: "50+", icon: Infinity },
                { label: "Accuracy Rate", value: "99%", icon: Brain },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20 dark:border-gray-700/20 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 group"
                >
                  <stat.icon className="w-5 h-5 mx-auto mb-1 text-indigo-500 group-hover:scale-110 transition-transform" />
                  <div className="font-bold text-gray-800 dark:text-white text-sm">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} AlgeNova. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-xs">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Contact
              </a>
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;