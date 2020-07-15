---
slug: "/blog/nextjs-and-express"
title: "Next.js & Express"
date: "2020-07-04"
tags: "nextjs,express"
---

# Next.js and Express

I've been working Nextjs for the past few months, and really enjoy the framework and the ability to leverage React server side - but there is some areas where you need a bit more than the Next server.

Getting Started

1. Install Express as part of the project

```bash
npm install --save express
```

2. Create a Express server file `ssr-server.js`

```javascsript
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
```

## Whats Going On?

1. require both Express and Next libraries. 
1. create an instance of the Next library passing in a Boolean based on the environment which detects whether to launch Next.js in dev mode or not.
1. call the getRequestHandler() function, 
1. prepare the app. The prepare function returns a promise, so we can do a .then pipe to it. In the .then call, we initiate Express, and we use a wildcard route to catch all routes and return it to the handler function.

Now update your npm dev script to:

{ "scripts": { "dev": "node ssr-server.js" } }
If you run npm run dev, your page would spin up looking the same as it was. So how is this helpful if I end up getting the same result as I got earlier? Let me show you.

While what we have done above does not seem to add much difference, it makes sense when we add more routes as it helps to achieve clean URLs. It’s worth noting that, if implemented in Next, this would return 404 pages (when not navigated by a Next link i.e if I manually put in the URL in a browser or I was directed from another site).

Look at this route below. This helps us to achieve clean URLs as discussed in the paragraph above:

server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { id: req.params.id } 
    app.render(req, res, actualPage, queryParams)
})
By default, it’s easy to use query strings in Next, but as usual, you want to keep your URLs clean, so you opt for something like: /p/2 rather than /p?id=2.

In the code above, we use the popular express routing to define such routes, then we pass the page that should be loaded and the id as a query param to the main Next app. Here the call /p?id=2 happens under the hood where no one can see what is going on.

The regular user sees the URL as /p/2/.

Serving and exporting your app
When you’ve finished building the Next app, the question becomes: “How do I serve it in production?”

Easy.

First, we have to build the app. Then we can serve it. Luckily, Next provides an easy way out. Remember the script section we had in the package.json? We had it all set up there.

All we need to do is:

#build the app
npm run build
#serve the app
npm run serve
Wow, that’s cool, what if you want to export the app as a static HTML file? Great question. First, create a file called next.config.js in the root of your app and add the following content:

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  }
}
Note: In the setup above, only the index page would be exported as it is the only route we have specified in the PathMap.

What if we want to add more pages? Amigos, that’s a good question.

You can add a new key and value in the return object of the PathMap like '/about': { page: '/about' }.

Then add the following to the scripts section of your package.json:

"export": "next export"
Finally, build and export your app.

#build app
npm run build
#export app
npm run export

## Resources
https://blog.logrocket.com/how-to-build-a-server-rendered-react-app-with-next-express-d5a389e7ab2f/