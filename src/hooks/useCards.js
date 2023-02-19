import { useEffect, useState } from "react";
import Cat1 from "../images/cat1.png";
import Cat2 from "../images/cat2.png";
import Cat3 from "../images/cat3.png";
import Cat4 from "../images/cat4.png";
import Cat5 from "../images/cat5.png";
import Cat6 from "../images/cat6.png";
import Cat7 from "../images/cat7.png";
import Cat8 from "../images/cat8.png";

const useCards = () => {
  const [firstSelect, setFirstSelect] = useState({ id: null, name: null });
  const [secondSelect, setSecondSelect] = useState({ id: null, name: null });
  const [matchFinished, setMatchFinished] = useState(false);

  const [cards, setCards] = useState([
    {
      id: 1,
      image: Cat1,
      isHidden: false,
      isDeleted: false,
      name: "cat1",
    },
    {
      id: 2,
      image: Cat8,
      isHidden: false,
      isDeleted: false,
      name: "cat8",
    },
    {
      id: 3,
      image: Cat3,
      isHidden: false,
      isDeleted: false,
      name: "cat3",
    },
    {
      id: 4,
      image: Cat5,
      isHidden: false,
      isDeleted: false,
      name: "cat5",
    },
    {
      id: 5,
      image: Cat2,
      isHidden: false,
      isDeleted: false,
      name: "cat2",
    },
    {
      id: 6,
      image: Cat7,
      isHidden: false,
      isDeleted: false,
      name: "cat7",
    },
    {
      id: 7,
      image: Cat4,
      isHidden: false,
      isDeleted: false,
      name: "cat4",
    },
    {
      id: 8,
      image: Cat6,
      isHidden: false,
      isDeleted: false,
      name: "cat6",
    },
    {
      id: 9,
      image: Cat3,
      isHidden: false,
      isDeleted: false,
      name: "cat3",
    },
    {
      id: 10,
      image: Cat5,
      isHidden: false,
      isDeleted: false,
      name: "cat5",
    },
    {
      id: 11,
      image: Cat1,
      isHidden: false,
      isDeleted: false,
      name: "cat1",
    },
    {
      id: 12,
      image: Cat7,
      isHidden: false,
      isDeleted: false,
      name: "cat7",
    },
    {
      id: 13,
      image: Cat8,
      isHidden: false,
      isDeleted: false,
      name: "cat8",
    },
    {
      id: 14,
      image: Cat4,
      isHidden: false,
      isDeleted: false,
      name: "cat4",
    },
    {
      id: 15,
      image: Cat6,
      isHidden: false,
      isDeleted: false,
      name: "cat6",
    },
    {
      id: 16,
      image: Cat2,
      isHidden: false,
      isDeleted: false,
      name: "cat2",
    },
  ]);

  useEffect(() => {
    setTimeout(() => {
      let cardsVariable = cards;
      cardsVariable.map((_, index) => {
        cardsVariable[index].isHidden = true;
      });
      setCards([...cardsVariable]);
    }, 3000);
  }, []);

  useEffect(() => {
    if (cards.every((card) => card?.isDeleted === true)) {
      setMatchFinished(true);
    }
  }, [cards]);

  useEffect(() => {
    if (secondSelect.id !== null) {
      if (firstSelect.name === secondSelect.name) {
        setTimeout(() => {
          let cardsVariable = cards;
          cards.map((card, index) => {
            if (card?.id === firstSelect.id || card?.id === secondSelect.id) {
              cardsVariable[index].isDeleted = true;
            }
          });
          setCards([...cardsVariable]);
          setFirstSelect({ id: null, name: null });
          setSecondSelect({ id: null, name: null });
        }, 500);
      } else {
        setTimeout(() => {
          let cardsVariable = cards;
          cards.map((card, index) => {
            if (card?.id === firstSelect.id || card?.id === secondSelect.id) {
              cardsVariable[index].isHidden = true;
            }
          });
          setCards([...cardsVariable]);
          setFirstSelect({ id: null, name: null });
          setSecondSelect({ id: null, name: null });
        }, 500);
      }
    }
  }, [secondSelect]);

  const handleClick = (id, name) => {
    if (secondSelect.id === null) {
      let cardsVariable = cards;
      if (firstSelect.id === null) {
        setFirstSelect({ id: id, name: name });
      } else if (firstSelect.id !== id) {
        setSecondSelect({ id: id, name: name });
      }
      cardsVariable.map((card, index) => {
        if (card?.id === id) {
          cardsVariable[index].isHidden = false;
        }
      });
      setCards([...cardsVariable]);
    }
  };

  return [matchFinished, cards, handleClick];
};

export default useCards;