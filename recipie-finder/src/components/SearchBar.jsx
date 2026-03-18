function SearchBar(props) {
//   console.log(props);
  return (
    <>
      <form action="" className="flex gap-5 justify-center p-5">
        <input
          placeholder="Search Recipie..."
          type="text"
          onChange={(e) => props.setQuery(e.target.value)}
          className="grow px-5 py-2 max-w-100 bg-white focus:outline-blue-300 rounded-lg"
        />
        <button
          onClick={props.onSearch}
          className="px-4 py-2 font-bold rounded-lg bg-blue-600 text-[#ffff]"
        >
          Search Recipie
        </button>
      </form>
      {/* <p>{props.query}</p> */}
    </>
  );
}

export default SearchBar;
