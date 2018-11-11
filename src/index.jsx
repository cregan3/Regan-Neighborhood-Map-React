class  HideShowAll extends React.Component {
  render() {
    return (
      <div>
        <input id="show-restaurants" type="button" value="Show All Restaurants" />
        <input id="hide-restaurants" type="button" value="Hide All Restaurants" />
        <Search/>
        <RestaurantsUL/>
      </div>
    );
  }
}
class  Map extends React.Component {
  render() {
    return (
      <div>
        <div id="map"></div>
        <div id="content">
          <HideShowAll/>
        </div>
      </div>
    );
  }
}
class  Header extends React.Component {
  render() {
    return (
      <div>
        <div id="title-box">
          <h1>Amazing Restaurants in NYC by a Local</h1>
        </div>
        <div id="options-box">
          <Map/>
        </div>
      </div>
    );
  }
}
class  Search extends React.Component {
  render() {
    return (
      <div id="searchDiv">

        <div >
          <input id="searchButton" type="button" value="Search" />
        </div>
      </div>
    );
  }
}
// <input aria-label="Search-Input" id="searchInput" placeholder="Enter name of restaurant to search">
class  RestaurantsUL extends React.Component {
  render() {
    return (
      <div id="listOfRestaurantsContainer">
        <span id="listOfRestaurantsTitle">List of Restaurants</span>
        <div id="listOfRestaurants">
          <ul id="listOfRestaurantsUL">
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Header />,
  document.getElementById('container')
);
