import RecipeItem from "./RecipeItem";

interface CollectionI {
    list : RecipeItem[]
    addItem (itemObj : RecipeItem) : void
    removeItem (id : string) : void
    load() : void
    save() : void
    clearList() : void
}

export default class RecipeCollection implements CollectionI {

    static instance : RecipeCollection = new RecipeCollection()
    constructor(
        private _list: RecipeItem[] = []
    ){}

    get list(){
        return this._list
    }

    addItem(itemObj: RecipeItem): void {
        this._list.push(itemObj)
        this.save()
    }
    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id)
        this.save()
    }
    save(): void {
        localStorage.setItem('mylist', JSON.stringify(this._list))
    }
    load(): void {
        const storedList : string | null = localStorage.getItem('mylist')
        if(typeof storedList !== 'string') return;
        const parsedList : {_id : string, _title:string, _ingredients : string[], _instructions: string, _isFavorite : boolean}[] = JSON.parse(storedList)
        parsedList.forEach(item => {
            const newListItem = new RecipeItem (item._id, item._title, item._ingredients, item._instructions, item._isFavorite)
            this._list.push(newListItem)
        })
    }
    clearList(): void {
        this._list=[]
        this.save()
    }
}