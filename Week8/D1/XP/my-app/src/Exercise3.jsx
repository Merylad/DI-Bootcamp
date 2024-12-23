import '../public/exercise.css'

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };


const Exercise3 = () => {
    return (
        <>
            <h1 style={style_header}>This is a header</h1>
            <p className="para">This is a paragraph</p>
            <a href="#">This is a link</a>
            <h3>This is a form :</h3>
            <form>
                <label htmlFor="name">Enter your name :</label> <br />
                <input type="text" name="name" id="name" />
                <input type="submit" value='submit' />
            </form>
            <h6>Here is an image : </h6>
            <img src="data:image/png;base64,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" alt="imgReact" />
            <h6>This is a list</h6>
            <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
        </>
    )
}

export default Exercise3