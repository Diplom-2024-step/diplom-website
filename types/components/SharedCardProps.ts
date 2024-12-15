import { AuthResponse } from "@/hooks/auth";

export interface SharedCardProps<T> {
  cardItem: T;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}