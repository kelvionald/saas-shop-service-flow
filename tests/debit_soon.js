const rabbitSender = require("./rabbitSender");

const eventName = 'order_service:order.debit_soon'
const message = {
    uuid: 'b044cd2e-cb7f-4a8d-907d-2580a42207a1',
    data: {
        user: {
            user_id: 'a044cd2e-cb7f-4a8d-907d-2580a42207a2',
            email: 'agmpcu@mailto.plus',
            telephone: '71236123456',
            firstname: 'Alex',
            lastname: 'Koh',
        },
        order: {
            "order_id": 3,
            "user_id": "b044cd2e-cb7f-4a8d-907d-2580a42207a1",
            "external_order_id": "cc8d09b9-ae35-73e7-91db-5a37647fa097",
            "card_binding_id": null,
            "tariff_variant_id": 1,
            "discount": 0,
            "total_amount": 1000,
            "workspace_name": "google985f5bbac819431ca0ac",
            "is_change_license_count": true,
            "is_change_tariff": null,
            "licenses_count": 9,
            "licenses_count_delta": 1,
            "payment_method": "bank_card",
            "payment_status": "success",
            "need_change_workspace": false,
            "requisites": "{\n            \"organization_name\": \"ООО \\\"Хомячки\\\"\",\n            \"organization_address\": \"424006, РФ, Республика Марий Эл, г. Йошкар-Ола, улица Карла Маркса, дом 109б кабинет 506\",\n            \"ogrn\": \"1027700132195\",\n            \"inn\": \"7707083893\",\n            \"kpp\": \"773601001\"\n          }\n        ",
            "act_document_id": null,
            "offer_invoice_document_id": 5,
            "work_at": "2022-04-21T11:45:18.716Z",
            "paid_at": "2022-04-21T11:45:20.527Z",
            "act_required": null,
            "createdAt": "2022-04-21T11:45:19.936Z",
            "updatedAt": "2022-04-21T11:45:20.527Z",
            "tariff_variant": {
                "id": 1,
                "tariff_id": 1,
                "ops_json": "{\"id\":1}",
                "period": 30,
                "discount": 0,
                "display_name": "1 месяц",
                "price": 1000,
                "total_price": 1000,
                "tariff": {
                    "id": 1,
                    "product_id": 1,
                    "name": "Начальный",
                    "order": 1,
                    "description": "фича 1",
                    "maximum_licenses_count": 10,
                    "product": {
                        "id": 1,
                        "name": "Строй контроль123",
                        "createdAt": "2022-04-11T12:02:44.673Z",
                        "updatedAt": "2022-04-15T15:23:12.013Z"
                    }
                }
            },
            "act_document": null,
            "offer_invoice_document": {
                "document_id": 5,
                "directory": "offer_invoice",
                "filename": "58cfea22-07c2-427f-a198-75df1d871003.docx",
                "status": "signed",
                "createdAt": "2022-04-21T11:45:20.170Z",
                "updatedAt": "2022-04-21T11:45:20.170Z"
            }
        }
    },
}

rabbitSender(eventName, message)