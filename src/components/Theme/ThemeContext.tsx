/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";

type ThemeContextType = {
  primary: string;
  text: string;
};

export const defaultTheme: ThemeContextType = {
  primary: "#ddb892",
  text: "#170700",
};

const ThemeContext = createContext<ThemeContextType>(defaultTheme);

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;