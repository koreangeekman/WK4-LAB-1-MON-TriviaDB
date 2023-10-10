import { AppState } from "../AppState.js"
import { Category } from "../models/Category.js";
import { Question } from "../models/Question.js";
import { Settings } from "../models/Settings.js";
import { saveState } from "../utils/Store.js";

function _saveSettings() {
  saveState('triviaSettings', AppState.settings);
}

async function _getCategories() {
  try {
    const response = await axios.get(`https://opentdb.com/api_category.php`)
    AppState.categories = response.data.trivia_categories.map(category => new Category(category))
    AppState.emit('categories');
    // console.log('get categs');
  } catch (error) {
    console.log(error);
  }
}

// example https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple
async function _getQuestions() {
  try {
    const set = AppState.settings;
    const settingParameters = (set.category ? '&category=' + set.category : '') + (set.difficulty ? '&difficulty=' + set.difficulty : '') + (set.type ? '&type=' + set.type : '')
    console.log('get Qs request', `https://opentdb.com/api.php?amount=${set.qty + settingParameters}`);
    const response = await axios.get(`https://opentdb.com/api.php?amount=${set.qty + settingParameters}`)
    AppState.questions = response.data.results.map(Q => new Question(Q));
    console.log(AppState.questions);
  } catch (error) {
    console.log(error);
  }
}

class TriviaService {

  getCategories() {
    _getCategories();
  }

  getQuestions() {
    _getQuestions();
  }

  async saveSettings(newSettings) {
    console.log('New Settings: ', newSettings);
    AppState.settings = new Settings(newSettings);
    _saveSettings();
    // await _getQuestions(); // pre-load Qs when settings change
  }
  startGame() {

  }

}

export const triviaService = new TriviaService()