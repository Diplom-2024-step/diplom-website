export interface SharedCardProps<T> {
  cardItem: T;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}