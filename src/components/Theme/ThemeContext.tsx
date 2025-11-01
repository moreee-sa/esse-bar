/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";

type ThemeContextType = {
  primary: string;
  secondary: string;
  text: string;
};

export const defaultTheme: ThemeContextType = {
  primary: "#ddb892",
  secondary: "#e6ccb2",
  text: "#170700",
};

const ThemeContext = createContext<ThemeContextType>(defaultTheme);

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;