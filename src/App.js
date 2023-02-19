import Done from "./images/done.png";
import Question from "./images/question.png";
import useCards from "./hooks/useCards";

function App() {
  const [matchFinished, cards, handleClick] = useCards();

  return (
    <div className="w-full m-auto flex justify-center items-center flex-col">
      {matchFinished ? (
        <h1 className="mt-[24px] text-xl font-semibold">
          Congratulations 😍🎈🎉, Refresh the page to play again!
        </h1>
      ) : (
        <h1 className="mt-[24px] text-xl font-semibold">
          Hey! Can you find all the matching cats? 😺
        </h1>
      )}

      <div className="w-[620px] h-full flex justify-center items-center flex-row flex-wrap my-8">
        {cards.map((card) =>
          card?.isDeleted ? (
            <img key={card?.id} height="150px" width="150px" src={Done} />
          ) : card?.isHidden ? (
            <img
              onClick={() => {
                handleClick(card?.id, card?.name);
              }}
              height="150px"
              width="150px"
              key={card?.id}
              src={Question}
            />
          ) : (
            <img
              key={card?.id}
              height="150px"
              width="150px"
              src={card?.image}
              style={{ objectFit: "cover" }}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
