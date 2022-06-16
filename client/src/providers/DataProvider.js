import React from "react";

export const DataContext = React.createContext;

const DataProvider = (props) => {
  return (
    <DataContext.Provider value={{}}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider;