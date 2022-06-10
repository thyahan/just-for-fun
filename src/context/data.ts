import React from "react";

interface IDataContext {
  title?: string;
}

const DataContext = React.createContext<IDataContext>({
  title: 'default title'
});

export default DataContext;
