import React, { useState } from "react";
import "./Search.css";
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
function Search({ hideButtons = false }) {
  const [{ term }, dispatch] = useStateValue();
  const [input, setinput] = useState("");
  const history = useHistory();
  const search = (event) => {
    event.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
  
        <SearchIcon className="search__seacrhicon" />
      
        <input
          value={input}
          onChange={(event) => setinput(event.target.value)}
        />
      
        <MicIcon className="search__micicon" />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search}>
            Google Search
          </Button>
          <Button>I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="searchbutton__hidden"
            type="submit"
            onClick={search}
          >
            Google Search
          </Button>
          
        </div>
      )}
    </form>
  );
}

export default Search;
