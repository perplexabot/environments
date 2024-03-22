### run the server
```
    $ docker build -t angular-test . && docker run --rm -it -p 8080:8080 -v ${PWD}/testing/:/usr/src/ angular-test
```

### access
```
    http://localhost:8080/
```

### new angular env
```
    $ docker build -t angular-test . && docker run --rm -it -p 8080:8080 --entrypoint /bin/bash -v ${PWD}/testing/:/usr/src/ angular-test
    $ [in_container] ng new
```
