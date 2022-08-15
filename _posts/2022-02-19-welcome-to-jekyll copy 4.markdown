---
layout: post
title:  "Remote-control LiDAR Search-And-Rescue Vehicle"
date:   2022-02-20 23:35:45 -0400
categories: jekyll update
image: "/assets/images/alex1.png"
summary: "Developed with SSH, TLS, ROS Programming and Bare-Metal programming to build a search-and-rescue robot."

---

# Introduction

The robot consists of a `Raspberry Pi 4 Model B` and an `Arduino Uno`, as well as a LiDAR module.

# Contributions

![Alex Architecture](/assets/images/alex2.png)

Programmed the Raspberry Pi in C to enable the following features of the robot:

1. Interfacing of `LiDAR driver` code in C++ to support selective disabling of motor spin to reduce power consumption. (I used File IO, not proud of that) 
1. Incorporated button key controls to control the robot remotely. Modified the skeleton code to create a new worker thread to handle keypresses using `ncurses`.
1. Designed the robot design so that it is compact with no loose wiring.
