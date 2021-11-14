const express = require('express');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
   //We get this information from the form that the user submits
   const {title, description} = req.body

   // we grab the dynamic id from the url
   const {drones} = req.params

   // Find that specific todo by id and update it
   TodoModel.findByIdAndUpdate(drones, {title, description})
       .then(() => {
           res.redirect('/')
       })
       .catch(() => {
           next('No drones for you')
       })

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const {todoId} = req.params
    drones.findById(todoId)
        .then((todo) => {
            //render some HBS file with that todo information
            res.render('drones/create-form.hbs', {drones})
        })
        .catch(() => {
            next('All the drones flew away')
        })

});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
