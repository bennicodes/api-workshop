const renderCountry = (country) => {
  const countryCard = document.querySelector(".country-card");
  const countryList = countryCard.querySelector(".country-card__list");

  const countryFlagContainer = document.createElement("div");
  const countryFlag = document.createElement("img");
  const countryContainerImage = document.querySelector(".country-card__image");

  countryList.innerHTML = "";
  const createListItem = (title, content) => {
    const item = document.createElement("li");
    const itemTitle = document.createElement("h3");
    const itemContent = document.createElement("p");

    item.append(itemTitle, itemContent);

    itemTitle.textContent = title;
    itemContent.textContent = content;

    item.classList.add("country-card__list-item");
    itemTitle.classList.add("country-card__list-title");

    return item;
  };

  const countryName = createListItem("Country Name:", country.name.common);
  const countryContinent = createListItem("Continent:", country.continents[0]);
  const countryCapital = createListItem("Continent:", country.capital[0]);
  const countryPopulation = createListItem("Continent:", country.population);
  const extractedLanguages = Object.values(country.languages).toString();
  const countryLanguage = createListItem("Language:", extractedLanguages);
  const currenciesToArray = Object.entries(country.currencies);
  const countryCurrency = createListItem("Currency:", currenciesToArray[0][0]);
  const countryTimeZone = createListItem("TimeZone:", country.timezones[0]);
  const capitalizeWeekDay =
    country.startOfWeek.slice(0, 1).toUpperCase() +
    country.startOfWeek.slice(1);
  const countryWeekday = createListItem(
    "Start of the week:",
    country.capitalizeWeekDay
  );
  const countryDrivingSide = createListItem("Driving Side:", country.car.side);

  countryFlag.src = country.flags.png;

  //   Append elements
  countryList.append(
    countryFlagContainer,
    countryName,
    countryContinent,
    countryCapital,
    countryCapital,
    countryPopulation,
    countryLanguage,
    countryCurrency,
    countryTimeZone,
    countryWeekday,
    countryDrivingSide
  );
  countryFlagContainer.append(countryFlag);

  countryFlag.classList.add("country-card__flag-container");
};

export default renderCountry;
