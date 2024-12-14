import { GetHotelDto } from "@/AppDtos/Dto/Models/Hotels/get-hotel-dto";
import { GetTourDto } from "@/AppDtos/Dto/Models/Tours/get-tour-dto";
import { useCallback } from "react";
import useLocalStorage from "./useLocalStorage";

export enum HistoryItemTypes {
  Hotel,
  Tour
}

export interface HitoryItem {
  type: HistoryItemTypes;
  item: GetHotelDto | GetTourDto;
}

export function useSearchHistory(): [
  HitoryItem[],
  (newValue: HitoryItem) => void,
] {
  const [value, setValue] = useLocalStorage('History', [] as HitoryItem[]);

  const addFunction = useCallback((item: HitoryItem) => {


    if (value.length > 0 && value[0].item.id === item.item.id) return;

    
    if (value.length < 16) {
      value.unshift(item);
      setValue(value);
    } else {
      value.pop();
      value.unshift(item);
      setValue(value);
    }
  }, []);

  return [value, addFunction];
}