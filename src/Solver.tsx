import { useState } from "react";
import { solveFormula, SolveResponse } from "./api/mathApi";

export default function Solver() {
  const [formula, setFormula] = useState<string>("");
  const [result, setResult] = useState<SolveResponse | null>(null);

  const handleSolve = async () => {
    try {
      const data = await solveFormula(formula);
      setResult(data);
    } catch (error) {
      console.error("Solve error:", error);
    }
  };

  return (
    <div>
      <h1>Math Solver</h1>

      <input
        value={formula}
        onChange={(e) => setFormula(e.target.value)}
        placeholder="2x + 5 = 13"
      />

      <button onClick={handleSolve}>Solve</button>

      {result && (
        <div>
          <h2>Answer</h2>

          {result.finalAnswer.map((ans, i) => (
            <p key={i}>{ans}</p>
          ))}
        </div>
      )}
    </div>
  );
}