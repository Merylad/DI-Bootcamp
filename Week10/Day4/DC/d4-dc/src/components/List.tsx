import { ReactElement } from "react"
import { Book } from "./BookApp";

interface ListProps {
    books: Book[];
  }

const List = ({books} : ListProps) :ReactElement=> {

    const renderItem = (arr: Book[]): ReactElement[] => {
        return arr.map((book: Book) => (
          <div key={book.id}>
            <h4>
              {book.title} by {book.author}
            </h4>
          </div>
        ));
      };
    return (
        <>
        {renderItem(books)}
        </>
    )
}

export default List