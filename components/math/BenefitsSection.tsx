import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  BookOpen,
  Target,
  Clock,
  Brain,
  Award,
  CheckCircle2,
  Calculator,
  Sparkles,
  Sigma,
  FunctionSquare,
  Waves,
  Hash,
    Infinity,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import LogoImage from "@/components/math/logo without bg.png";
// import LogoImage from "@/components/math/logo.png";

const benefits = [
  {
    icon: <Zap className="h-5 w-5 text-white" />,
    title: "Natural Language Processing",
    description:
      "Write equations in plain English - 'two x plus five equals eleven' becomes '2x + 5 = 11'.",
    bg: "bg-blue-500",
    lightBg: "bg-blue-50",
  },
  {
    icon: <BookOpen className="h-5 w-5 text-white" />,
    title: "Step-by-Step Learning",
    description:
      "Understand every step with detailed explanations and mathematical reasoning.",
    bg: "bg-green-500",
    lightBg: "bg-green-50",
  },
  {
    icon: <Target className="h-5 w-5 text-white" />,
    title: "Automatic Verification",
    description:
      "Every solution is verified by substituting back into the original equation.",
    bg: "bg-purple-500",
    lightBg: "bg-purple-50",
  },
  {
    icon: <Clock className="h-5 w-5 text-white" />,
    title: "Instant Results",
    description:
      "Get comprehensive solutions in seconds with your dedicated math server.",
    bg: "bg-orange-500",
    lightBg: "bg-orange-50",
  },
  {
    icon: <Brain className="h-5 w-5 text-white" />,
    title: "Advanced Math Engine",
    description:
      "Powered by advanced algorithms for complex mathematical problems.",
    bg: "bg-red-500",
    lightBg: "bg-red-50",
  },
  {
    icon: <Award className="h-5 w-5 text-white" />,
    title: "Multiple Problem Types",
    description:
      "Handles equations, derivatives, integrals, and more operations.",
    bg: "bg-indigo-500",
    lightBg: "bg-indigo-50",
  },
];

const capabilities = [
  {
    text: "Linear Equations",
    example: "2x + 5 = 13",
    icon: <Sigma className="h-4 w-4" />,
    color: "blue",
    popular: true,
  },
  {
    text: "Quadratic Equations",
    example: "x² - 4x + 3 = 0",
    icon: <FunctionSquare className="h-4 w-4" />,
    color: "green",
  },
  {
    text: "Polynomials",
    example: "x³ + 2x² - 5",
    icon: <FunctionSquare className="h-4 w-4" />,
    color: "purple",
  },
  {
    text: "Derivatives",
    example: "d/dx(x² + 3x)",
    icon: <Target className="h-4 w-4" />,
    color: "orange",
  },
  {
    text: "Trigonometry",
    example: "sin²x + cos²x",
    icon: <Waves className="h-4 w-4" />,
    color: "pink",
  },
  {
    text: "Logarithms",
    example: "log(x) + ln(x)",
    icon: <Hash className="h-4 w-4" />,
    color: "teal",
  },
  {
    text: "Natural Language",
    example: "'two x plus five'",
    icon: <Brain className="h-4 w-4" />,
    color: "amber",
  },
  {
    text: "Calculus",
    example: "∫ x² dx",
    icon: <Infinity className="h-4 w-4" />,
    color: "indigo",
    popular: true,
  },
  {
    text: "Evaluation",
    example: "3² + 4 × 5",
    icon: <Calculator className="h-4 w-4" />,
    color: "cyan",
  },
  {
    text: "Functions",
    example: "sin, cos, tan, sqrt",
    icon: <FunctionSquare className="h-4 w-4" />,
    color: "rose",
  },
];

const statItems = [
  { value: "10k+", label: "Problems Solved", icon: Calculator, color: "blue" },
  { value: "5k+", label: "Happy Students", icon: Award, color: "green" },
  { value: "50+", label: "Math Operations", icon: Sigma, color: "purple" },
  { value: "99%", label: "Success Rate", icon: Target, color: "orange" },
];

const BenefitsSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-8 bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-tr from-blue-400 to-indigo-400 rounded-xl blur opacity-30"></div>
          <div className="relative bg-linear-to-br rounded-xl shadow-md">
            <Image
              src={LogoImage}
              alt="AlgeNova"
              width="48"
              height="48"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
            <Sparkles className="h-4 w-4 text-blue-500" />
            <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">
              AI-Powered Mathematics
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Advanced Math Solver
          </h2>
          <p className="text-xs md:text-sm text-gray-500 mt-0.5">
            Natural language processing with step-by-step solutions
          </p>
        </div>

        <div className="hidden md:flex items-center gap-1 text-xs bg-gray-50 px-3 py-1.5 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>Active</span>
        </div>
      </motion.div>

      {/* Benefits Grid - Modern Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            whileHover={{ y: -2, scale: 1.01 }}
            className="group relative bg-white rounded-xl p-3.5 shadow-sm border border-gray-100 hover:border-gray-200 hover:shadow transition-all"
          >
            <div className="flex items-start gap-3">
              <div
                className={`${benefit.bg} p-2 rounded-lg shadow-sm group-hover:scale-110 transition-transform`}
              >
                {benefit.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-800 text-xs mb-0.5 uppercase tracking-wide">
                  {benefit.title}
                </h3>
                <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-2">
                  {benefit.description}
                </p>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight className="h-3 w-3 text-gray-400" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Operations Section - Modern Grid */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-linear-to-br from-gray-50 to-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="bg-green-500 p-1.5 rounded-lg shadow-sm">
              <Calculator className="h-3.5 w-3.5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-sm">
                Mathematical Operations
              </h3>
              <p className="text-[10px] text-gray-500">10+ supported types</p>
            </div>
          </div>
          <div className="flex gap-1">
            <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
              Popular
            </span>
            <span className="text-[10px] bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full">
              New
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02 }}
              whileHover={{ scale: 1.02 }}
              className={`relative bg-white rounded-lg p-2.5 border ${
                item.popular
                  ? "border-blue-200 bg-blue-50/30"
                  : "border-gray-100 hover:border-gray-200"
              } hover:shadow-sm transition-all group cursor-default`}
            >
              {item.popular && (
                <div className="absolute -top-1 -right-1">
                  <div className="bg-blue-500 rounded-full p-0.5">
                    <Sparkles className="h-2 w-2 text-white" />
                  </div>
                </div>
              )}
              <div className="flex items-center gap-2">
                <div className={`p-1 bg-${item.color}-50 rounded-md`}>
                  <div className={`text-${item.color}-600`}>{item.icon}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-700 text-[11px] truncate">
                    {item.text}
                  </div>
                  <div className="text-[9px] text-gray-400 font-mono truncate">
                    {item.example}
                  </div>
                </div>
                <CheckCircle2 className="h-3 w-3 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats & CTA */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
        {statItems.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -2 }}
              className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 text-center group hover:border-gray-200 transition-all"
            >
              <div
                className={`inline-flex p-1.5 bg-${stat.color}-50 rounded-lg mb-1 group-hover:scale-110 transition-transform`}
              >
                <Icon className={`h-3.5 w-3.5 text-${stat.color}-600`} />
              </div>
              <div className="font-bold text-gray-800 text-sm">
                {stat.value}
              </div>
              <div className="text-[9px] text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer Note */}
      <div className="text-center">
        <span className="inline-flex items-center gap-1 text-[10px] text-gray-400 bg-white px-3 py-1 rounded-full border border-gray-100">
          <span>⚡</span>
          <span>Advanced Math Solver v2.0 • Real-time calculations</span>
        </span>
      </div>
    </div>
  );
};

export { BenefitsSection };
