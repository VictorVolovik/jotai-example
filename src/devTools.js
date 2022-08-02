import { useAtomsDebugValue, useAtomsDevtools } from "jotai/devtools";

// Debugging using React Dev Tools
export const DebugAtoms = () => {
  useAtomsDebugValue();
  return null;
};

// Debugging using Redux Dev Tools
export const AtomsDevtools = ({ children, label }) => {
  useAtomsDevtools(label);

  return children;
};
