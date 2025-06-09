"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type OrderContextType = {
  orders: {quantity: number, item: string, price: number}[];
  setOrders: React.Dispatch<React.SetStateAction<{quantity: number, item: string, price: number}[]>>;
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
  mainscreen: string;
  setMainScreen: React.Dispatch<React.SetStateAction<string>>;
  subscreen: string;
  setSubScreen: React.Dispatch<React.SetStateAction<string>>;
  drink: string;
  setDrink: React.Dispatch<React.SetStateAction<string>>;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  
  const [orders, setOrders] = useState<{quantity: number, item: string, price: number}[]>([]);
  const [number, setNumber] = useState<number>(1);
  const [mainscreen, setMainScreen] = useState<string>("Beverages");
  const [subscreen, setSubScreen] = useState<string>("Hot Beverages");
  const [drink, setDrink] = useState<string>("");

  return (
    <OrderContext.Provider value={{ orders, setOrders, number, setNumber, mainscreen, setMainScreen, subscreen, setSubScreen, drink, setDrink }}>
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
