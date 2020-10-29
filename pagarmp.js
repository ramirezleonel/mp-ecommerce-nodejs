var mercadopago = require('mercadopago');

var url_base = 'https://ramirezleo-mp-commerce-nodejs.herokuapp.com'
module.exports = (req,res) => {
    mercadopago.configure({
        integrator_id: 'dev_24c65fb163bf11ea96500242ac130004',
        access_token: 'APP_USR-6317427424180639-042414-47e969706991d3a442922b0702a0da44-469485398'
    });
    
    var preference = {
        payer: {
            "name": "Lalo",
            "surname": "Landa",
            "email": "test_user_63274575@testuser.com",
            "address": {
                "street_name": "False",
                "street_number": 123,
                "zip_code": "1111"
            },
            "phone": {
                "area_code": "11",
                "number": "22223333"
            },
        },
        "auto_return": "approved",
        "back_urls": {
            "success": url_base +"/success",
            "pending": url_base +"/pending",
            "failure": url_base +"/failure",
        },
        "notification_url" : url_base+"/notificaciones",
        "external_reference": "ramirezleonel0@gmail.com",
        "payment_methods": {
           "excluded_payment_methods": [
                {
                    "id": "amex"
                },
            ],
            "excluded_payment_types": [
                {
                    "id": "atm"
                }
            ],
            "installments": 6,
        },
        "items": [
            {
                "id": 1234,
                "title": req.body.title,
                "picture_url": req.body.img,
                "description": "Dispositivo móvil de Tienda e-commerce",
                "quantity": 1,
                "unit_price": parseInt(req.body.price) 
            }
        ],
};
    
    
    mercadopago.preferences.create(preference).then(function(Response){
        // Este valor reemplazará el string "<%= global.id %>" en tu HTML
        console.log(Response.body);
        res.redirect(Response.body.init_point)
        }).catch(function(error){
            console.log(error);
        });
}


