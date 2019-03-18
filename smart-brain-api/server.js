const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('This is working.');
})

app.listen(3000, () => {
  console.log('All systems go');
});

/*

/ --> res = 'this is working'
/signin  --> POST = success/fail
/register  --> POST = return user
/profile/:userId  --> GET = user
/image  --> PUT --> user or count

*/
