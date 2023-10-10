import { AppState } from "../AppState.js";
import { Settings } from "../models/Settings.js";
import { triviaService } from "../services/TriviaService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawCategoryList() {
  let contentHTML = `
      <option value="">Any</option>
  `;
  AppState.categories.forEach(c => contentHTML += c.categoryListEntry);
  setHTML('category', contentHTML);
}

function _drawQuestion() {

}

function _randomizeAnswerLocation() {

}

function _toggleSettingsMenu() {
  bootstrap.Offcanvas.getOrCreateInstance("#triviaSettings").toggle();
}

function _preSetSettings() {
  const set = AppState.settings;
  // console.log('preselect', set, set.difficulty, set.category, set.qty ? set.qty : 10, set.type);
  document.getElementById('difficulty').value = set.difficulty ? set.difficulty : '';
  document.getElementById('category').value = set.category ? set.category : '';
  document.getElementById('type').value = set.type ? set.type : '';
  document.getElementById('qty').value = set.qty ? set.qty : 10;
  document.getElementById('qQty').value = set.qty ? set.qty : 10;
}

async function _arrayLoader() {
  await _drawCategoryList(); // load category list
  _preSetSettings(); // then draw/set form values
  triviaService.getQuestions(); //loads the questions from prior parameters
}

export class TriviaController {
  constructor() {
    try {
      triviaService.getCategories();
    } catch (error) {
      console.log('on trivia controller page-load', error)
    }
    AppState.on('categories', _arrayLoader);
  }

  async saveSettings(event) {
    try {
      event.preventDefault();
      const set = new Settings(getFormData(event.target));
      triviaService.saveSettings(set);
    } catch (error) {
      console.log(error);
    }
  }

  startGame() { //default settings - any category, difficulty, type, 10 Qs
    triviaService.startGame()
  }

  welcomeNo() {
    Pop.error('No means no! But what DO you know?')
    _toggleSettingsMenu();
  }

  welcomeMaybe() {
    Pop.success(`Maybe you'll do fine? Customize the settings to fit you!`)
    _toggleSettingsMenu();
  }

  welcomeSo() {
    Pop.success(`So... what settings would you like?`)
    _toggleSettingsMenu();
  }

}