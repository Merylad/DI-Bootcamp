import RecipeItem from "./model/RecipeItem";
import RecipeCollection from "./model/RecipeCollection";
import ListTemplate from "./templates/RecipeTemplates";
import {v4 as uuidv4} from 'uuid'

const initApp = () :void => {
  const recipeList = RecipeCollection.instance
  const template = ListTemplate.instance

  const recipeEntryForm = document.getElementById('recipeEntryForm') as HTMLFormElement

  recipeEntryForm.addEventListener('submit', (e:SubmitEvent) :void => {
    e.preventDefault()


    const titleInput = document.getElementById('recipeTitle') as HTMLInputElement
    let title : string = titleInput.value

    const ingredientsInput = document.getElementById('ingredients') as HTMLTextAreaElement
    let ingredients : string[] = ingredientsInput.value.split("\n")

    const instructionsInput = document.getElementById('instructions') as HTMLInputElement
    let instructions : string = instructionsInput.value

    if (!title.trim() || ingredients.length === 0 || !instructions.trim()) return

    const newRecipe = new RecipeItem(uuidv4(), title, ingredients, instructions)
    recipeList.addItem(newRecipe)
    template.render(recipeList)
    recipeEntryForm.reset()


  })

  const clearButton = document.getElementById('clearRecipesButton') as HTMLButtonElement
  clearButton.addEventListener('click', () => {
    recipeList.clearList()
    template.clear()
  })

  recipeList.load()
  template.render(recipeList)
}

initApp()