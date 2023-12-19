const express = require('express');
const cors = require('cors')
const app = express();

// এখানে process.env.PORT use করার কারণ হলো যখন আমরা ‍ server Deploy করবো, যেখানে deploy করবো সেখানে যে Available Port আছে সেখান থেকে Access করবে। 
const port = process.env.PORT || 5000;
app.use(cors());

const users = [
    { id: 1, name: 'Shahin Hossain', email: 'shahinhossain3@hotmail.com' },
    { id: 2, name: 'Jui Akter', email: 'juiakter@gmail.com' },
    { id: 3, name: 'Mim Jolo', email: 'mim.jolo@gmail.com' }
]

app.get('/', (req, res) => {
    res.send('User Management Server is Running')
})

app.get('/users', (req, res) => {
    res.send(users);
})
app.listen(port, () => {
    console.log(`Server is Running on PORT is : ${port}`)
})