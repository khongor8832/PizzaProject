require("@babel/polyfill");
import Search from "./model/Search";
import { elements, renderLoader } from "./veiw/base";
import * as searchVeiw from "./veiw/searchVeiw";
/**
 * Web app төлөв
 * - Хайлтын query, үр дүн
 * - Тухайн үзүүлж байгаа жор
 * Лайкласан жорууд
 * Захиалж байгаа жорын найрлаганууд
 */

const state = {};

const controlSearch = async () => {
  const query = searchVeiw.getInput();
  // 1. Вэбээс хайлтын түлхүүр үгийг гаргаж авна.
  if (query) {
    // 2. Шинээр хайлтын объектыг үүсгэж өгнө.
    state.search = new Search(query);
    // 3. Хайлт хийхэд зориулж дэлгэцийг UI бэлтгэнэ.
    searchVeiw.clearSearch();
    searchVeiw.clearSearchResult();
    renderLoader(elements.searchResultDiv);
    // 4. Хайлтыг гүйцэтгэнэ.
    await state.search.doSearch();
    // 5. Хайлтыг үр дүнг дэлгэцэнд үзүүлнэ.
    if (state.search.result === undefined) alert("Хайлтаар илэрцгүй ...");
    else searchVeiw.renderRecipes(state.search.result);
  }
};

elements.searchFrom.addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});
