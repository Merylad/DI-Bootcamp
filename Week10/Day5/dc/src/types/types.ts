export interface RecipeI {
    id : string,
    name : string,
    image : string,
    ingredients : string[],
    instructions : string[]
}

export interface RecipeState {
    recipes : RecipeI[]
    status : 'LOADING' | 'SUCCESS' | 'FAILED'|''
}

export interface RootState {
    recipeReducer: {
      recipes: RecipeI[];
      status: string;
    };
  }