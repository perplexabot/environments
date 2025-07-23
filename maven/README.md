### drop in env
```
$ docker run --rm -it -v $PWD/HelloWorldMaven:/workspace -w /workspace -u root maven /bin/bash
```

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
java --class-path target/jb-hello-world-maven-0.1.0.jar hello.HelloWorld
```
