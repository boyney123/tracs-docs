---
id: how-it-works
title: How it works
---


<img src="/img/docs/how-it-works.png" style="margin: 30px 0 50px; border: none;" />

Tracs has three core elements to it: 

## The Dashboard (Grafana)

__Tracs__ uses [Grafana](https://grafana.com/) to visualise data for teams. __Tracs__ comes with predefined dashboards out the box and allows you to easily create your own. 

## The HTTP API

__Tracs__ has an API that allows developers to trigger [key metrics](/key-metrics) when it best suits them.

It's almost impossible to create integrations with all the different platforms that teams could use, so a simple API was created that allows people to trigger events when it best suits them.

For example the metric for `Number of Deployments` can be triggered using a `POST` to `/deployment`. This will insert a deployment record into the InfluxDB.

## The Database (InfluxDB)

[InfluxDB](https://www.influxdata.com/) is an open source time series database. Its a great usecase for __Tracs__ to store metrics over time. Every time you make a `deployment`, `change to a story` these metrics and times are stored in `InfluxDB`. Grafana is then used to visualise these metrics.
