---
layout: post
title:  "Setting up USB WebCam with Raspberry Pi and Motion"
date:   2016-02-17 18:58:16 -0500
categories: jekyll update
introduction: |
  Problem: SO misses her dog when she's away from the house               

  Solution: Over engineering!                                             

  Enter the Raspberry Pi Survellience System. Using the R-Pi's cheap hardware and a generic USB webcam, you can construct a basic home-survellience system, for pets or theft-prevention.

  ![Viira](/img/viira.jpg)

resources: >
              - [Raspberry Pi Webcam Docs](https://www.raspberrypi.org/documentation/usage/webcams)

              - [Motion Wiki](http://www.lavrsen.dk/foswiki/bin/view/Motion/WebHome)

              - [Motion GitHub Repo](https://github.com/sackmotion/motion)

              - [Default motion.conf](https://github.com/sackmotion/motion/blob/master/motion-dist.conf.in)

materials: >
              - [Raspberry Pi Model B](https://www.raspberrypi.org/products/raspberry-pi-2-model-b/)

              - [Generic USB Webcam](http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Dcomputers&field-keywords=webcam&sprefix=web%2Ccomputers%2C165)

              - [Wi-Fi Dongle](http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Delectronics&field-keywords=wifi+dongle)

              - [Micro-USB Wall Charger](http://www.amazon.com/Motorola-Wall-Charger-Micro-Cable/dp/B005LFXBJG/ref=sr_1_5?s=electronics&ie=UTF8&qid=1455758956&sr=1-5&keywords=micro+usb+charger)

              - [8GB SD Card](http://www.amazon.com/SanDisk-Memory-SDSDUN-008G-G46-Newest-Version/dp/B00M55BS5O/ref=sr_1_3?s=electronics&ie=UTF8&qid=1455759034&sr=1-3&keywords=8gb+sd+card)

              - [Ethernet Cable](http://www.amazon.com/AmazonBasics%C2%A0RJ45%C2%A0Cat-6-Ethernet%C2%A0Patch-Cable--%C2%A010%C2%A0Feet-3%C2%A0Meters/dp/B00N2VIALK/ref=sr_1_2?s=pc&ie=UTF8&qid=1456176588&sr=1-2) or [Monitor](http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Dcomputers&field-keywords=hdmi+monitor&rh=n%3A541966%2Ck%3Ahdmi+monitor)+[USB Keyboard](http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Dcomputers&field-keywords=usb+keyboard&rh=n%3A541966%2Ck%3Ausb+keyboard)+[HDMI cable](http://www.amazon.com/AmazonBasics-High-Speed-HDMI-Cable-Supports/dp/B00870ZHCQ/ref=sr_1_4?s=pc&ie=UTF8&qid=1456176643&sr=1-4&keywords=hdmi+cable)

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

### Install the Operating System

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

### Connect to the Internet

If you have the ethernet cable, plug in the Pi and connect to it via SSH (covered in next section), then follow the instructions below to setup Wi-Fi.

If you have the Wi-Fi dongle, Monitor, HDMI cable, and USB Keyboard plug them all into the Pi and turn it on. After it boots, run

{% highlight bash %}
sudo iwlist wlan0 scan #scan for local wifi networks. "ESSID" values are the names of found networks
{% endhighlight %}

to find your Wi-Fi's ESSID value. Next, edit the wpa_supplicant to add an entry for your Wi-Fi

{% highlight bash %}
sudo nano /etc/wpa_supplicant/wpa_supplicant.conf #add new entry to known wifi's

#Go to the bottom of the file and add the following:
network={
    ssid="The_ESSID_from_earlier"
    psk="Your_wifi_password"
}
{% endhighlight %}

</div>

{::options parse_block_html="true" /}
<div class="collapsable">

### Setup SSH

[Secure shell (SSH)](https://en.wikipedia.org/wiki/Secure_shell) is a way to securely access your Pi over the internet. Enabling SSH will prevent you from needing a dedicated keyboard and monitor to interface with the Pi, instead you can access it remotely from your day-to-day computer. The Pi will be running an SSH server, and you can connect to it from your computer similar to how you can connect to a web server with a browser. The main difference between the two being that SSH is a secure connection with root access (default [port](https://en.wikipedia.org/wiki/Port_%28computer_networking%29) #22), while HTTP is not (default port #80).

First step is finding your Pi's [Local Area Network](https://en.wikipedia.org/wiki/Local_area_network) (LAN) [Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol)  (IP) address. For background, your LAN is essentially all devices that connect to your [ISP's](https://en.wikipedia.org/wiki/Internet_service_provider) modem. This allows all of your local devices to connect to the internet through the same IP address (your modem's IP), allowing implementation of firewalls, advanced security, and faster local networking than is achievable over a [WAN](https://en.wikipedia.org/wiki/Wide_area_network). The router provides Wi-Fi/[Wireless LAN](https://en.wikipedia.org/wiki/Wireless_LAN). IP is a type of communications protocol that forms the foundation of computer inter-networking that establishes the internet. An IP address is the info computer's must have to know who they are talking to. So, to connect to your Pi via SSH you first must find its LAN IP address.

Go to your Pi and enter the command:

{% highlight bash %}
ip addr #see LAN ip address of networking interfaces
{% endhighlight %}

This will print out a bunch of info about your networking interfaces. The 'lo' interface is your loopback, the computer uses it to communicate with itself, and it can be ignored. eth0 is the ethernet interface, if you are connecting via ethernet then you want to look at this. If you are using Wi-Fi, then look at the wlan0 interface. The LAN IP address with have the title 'inet' and look something like '192.168.0.1'. Write it down

{% highlight bash %}
#output looks something like this. These are the networking interfaces available on your machine. Look for the 'inet' address
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN #this is a special interface the computer uses to communicate with itself. You can ignore it
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
 2: eth0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc pfifo_fast state DOWN mode DEFAULT qlen 1000#This is the ethernet interface, write down the inet value (which does not appear here but would if ethernet were connected)
    link/ether b8:27:eb:61:48:be brd ff:ff:ff:ff:ff:ff
3: wlan0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP qlen 1000 #this is the Wi-Fi interface. inet/LAN IP value is 192.168.0.226, you can ignore the /24
    link/ether 00:0f:55:a8:fc:62 brd ff:ff:ff:ff:ff:ff
    inet 192.168.0.226/24 brd 192.168.0.255 scope global wlan0
       valid_lft forever preferred_lft forever
{% endhighlight %}

If you're connecting from a Linux or Mac computer, ssh is as easy as opening a terminal and typing

{% highlight bash %}
ssh pi@The_IP_from_earlier
{% endhighlight %}

If you are on Windows, you will need to use some software to help. My favorite is [PuTTy](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html). Download it and follow the instructions to get setup.

That's it! You should be connected now!

If SSH is not working, plug your Pi back into the monitor and check that SSH is enabled by entering the command

{% highlight bash %}
sudo raspi-config #ensure SSH is enabled under 'Advanced' settings
{% endhighlight %}

Navigate to the 'Advanced' settings, and then 'SSH'. Ensure it is enabled.

If it's still not working, double check that your Pi has internet access. If you could not see the 'inet' value from before, your Pi is not connected. You can also try [pinging](https://en.wikipedia.org/wiki/Ping_%28networking_utility%29) a few popular websites to look for a response.

{% highlight bash %}
ping www.google.com #A good response (no dropped packets) indicates you are connected to the internet
ping www.facebook.com
ping www.stackoverflow.com
{% endhighlight %}


Lastly, you can try restarting the SSH server. Like a web-server, an SSH server can occasionally become messed up and need a restart. It's happened to me before with dynamic IPs. Do so with

{% highlight bash %}
sudo service ssh restart #double check that SSH server is good to go
{% endhighlight %}

</div>

{::options parse_block_html="true" /}
<div class="collapsable">

### Update!

This part is easy. Ensure that your firmware and software are up-to-date by running these commands in the Pi's terminal. It will likely take the Pi awhile run.

{% highlight bash %}
sudo apt-get install rpi-update #rpi-update is a package that manages Pi's firmware updates
sudo rpi-update #run the package for the updates
sudo apt-get update #fetch new versions of Linux software
sudo apt-get upgrade #apply the fetched updates
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
