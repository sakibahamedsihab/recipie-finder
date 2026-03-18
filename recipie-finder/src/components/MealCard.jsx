function MealCard(props) {
  return (
    <div className="flex flex-col justify-center gap-4 w-[16]">
      <div className="max-w-60 rounded-lg">
        <img
          className="object-cover overflow-hidden rounded-lg"
          src={props.strMealThumb}
          alt=""
        />
      </div>
      <h1 className="place-self-start">{props.strMeal}</h1>
    </div>
  );
}

export default MealCard;
