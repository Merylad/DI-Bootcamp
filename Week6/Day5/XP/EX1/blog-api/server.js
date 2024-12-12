const express = require ('express')

const app = express ()
app.use(express.json())

const PORT = 3030

app.listen(PORT, ()=> {
    console.log(`Listenning on port ${PORT}`)
})

const blogPosts = [
    {
      id: 1,
      title: "Understanding Mental Health",
      content: "Mental health is just as important as physical health. Learn about ways to support your well-being."
    },
    {
      id: 2,
      title: "5 Tips for Stress Management",
      content: "Stress can be overwhelming. Discover five effective strategies to manage stress in daily life."
    },
    {
      id: 3,
      title: "The Importance of a Balanced Diet",
      content: "Eating a balanced diet contributes to both physical and mental health. Explore tips to maintain healthy eating habits."
    },
    {
      id: 4,
      title: "Top 10 Exercises for Fitness",
      content: "Stay fit and healthy with these top 10 exercises that can be done at home or at the gym."
    },
    {
      id: 5,
      title: "How to Create a Budget Plan",
      content: "Managing your finances effectively starts with a budget plan. Learn how to create one that works for you."
    }
  ];

app.get ('/posts', (req, res)=>{
    res.send(blogPosts)
})

app.get('/posts/:id', (req,res)=>{
    const {id} = req.params
    const post = blogPosts.find(item => item.id == id)
    if (post){
        res.send(post)
    } else {
        res.sendStatus(404)
    }
}
)

app.post("/posts", (req, res) => {
    const newPost = {
      id: blogPosts.length + 1,
      title: req.body.title,
      content: req.body.content,
    };
    blogPosts.push(newPost);
    res.status(201).json(newPost);
  });

app.put('/posts/:id', (req,res)=>{
    const {id} = req.params
    const index = blogPosts.findIndex(item => item.id == id)
    if (index === -1) {
        return res.status(404).send("Post not found");
    } else {
        const updatedPost = {
            id: blogPosts[index].id,
            title: req.body.title,
            content: req.body.content,
          };
        blogPosts[index] = updatedPost;
        res.status(200).json("Post updated");
    }
   
})

app.delete("/posts/:id", (req, res) => {
    const {id} = req.params;
    const index = blogPosts.findIndex((item) => item.id == id);
    if (index === -1) {
      return res.status(404).send("Post not found");
    }
    blogPosts.splice(index, 1);
    res.status(200).json("Post deleted");
    console.log(blogPosts)
  });





