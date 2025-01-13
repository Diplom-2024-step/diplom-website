// Интерфейс для описания пропсов карточки
export interface TravelCardProps {
  title: string;
  location: string;
  price: string;
  tourists: string;
  departure: string;
  room: string;
  meals: string;
  activities: { name: string; image: string }[];
}
