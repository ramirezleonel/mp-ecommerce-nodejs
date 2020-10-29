const mercadopago = require ('mercadopago');
var fs = require('fs');

module.exports = (req,res) => {
// Agrega credenciales

  mercadopago.configure({
    integrator_id: 'dev_24c65fb163bf11ea96500242ac130004',
    access_token: 'APP_USR-6317427424180639-042414-47e969706991d3a442922b0702a0da44-469485398'
  });
  
   console.log(req.body);
   res.sendStatus(200);
   fs.appendFile('notificacion.txt', req.body, function (err) {
    if (err) return console.log(err);
    console.log('Appended!');
});

    switch (req.body.type) {
        case 'payment':
       mercadopago.payment.findById('https://api.mercadopago.com/v1/payments/'+req.body.id).then(function(Response){})
          break;
        case 'plan':
                mercadopago.payment.findById('https://api.mercadopago.com/v1/plans/'+req.body.id).then(function(Response){})
          break;
        case 'subscription':
               mercadopago.payment.findById('https://api.mercadopago.com/v1/subscriptions/'+req.body.id).then(function(Response){})
          break;
        case 'invoice':
             mercadopago.payment.findById('https://api.mercadopago.com/v1/invoices/'+req.body.id).then(function(Response){})
          break;
      }
   
     
}