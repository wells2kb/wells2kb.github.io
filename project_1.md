# Project 1

## Motivation and Location

Last year I got to experience my bucket list goal of going to Yosemite.
I spent a week only in the valley, sleeping at Camp 4, and getting up a ton of rock.
I thought that the two most iconic rock faces, El Capitan and Half Dome would make for cool knick knacks.

**Fun Fact:** There are massive Ravens all over the valley,
that will wait for you to leave your bag unattended so they can unzip it and go through all of your stuff.


## Design

### Half Dome

[](./images/half_dome_front.png)!

This knick kanck is based on the following photogrammetry mesh: https://sketchfab.com/3d-models/half-dome-yosemite-fc8d0e10bd6149ca83de73274d4a2200.
Sketchfab seems to have many photogrammetry models that you can https://google.com for.

I turned the mesh into a cropped solid body and created a model for a portaledge to hang from it.
A portaledge is a portable ledge that climbers live and sleep on during multi day ascents.
The portaledge rocks back and forth on the face of Half Dome as you rotate the cube.

[](./images/half_dome_back.png)!

On the sides you can see the time, weather, and the day night cycle toggle button on the back.

[](./images/half_dome_night.png)!

Normally, at 7am and 7pm California Time the texture on half dome should swap between day and night.
Clicking the toggle button with the mouse presses it down and swaps the current day cycle.

### El Captain

[](./images/el.png)!

This knick knack is based on this photogrammetry mesh: https://sketchfab.com/3d-models/el-capitan-ec8286fe454a4912805fbc2d80e3e739.
I also modified this mesh to look like the other knick knack.

There is also a climber swinging around on a rope hanging from a piton on the face.
As you rotate the cube the climber swings around on the rope like a pendulum.
This is inspired by the legendary "King Swing" that is traditionally done on ascents of El Cap.
I modifed this model: https://www.printables.com/model/312521-the-climber-for-monitor/files for the climber and rope.
I made the piton model, a piton is relic piece of climbing protection that is basically a nail that is driven into the rock with a hammer.

[](./images/el_back.png)!

It also has the time, weather, day night cycle, and the toggle button for it.

[](./images/el_night.png)!

At night El Cap is normally spotted with the light from climbers headlamps.
I added faint head lamp spots to the night texture for El Cap, but it is a little hard to see them.


## Process

I created the models for both rock faces by intersecting a cuboid with the photogrammetry meshes.
I also modified the UV maps for the intersected faces so that they would be black.

Every frame a script will update the text on the sides of the cube to match the time in California.

Another script will check the time to see if it needs to swap out the "Materials" of the face for day or night.
This script also controls the toggle buttons that have an `OnMouseDown` method that swaps between day and night.

The current weather comes from https://weather.gov, where a script runs every 10 minutes to parse xml from the site using regex.


## Challenges and Future Work

Blender is HARD and slowed me down a lot through this project.
Their documentation is laughably bad and minimal, it provides no direction on how to do the most simple things.

One thing I wish I did was have emissive headlamps on El Cap at night.

## AI and Collaboration

None

## Video

https://www.youtube.com/watch?v=3WrlzxH-PVY

