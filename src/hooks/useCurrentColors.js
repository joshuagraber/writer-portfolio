import { useEffect, useState } from 'react';

// Data
import { colors } from '../data';


export const useCurrentColors = () => {
  const [ isDarkMode, setIsDarkMode ] = useState(true);
  const [ currentColors, setCurrentColors ] = useState(colors.dark);

  useEffect(() => {
    if (!isDarkMode) {
      setCurrentColors(colors.light);
    } else if (isDarkMode) {
      setCurrentColors(colors.dark);
    }
  }, [currentColors, setCurrentColors, isDarkMode])

  return [ isDarkMode, setIsDarkMode, currentColors]
}