import { useState } from "react";
import { createContext } from "react";
import { IdeliveryInfo } from "./types";
interface IDeliveryProvider {
  children: JSX.Element
}

export const DeliveryContext = createContext<IdeliveryInfo>({} as IdeliveryInfo)

export const DeliveryProvider = ({children}: IDeliveryProvider) =>  {
  const [deliveryInfo, setDeliveryInfo] =  useState<any>({})

  return (
    <DeliveryContext.Provider value={{deliveryInfo, setDeliveryInfo}}>
      {children}
    </DeliveryContext.Provider>
  )
}