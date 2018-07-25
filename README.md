# play-vue-ssr
a vue ssr demo project


Have a try
```
npm run build
npm run start
```

![](https://cloud.githubusercontent.com/assets/499550/17607895/786a415a-5fee-11e6-9c11-45a2cfdf085c.png)

# level 1 demo

```
git checkout level1
npm install
npm run start
```

Features:
1. index.html returned by server is pre-rendered.
2. client-side hydration works. client-bundle take charge the page in the browser.


# level 2 demo

```
git checkout level2
```

Incremental Features:
* vue-router (sync component)

# level 3 demo

```
git checkout level3
```
Incremental Features:
* vue-router (async component)

# level 4 demo

```
git checkout level4
```
Incremental Features:
* pre-load data in server side with vuex
* serialize the store to index.html
* init client side store with the serialize data, then hydrate.

# level 5 demo
```
get checkout level5
```
Incremental Features:
* handle the client side data fetch
