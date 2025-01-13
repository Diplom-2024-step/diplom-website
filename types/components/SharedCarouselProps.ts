import { SharedCardProps } from "./SharedCardProps";

export interface SharedCarouselProps<T> {
  items: T[];
  title: string;
  drawCard: (item: SharedCardProps<T>) => any;
}
