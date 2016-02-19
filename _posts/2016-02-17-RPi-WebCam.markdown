---
layout: post
title:  "Setting up USB WebCam with Raspberry Pi and Motion"
date:   2016-02-17 18:58:16 -0500
categories: jekyll update
resources: [  
              {text: "Raspberry Pi Docs", url: "https://www.raspberrypi.org/documentation/usage/webcams/"},
              {text: "Raspberry Pi Docs", url: "https://www.raspberrypi.org/documentation/usage/webcams/"}  
            ]
materials: [  
              {text: "Raspberry Pi Model B", url: "https://www.raspberrypi.org/products/raspberry-pi-2-model-b/"},
              {text: "Generic USB Webcam", url: "http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Dcomputers&field-keywords=webcam&sprefix=web%2Ccomputers%2C165"},
              {text: "Wi-Fi Dongle", url: "http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Delectronics&field-keywords=wifi+dongle"},
              {text: "Micro-USB Wall Charger", url: "http://www.amazon.com/Motorola-Wall-Charger-Micro-Cable/dp/B005LFXBJG/ref=sr_1_5?s=electronics&ie=UTF8&qid=1455758956&sr=1-5&keywords=micro+usb+charger"},
              {text: "8GB SD Card", url: "http://www.amazon.com/SanDisk-Memory-SDSDUN-008G-G46-Newest-Version/dp/B00M55BS5O/ref=sr_1_3?s=electronics&ie=UTF8&qid=1455759034&sr=1-3&keywords=8gb+sd+card"}
            ]
tutorial_steps: [
              {
                title: "Install OS on your Raspberry Pi",
                background: "",
                summary:

              },
              {
                title: "Connect to Wi-Fi",
                background: "",
                summary: "sudo iwlist wlan0 scan #scan for local wifi networks. \"ESSID\" values are the names of found networks

  sudo nano /etc/wpa_supplicant/wpa_supplicant.conf #add entry to known wifi's

  network={#Go to the bottom of the file and add the following:
	    ssid=\"The_ESSID_from_earlier\"
	    psk=\"Your_wifi_password\"
	}
                "
              },
              {
                title: "Set Up a Static LAN IP Address",
                background: "",
                summary: ""
              },
              {
                title: "Ensure SSH is working on the Pi",
                background: "",
                summary: ""
              },
              {
                title: "Update Pi and Install Motion",
                background: "",
                summary: ""
              },
              {
                title: "Setup Apache Web Server",
                background: "",
                summary: ""
              },
              {
                title: "Link Video Feed to Web Page",
                background: "",
                summary: ""
              },
              {
                title: "Enable Password Protection",
                background: "",
                summary: ""
              },
              {
                title: "Turn Camera On/Off Automatically",
                background: "",
                summary: ""
              }
            ]

bloopers: [
              {
                title: "Setting Up SSL (https)",
                background: "",
                summary: ""
              }
            ]

tips: [
  "Use the 'top' command to monitor Pi's CPU and RAM usage levels. Fiddle with resolution and frame-rate of Motion's video stream if it is too high",
  ""


  ]
---
