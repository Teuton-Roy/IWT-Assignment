const express =  require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let userIds = []

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html')
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/register.html')
})

app.post('/register', (req, res) => { 
    const { uname } = req.body;
    const firstName = uname.split(' ')[0];
    const existingIds = userIds.filter((id) => id.startsWith(firstName.toLowerCase()+'.'));
    let highestNumber = 0;
    existingIds.forEach(id => {
        const idNumber = parseInt(id.split('.')[1])
        if (idNumber > highestNumber) {
            highestNumber = idNumber
        }
    });
    let userId = `${firstName.toLowerCase()}.${highestNumber + 1}`;
    userIds.push(userId)
    res.send('Welcome to the club! ' + uname + ' your user id is ' + userId);
})

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})