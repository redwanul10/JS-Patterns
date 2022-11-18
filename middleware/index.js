import compose from "./compose";

const injectMiddleware = (method, middlewares) => {
  return compose(middlewares)(method);
};

var middleware1 = (next) => (msg) => {
  console.log("from midleware 1 msg is ", msg);
  next(msg);
};

var middleware2 = (next) => (msg) => {
  setTimeout(() => {
    console.log("from midleware 2 after 5 sec msg is ", msg);
    next(msg);
  }, 5000);
};

var print = (msg) => console.log("from Print my msg is ", msg);

print = injectMiddleware(print, [middleware1, middleware2]);

print("hello world");
// "from midleware 1 msg is hello world"
// "from midleware 2 after 5 sec msg is hello world"
// "from Print my msg is hello world"
