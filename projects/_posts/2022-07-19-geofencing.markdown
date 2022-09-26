---
layout: post
title:  Indoor Positioning System - EGSC
date:   2022-02-20 23:35:45 -0402
categories: jekyll update
image: "./assets/images/geofencing_2.png"
summary: "Designed the software architecture of an Indoor Positioning System with Minew Sensors."
---
# Introduction
[Slides](https://docs.google.com/presentation/d/1qo3K-DUguBhCTPEX37VxLhvf6bw_X7V7nORZ7fTDXQQ/edit?usp=sharing)
This project aims to track students within the Rainbow Centre on their location in real time. This involves the development of a mobile app, website and a sensor network to enable real-time geolocation via RSSI triangulation, then updating the results to the frontend interface.

<iframe width="560" height="315" src="https://www.youtube.com/embed/D9T3exqOLec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


# Contributions
- Proposed the overall architecture of the project.
- Developed various CRUD endpoints to interface with **Firebase database**.
- Implemented **SocketIO and MQTT server alongside the REST server** to communicate with both edge devices and
client frontend in real time.
- Optimised the sensor data processing with multiprocessing and queues; hence **effectively reducing sensor update
interval from 4s to 0.5s**.
- Developed various form pages, as well as a **map viewer** to insert and view sensors at their various positions **in real life, at real time**.
- Deployed the frontend and backend on AWS Amplify and AWS EC2 container instances with **NGINX Reverse Proxy** for **load balancing** and **SSL certificate management**.
- **Technical Skills**: Starlette, FastAPI, Gunicorn, SocketIO, AWS IoT SDK, Firebase Authentication, Firebase Real time
Database and AsyncIO


![Data analysis of smart meter data](/assets/images/geofencing_1.jpg)


# Reflections
1. Perhaps the most rewarding project I have undertaken. In the context where the safety of the children are time-sensitive, latency was everything. Looking back at the late nights spent designing the multiprocessing pipeline to reduce latency and research on NGINX to deploy the product to production stage, I am proud to say that I have learnt alot from my experience with EGSC.
