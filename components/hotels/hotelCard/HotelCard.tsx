"use client";
import {
  Button,
  Card,
  CardBody,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { MapPin, Star } from "lucide-react";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { SharedCardProps } from "@/types/components/SharedCardProps";
import { GetHotelDto } from "@/AppDtos/Dto/Models/Hotels/get-hotel-dto";
import { FavoriteHotelRelationService } from "@/service/relationServices/FavoriteHotelRelationService";
import { useAuthService } from "@/hooks/auth";
import { HistoryItemTypes, useSearchHistory } from "@/hooks/useSearchHistory";

const HotelCard = ({
  cardItem,
  isHovered,
  onHover,
  onLeave,
}: SharedCardProps<GetHotelDto>) => {
  const [history, addToHistory] = useSearchHistory();
  const router = useRouter();
  const relationService = new FavoriteHotelRelationService();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data: session, status, update } = useSession();
  const [isFavorite, setIsFavorite] = useState(
    session ? session.user.favoriteHotels.includes(cardItem.id) : false
  );
  const statusServer = useAuthService(relationService);

  useEffect(() => {
    if (!isFavorite && session) {
      const fetchAndUpdateFavorites = async () => {
        try {
          const response = await relationService.get(
            cardItem.id,
            session.user.id
          );

          if (response.status === 200) {
            setIsFavorite(true);
            session.user.favoriteHotels.push(cardItem.id);
            await update({
              favoriteHotelsIds: session.user.favoriteHotels.join(","),
            });
          }
        } catch (error) {
          console.error("Error updating favorites:", error);
        }
      };

      fetchAndUpdateFavorites();
    }
  }, [isFavorite, session, cardItem.id, update]);

  const toggleFavorite = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!session) {
      onOpen();

      return;
    }

    try {
      if (!session.user.favoriteHotels.includes(cardItem.id)) {
        const response = await relationService.post(
          cardItem.id,
          session.user.id
        );

        session.user.favoriteHotels.push(cardItem.id);
      } else {
        const response = await relationService.delete(
          cardItem.id,
          session.user.id
        );
        const index = session.user.favoriteHotels.indexOf(cardItem.id);

        if (index > -1) {
          session.user.favoriteHotels.splice(index, 1);
        }
      }

      await update({
        favoriteHotelsIds: session.user.favoriteHotels.join(","),
      });

      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("Failed to update favorites", error);
      setIsFavorite(isFavorite);
    }
  };

  return (
    <>
      <Card
        disableRipple
        isHoverable
        isPressable
        className={`relative overflow-hidden shadow-lg hover:cursor-pointer ${isHovered ? "scale-105" : ""}`}
        shadow="none"
        onClick={() => {
          addToHistory({
            item: cardItem,
            type: HistoryItemTypes.Hotel,
          });
          router.push(`/${cardItem.city.country.id}/hotels/${cardItem.id}`);
        }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <div className="relative">
          <Image
            alt={cardItem.name}
            className="h-[317px] w-[476px] object-cover z-0"
            loading="eager"
            radius="none"
            src={cardItem.urls[0]}
          />
          <button
            aria-label="Toggle bookmark"
            className="absolute top-4 right-4 z-10"
            onClick={toggleFavorite}
          >
            <div className="p-2 rounded-lg hover:bg-gray-700 transition-colors bg-transparent duration-300">
              <Icon
                className={`w-8 h-8 ${isFavorite ? "text-yellow-500" : "text-white"}`}
                icon={
                  isFavorite ? "ri:bookmark-fill" : "mingcute:bookmark-line"
                }
              />
            </div>
          </button>
          <div className="absolute bottom-0 left-1/3 rounded-tr-full transform -translate-x-1/2 z-10 bg-white h-5 w-3/4">
            <div className="absolute -bottom-[10px] -right-1 bg-white z-10 h-5 w-5 rounded-none rotate-45" />
          </div>
        </div>

        <CardBody className="px-4 pb-4 bg-white text-black">
          <h3 className="text-xl font-bold">{cardItem.name}</h3>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">
              {cardItem.city.country.name}, {cardItem.city.name}
            </span>
          </div>
          <div className="flex items-center gap-1 mb-4">
            {[...Array(cardItem.stars)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="text-sm ml-2">{cardItem.stars}/5</span>
          </div>
          <div className="flex items-center justify-between bg-white">
            <div className="bg-gradient-to-b from-[#ECB003] to-[#AF3F2B] text-transparent bg-clip-text">
              <span className="text-lg font-bold">
                {cardItem.pricePerNight} ₴
              </span>
              <span className="text-lg"> / Ніч</span>
            </div>
            <Icon
              className={`w-10 h-10 transition-transform rotate-45 text-black ${isHovered ? "-translate-y-6 text-primary" : ""}`}
              icon="ei:arrow-up"
            />
          </div>
        </CardBody>
      </Card>

      <Modal
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        size="sm"
        onOpenChange={onOpenChange}
      >
        <ModalContent className="bg-white text-black">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col items-center gap-1">
                <span>Ви повинні зареєструватися</span>
              </ModalHeader>
              <ModalBody />
              <ModalFooter>
                <Button
                  className="bg-transparent text-black rounded-full border-1 border-black"
                  variant="light"
                  onPress={onClose}
                >
                  Зареєструватися поже
                </Button>
                <Button
                  className="text-white rounded-full"
                  color="primary"
                  onPress={() => {
                    onClose();
                    router.push("/auth/registrate");
                  }}
                >
                  Зареєструватися
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default HotelCard;
