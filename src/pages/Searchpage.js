import React from "react";
import "./Searchpage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import response from "./response";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MapIcon from "@material-ui/icons/Map";
import ImageIcon from "@material-ui/icons/Image";

function Searchpage() {
  const [{ term }, dispatch] = useStateValue();
  //live api call
  const { data } = useGoogleSearch(term);

  // Mock API
  // const data = response;

  console.log(data);
  return (
    <div className="searchpage">
      <div className="searchpage__header">
        <Link to="/">
          <img
            className="searchpage__logo"
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="google logo"
          />
        </Link>

        <div className="searchpage__search">
          <Search hideButtons />
          <div className="searchpage__iconsoptions">
            <div className="searchpageoption__left">
              <div className="searchpage__options">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchpage__options">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchpage__options">
                <ShoppingCartIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchpage__options">
                <DescriptionIcon />
                <Link to="/books">Books</Link>
              </div>
              <div className="searchpage__options">
                <VideoLibraryIcon />
                <Link to="/videos">Videos</Link>
              </div>
              <div className="searchpage__options">
                <AnnouncementIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchpage__options">
                <MapIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchpage__options">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searchpageoption__right">
              <div className="searchpage__options">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchpage__options">
                <Link to="/tool">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchpage__results">
          <p className="searchpage__resultscount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds)
          </p>

          {data?.items.map((item) => (
            <div className="searchpage__result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchpage__resultimg"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt="pagemap img"
                    />
                  )}
                {item.displayLink}
              </a>

              <a className="searchpage__resulttitle" href={item.link}>
                <h3>{item.title}</h3>
              </a>
              <p className="searchpage__resultsnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Searchpage;
