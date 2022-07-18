# UseJsonFetch

## Hooks, Context API

`useJsonFetch` is a custom hook that helps to make http-requests using `fetch`

That is how you suppose to use `useJsonFetch`.

```javascript
const [data, loading, error] = useJsonFetch(url, opts);
```

Test urls to check the hook:

- GET http://localhost:7070/data - success
- GET http://localhost:7070/error - error 500
- GET http://localhost:7070/loading - loading and then success

To do so you'll also need to use `npm run start` on the `backend` dirrectory.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### In order to check the project, you can run

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
