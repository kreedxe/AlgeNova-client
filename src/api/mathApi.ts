import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_MATH_API_BASE_URL?.replace(/\/$/, "") ??
  "http://localhost:9000";

const API = axios.create({
  baseURL: `${API_BASE_URL}/api`,
});

export interface SolveResponse {
  originalFormula: string;
  parsedFormula: string;
  type: string;
  explanation: string;
  finalAnswer: string[];
}

export const solveFormula = async (formula: string): Promise<SolveResponse> => {
  const res = await API.post("/math/solve", {
    formula,
  });

  return res.data;
};