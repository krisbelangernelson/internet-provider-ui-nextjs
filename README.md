# internet-provider-ui

This is the service provider front-end for a little demonstration of my abilities to develop applications. They mock Internet service provider for customers to order Internet services.

Here are the other applications in this service provider project. These backends are required for the UI to perform its function of allowing customers to order.

- https://github.com/krisbelangernelson/internet-services-api
- https://github.com/krisbelangernelson/internet-customers-be
- https://github.com/krisbelangernelson/internet-orders-be

Tech used:
- Typescript React with Next.js
- TailwindCSS for styling
- JWT authentication

## Dev

`pnpm run dev`

## Deployment

Deployed on vercel: https://internet-provider-ui-nextjs.vercel.app/


## Payment testing
- From https://docs.stripe.com/testing

Testing interactively

When testing interactively, use a card number, such as 4242 4242 4242 4242. Enter the card number in the Dashboard or in any payment form.

- Use a valid future date, such as 12/34.
- Use any three-digit CVC (four digits for American Express cards).
- Use any value you like for other form fields.
