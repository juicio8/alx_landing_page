import React from "react";

const Header = () => {
  return (
    <header className="position: fixed w-full backdrop-blur-xl z-10">
      <nav className="flex justify-between font-semibold p-4 shadow-md">
        <div className="text-xl">MovieWatchlist</div>
        <div>
          <a href="#about" className="hover:text-purple-600">
            About
          </a>
          <a
            href="https://watchlist-deni.netlify.app"
            target="_blank"
            className="ml-3 hover:text-purple-600"
          >
            Watchlist
          </a>
          <a
            href="https://github.com/juicio8/Movie-WatchList"
            target="_blank"
            className="ml-3 hover:text-purple-600"
          >
            Github
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
