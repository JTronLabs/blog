---
layout: post
title:  "Creating a Game With Phaser Part 1"
title-subtext: "Use open source software to create you cross-platform JS game"
blurb: "Use free, open source software to create your next cross-platform 2D game."
keywords: "phaser,open source,games,cross-platform,js,android,browser,javascript,html5"
date:   2016-05-13 18:58:16 -0500
author: James Lowrey
profile-img-src: "birdu-img.png"
categories: games
introduction: |
  [Phaser](http://phaser.io/) is an open source, 2D game engine written for JavaScript. It is robust and easy to learn with active [development](https://github.com/photonstorm/phaser). Make your JS game for modern browsers and use frameworks like [Cordova](https://cordova.apache.org/), [PhoneGap](http://phonegap.com/), or [CocconJS](https://www.ludei.com/cocoonjs/) to download and run it on multiple operating systems (learn how to do this [here]()). In this tutorial series I'll cover how to use Phaser to create a simple game from inception to the play store, and along the way write simple, maintainable code. To preview what we'll accomplish you can see the [code](https://github.com/JTronLabs/Birdu), play the [game](http://jtronlabs.github.io/Birdu/game/dist/index.html), or download it off the [Play Store](https://play.google.com/store/apps/details?id=com.jtronlabs.birdu).

resources: >
  - [Phaser 'Hello World'](http://phaser.io/tutorials/getting-started/index)

  - [Phaser 2.4.6 docs](http://phaser.io/docs/2.4.6/index)

  - [Phaser Flappy Bird](http://www.codevinsky.com/phaser-2-0-tutorial-flappy-bird-part-1/) (what I used to learn Phaser)

  - [Phaser Official Tutorials](http://phaser.io/learn/official-tutorials)

  - [Phaser Official Tutorials - GitHub](https://github.com/photonstorm/phaser-coding-tips)

  - [Phaser Community Tutorials](http://phaser.io/learn/community-tutorials)

  - [Phaser Examples](http://phaser.io/examples)

software_versions: >
  - [Ubuntu 14.04.4 LTS](http://www.ubuntu.com/download)

  - [Phaser 2.4.7](http://phaser.io/)
---


<!-- Required first line cannot be in a liquid Template due to Jekyll 'tag was never closed' bug
 bug info:: http://blog.slaks.net/2013-08-09/jekyll-tag-was-never-closed/
-->

{% capture markdown_content_block %}

Regardless of your current skill level, Phaser is a great choice to develop your next (or first) game. One of its greatest strengths is the [documentation](http://phaser.io/docs/2.4.7/index) and available tutorials. The [offical tutorials](http://phaser.io/learn/official-tutorials), [community tutorials](http://phaser.io/learn/community-tutorials), and [specific examples](http://phaser.io/examples) give this engine a low learning curve, ultimately making your game quicker (and cheaper) to make. Phaser is not as powerful as AAA game engines like [Unity](https://unity3d.com/) or [UnrealEngine](https://www.unrealengine.com/) as it lacks 3D ([BabylonJS can do 3D though](http://www.babylonjs.com/)), a GUI, support staff, and it is not as well known, but it is 100% free. Whether you're an established business or an aspiring indie, using a free engine could add a lot of money to your pockets throughout your game's life.

Unlike writing native apps, Phaser does not lock you into one device. At the end of this series I use Cordova to publish on the Google Play Store, gaining access to a greater audience. These frameworks allow you to write once and publish multiple times, saving precious dev time. Unfortunately this process is a bit more involved than using a AAA engine to publish on multiple platforms but again it is free. Also, apps written in this manner are less efficient than native apps, as they require a [WebView](https://cordova.apache.org/docs/en/latest/guide/overview/index.html#architecture) to run in the background and interpret the JS like a browser would. Usually for small apps this performance hit is minimal, and far preferable to having to re-write all the code multiple times.

{% endcapture %}


{% include collapsable.html title="Why use Phaser?" content = markdown_content_block %}



























{% capture markdown_content_block %}

At first glance, simplest way to setup a game would be to have an index.html page and two external <script> tags for including phaser.js and game.js files. That game.js file would be huge and unwieldy, likely hard to step through and debug. I prefer small files that have a clearly defined purpose with as [modular](https://en.wikipedia.org/wiki/Modular_programming) a nature as possible. The next logical step then, is to create a bunch of small JS files and link them together. So instead of just game.js, you'd have mario.js, koopa.js, block.js,settings.js and so on. Organizing all of that and ensuring proper link ordering/dependencies could be difficult though. To get the best of both worlds we will use a generator, enabling us to write focused files and automatically linking them together. It will also provide a standardized code scaffold when we create new files.

You can view our generator [here](https://github.com/codevinsky/generator-phaser-official). It supports automatic generation of a new game file structure, as well as game 'states' and 'prefabs', which will be covered more later, but essentially a state is a screen on your game (welcome menu, gameplay, settings, e.g.) and a prefab is a game entity (mario, koopa e.g.). This tool is built on Yeoman (and thus NodeJS), which means you will need to install these dependencies.

{% highlight bash %}

#To install, first get dependencies. Install npm, then bower, then yo (in order to run our generator-phaser-official)
sudo apt-get install nodejs #Web server
sudo apt-get install npm #The NodeJS package manager
npm install -g bower #package manager
npm install -g yo #client-side dev stack, helps devs quickly build high quality web apps
npm install -g grunt-cli #task-based command line build tool for JavaScript projects

sudo npm install -g yo generator-phaser-official #Desired YeoMan tool to auto-gen phaser game project

{% endhighlight %}


Now that we have our dependencies installed, we can generate our game:


{% highlight bash %}

mkdir ~/Documents/birdu
cd ~/Documents/birdu
yo phaser-official #Generate a project in current directory
#name of game is 'birdu'
#Phaser version is 2.4.7 (at time of writing)
#use 800x600 screen resolution
grunt build #compile JS files and save production output to '/dist' directory

{% endhighlight %}















{% endcapture %}


{% include collapsable.html title="Getting Started" content = markdown_content_block %}
