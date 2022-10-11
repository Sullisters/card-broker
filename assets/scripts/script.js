// GLOBAL VARIABLES -------------------------------------------------------

// DOM SELECTORS ----------------------------------------------------------
var searchBar = document.getElementById("search-bar");
var searchButton = document.getElementById("search-button");
var cardImg = document.getElementById("card-img");

// FUNCTIONS --------------------------------------------------------------

function getPrice(card) {
    fetch("https://api.scryfall.com/cards/named?order=usd&unique=prints&fuzzy=" + card).then(
        function (response) {
        return response.json();
      }).then(function (data) {
        console.log(data);
        console.log(data.prices.usd)
        console.log(data.name)
        cardImg.setAttribute("src", data.image_uris.normal);
        cardImg.setAttribute("alt", data.name); 
    });
}

// EVENT LISTENERS --------------------------------------------------------

searchButton.addEventListener("click", function () {
    getPrice(searchBar.value);
});

// SCRYFALL API

// MAIN

getPrice("Doom Blade");

// MVP PSEUDOCODE
/*
Interactable Elements:
Add Item Button
Cards on list (once added)

When I click add item:
    A modal with a search bar and other options appears.
    I can search cards and adjust their condition and foil status.
    When I search for a card in the search bar:
        It appears in the preview on the modal.
    When I confirm my selection:
        The modal closes.
        My selection is rendered to the appropriate side of the screen.
        Variables are updated to reflect the new card.

When I click a card on either list:
    That card and information about it appear on the main display.

When I click the X on a list item:
    That card is removed from the trade.

When I look at the trade summary section:
    I see both me and my partners total value added up.
    I see the difference (if any) between our values.
    There is a gradient representation of our values (mvp+)
*/


