import RecipeCollection from "../model/RecipeCollection";

interface DOMlistI {
    div : HTMLDivElement,
    clear(): void,
    render(recipeList : RecipeCollection) : void
}

export default class ListTemplate implements DOMlistI {
    div : HTMLDivElement
    static instance : ListTemplate = new ListTemplate()
    constructor(){
        this.div = document.getElementById('recipeContainer') as HTMLDivElement
    }
    clear(): void {
        this.div.innerHTML = ''
    }
    render(recipeList: RecipeCollection): void {
        this.clear()
        recipeList.list.forEach(item => {
            const card = document.createElement('div') as HTMLDivElement
            card.className = 'card'
            const titleP = document.createElement('p') as HTMLParagraphElement
            titleP.textContent = item.title
            titleP.className= 'title'
            const ulIngredients = document.createElement('ul') as HTMLUListElement 
            const h3 = document.createElement('h3') as HTMLHRElement
            h3.textContent = 'Ingredients :'
            ulIngredients.appendChild(h3)
            item.ingredients.forEach(ingredient => {
                const li = document.createElement('li') as HTMLLIElement
                li.textContent = ingredient
                ulIngredients.appendChild(li)
            })

            const instructionsContainer = document.createElement('div') as HTMLDivElement;
            instructionsContainer.style.display = 'none'; // Initially hide instructions
    
            const h3b = document.createElement('h3') as HTMLHRElement;
            h3b.textContent = 'Instructions :';
            instructionsContainer.appendChild(h3b);
    
            const instructionsP = document.createElement('p') as HTMLParagraphElement;
            instructionsP.textContent = item.instructions;
            instructionsContainer.appendChild(instructionsP);
    
            const toggleButton = document.createElement('button') as HTMLButtonElement;
            toggleButton.textContent = 'Show Instructions';
            toggleButton.className='btn'
    
            toggleButton.addEventListener('click', () => {
                if (instructionsContainer.style.display === 'none') {
                    instructionsContainer.style.display = 'block';
                    toggleButton.textContent = 'Hide Instructions';
                } else {
                    instructionsContainer.style.display = 'none';
                    toggleButton.textContent = 'Show Instructions';
                }
            });
            
           
        card.appendChild(titleP);
        card.appendChild(ulIngredients);
        card.appendChild(toggleButton);
        card.appendChild(instructionsContainer)
            

            const button = document.createElement('button') as HTMLButtonElement
            button.textContent = 'X'
            button.className = 'deletebtn'
            card.appendChild(button)

            button.addEventListener('click', () => {
                recipeList.removeItem(item.id)
                this.render(recipeList)
            })

            const favBtn = document.createElement('button') as HTMLButtonElement
            favBtn.textContent = item.isFavorite ? '❤️' : '♡'
            favBtn.className = 'favbtn'
            card.appendChild(favBtn)

            favBtn.addEventListener('click', () => {
                item.isFavorite = !item.isFavorite
                recipeList.save()
                this.render(recipeList)
            })

            this.div.appendChild(card)

        })
    }
}