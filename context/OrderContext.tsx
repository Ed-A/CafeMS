"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type OrderContextType = {
  orders: string[];
  setOrders: React.Dispatch<React.SetStateAction<string[]>>;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<string[]>(["OB", "DR"]);

  return (
    <OrderContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};
