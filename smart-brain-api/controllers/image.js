const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: 'ac85a285e6c5470e827157f21ef9b61d'
});

const handleApiCall = (req, res) => {
  app.models.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
  .then(data => {
    res.json(data);
  })
  .catch(err => res.status(400).json('failed api call'))
}

const handleImage = (req, res, db) => {
  const { id } = req.body;
  db('users').where('id', '=', id)
  .increment('entries', 1)
  .returning('entries')
  .then(entries => {
    res.json(entries[0]);
  })
  .catch(err => res.status(400).json('unable to get count for entries'))
}

module.exports = {
  handleImage: handleImage,
  handleApiCall: handleApiCall
}
