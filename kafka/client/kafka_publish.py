"""Publish event to kafka. Test script."""

from confluent_kafka import Producer

topic = "quickstart-events"
server = 'localhost:9094'

p = Producer({'bootstrap.servers': server})


def delivery_report(err, msg):
    if err is not None:
        print(f'Message delivery failed with err: {err}')
    else:
        print(f'Message delivery was successful to {msg.topic()} [{msg.partition()}]')


datas = ['hello', 'bye']

for data in datas:
    p.poll(0)
    p.produce(topic, data.encode('utf-8'), callback=delivery_report)

p.flush()
