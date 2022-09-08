import React, { useState } from "react";

function Search({ onSearch}) {

  const [search, setSearch] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    onSearch(search)
    setSearch("")
  }


  // function handleAnswerChange(event) {
  //   console.log("clicked item:", event.target.value);
  //   fetch(`http://localhost:4000/questions/${id}`, {
  //   method: "PATCH",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     "correctIndex": parseInt(event.target.value)}),
  // })
  //   .then((r) => r.json())
  //   .then((updatedQuestion) => onUpdateQuestion(updatedQuestion));


  // }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
