class Video {
    constructor(title, uploader, time){
        this.title = title
        this.uploader = uploader
        this.time = time
    }

    watch(){
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title} !`)
    }
}

const myVideo = new Video('Titanic', 'Meryl', '10800')
myVideo.watch()

const myVideo2 = new Video('Very bad trip', 'John', '7200')
myVideo2.watch()

let videos = [
    {
        title: 'Pretty Woman',
        uploader: 'Becky',
        time: 6500
    },
    {
        title: 'Inception',
        uploader: 'Leo',
        time: 8500
    },
    {
        title: 'The Matrix',
        uploader: 'Neo',
        time: 7800
    },
    {
        title: 'The Lion King',
        uploader: 'Simba',
        time: 5100
    },
    {
        title: 'Forrest Gump',
        uploader: 'Jenny',
        time: 7200
    }
];

let films = []
videos.forEach(film => {
    
    let {title, uploader, time} = film
    let myVid = new Video (title, uploader, time)
    films.push(myVid)

})

const [video1, video2, video3, video4, video5] = films //destructuring so i can have access to it
video4.watch() 

// Output : Simba watched all 5100 seconds of The Lion King !