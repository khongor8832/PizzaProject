export const elements = {
  searchFrom: document.querySelector(".search"),
  searchInput: document.querySelector(".search__field"),
  searchResultDiv: document.querySelector(".results"),
  searchResultList: document.querySelector(".results__list"),
};

export const renderLoader = (parent) => {
  const loader = `
  <div class="loader">
    <svg>
      <use href="img/icons.svg#icon-cw"</use>
    </svg>
</div>
`;
};
