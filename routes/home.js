const express = require('express');
const router = express.Router();
const customer = require('../models/Customer');
const order = require('../models/Order');
const pasta = require('../models/Pasta');
const sandwitch = require('../models/Sandwitch');
const burger = require('../models/Burger');
const pizza = require('../models/Pizza');
const starter = require('../models/Starter');
const local = require('../models/Local');
const sooper = require('../models/Sooper');
const sideOrder = require('../models/SideOrder');



//ROUTES FOR NAVIGATION TOWARDS HOME(welcomePage)
router.get('/', (req, res) => {
    res.render('/');
})

// router.get('/sideOrder', (req, res) => {
//     console.log("Inside sandwitch route");
//     res.render('sideOrder');
// })

//----------------SIDEORDER-----------
//Add SideOrder
router.post('/add_sideOrder', (req, res, next)=>{

    const {dealID, dealName, price} = req.body;

    console.log(dealID, dealName, price);

    const uclSideOrder = new sideOrder({
        dealID,
        dealName,
        price
    });
    uclSideOrder.save()
    .then(savedDocument => {
      // handle success
      console.log('Document saved successfully:', savedDocument);
      res.redirect('/sideOrder');
    })
    .catch(error => {
      // handle error
      console.error('Error saving document:', error);
      next(error);
    });
 
});
//View SideOrder
router.get('/sideOrder', (req, res, next) => {
    console.log("inside sideOrder route");
    sideOrder.find({})
        .then(docs => {
            res.render('sideOrder', { sideOrders: docs });
        })
        .catch(err => {
            console.log("Something went wrong while connecting to MongoDB (Can't retrieve Data):", err);
            res.status(500).send("Error retrieving data");
            next(err);
        });
});
//Update SideOrder
router.get('/edit_sideOrder/:id', (req, res, next) => {
    console.log("ID Parameter:", req.params.id)
    sideOrder.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    )
    .then(docs => {
        if (!docs) {
            console.log("Document not found or update failed");
        }
        res.render('edit_sideOrder', { sideOrder: docs });
    })
    .catch(err => {
        console.error("Error during findOneAndUpdate operation", err);
        //res.status(500).send("Internal server error");
        next(err);
    });
})
router.post('/edit_sideOrder/:id', (req, res, next)=>{
    console.error(req.body); 
    sideOrder.findByIdAndUpdate(
        {_id: req.params.id},
        req.body
    )
    .then(docs =>{
        console.log("Data successfully updated");
        res.redirect('/sideOrder');
    })
    .catch(err =>{
        console.log("Something went wrong to update your data");
        next(err);
    });
});
//Delete SideOrder
router.get('/delete_sideOrder/:id',  (req, res, next)=>{
    sideOrder.findByIdAndDelete({_id: req.params.id})
    .then(docs =>{
        console.log("Data successfully deleted");
        res.redirect('/sideOrder');
    })
    .catch(err =>{
        console.log("Something went wrong to delete your data");
        next(err);
    })
});
//----------------SOOPER---------------
//Add Sooper
router.post('/add_sooper', (req, res, next)=>{

    const {dealID, dealName, price} = req.body;

    console.log(dealID, dealName, price);

    const uclSooper = new sooper({
        dealID,
        dealName,
        price
    });
    uclSooper.save()
    .then(savedDocument => {
      // handle success
      console.log('Document saved successfully:', savedDocument);
      res.redirect('/sooper');
    })
    .catch(error => {
      // handle error
      console.error('Error saving document:', error);
      next(error);
    });
 
});
//View Sooper
router.get('/sooper', (req, res, next) => {
    console.log("inside local route");
    sooper.find({})
        .then(docs => {
            res.render('sooper', { soopers: docs });
        })
        .catch(err => {
            console.log("Something went wrong while connecting to MongoDB (Can't retrieve Data):", err);
            res.status(500).send("Error retrieving data");
            next(err);
        });
});
//Update Sooper
router.get('/edit_sooper/:id', (req, res, next) => {
    console.log("ID Parameter:", req.params.id)
    sooper.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    )
    .then(docs => {
        if (!docs) {
            console.log("Document not found or update failed");
        }
        res.render('edit_sooper', { sooper: docs });
    })
    .catch(err => {
        console.error("Error during findOneAndUpdate operation", err);
        //res.status(500).send("Internal server error");
        next(err);
    });
})
router.post('/edit_sooper/:id', (req, res, next)=>{
    console.error(req.body); 
    sooper.findByIdAndUpdate(
        {_id: req.params.id},
        req.body
    )
    .then(docs =>{
        console.log("Data successfully updated");
        res.redirect('/sooper');
    })
    .catch(err =>{
        console.log("Something went wrong to update your data");
        next(err);
    });
});
//Delete Sooper
router.get('/delete_sooper/:id',  (req, res, next)=>{
    sooper.findByIdAndDelete({_id: req.params.id})
    .then(docs =>{
        console.log("Data successfully deleted");
        res.redirect('/sooper');
    })
    .catch(err =>{
        console.log("Something went wrong to delete your data");
        next(err);
    })
});
//----------------LOCAL----------------
//Add Local
router.post('/add_local', (req, res, next)=>{

    const {dealID, dealName, price} = req.body;

    console.log(dealID, dealName, price);

    const uclLocal = new local({
        dealID,
        dealName,
        price
    });
    uclLocal.save()
    .then(savedDocument => {
      // handle success
      console.log('Document saved successfully:', savedDocument);
      res.redirect('/local');
    })
    .catch(error => {
      // handle error
      console.error('Error saving document:', error);
      next(error);
    });
 
});
//View Local
router.get('/local', (req, res, next) => {
    console.log("inside local route");
    local.find({})
        .then(docs => {
            res.render('local', { locals: docs });
        })
        .catch(err => {
            console.log("Something went wrong while connecting to MongoDB (Can't retrieve Data):", err);
            res.status(500).send("Error retrieving data");
            next(err);
        });
});
//Update Local
router.get('/edit_local/:id', (req, res, next) => {
    console.log("ID Parameter:", req.params.id)
    local.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    )
    .then(docs => {
        if (!docs) {
            console.log("Document not found or update failed");
        }
        res.render('edit_local', { local: docs });
    })
    .catch(err => {
        console.error("Error during findOneAndUpdate operation", err);
        //res.status(500).send("Internal server error");
        next(err);
    });
})
router.post('/edit_local/:id', (req, res, next)=>{
    console.error(req.body); 
    local.findByIdAndUpdate(
        {_id: req.params.id},
        req.body
    )
    .then(docs =>{
        console.log("Data successfully updated");
        res.redirect('/local');
    })
    .catch(err =>{
        console.log("Something went wrong to update your data");
        next(err);
    });
});
//Delete Local
router.get('/delete_local/:id',  (req, res, next)=>{
    local.findByIdAndDelete({_id: req.params.id})
    .then(docs =>{
        console.log("Data successfully deleted");
        res.redirect('/local');
    })
    .catch(err =>{
        console.log("Something went wrong to delete your data");
        next(err);
    })
});
//----------------STARTER--------------
//Add Starter
router.post('/add_starter', (req, res, next)=>{

    const {dealID, dealName, price} = req.body;

    console.log(dealID, dealName, price);

    const uclStarter = new starter({
        dealID,
        dealName,
        price
    });
    uclStarter.save()
    .then(savedDocument => {
      // handle success
      console.log('Document saved successfully:', savedDocument);
      res.redirect('/starter');
    })
    .catch(error => {
      // handle error
      console.error('Error saving document:', error);
      next(error);
    });
 
});
//View Starter
router.get('/starter', (req, res, next) => {
    console.log("inside starter route");
    starter.find({})
        .then(docs => {
            res.render('starter', { starters: docs });
        })
        .catch(err => {
            console.log("Something went wrong while connecting to MongoDB (Can't retrieve Data):", err);
            res.status(500).send("Error retrieving data");
            next(err);
        });
});
//Update Starter
router.get('/edit_starter/:id', (req, res, next) => {
    console.log("ID Parameter:", req.params.id)
    starter.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    )
    .then(docs => {
        if (!docs) {
            console.log("Document not found or update failed");
        }
        res.render('edit_starter', { starter: docs });
    })
    .catch(err => {
        console.error("Error during findOneAndUpdate operation", err);
        //res.status(500).send("Internal server error");
        next(err);
    });
})
router.post('/edit_starter/:id', (req, res, next)=>{
    console.error(req.body); 
    starter.findByIdAndUpdate(
        {_id: req.params.id},
        req.body
    )
    .then(docs =>{
        console.log("Data successfully updated");
        res.redirect('/starter');
    })
    .catch(err =>{
        console.log("Something went wrong to update your data");
        next(err);
    });
});
//Delete Starter
router.get('/delete_starter/:id',  (req, res, next)=>{
    starter.findByIdAndDelete({_id: req.params.id})
    .then(docs =>{
        console.log("Data successfully deleted");
        res.redirect('/starter');
    })
    .catch(err =>{
        console.log("Something went wrong to delete your data");
        next(err);
    })
});

//----------------PIZZA---------------
//Add Pizza
router.post('/add_pizza', (req, res, next)=>{

    const {dealID, dealName, coldDrink, spiceLevel, price} = req.body;

    console.log(dealID, dealName, coldDrink, spiceLevel, price);

    const uclPizza = new pizza({
        dealID,
        dealName,
        coldDrink,
        spiceLevel,
        price
    });
    uclPizza.save()
    .then(savedDocument => {
      // handle success
      console.log('Document saved successfully:', savedDocument);
      res.redirect('/pizza');
    })
    .catch(error => {
      // handle error
      console.error('Error saving document:', error);
      next(error);
    });
 
});
//View Pizza
router.get('/pizza', (req, res, next) => {
    console.log("inside burger route");
    pizza.find({})
        .then(docs => {
            res.render('pizza', { pizzas: docs });
        })
        .catch(err => {
            console.log("Something went wrong while connecting to MongoDB (Can't retrieve Data):", err);
            res.status(500).send("Error retrieving data");
            next(err);
        });
});
//Update Pizza
router.get('/edit_pizza/:id', (req, res, next) => {
    console.log("ID Parameter:", req.params.id)
    pizza.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    )
    .then(docs => {
        if (!docs) {
            console.log("Document not found or update failed");
        }
        res.render('edit_pizza', { pizza: docs });
    })
    .catch(err => {
        console.error("Error during findOneAndUpdate operation", err);
        //res.status(500).send("Internal server error");
        next(err);
    });
})
router.post('/edit_pizza/:id', (req, res, next)=>{
    console.error(req.body); 
    pizza.findByIdAndUpdate(
        {_id: req.params.id},
        req.body
    )
    .then(docs =>{
        console.log("Data successfully updated");
        res.redirect('/pizza');
    })
    .catch(err =>{
        console.log("Something went wrong to update your data");
        next(err);
    });
});
//Delete burger
router.get('/delete_pizza/:id',  (req, res, next)=>{
    pizza.findByIdAndDelete({_id: req.params.id})
    .then(docs =>{
        console.log("Data successfully deleted");
        res.redirect('/pizza');
    })
    .catch(err =>{
        console.log("Something went wrong to delete your data");
        next(err);
    })
});
//----------------BURGER--------------
//Add Burger
router.post('/add_burger', (req, res, next)=>{

    const {dealID, dealName, coldDrink, spiceLevel, price} = req.body;

    console.log(dealID, dealName, coldDrink, spiceLevel, price);

    const uclBurger = new burger({
        dealID,
        dealName,
        coldDrink,
        spiceLevel,
        price
    });
    uclBurger.save()
    .then(savedDocument => {
      // handle success
      console.log('Document saved successfully:', savedDocument);
      res.redirect('/burger');
    })
    .catch(error => {
      // handle error
      console.error('Error saving document:', error);
      next(error);
    });
 
});
//View Burger
router.get('/burger', (req, res, next) => {
    console.log("inside burger route");
    burger.find({})
        .then(docs => {
            res.render('burger', { burgers: docs });
        })
        .catch(err => {
            console.log("Something went wrong while connecting to MongoDB (Can't retrieve Data):", err);
            res.status(500).send("Error retrieving data");
            next(err);
        });
});
//Update Burger
router.get('/edit_burger/:id', (req, res, next) => {
    console.log("ID Parameter:", req.params.id)
    burger.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    )
    .then(docs => {
        if (!docs) {
            console.log("Document not found or update failed");
        }
        res.render('edit_burger', { burger: docs });
    })
    .catch(err => {
        console.error("Error during findOneAndUpdate operation", err);
        //res.status(500).send("Internal server error");
        next(err);
    });
})
router.post('/edit_burger/:id', (req, res, next)=>{
    console.error(req.body); 
    burger.findByIdAndUpdate(
        {_id: req.params.id},
        req.body
    )
    .then(docs =>{
        console.log("Data successfully updated");
        res.redirect('/burger');
    })
    .catch(err =>{
        console.log("Something went wrong to update your data");
        next(err);
    });
});
//Delete burger
router.get('/delete_burger/:id',  (req, res, next)=>{
    burger.findByIdAndDelete({_id: req.params.id})
    .then(docs =>{
        console.log("Data successfully deleted");
        res.redirect('/burger');
    })
    .catch(err =>{
        console.log("Something went wrong to delete your data");
        next(err);
    })
});
//------------------SANDWITCH------------
//Add Sandwitch
router.post('/add_sandwitch', (req, res, next)=>{
    // const name = req.body.name;
    // const players = req.body.players;
    // const coach = req.body.coach;
// // Same as above
    const {dealID, dealName, coldDrink, spiceLevel, price} = req.body;

    console.log(dealID, dealName, coldDrink, spiceLevel, price);

    const uclSandwitch = new sandwitch({
        dealID,
        dealName,
        coldDrink,
        spiceLevel,
        price
    });
    uclSandwitch.save()
    .then(savedDocument => {
      // handle success
      console.log('Document saved successfully:', savedDocument);
      res.redirect('/sandwitch');
    })
    .catch(error => {
      // handle error
      console.error('Error saving document:', error);
      next(error);
    });
 
});
//View Sandwitch
router.get('/sandwitch', (req, res, next) => {
    console.log("inside sandwitch route");
    sandwitch.find({})
        .then(docs => {
            res.render('sandwitch', { sandwitches: docs });
        })
        .catch(err => {
            console.log("Something went wrong while connecting to MongoDB (Can't retrieve Data):", err);
            res.status(500).send("Error retrieving data");
            next(err);
        });
});
//Update Sandwitch
router.get('/edit_sandwitch/:id', (req, res, next) => {
    console.log("ID Parameter:", req.params.id)
    sandwitch.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    )
    .then(docs => {
        if (!docs) {
            console.log("Document not found or update failed");
            //return res.status(404).send("Club not found");
        }
        res.render('edit_sandwitch', { sandwitch: docs });
    })
    .catch(err => {
        console.error("Error during findOneAndUpdate operation", err);
        //res.status(500).send("Internal server error");
        next(err);
    });
})
router.post('/edit_sandwitch/:id', (req, res, next)=>{
    console.error(req.body); 
    sandwitch.findByIdAndUpdate(
        {_id: req.params.id},
        req.body
    )
    .then(docs =>{
        console.log("Data successfully updated");
        res.redirect('/sandwitch');
    })
    .catch(err =>{
        console.log("Something went wrong to update your data");
        next(err);
    });
});
//Delete Sandwitch
router.get('/delete_sandwitch/:id',  (req, res, next)=>{
    sandwitch.findByIdAndDelete({_id: req.params.id})
    .then(docs =>{
        console.log("Data successfully deleted");
        res.redirect('/sandwitch');
    })
    .catch(err =>{
        console.log("Something went wrong to delete your data");
        next(err);
    })
})
//-------------------PASTA----------------
//Add pasta
router.post('/add_pasta', (req, res, next)=>{
    // const name = req.body.name;
    // const players = req.body.players;
    // const coach = req.body.coach;
// // Same as above
    const {dealID, dealName, coldDrink, spiceLevel, price} = req.body;

    console.log(dealID, dealName, coldDrink, spiceLevel, price);

    const uclPasta = new pasta({
        dealID,
        dealName,
        coldDrink,
        spiceLevel,
        price
    });
    uclPasta.save()
    .then(savedDocument => {
      // handle success
      console.log('Document saved successfully:', savedDocument);
      res.redirect('/pasta');
    })
    .catch(error => {
      // handle error
      console.error('Error saving document:', error);
      next(error);
    });
 
});
//View Pasta
router.get('/pasta', (req, res, next) => {
    console.log("inside pasta route");
    pasta.find({})
        .then(docs => {
            res.render('pasta', { pastas: docs });
        })
        .catch(err => {
            console.log("Something went wrong while connecting to MongoDB (Can't retrieve Data):", err);
            res.status(500).send("Error retrieving data");
            next(err);
        });
});
//Update Pasta
router.get('/edit_pasta/:id', (req, res, next) => {
    console.log("ID Parameter:", req.params.id)
    pasta.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    )
    .then(docs => {
        if (!docs) {
            console.log("Document not found or update failed");
            //return res.status(404).send("Club not found");
        }
        res.render('edit_pasta', { pasta: docs });
    })
    .catch(err => {
        console.error("Error during findOneAndUpdate operation", err);
        //res.status(500).send("Internal server error");
        next(err);
    });
})
router.post('/edit_pasta/:id', (req, res, next)=>{
    console.error(req.body); 
    pasta.findByIdAndUpdate(
        {_id: req.params.id},
        req.body
    )
    .then(docs =>{
        console.log("Data successfully updated");
        res.redirect('/pasta');
    })
    .catch(err =>{
        console.log("Something went wrong to update your data");
        next(err);
    });
});
//Delete Pasta
router.get('/delete_pasta/:id',  (req, res, next)=>{
    pasta.findByIdAndDelete({_id: req.params.id})
    .then(docs =>{
        console.log("Data successfully deleted");
        res.redirect('/pasta');
    })
    .catch(err =>{
        console.log("Something went wrong to delete your data");
        next(err);
    })
})

//------------------ORDER------------------------
//Add order
router.post('/add_order', (req, res, next)=>{
    // const name = req.body.name;
    // const players = req.body.players;
    // const coach = req.body.coach;
// // Same as above
    const {customer_name, address, item, date} = req.body;

    console.log(customer_name, address, item, date);

    const uclOrder = new order({
        Customer :customer_name,
        Address :address,
        Item_Ordered:item,
        Date:date
    });
    uclOrder.save()
    .then(savedDocument => {
      // handle success
      console.log('Document saved successfully:', savedDocument);
      res.redirect('/order');
    })
    .catch(error => {
      // handle error
      console.error('Error saving document:', error);
      next(error);
    });
 
});
//View Order
router.get('/order', (req, res, next) => {
    console.log("inside order route");
    order.find({})
        .then(docs => {
            res.render('order', { orders: docs });
        })
        .catch(err => {
            console.log("Something went wrong while connecting to MongoDB (Can't retrieve Data):", err);
            res.status(500).send("Error retrieving data");
            next(err);
        });
});
//Update Order
router.get('/edit_order/:id', (req, res, next) => {
    console.log("ID Parameter:", req.params.id)
    order.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    )
    .then(docs => {
        if (!docs) {
            console.log("Document not found or update failed");
            //return res.status(404).send("Club not found");
        }
        res.render('edit_order', { order: docs });
    })
    .catch(err => {
        console.error("Error during findOneAndUpdate operation", err);
        //res.status(500).send("Internal server error");
        next(err);
    });
})
router.post('/edit_order/:id', (req, res, next)=>{
    console.error(req.body); 
    order.findByIdAndUpdate(
        {_id: req.params.id},
        req.body
    )
    .then(docs =>{
        console.log("Data successfully updated");
        res.redirect('/order');
    })
    .catch(err =>{
        console.log("Something went wrong to update your data");
        next(err);
    });
});

//Delete Order
router.get('/delete_order/:id',  (req, res, next)=>{
    order.findByIdAndDelete({_id: req.params.id})
    .then(docs =>{
        console.log("Data successfully deleted");
        res.redirect('/order');
    })
    .catch(err =>{
        console.log("Something went wrong to delete your data");
        next(err);
    })
})

//-------------------Customer--------------------------

// router.get('/', (req, res, next)=>{
//     res.send('Express router is working');
// })


// ROUTE FOR READ // DUE TO UPDATES NOT SUPPORTED TODAY(DUE TO CALL BACK FUNCTION)
// router.get('/', (req, res, next)=>{
//     club.find((err, docs)=>{
//         res.render('home', {club: docs});
//     }).catch(err=>{
//         console.log("Something went wrong while connecting to mongoDB(Can't retrive Data)");
//     })


// })

// // ROUTE FOR READ // USABLE TODAY
router.get('/customer', (req, res, next) => {
    console.log("Inside home route");
    customer.find({})
        .then(docs => {
            res.render('customer', { customers: docs });
        })
        .catch(err => {
            console.log("Something went wrong while connecting to MongoDB (Can't retrieve Data):", err);
            res.status(500).send("Error retrieving data");
            next(err);
        });
});

//DOES THE SAME JOB AS ABOVE BUT METHOD IS DIFFERENT
// router.get('/', async (req, res, next) => {
//     try {
//         const docs = await club.find({});
//         res.render('home', { club: docs });
//     } catch (err) {
//         console.log("Something went wrong while connecting to MongoDB (Can't retrieve Data):", err);
//         res.status(500).send("Error retrieving data");
//     }
// });



// ROUTE FOR CREATE
router.post('/add_customer', (req, res, next)=>{
    // const name = req.body.name;
    // const players = req.body.players;
    // const coach = req.body.coach;
// // Same as above
    const {name, city, town, contact, email} = req.body;

    console.log(name, city, town, contact, email);

    const uclCustomer = new customer({
        //name:name
        name,
        city,
        town,
        contact,
        email
    });
    // uclClub.save((err)=>{
    //     if(err){
    //         console.log("Something went wrong to save data to database");
    //     }else{
    //         console.log("Data recorded successfully");
    //     }

    // })
    uclCustomer.save()
      .then(savedDocument => {
        // handle success
        console.log('Document saved successfully:', savedDocument);
        res.redirect('/customer');
      })
      .catch(error => {
        // handle error
        console.error('Error saving document:', error);
        next(error);
      });
   
});

//ROUTE TO SHOW UPDATE ELEMENT
// router.get('/edit/:id', (req, res, next)=>{
//     console.log(req.params.id);
//     console.log(req.body);
//     club.findOneAndUpdate({_id: req.params.id}, req.body, {new:true}, (err, docs)=>{
//         if(err){
//             console.log("Can't retrive data and edit because of some database problem");
//         }else{
//             res.render('edit', {club: docs});
//         }
//     })


// })


router.get('/edit_customer/:id', (req, res, next) => {
    console.log("ID Parameter:", req.params.id)
    customer.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    )
    .then(docs => {
        if (!docs) {
            console.log("Document not found or update failed");
            //return res.status(404).send("Club not found");
        }
        res.render('edit_customer', { customer: docs });
    })
    .catch(err => {
        console.error("Error during findOneAndUpdate operation", err);
        //res.status(500).send("Internal server error");
        next(err);
    });
});
//ROUTE TO UPDATE ELEMENT
// router.post('/edit/:id', (req, res, next)=>{
//     club.findByIdAndUpdate({_id: req.params.id}, req.body, (err, docs)=>{
//         if(err){
//             console.log("Something went wrong to update your data");
//             next(err);
//         }else{
//             res.redirect('/');
//         }
//     })
// })

router.post('/edit_customer/:id', (req, res, next)=>{
    console.log(req.body);
    customer.findByIdAndUpdate(
        {_id: req.params.id},
        req.body
    )
    .then(docs =>{
        console.log("Data successfully updated");
        res.redirect('/customer');
    })
    .catch(err =>{
        console.log("Something went wrong to update your data");
        next(err);
    });
});

//ROUTE TO DELETE ELEMENT
//router.get('/delete/:id', (req, res, next)=>{
//     club.findByIdAndDelete({_id: req.params.id}, (err, docs)=>{
//         if(err){
//             console.log("Something went wrong to delete data");
//             next(err);
//         }else{
//             console.log("Data successfully deleted");
//             res.redirect('/');
//         }
//     });
// });

router.get('/delete_customer/:id',  (req, res, next)=>{
    customer.findByIdAndDelete({_id: req.params.id})
    .then(docs =>{
        console.log("Data successfully deleted");
        res.redirect('/customer');
    })
    .catch(err =>{
        console.log("Something went wrong to delete your data");
        next(err);
    })
})
module.exports = router;