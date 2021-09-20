import React, { useContext } from 'react';

// Custom hooks
import { useBlogFetch } from '../../hooks/useBlogFetch';
import { useCurrentColors } from '../../hooks/useCurrentColors';



export const PortfolioContext = React.createContext({});

export const PortfolioContextProvider = (props) => {
  const [ postData, error, loading ] = useBlogFetch();
  const [ isDarkMode, setIsDarkMode, currentColors ] = useCurrentColors(true);

  const data = {
    postData: postData,
    error: error,
    loading: loading,
  }

  const darkMode = {
    isDarkMode: isDarkMode,
    setIsDarkMode: setIsDarkMode,
    currentColors: currentColors
  }

  return <PortfolioContext.Provider value={
    {
      data: data,
      darkMode: darkMode
     }
    }>{props.children}</PortfolioContext.Provider>
}

export const usePortfolioContext = () => useContext(PortfolioContext);