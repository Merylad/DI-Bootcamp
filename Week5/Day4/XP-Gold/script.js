let myForm = document.getElementById('myForm')


myForm.addEventListener('submit', getData)

function getData(e){
    e.preventDefault()

    let formData = new FormData(e.target)

    let myObj = {
        name : formData.get('fname') ,
        lastname : formData.get('lname')
    }

    let JsonMyObj = JSON.stringify(myObj)
    sessionStorage.setItem('formData', JsonMyObj);
    window.location.href = 'result.html'; 

    

}