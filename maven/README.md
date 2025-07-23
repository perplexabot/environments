### drop in env
```
$ ./get-env.sh [optional docker image name - defaults to maven]
```
NOTE: this uses default official maven image from dockerhub, so no users exist, saving and changes to underlying project will from root user, manual chown will need to be applied from outside the env if needed.

### compile (allows for manually sharing .class files)
```
# inside env (after above command)
$ mvn compile
```

### package (compile, run tests and create a .jar)
```
# inside env (after above command)
$ mvn package
```

### install (compile, run tests and create a .jar, and store jar in local repo so that other projects can use .jar)
```
# inside env (after above command)
$ mvn install
```

### run the dang thing
```
$ java --class-path target/jb-hello-world-maven-0.1.0.jar hello.HelloWorld
```

### modify your maven env
```
# make changes to Dockerfile, then build like so
$ docker build . -t <custom_name>
# this image name can then be passed to `get-env.sh`
```
