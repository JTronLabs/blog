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
  [Phaser](http://phaser.io/) is an open source, 2D game engine written for JavaScript. It is robust and easy to learn with active [development](https://github.com/photonstorm/phaser). Make your JS game for modern browsers and use frameworks like [Cordova](https://cordova.apache.org/), [PhoneGap](http://phonegap.com/), or [CocconJS](https://www.ludei.com/cocoonjs/) to download and run it on multiple operating systems (learn how to do this [here]()). In this tutorial series I'll cover how to use Phaser to create a simple game from inception to the play store, and along the way write maintainable code. To preview what we'll accomplish you can see the [code](https://github.com/JTronLabs/Birdu), play the [game](http://jtronlabs.github.io/Birdu/game/dist/index.html), or download it off the [Play Store](https://play.google.com/store/apps/details?id=com.jtronlabs.birdu).

resources: >
  - [Phaser 'Hello World'](http://phaser.io/tutorials/getting-started/index)

  - [Phaser 2.4.7 docs](http://phaser.io/docs/2.4.7/index)

  - [Phaser Flappy Bird](http://www.codevinsky.com/phaser-2-0-tutorial-flappy-bird-part-1/) (what I used to learn Phaser)

  - [Phaser Official Tutorials](http://phaser.io/learn/official-tutorials)

  - [Phaser Official Tutorials - GitHub](https://github.com/photonstorm/phaser-coding-tips)

  - [Phaser Community Tutorials](http://phaser.io/learn/community-tutorials)

  - [Phaser Examples](http://phaser.io/examples)

  - [Grunt Configuration](http://gruntjs.com/configuring-tasks)

software_versions: >
  - [Ubuntu 16.04 LTS](http://www.ubuntu.com/download)

  - [Phaser 2.4.7](http://phaser.io/)
---


<!-- Required first line cannot be in a liquid Template due to Jekyll 'tag was never closed' bug
 bug info:: http://blog.slaks.net/2013-08-09/jekyll-tag-was-never-closed/
-->

{% capture markdown_content_block %}

Regardless of your current skill level, Phaser is a great choice to develop your next (or first) game. One of its greatest strengths is the [documentation](http://phaser.io/docs/2.4.7/index) and available tutorials. The [offical tutorials](http://phaser.io/learn/official-tutorials), [community tutorials](http://phaser.io/learn/community-tutorials), and [specific examples](http://phaser.io/examples) give this engine a low learning curve, ultimately making your game quicker (and cheaper) to make. Phaser is not as powerful as AAA game engines like [Unity](https://unity3d.com/) or [UnrealEngine](https://www.unrealengine.com/) as it lacks 3D ([BabylonJS can do 3D though](http://www.babylonjs.com/)), a GUI, support staff, and it is not as well known, but it is 100% free. Whether you're an established business or an aspiring indie, using a free engine ([versus UE4 or Unity](http://blog.digitaltutors.com/whats-better-deal-unreal-engine-4-unity-5/)) will add money to your pockets throughout your game's life.

Unlike writing native apps, Phaser does not lock you into one device. At the end of this series I use Cordova to publish on the Google Play Store, gaining access to a greater audience. These frameworks allow you to write once and publish multiple times, saving precious dev time. While this process is more involved than using AAA engines it is extendible to any JS app, not just games. Unfortunately, apps written in this manner are less efficient than native apps, as they require a [WebView](https://cordova.apache.org/docs/en/latest/guide/overview/index.html#architecture) to run in the background and interpret the JS like a browser would. Usually for small apps this performance hit is minimal, and far preferable to having to re-write all the code multiple times.

{% endcapture %}


{% include collapsable.html title="Why use Phaser?" content = markdown_content_block %}



























{% capture markdown_content_block %}

At first glance, the simplest way to setup a game would be to have an index.html page and two external  
<code class=" language-markup">&#60;script&#62;</code> tags for including phaser.js and game.js files. That game.js file would be huge and unwieldy, likely hard to step through and debug. I prefer small, [modular](https://en.wikipedia.org/wiki/Modular_programming) files that have a clearly defined purpose. Instead maybe create a bunch of small JS files and link them together. So instead of just game.js, you'd have mario.js, koopa.js, block.js,settings.js and so on. But that creates the issue of organizing and ensuring proper link ordering/dependencies. To get the best of both worlds we will use a generator, enabling us to write focused files and automatically linking them together. It will also provide a standardized code scaffold when we create new files.

You can view our generator [here](https://github.com/codevinsky/generator-phaser-official). It supports automatic generation of a new game, game 'states', and game 'prefabs'. These will be covered more later, but essentially a state is a screen on your game (welcome menu, gameplay, settings, e.g.) and a prefab is a game entity (mario, koopa e.g.). This tool is built on [Yeoman](http://yeoman.io/) (and thus [NodeJS](https://nodejs.org/en/)), which means you will need to install these dependencies.

{% highlight bash %}

#Install generator dependencies. Install npm, then bower, then yo (in order to run our generator-phaser-official)
sudo apt-get install nodejs #Web server
sudo apt-get install npm #The NodeJS package manager
npm install -g --save-dev bower #package manager
npm install -g --save-dev yo #client-side dev stack, helps devs quickly build high quality web apps
npm install -g --save-dev grunt-cli #task-based command line build tool for JavaScript projects. 'save-dev' adds grunt as a dev-dependency to package.json

sudo npm install -g yo generator-phaser-official #Desired YeoMan tool to auto-gen phaser game project

{% endhighlight %}


Now that we have our dependencies installed, we can generate our game:


{% highlight bash %}

mkdir ~/Documents/birdu
cd ~/Documents/birdu
yo phaser-official #Generate a project in current directory. Will download Phaser and node dependencies.
#If a phaser-official project already exists in current dir, then option choices don't matter. Just choose to not overwrite your files
#name of game is 'birdu'
#Phaser version is 2.4.7 (at time of writing)
#use 800x600 screen resolution
grunt build #compile JS files and save production output to '/dist' directory

{% endhighlight %}

This Phaser game generator uses [Grunt](http://gruntjs.com) to compile your assets and code into a working game. When you first run and build with this generator, there will be a playable game called 'Click the Yeoman Logo' generated at 'dist/index.html'. You can look under 'game/states' to get an understanding of how this sample game is built with Phaser.

{% highlight bash %}
#Directory output when generating a new game
├── Gruntfile.js      #File that tells Grunt how to compile your project (http://gruntjs.com/configuring-tasks).
├── config.json       #manage game properties
├── package.json      #Packaging in Node (https://docs.npmjs.com/files/package.json)
├── bower.json        #Bower (http://bower.io/) installs packages for you. Use this file to manage your dependency versions (can update phaser version here)
├── node_modules/     #folder containing those packages outlined in package.json.
├── bower_components/ #folder containing packages oulined in bower.json. For this project it is the Phaser source code.
├── index.html        #html page with your Phaser game included.
├── assets #Audio, images, fonts etc should be placed here
│   ├── preloader.gif
│   └── yeoman-logo.png
├── css #styling for the html page surrounding your game.
│   └── styles.css
├── game #JS files that make up your game
│   ├── main.js #auto-gen file outlining game size and states
│   └── states          #setup game states. These states lead into each other by calling 'this.game.state.start(NEXT_STATE_NAME)'
│       ├── boot.js     #State 1. It is called at the end of main.js. Responsible for loading assets for 'preload' states, calling preload state, and I also set up global variables in this state.
│       ├── preload.js  #State 2. This handles preloading assets for the entire rest of the game.
│       ├── menu.js     #State 3. Welcome screen to the game.
│       ├── play.js     #State 4. Actual gameplay
│       └── gameover.js #State 5. Screen showed upon death/loss.
├── templates       #file templates used by Grunt to automatically create files
│   └── main.js.tpl #template for game/main.js. This will auto include every state created through the generator, and set the game to the width+height set in 'config.json'
└── dist #compiled output saves to this folder
    └── index.html, assets/, css/, js/

{% endhighlight %}

If you're using Git for version control I recommended adding a .gitignore file of the auto-generated folders:

{% highlight bash %}
#.gitignore
node_modules/
bower_components/
dist/
{% endhighlight %}









{% endcapture %}


{% include collapsable.html title="Getting Started" content = markdown_content_block %}




























{% capture markdown_content_block %}

Browsers tend to be unhappy with loading assets into local files, and thus Phaser requires a local web server in order to properly run the game. If you attempt to open the index.html file in the dist/ directory, it probably won't work, and will spit up some Uncaught SecurityError, Cross-Origin, and XMLHttpRequest errors in your JS console. This is an easy fix though! In my opinion, the easiest web server for Phaser is Apache2. Install with

{% highlight bash %}
#Install Apache Web server
sudo apt-get install apache2
{% endhighlight %}

After that's done loading, you should see the default Apache web page by going to the url 'localhost' on a browser.

![Default Apache2 Landing Page](../img/apache2-localhost.png)

This code is located in the <code class=" language-markup">/var/www/html</code> directory. To run your Phaser game, you should copy your 'dist/' folder output to there. Below is a script (located in my game directory) for automatically copying build output to Apache localhost.

{% highlight bash %}
#!/bin/sh

#Script that copies current game build to Apache web server html directory
echo "deleting old files" #not 100% needed, but the generator won't delete old files/assets that are no longer used. It will only copy in new stuff you add. Thus I'm manually doing it here.
rm -rf dist #delete game output folder
sudo rm -rf /var/www/html/ #delete current contents of apache's web directory

echo "copying new build to localhost"
grunt build #compile js to 'dist' folder
sudo cp -a $(pwd)/dist /var/www/html/ #copy dist's files to apache's web directory
{% endhighlight %}

After running the script, the default generator game should be playable at the URL 'localhost'.

![Default Phaser Yeoman Game](../img/yeoman_game.png)

{% endcapture %}


{% include collapsable.html title="Running The Game" content = markdown_content_block %}




























{% capture markdown_content_block %}

After running the generator you are left with the game 'Click the Yeoman Logo'. Before we go any further in making our own game, I'll cover how this simple game works first.

{% endcapture %}


{% include collapsable.html title="Click the Yeoman Logo" content = markdown_content_block %}
