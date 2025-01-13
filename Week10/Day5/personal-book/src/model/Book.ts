export interface BookI {
    id : string | number,
    title : string,
    author : string,
    category : string | number,
    isRead? : boolean
}

export interface CategoryI {
    id : string| number,
    name : string
}

export default class Book implements BookI{
    constructor(
        private _id : string | number,
        private _title : string,
        private _author : string,
        private _category : string | number,
        private _isRead : boolean = false
    ){}
    get id() {
        return this._id
    }
    get title(){
        return this._title
    }
    get author(){
        return this._author
    }
    get category(){
        return this._category
    }
    get isRead(){
        return this._isRead
    }
    set isRead(status:boolean){
        this._isRead = status
    }
    serialize():string {
        return JSON.stringify({
            id : this._id,
            title : this._title,
            author : this._author,
            category : this._category,
            isRead :this._isRead

        })
    }

    static deserialize(book : string) : Book{
        const data = JSON.parse(book)
        return new Book (
            data.id,
            data.title,
            data.author,
            data.category,
            data.isRead
        )
    }


}