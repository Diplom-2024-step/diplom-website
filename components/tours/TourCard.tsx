"use client";
import { Icon } from "@iconify/react";
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
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { SharedCardProps } from "@/types/components/SharedCardProps";
import { FavoriteTourRelationService } from "@/service/relationServices/FavoriteTourRelationService";
import { GetTourDto } from "@/AppDtos/Dto/Models/Tours/get-tour-dto";
import { useAuthService } from "@/hooks/auth";
import { HistoryItemTypes, useSearchHistory } from "@/hooks/useSearchHistory";

interface TourCardProps {
  tour: GetTourDto;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const TourCard = ({
  cardItem,
  isHovered,
  onHover,
  onLeave,
}: SharedCardProps<GetTourDto>) => {
  const router = useRouter();
  const relationService = new FavoriteTourRelationService();
  const [hisotry, addToHistory] = useSearchHistory();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { data: session, status, update } = useSession();

  const [isFavorite, setIsFavorite] = useState(
    session ? session.user.favoriteTours.includes(cardItem.id) : false
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
            session.user.favoriteTours.push(cardItem.id);

            const updatedSession = await update({
              favoriteToursIds: session.user.favoriteTours.join(","),
            });

            const ses = await update({
              favoriteToursIds: session.user.favoriteTours.join(","),
            });
          }
        } catch (error) {
          console.error("Error updating favorites:", error);
        }
      };

      fetchAndUpdateFavorites();
    }
  }, [isFavorite, session]);

  // Function to update favorite hotels
  const toggleFavorite = async () => {
    if (!session) {
      onOpen();

      return;
    }

    try {
      if (!session.user.favoriteTours.includes(cardItem.id)) {
        const response = await relationService.post(
          cardItem.id,
          session.user.id
        );

        session.user.favoriteTours.push(cardItem.id);

        console.debug("status:" + response.status);
      } else {
        const response = await relationService.delete(
          cardItem.id,
          session.user.id
        );

        const index = session.user.favoriteTours.indexOf(cardItem.id);

        session.user.favoriteTours.splice(index);
        console.debug("status:" + response.status);
      }

      // Use the update method with the specific changes
      console.debug("old session:");
      console.debug(session.user.favoriteTours);

      const ses = await update({
        favoriteTours: session.user.favoriteTours.join(","),
      });

      // Update local state
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("Failed to update favorites", error);
      // Optionally revert the local state change
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
            type: HistoryItemTypes.Tour,
          });
          router.push(`/tours/${cardItem.id}`);
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

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-10" />
          {/* Bookmark button (positioned absolutely) */}
          <button
            aria-label="Toggle book mark"
            className="absolute top-4 right-4 z-10"
            onClick={(e) => {
              e.stopPropagation();

              toggleFavorite();
            }}
          >
            <div className="p-2 rounded-lg hover:bg-gray-700 transition-colors bg-transparent duration-300">
              <Icon
                className={
                  `w-8  h-8 ` + (isFavorite ? "text-yellow-500" : `text-white`)
                }
                icon={
                  isFavorite ? "ri:bookmark-fill" : `mingcute:bookmark-line`
                }
              />
            </div>
          </button>
          <div className="absolute flex text-center items-center top-4 left-4 z-10">
            <Icon
              className="text-white h-8 w-8 mr-2 mt-1"
              icon="lsicon:calendar-outline"
            />
            <span className="text-white whitespace-nowrap">
              {cardItem.duration}{" "}
              {cardItem.duration % 10 === 1 && cardItem.duration !== 11
                ? "день"
                : cardItem.duration % 10 >= 2 &&
                    cardItem.duration % 10 <= 4 &&
                    (cardItem.duration < 10 || cardItem.duration > 20)
                  ? "дні"
                  : "днів"}
            </span>
          </div>
          {/* Bottom overlay (positioned relatively) */}
          <div className="absolute bottom-0 left-1/3 rounded-tr-full transform -translate-x-1/2 z-10 bg-white h-5 w-3/4">
            <div className="absolute -bottom-[10px] -right-1 bg-white z-10 h-5 w-5 rounded-none rotate-45" />
          </div>
        </div>

        <CardBody className="p-4 bg-white text-black ">
          <h3 className="text-xl font-bold font-unbounded">
            {cardItem.hotel.city.country.name}, {cardItem.hotel.city.name}
          </h3>
          <div className="flex items-center gap-2 text-gray-600 ">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-unbounded">
              {cardItem.hotel.name}{" "}
            </span>
          </div>
          <div className="flex items-center gap-1 mb-4">
            {[...Array(cardItem.hotel.stars)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="text-sm ml-2">{cardItem.hotel.stars}/5</span>
          </div>
          <div className="flex items-center justify-between  bg-white">
            <div className="flex text-nowrap bg-gradient-to-b from-[#ECB003] to-[#AF3F2B] text-transparent bg-clip-text text-center items-center">
              <span className="text-lg font-bold mr-1">
                {cardItem.priceUSD} ₴
              </span>

              <span className="text-lg mr-1">
                /{" "}
                {(() => {
                  const adultsMatch = cardItem.name.match(
                    /(\d+)\s(дорослих|дорослого)/
                  );
                  const childrenMatch = cardItem.name.match(
                    /(\d+)\s(дитини|дитин)/
                  );

                  const adults = adultsMatch
                    ? `${adultsMatch[1]} ${
                        adultsMatch[1] === "1" ? "дорослого" : "дорослих"
                      }`
                    : "";

                  const children = childrenMatch
                    ? `${childrenMatch[1]} ${
                        childrenMatch[1] === "1" ? "дитини" : "дитин"
                      }`
                    : "";

                  return `${adults} ${children}`.trim();
                })()}
              </span>
            </div>
            <Icon
              className={`hidden md:block w-10 h-10 transition-transform rotate-45 text-black ${
                isHovered ? "-translate-y-6 text-primary" : ""
              }`}
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
                  className="bg-transparent text-black  rounded-full   border-1 border-black"
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

export default TourCard;
