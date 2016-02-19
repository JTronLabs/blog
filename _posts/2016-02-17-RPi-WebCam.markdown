---
layout: post
title:  "Setting up USB WebCam with Raspberry Pi and Motion"
date:   2016-02-17 18:58:16 -0500
categories: jekyll update
introduction: >
  <span>
  Problem: SO misses her dog when she's away from the house               </br></br>
  Solution: Over engineering!                                             </br></br>
  Enter the Raspberry Pi Survellience System. Using the R-Pi's cheap hardware and a generic USB webcam, you can construct a basic home-survellience system, for pets or theft-prevention.
  </span>
  <img src="/img/viira.jpg" alt="Dog" class="center-image">
resources: [  
              {text: "Raspberry Pi Webcam Docs", url: "https://www.raspberrypi.org/documentation/usage/webcams/"},
              {text: "Installing the OS - Raspbian Instructions", url: "https://www.raspberrypi.org/documentation/installation/installing-images/)"},
              {text: "Motion Wiki", url: "http://www.lavrsen.dk/foswiki/bin/view/Motion/WebHome"},
              {text: "Motion GitHub Repo", url: "https://github.com/sackmotion/motion"},
              {text: "Default motion.conf", url: "https://github.com/sackmotion/motion/blob/master/motion-dist.conf.in"}
            ]
materials: [  
              {text: "Raspberry Pi Model B", url: "https://www.raspberrypi.org/products/raspberry-pi-2-model-b/"},
              {text: "Generic USB Webcam", url: "http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Dcomputers&field-keywords=webcam&sprefix=web%2Ccomputers%2C165"},
              {text: "Wi-Fi Dongle", url: "http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Delectronics&field-keywords=wifi+dongle"},
              {text: "Micro-USB Wall Charger", url: "http://www.amazon.com/Motorola-Wall-Charger-Micro-Cable/dp/B005LFXBJG/ref=sr_1_5?s=electronics&ie=UTF8&qid=1455758956&sr=1-5&keywords=micro+usb+charger"},
              {text: "8GB SD Card", url: "http://www.amazon.com/SanDisk-Memory-SDSDUN-008G-G46-Newest-Version/dp/B00M55BS5O/ref=sr_1_3?s=electronics&ie=UTF8&qid=1455759034&sr=1-3&keywords=8gb+sd+card"}
            ]
tutorial_steps: ["Setup your Raspberry Pi",
              "Connect to the Internet",
              "Setup SSH",
              "Set Up a Static LAN IP Address",
              "Update Pi and Install Motion",
              "Setup Apache Web Server",
              "Link Video Feed to Web Page",
              "Enable Password Protection",
              "Turn Camera On/Off Automatically"
            ]
quick_tips: [
  "Use the 'top' command to monitor Pi's CPU and RAM usage levels. Fiddle with resolution and frame-rate of Motion's video stream if it is too high",
  ""
  ]
extensions: "

"
---

## {{page.tutorial_steps[0]}}
[Installing the OS - Raspbian Instructions](https://www.raspberrypi.org/documentation/installation/installing-images/)

## {{page.tutorial_steps[1]}}

## {{page.tutorial_steps[2]}}

## {{page.tutorial_steps[3]}}

## {{page.tutorial_steps[4]}}

## {{page.tutorial_steps[5]}}

## {{page.tutorial_steps[6]}}

## {{page.tutorial_steps[7]}}

## {{page.tutorial_steps[8]}}
