# SaaS Shop: N8N

## Установка
- https://docs.n8n.io/hosting/installation/docker/
- Нужно поместить в папку /home/node/.n8n флоу *.json

## Созданные флоу
- Получение статуса оплаты от сбера и отправка в очередь ```n8n:order_status_changed```:

```http://localhost:5678/webhook/callback/payment/sber?mdOrder=b9cec2b8-cd3c-7d44-b219-b21c647fa097&orderNumber=0987&operation=deposited&status=1```

- Получение события ```order_service:order.debit_soon``` и отправка письма о скором списании средств с карты