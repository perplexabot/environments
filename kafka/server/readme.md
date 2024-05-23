### running
- start zookeeper and kafka
```
docker compose up --build --force-recreate
```

### commands

- create topic
```
kafka-topics.sh --create --topic quickstart-events --bootstrap-server localhost:9092

```

- list topics
```
kafka-topics.sh --list --bootstrap-server localhost:9092
```

- read messages in topic
```
kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic quickstart-events --from-beginning
```

### errors
error:
```
Message delivery failed with err: KafkaError{code=INVALID_REPLICATION_FACTOR,val=38,str="Broker: Invalid replication factor"}
```
resolution: create the dang topic in kafka
