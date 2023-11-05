import update from "immutability-helper";
import { useCallback, useState } from "react";
import { Card } from "./Card.jsx";
import { gallaryImg } from "../../assets/imageArray.js";

export const Container = () => {
  const [cards, setCards] = useState(gallaryImg);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) => {
      const dragCard = prevCards[dragIndex];
      let updatedCards;

      if (dragIndex < hoverIndex) {
        updatedCards = update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        });
      } else {
        updatedCards = update(prevCards, {
          $splice: [
            [hoverIndex, 0, dragCard],
            [dragIndex + 1, 1],
          ],
        });
      }

      return updatedCards;
    });
  }, []);

  const renderCard = useCallback(
    (card, index) => {
      return (
        <Card
          key={index}
          index={index}
          id={card.img}
          item={card}
          moveCard={moveCard}
        />
      );
    },
    [moveCard]
  );

  return (
    <>
      <div className="grid grid-cols-5 gap-3">
        {cards.map((card, i) => renderCard(card, i))}
      </div>
    </>
  );
};
