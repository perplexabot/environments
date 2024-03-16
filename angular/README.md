### run the server
```
    $ docker build -t angular-test . && docker run --rm -it -p 8080:8080 -v ${PWD}/testing/:/usr/src/ angular-test
```

And access at `http://localhost:8080/`
