export interface MathStep {
  step: number;
  description: string;
  expression: string;
  expressionLatex?: string;
  explanation: string;
}

export interface SolutionVerification {
  solution: string;
  solutionLatex?: string;
  leftSideLatex?: string;
  rightSideLatex?: string;
  leftSide?: string;
  rightSide?: string;
  isCorrect?: boolean;
  error?: string;
}

export interface MathSolution {
  originalFormula: string;
  // Backend may return a LaTeX parsed formula and/or a plain-text variant.
  parsedFormula: string;
  parsedFormulaText?: string;
  steps: MathStep[];
  finalAnswer: string | number | (string | number)[] | null;
  finalAnswerLatex?: string[] | string | null;
  verification?: SolutionVerification[] | null;
  explanation: string;
  type: "equation" | "expression" | "derivative" | "integral" | string;
}
