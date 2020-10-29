var mercadopago = require('mercadopago');

module.exports = () => {
    mercadopago.configure({
        integrator_id: 'dev_24c65fb163bf11ea96500242ac130004',
        access_token: 'APP_USR-6317427424180639-042414-47e969706991d3a442922b0702a0da44-469485398'
    });
    
    var preference = {
        payer: {
            "id": 471923173,
            "name": "Lalo Landa",
            "email": "test_user_63274575@testuser.com",
            "phone": {
                "area_code": "11",
                "number": "22223333"
            },
            "identification": {
                "type": "DNI",
                "number": "12345678"
            },
            "address": {
                "street_name": "False",
                "street_number": 123,
                "zip_code": "1111"
            }
        },
        "items": [
            {
                "id": "item-ID-1234",
                "title": "Mi producto",
                "currency_id": "MXN",
                "picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
                "description": "Dispositivo móvil de Tienda e-commerce",
                "category_id": "art",
                "quantity": 1,
                "unit_price": 75.76
            }
        ],
};
    
    
    mercadopago.preferences.create(preference).then(function(response){
        // Este valor reemplazará el string "<%= global.id %>" en tu HTML
        console.log(response);
        return response;
        }).catch(function(error){
            return error;
        });
}


