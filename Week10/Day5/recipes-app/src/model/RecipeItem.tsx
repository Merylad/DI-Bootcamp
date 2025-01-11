export interface RecipeI {
    id : string,
    title : string,
    ingredients : string[],
    instructions : string,
    isFavorite : boolean
}

export default class RecipeItem implements RecipeI {

    constructor(
        private _id: string,
        private _title : string,
        private _ingredients : string[],
        private _instructions : string,
        private _isFavorite : boolean = false
    ){}

    get id(){
        return this._id
    }
    get title(){
        return this._title
    }
    get ingredients(){
        return this._ingredients
    }
    get instructions(){
        return this._instructions
    }
    get isFavorite(){
        return this._isFavorite
    }

    set isFavorite(status : boolean){
        this._isFavorite = status
    }


}