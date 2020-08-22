const express = require('express');
const app = express();

const mockUserData = [
    { name: 'Mark' },
    { name: 'Jill' }
]

app.get('/users', function (req, res) {
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })
})
app.get('/g', function (req, res) {
    res.send({
        success: true,
        message: 'successfully got users. Nice!',
        users: gg
    })
})
const gg = [
    { a: "ghghg" },
    { b: "hvgcfx" }
]
app.listen(8000, function () { console.log('server is listening') })
