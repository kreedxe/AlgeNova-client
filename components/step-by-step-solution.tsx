"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, BookOpen } from "lucide-react";
import React, { useEffect, useState } from "react";
import { MathSolution } from "@/lib/types";
import { VerificationBlock } from "@/components/math/VerificationBlock";

// -------------------------------
// KaTeX Renderer (SSR-safe)
const KaTeXRenderer: React.FC<{ latex: unknown; block?: boolean }> = ({
  latex,
  block = true,
}) => {
  const [html, setHtml] = useState<string | null>(null);

  const normalizeLatex = (v: unknown) => {
    const s = Array.isArray(v) ? v.join("\\\\") : String(v ?? "");
    return s
      // Some backends/inputs encode powers as x(2) instead of x^2.
      // Normalize that to proper LaTeX before rendering.
      .replace(/([a-zA-Z])\s*\(\s*(\d+)\s*\)/g, "$1^{$2}")
      .replace(/\u00b2/g, "^{2}") // ²
      .replace(/\u00b3/g, "^{3}") // ³
      .replace(/\u00b9/g, "^{1}") // ¹
      .replace(/\u2070/g, "^{0}") // ⁰
      .replace(/\u2074/g, "^{4}") // ⁴
      .replace(/\u2075/g, "^{5}") // ⁵
      .replace(/\u2076/g, "^{6}") // ⁶
      .replace(/\u2077/g, "^{7}") // ⁷
      .replace(/\u2078/g, "^{8}") // ⁸
      .replace(/\u2079/g, "^{9}"); // ⁹
  };

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const katex = await import("katex");
        const out = katex.default.renderToString(normalizeLatex(latex) || "\\,", {
          throwOnError: false,
          strict: "ignore",
          displayMode: block,
          trust: true,
        });
        if (mounted) setHtml(out);
      } catch {
        if (mounted) setHtml(null);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [latex, block]);

  if (html === null) {
    return (
      <pre className="whitespace-pre-wrap text-sm text-muted-foreground font-mono overflow-x-auto">
        {normalizeLatex(latex) || ""}
      </pre>
    );
  }

  return (
    <div
      className={`prose max-w-none katex ${
        block ? "my-2" : "inline-block align-middle"
      }`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

// -------------------------------
interface StepBySolutionProps {
  solution: MathSolution;
}

// -------------------------------
export function StepBySolution({ solution }: StepBySolutionProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "equation":
        return "bg-blue-100 text-blue-800";
      case "expression":
        return "bg-green-100 text-green-800";
      case "derivative":
        return "bg-purple-100 text-purple-800";
      case "integral":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "equation":
      case "expression":
        return <Calculator className="w-4 h-4" />;
      case "derivative":
      case "integral":
        return <BookOpen className="w-4 h-4" />;
      default:
        return <Calculator className="w-4 h-4" />;
    }
  };

  const parsedLatexOrText =
    solution.parsedFormula || solution.parsedFormulaText || "";

  const finalAnswerLatexOrText = (() => {
    const latex = solution.finalAnswerLatex;
    if (Array.isArray(latex)) {
      // Explicitly separate multiple solutions.
      return latex.join("\\;\\text{OR}\\;");
    }
    if (typeof latex === "string") return latex;

    const ans = solution.finalAnswer;
    if (Array.isArray(ans)) {
      return ans.map(String).join(" OR ");
    }
    return ans ?? "";
  })();

  return (
    <div className="space-y-6">
      {/* Problem Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              {getTypeIcon(solution.type)}
              Problem Analysis
            </CardTitle>
            <Badge className={getTypeColor(solution.type)}>
              {solution.type.charAt(0).toUpperCase() + solution.type.slice(1)}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium text-sm text-gray-600 mb-1">
              Original Input:
            </h4>
            <div className="bg-gray-50 p-3 rounded-lg font-mono text-lg">
              <KaTeXRenderer latex={solution.originalFormula} />
            </div>
          </div>

          {parsedLatexOrText &&
            parsedLatexOrText !== solution.originalFormula && (
            <div>
              <h4 className="font-medium text-sm text-gray-600 mb-1">
                Parsed Formula:
              </h4>
              <div className="bg-blue-50 p-3 rounded-lg font-mono text-lg">
                <KaTeXRenderer latex={parsedLatexOrText} />
              </div>
            </div>
          )}

          <div>
            <h4 className="font-medium text-sm text-gray-600 mb-1">
              Approach:
            </h4>
            <p className="text-gray-700">{solution.explanation}</p>
          </div>
        </CardContent>
      </Card>

      {/* Step-by-Step Solution */}
      <Card>
        <CardHeader>
          <CardTitle>Step-by-Step Solution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {solution.steps.map((step, index) => (
              <div key={index} className="border-l-4 border-blue-200 pl-4 py-2">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">
                    Step {step.step}
                  </Badge>
                  <h4 className="font-medium text-gray-900">
                    {step.description}
                  </h4>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg font-mono text-lg mb-2">
                  <KaTeXRenderer latex={step.expressionLatex ?? step.expression} />
                </div>
                <p className="text-sm text-gray-600">{step.explanation}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Final Answer */}
      <Card>
        <CardHeader>
          <CardTitle className="text-green-700">Final Answer</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <div className="font-mono text-xl text-green-800">
              <KaTeXRenderer latex={finalAnswerLatexOrText} />
            </div>
          </div>
        </CardContent>
      </Card>

      <VerificationBlock verifications={solution.verification ?? null} />
    </div>
  );
}
