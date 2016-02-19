---
layout: post
title:  "Setting up USB WebCam with Raspberry Pi and Motion"
date:   2016-02-17 18:58:16 -0500
categories: jekyll update
introduction: |
  <span>
  Problem: SO misses her dog when she's away from the house               </br></br>
  Solution: Over engineering!                                             </br></br>
  Enter the Raspberry Pi Survellience System. Using the R-Pi's cheap hardware and a generic USB webcam, you can construct a basic home-survellience system, for pets or theft-prevention.
  </span>
  <img src="/img/viira.jpg" alt="Dog" class="center-image">
resources: [  
              {text: "Raspberry Pi Webcam Docs", url: "https://www.raspberrypi.org/documentation/usage/webcams/"},
              {text: "Motion Wiki", url: "http://www.lavrsen.dk/foswiki/bin/view/Motion/WebHome"},
              {text: "Motion GitHub Repo", url: "https://github.com/sackmotion/motion"},
              {text: "Default motion.conf", url: "https://github.com/sackmotion/motion/blob/master/motion-dist.conf.in"}
            ]
materials: [  
              {text: "Raspberry Pi Model B", url: "https://www.raspberrypi.org/products/raspberry-pi-2-model-b/"},
              {text: "Generic USB Webcam", url: "http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Dcomputers&field-keywords=webcam&sprefix=web%2Ccomputers%2C165"},
              {text: "Wi-Fi Dongle", url: "http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Delectronics&field-keywords=wifi+dongle"},
              {text: "Micro-USB Wall Charger", url: "http://www.amazon.com/Motorola-Wall-Charger-Micro-Cable/dp/B005LFXBJG/ref=sr_1_5?s=electronics&ie=UTF8&qid=1455758956&sr=1-5&keywords=micro+usb+charger"},
              {text: "8GB SD Card", url: "http://www.amazon.com/SanDisk-Memory-SDSDUN-008G-G46-Newest-Version/dp/B00M55BS5O/ref=sr_1_3?s=electronics&ie=UTF8&qid=1455759034&sr=1-3&keywords=8gb+sd+card"},
              {text: "Ethernet Cable or Monitor+USB Keyboard+HDMI cable", url: ""}
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
extensions: >
  asdad
---

## {{page.tutorial_steps[0]}}

{::options parse_block_html="true" /}
<div class="collapsable">

#### Install the Operating System

The Pi itself is a full fledged computer, with much more RAM and processing power than a [microcontroller](https://en.wikipedia.org/wiki/Microcontroller) like Arduinio. Thus, the Pi requires an Operating System (OS) for software to interface with its hardware. [Linux](https://en.wikipedia.org/wiki/Linux) is an free, open-source OS with a ton of varieties and [distributions](https://en.wikipedia.org/wiki/Linux_distribution), [Raspian](https://www.raspberrypi.org/downloads/raspbian/) is the one made specifically with the Pi in mind.

There are already a lot of great resources for installing an OS onto the Pi, and I don't think I can add much to that discussion. If your Pi did not come with an OS pre-installed (mine did) then follow the links below to get it up and running.

- [Raspbian download](https://www.raspberrypi.org/downloads/raspbian/)
- [NOOBS software instructions](https://www.raspberrypi.org/documentation/installation/noobs.md)
- ['Advanced' users instructions](https://www.raspberrypi.org/documentation/installation/installing-images/)
- [Tutorial](https://www.andrewmunsell.com/blog/getting-started-raspberry-pi-install-raspbian/)
- [Another tutorial](http://www.makeuseof.com/tag/install-operating-system-raspberry-pi/)

</div>

{::options parse_block_html="true" /}
<div class="collapsable">

#### Connect to the Internet

If you have the ethernet cable, plug in the Pi and connect to it via SSH (covered in next section), then follow the instructions below to setup Wi-Fi.

If you have the Wi-Fi dongle, Monitor, HDMI cable, and USB Keyboard plug them all into the Pi and turn it on. After it boots, run the following commands:

{% highlight shell %}
sudo iwlist wlan0 scan #scan for local wifi networks. "ESSID" values are the names of found networks  
sudo nano /etc/wpa_supplicant/wpa_supplicant.conf #add new entry to known wifi's
{% endhighlight %}



</div>


## {{page.tutorial_steps[1]}}

## {{page.tutorial_steps[2]}}

## {{page.tutorial_steps[3]}}

## {{page.tutorial_steps[4]}}

## {{page.tutorial_steps[5]}}

## {{page.tutorial_steps[6]}}

## {{page.tutorial_steps[7]}}

## {{page.tutorial_steps[8]}}
