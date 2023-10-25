This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
- CRUD files are created.
- used prisma and prisma client.

First, run the development server:

```bash
npm run dev
```
## Check API on postman
- Create a .env file and put the DB postgre url.
- Open Postman and go to 'http://localhost:3000/api/user/select' (insert/update/delete).
- Input ID and necessary attributes in the body and set the method to 'POST'.
- Click send, and the result will be shown.

## Check next auth 
- go to this url for checking the authentication: http://localhost:3000/api/auth/signin


Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
