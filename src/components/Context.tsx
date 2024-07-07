// StoreContext.tsx
import React, { createContext, useState } from 'react';

// Define el tipo para el estado
type StoreType = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  authKey: string
};

// Crea el contexto
const StoreContext = createContext<StoreType | null>(null);

// Crea el proveedor del contexto
const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<string>(''); // Inicializa el estado con un valor vacío

  const contextValue = {
    language,
    setLanguage,
    authKey:"01234"
  };

  return (
    <StoreContext.Provider value={contextValue} >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };

