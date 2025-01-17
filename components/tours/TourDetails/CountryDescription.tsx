import React from "react";
import Image, { StaticImageData } from "next/image";
import spainBack from "@/components/tours/TourDetails/CountryDescriptionImages/spainBack.webp";
import spainFood from "@/components/tours/TourDetails/CountryDescriptionImages/spainFood.webp";
import spainTraditions from "@/components/tours/TourDetails/CountryDescriptionImages/spainTraditions.png";
import spainAttractions from "@/components/tours/TourDetails/CountryDescriptionImages/spainAttractions.webp";
import egyptBack from "@/components/tours/TourDetails/CountryDescriptionImages/egyptBack.webp";
import egyptFood from "@/components/tours/TourDetails/CountryDescriptionImages/egyptFood.webp";
import egyptSea from "@/components/tours/TourDetails/CountryDescriptionImages/egyptSea.webp";
import egyptAttractions from "@/components/tours/TourDetails/CountryDescriptionImages/egyptAttractions.webp";
import italyBack from "@/components/tours/TourDetails/CountryDescriptionImages/italyBack.webp";
import italyFood from "@/components/tours/TourDetails/CountryDescriptionImages/italyFood.webp";
import italyBeach from "@/components/tours/TourDetails/CountryDescriptionImages/italyBeach.webp";
import italyAttractions from "@/components/tours/TourDetails/CountryDescriptionImages/italyAttractions.webp";
import turkeyBack from "@/components/tours/TourDetails/CountryDescriptionImages/turkeyBack.webp";
import turkeyFood from "@/components/tours/TourDetails/CountryDescriptionImages/turkeyFood.webp";
import turkeyBeach from "@/components/tours/TourDetails/CountryDescriptionImages/turkeyBeach.webp";
import turkeyAttractions from "@/components/tours/TourDetails/CountryDescriptionImages/turkeyAttractions.webp";
import maldivesBack from "@/components/tours/TourDetails/CountryDescriptionImages/maldivesBack.webp";
import maldivesFood from "@/components/tours/TourDetails/CountryDescriptionImages/maldivesFood.webp";
import maldivesBeach from "@/components/tours/TourDetails/CountryDescriptionImages/maldivesBeach.webp";
import maldivesAttractions from "@/components/tours/TourDetails/CountryDescriptionImages/maldivesAttractions.webp";

const CountryDescription = ({ countryName }: { countryName: string }) => {
  const getCountryDescription = (countryName: string) => {
    if (!countryName) {
      return {
        name: "Невідома країна",
        description: "Інформація про цю країну відсутня.",
        backgroundImage: "empty",
        backgroundColor: "#4d588d",
        images: [
          { image: `1`, name: `name`, description: `1` },
          { image: `1`, name: `name`, description: `1` },
          { image: `1`, name: `name`, description: `1` },
        ],
      };
    }
    if (countryName === "Іспанія") {
      return {
        name: countryName,
        description: `<p>Іспанія - країна надзвичайно красивих міст й чудових пейзажів, з багатою історією й культурою, яка дбайливо зберігає стародавні традиції.</p> <p>В Іспанії можна відпочивати на морі цілий рік: влітку на узбережжі або на Балеарських островах, а взимку на Канарських островах. До того ж клімат на Канарах дуже стабільний. Середньорічна температура +20 без сильної спеки навіть в розпал літа, вода тепла за будь-якого сезону.</p>`,
        backgroundImage: spainBack,
        backgroundColor: "#02528c",
        images: [
          {
            image: spainFood,
            name: `Їжа`,
            description: `Паелья, гаспачо, тортилья, хамон.`,
          },
          {
            image: spainTraditions,
            name: `Яскраві традиції`,
            description: `Славиться своїми фестивалями, танцями, музикою ( Корида, фламенко, тапас )`,
          },
          {
            image: spainAttractions,
            name: `Пам'ятки`,
            description: `Собори, Sagrada Familia, Catedral de Sevilla, палаци Alhambra Alcázar de Segovia.`,
          },
        ],
      };
    } else if (countryName === "Єгипeт") {
      return {
        name: countryName,
        description:
          "Єгипет - ця земля свідок декількох тисячоліть історії людства. Стародавні культури єгиптян, римлян, євреїв. Арабські завоювання, хрестові походи. Захоплює та чарує поєднання багатого життям моря і безплідною пустелі. Червоне море - це родзинка Єгипту, вважається самим теплим морем на землі, завдяки чому воно налічує велику кількість різноманітних морських тварин.",
        backgroundImage: egyptBack,
        backgroundColor: "#264674",
        images: [
          {
            image: egyptFood,
            name: `Їжа`,
            description: `Мезе, баклажанові та йогуртові намазки, лаваш, самоси, долму.`,
          },
          {
            image: egyptSea,
            name: `Моря`,
            description: `На півночі омивається водами Середземного моря Атлантичного океану; на сході - водами Червоного моря Індійського океану.`,
          },
          {
            image: egyptAttractions,
            name: `Пам'ятки`,
            description: `Піраміди Гізи, храми і палацові комплекси - Луксорський храм, палаци Амарни.`,
          },
        ],
      };
    } else if (countryName === "Італія") {
      return {
        name: countryName,
        description:
          "<p>Італія - країна пасти, вина і веселощів, а також законодавець моди і стилю. Це країна, де є неймовірно красиві острови, лазурне море, засніжені гори, архітектура, від якої не можеш відірвати очей, термальні джерела, нереально смачна кухня, атмосфера романтики і свята. Це країна, де відчуваєш аромат кави і смак чудового сиру.</p> <p>Історія та мистецтво - це те, за чим приїжджають численні туристи в Італію. Замки, місточки, дворики, вся архітектура прописана історією, багатолика і різноманітна.</p>",
        backgroundImage: italyBack,
        backgroundColor: "#07617e",
        images: [
          {
            image: italyFood,
            name: `Їжа`,
            description: `Піца, паста, Капрезе, Фріттата, Брускета, Різото, вино тощо.`,
          },
          {
            image: italyBeach,
            name: `Пляжі`,
            description: `Амальфітанське узбережжя, Сардинія, Сицилія, Ріміні, Лідо ді Езоло, Апулія, Кальярі, Тоскана, Абруццо, Капрі.`,
          },
          {
            image: italyAttractions,
            name: `Пам'ятки`,
            description: `Колізей та Пізанська вежа, Міланський собор, собор святого Петра, Моле-Антонелліана тощо.`,
          },
        ],
      };
    } else if (countryName === "Туреччина") {
      return {
        name: countryName,
        description: `<p>Туреччина, країна багатої історії, сповнена місцями, що представляють величезний інтерес для туристів. Оскільки все перерахувати просто неможливо, назвемо найпопулярніші: Стамбул- древній славний місто, великий порт, економічне і промислове "серце" країни, єдиний в світі місто, розташоване на двох материках.</p> <p>Місто засноване близько 660 р до н.е. як Візантій, з 330 р н.е. називався Константинополем, а в 1453 році був захоплений турками і перейменований в Стамбул.</p>`,
        backgroundImage: turkeyBack,
        backgroundColor: "#4d588d",
        images: [
          {
            image: turkeyFood,
            name: `Їжа`,
            description: `Кокоріч, Суджук, Балик-екмек, Долма, Імам баялди тощо.`,
          },
          {
            image: turkeyBeach,
            name: `Пляжі`,
            description: `Коньялти, Півострів Чешме, Пляж Ізтузу, Олюденіз, Гольтюрбуку, Пляж Клеопатри, Пляж Патара, Півострів Датча.`,
          },
          {
            image: turkeyAttractions,
            name: `Пам'ятки`,
            description: `Собор Св. Софії (Айя-Софія), Блакитна мечеть (Султанахмет), Топкапи тощо.`,
          },
        ],
      };
    } else if (countryName === "Мальдіви") {
      return {
        name: countryName,
        description: `<p>Мальдівські острови широко відомі своїми курортами, кожен з яких - неповторний світ, оточений найчистішими золотими пісками. Це місце "на краю світу", де немає шуму міст і європейської цивілізації, де тільки екзотична природа і нескінченні простори океану.</p> <p>Численні підводні коралові печери тягнуться по всьому архіпелагу Мальдівському, буйна тропічна рослинність створює первозданну і неповторну красу островів.</p>`,
        backgroundImage: maldivesBack,
        backgroundColor: "#087490",
        images: [
          {
            image: maldivesFood,
            name: `Їжа`,
            description: `Roshi - місцевий хліб - зазвичай їдять разом з mas huni - рибним коктейлем тощо.`,
          },
          {
            image: maldivesBeach,
            name: `Пляжі`,
            description: `Пляж Фулхаду, Пляж Фехенду, Пляжи острова Дигура, Пляж Мееру, Пляж Куда Хураа, Пляж Хуравали тощо.`,
          },
          {
            image: maldivesAttractions,
            name: `Пам'ятки`,
            description: `Острів Хулул, Усипальниці Медузіараї, Масджид аль-Султан Мухаммад Тукуруфану аль-Аузам`,
          },
        ],
      };
    }
  };

  const country = getCountryDescription(countryName);

  const boldFirstWordDescription = country?.description.replace(
    /^(\S+)/,
    "<strong>$1</strong>"
  );

  const ImageCard = ({
    image,
    name,
    description,
  }: {
    image: StaticImageData;
    name: string;
    description: string;
  }) => (
    <div className="flex flex-col items-center content-center text-center lg:w-[33%] w-[50%]">
      <Image
        alt={name}
        src={image}
        className="lg:w-[150px] lg:h-[150px] w-[125px] h-[125px]"
      />
      <p className="text-[18px] font-bold font-unbounded text-white mt-[10px] mb-[10px]">
        {name}
      </p>
      <p className="text-[15px] text-pretty font-nunito_font_family text-white w-[150px]">
        {description}
      </p>
    </div>
  );

  return (
    <div>
      <div
        className="hidden lg:flex flex-col items-end bg-cover bg-center h-full w-full rounded-xl p-5"
        style={{
          backgroundImage: `url(${(country?.backgroundImage as StaticImageData).src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col lg:w-[55%] w-full h-full lg:mt-[40px] mt-[20px] lg:mr-[30px]">
          <div className="flex flex-col w-full lg:h-[40%] h-[50%]">
            <p className="text-[35px] font-unbounded text-white ">Про країну</p>
            <p
              dangerouslySetInnerHTML={{ __html: boldFirstWordDescription! }}
              className="flex flex-col space-y-3 text-[17px] text-nunito_font_family text-white"
            />
          </div>
          <div className="h-full mt-[10px]">
            <p className="text-[17px] font-nunito_font_family text-white mb-[20px] font-bold">
              Чим славиться:
            </p>
            <div className="flex flex-row-reverse flex-wrap">
              {country?.images
                .slice(0, 3)
                .map((image, index) => (
                  <ImageCard
                    key={index}
                    description={image.description}
                    image={image.image as StaticImageData}
                    name={image.name}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="lg:hidden flex flex-col items-end bg-cover bg-center h-full w-full rounded-xl p-5"
        style={{
          backgroundImage: `url(${(country?.backgroundImage as StaticImageData).src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPosition: "bottom",
          backgroundColor: country?.backgroundColor,
        }}
      >
        <div className="flex flex-col lg:w-[55%] w-full h-full lg:mt-[40px] mt-[20px] lg:mr-[30px]">
          <div className="flex flex-col w-full lg:h-[40%] h-[50%]">
            <p className="text-[35px] font-unbounded text-white ">Про країну</p>
            <p
              dangerouslySetInnerHTML={{ __html: boldFirstWordDescription! }}
              className="flex flex-col space-y-3 text-[17px] text-nunito_font_family text-white"
            />
          </div>
          <div className="h-full mt-[10px]">
            <p className="text-[17px] font-nunito_font_family text-white mb-[20px] font-bold">
              Чим славиться:
            </p>
            <div className="flex flex-row-reverse flex-wrap">
              {country?.images
                .slice(0, 3)
                .map((image, index) => (
                  <ImageCard
                    key={index}
                    description={image.description}
                    image={image.image as StaticImageData}
                    name={image.name}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDescription;
