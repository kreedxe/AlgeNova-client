"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { SolutionVerification } from "@/lib/types";
import katex from "katex";

interface VerificationBlockProps {
  verifications: SolutionVerification[] | null;
}

const KaTeXInline: React.FC<{ latex: unknown }> = ({ latex }) => {
  const s = Array.isArray(latex) ? latex.join("\\\\") : String(latex ?? "");
  const out = katex.renderToString(s || "\\,", {
    throwOnError: false,
    strict: "ignore",
    displayMode: false,
    trust: true,
  });
  return <span className="katex" dangerouslySetInnerHTML={{ __html: out }} />;
};

export const VerificationBlock: React.FC<VerificationBlockProps> = ({
  verifications,
}) => {
  if (!verifications?.length) return null;

  return (
    <Card className="border-emerald-200/60 bg-emerald-50/30">
      <CardHeader>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-emerald-600" />
          <CardTitle>Solution Verification</CardTitle>
        </div>
        <CardDescription>
          Checking by substituting into the original equation
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {verifications.map((verification, i) => (
          <div key={i} className="rounded-lg bg-white/60 border p-4">
            {verification.error ? (
              <div className="text-red-600 font-medium">
                <KaTeXInline latex={verification.solutionLatex ?? verification.solution} />:{" "}
                {verification.error}
              </div>
            ) : (
              <div>
                <div className="font-medium text-emerald-800">
                  Solution:{" "}
                  <KaTeXInline
                    latex={verification.solutionLatex ?? verification.solution}
                  />
                </div>
                {verification.isCorrect !== undefined && (
                  <div
                    className={`text-sm ${
                      verification.isCorrect
                        ? "text-emerald-600"
                        : "text-red-600"
                    }`}
                  >
                    {verification.isCorrect ? "✓ Verified" : "✗ Incorrect"}
                  </div>
                )}

                {(verification.leftSideLatex ||
                  verification.rightSideLatex ||
                  verification.leftSide ||
                  verification.rightSide) && (
                  <div className="mt-2 text-sm text-muted-foreground space-y-1">
                    {(verification.leftSideLatex || verification.leftSide) && (
                      <div>
                        LHS:{" "}
                        <KaTeXInline
                          latex={
                            verification.leftSideLatex ?? verification.leftSide
                          }
                        />
                      </div>
                    )}
                    {(verification.rightSideLatex || verification.rightSide) && (
                      <div>
                        RHS:{" "}
                        <KaTeXInline
                          latex={
                            verification.rightSideLatex ?? verification.rightSide
                          }
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
