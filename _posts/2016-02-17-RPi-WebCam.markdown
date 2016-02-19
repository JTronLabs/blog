---
layout: post
title:  "Setting up USB WebCam with Raspberry Pi and Motion"
date:   2016-02-17 18:58:16 -0500
categories: jekyll update
introduction: "
<span>
Problem: SO misses her dog when she's away from the house               </br>
Solution: Over engineering!                                             </br>
Enter the Raspberry Pi Survellience System. Using the R-Pi's cheap hardware and a generic USB webcam, you can construct a basic home-survellience system, for pets or theft-prevention.
</span>
<img src=\"/img/viira.jpg\" alt=\"Dog\" class=\"center-image\">
"
resources: [  
              {text: "Raspberry Pi Docs", url: "https://www.raspberrypi.org/documentation/usage/webcams/"},
              {text: "Motion Wiki", url: "http://www.lavrsen.dk/foswiki/bin/view/Motion/WebHome"},
              {text: "Motion GitHub Repo", url: "https://github.com/sackmotion/motion"},
              {text: "Default motion.conf", url: "https://github.com/sackmotion/motion/blob/master/motion-dist.conf.in"},
              {text: "Other Tutorial", url: "http://www.codeproject.com/Articles/665518/Raspberry-Pi-as-low-cost-HD-surveillance-camera"},
              {text: "Other Tutorial2", url: "http://sjj.azurewebsites.net/?p=701"},
              {text: "Other Tutorial3", url: "http://pimylifeup.com/raspberry-pi-webcam-server/"},
            ]
materials: [  
              {text: "Raspberry Pi Model B", url: "https://www.raspberrypi.org/products/raspberry-pi-2-model-b/"},
              {text: "Generic USB Webcam", url: "http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Dcomputers&field-keywords=webcam&sprefix=web%2Ccomputers%2C165"},
              {text: "Wi-Fi Dongle", url: "http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Delectronics&field-keywords=wifi+dongle"},
              {text: "Micro-USB Wall Charger", url: "http://www.amazon.com/Motorola-Wall-Charger-Micro-Cable/dp/B005LFXBJG/ref=sr_1_5?s=electronics&ie=UTF8&qid=1455758956&sr=1-5&keywords=micro+usb+charger"},
              {text: "8GB SD Card", url: "http://www.amazon.com/SanDisk-Memory-SDSDUN-008G-G46-Newest-Version/dp/B00M55BS5O/ref=sr_1_3?s=electronics&ie=UTF8&qid=1455759034&sr=1-3&keywords=8gb+sd+card"}
            ]
tutorial_steps: ["Install OS on your Raspberry Pi",
              "Connect to Wi-Fi",
              "Set Up a Static LAN IP Address",
              "Setup SSH",
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
---
{% comment %}
![Dog](/img/viira.jpg){: .center-image}
{% endcomment %}

<div id="step_1">
  <h2> {{page.tutorial_steps[0]}} </h2>
</div>

<div id="step_2">
  <h2> {{page.tutorial_steps[1]}} </h2>
</div>

<div id="step_3">
  <h2> {{page.tutorial_steps[2]}} </h2>
</div>

<div id="step_4">
  <h2> {{page.tutorial_steps[3]}} </h2>
</div>

<div id="step_5">
  <h2> {{page.tutorial_steps[4]}} </h2>
</div>

<div id="step_6">
  <h2> {{page.tutorial_steps[5]}} </h2>
</div>

<div id="step_7">
  <h2> {{page.tutorial_steps[6]}} </h2>
</div>

<div id="step_8">
  <h2> {{page.tutorial_steps[7]}} </h2>
</div>

<div id="step_9">
  <h2> {{page.tutorial_steps[8]}} </h2>
</div>
