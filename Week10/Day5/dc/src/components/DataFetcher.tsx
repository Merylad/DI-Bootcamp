import { useSelector, UseSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchRecipes } from "../features/dataSlice"
import { RecipeI, RootState } from "../types/types"
import { AppDispatch } from "../store/store"
import './datafetcher.css'

const DataFetcher = () => {
    const recipes : RecipeI[] = useSelector((state : RootState) => state.recipeReducer.recipes)
    const status : string = useSelector((state : RootState) => state.recipeReducer.status)
    const dispatch : AppDispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchRecipes())
    }, [dispatch])

    if (status === 'LOADING') return <h1>Loading...</h1>
    if (status === 'FAILED') return <h1>Ooops try again later</h1>





    return (
        <>
            <h1 className="title">Recipes with React / Reducer</h1>
    
            <div className="recipe-list">
                {recipes.map(item => {
                    return (
                        <div key={item.id} className="recipe-card">
                            <img src={item.image} alt={item.name} className="recipe-image" />
                            <h3 className="recipe-name">{item.name}</h3>
                            <h5>Ingredients :</h5>
                            <ul className="ingredients-list">
                                {item.ingredients.map((ingredient, index) => {
                                    return (
                                        <li key={index} className="ingredient">{ingredient}</li>
                                    )
                                })}
                            </ul>
                            <h5>Instructions : </h5>
                            <ol className="instructions-list">
                                {item.instructions.map((instruction, index) => {
                                    return (
                                        <li key={index} className="instruction">{instruction}</li>
                                    )
                                })}
                            </ol>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default DataFetcher