---
layout: post
title:  "Creating a free blog with Jekyll"
title-subtext: "For spouting political opinions!"
blurb: "Utilize Jekyll, Liquid, YAML, SCSS, CSS, JS, HTML, Ruby, Kramdown, Markdown, Github-Pages, and many more buzzwords to create a static website. "
date:   2016-02-16 18:58:16 -0500
profile-img-src: "/img/jekyll-logo.png"
categories: jekyll update
introduction: >

  Jekyll is a static site generator that allows users to [blog like a hacker](http://tom.preston-werner.com/2008/11/17/blogging-like-a-hacker.html). If you know (or want to learn) HTML, CSS, and JS then it's not hard to learn how to use Jekyll. I think that the number of technologies and buzzwords surrounding Jekyll (or similar web technologies) can make it intimidating to new devs, but it really isn't too hard to learn. Static-site generators are a great way to make simple sites and ensure maintainability and ease-of-use for the future. Once you have your site, GitHub will provide [free hosting](https://pages.github.com/).


  Benefits of Jekyll:


  - Static-site generators make HTML more modular, readable, and maintainable. They also make it much easier to create new posts by abstracting away a lot of code.

  - Customization! With Jekyll and GitHub pages, you can use you own domain name and have complete control over appearance of your website.

  - Posts can be written from a text editor, IDE, GitHub's web editor, or even the command line. No need to log-in to a website if you don't want to.

  - Blog is version-controlled through Git. This allows easy rollback, backups, drafting, and prototyping for new posts/layouts.

  - Site is static, not dynamic. Thus does not require ongoing maintenance (e.g. backups, databases, security updates) or learning the intricacies of an engine like WordPress or Mephisto.

resources: >
              - [Jekyll](http://jekyllrb.com/)

              - [Jekyll Variables](http://jekyllrb.com/docs/variables/)

              - [Jekyll's Liquid Templates](http://jekyllrb.com/docs/templates/)

              - [Jekyll Variables](http://jekyllrb.com/docs/variables/)

              - [GitHub Flavored Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

              - [Kramdown Quick Reference](http://kramdown.gettalong.org/quickref.html)

              - [Kramdown Options](http://kramdown.gettalong.org/options.html)

              - [The YAML Format](http://symfony.com/doc/current/components/yaml/yaml_format.html)  

              - [Liquid for Programmers](https://github.com/Shopify/liquid/wiki/Liquid-for-Programmers)

              - [Liquid for Designers](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)

              - [Using Jekyll Plug-ins](http://jekyllrb.com/docs/plugins/)

              - [Prisim Syntax Highlighting](http://prismjs.com/index.html)

software_versions: >
              - [Ubuntu 14.04.4 LTS](http://www.ubuntu.com/download)

              - [Ruby: 2.2.1p85](https://www.ruby-lang.org/en/downloads/)

              - [Jekyll 3.1.1](http://jekyllrb.com/docs/installation/)
---

<!-- Required first line cannot be in a liquid Template due to Jekyll 'tag was never closed' bug
 bug info:: http://blog.slaks.net/2013-08-09/jekyll-tag-was-never-closed/
-->




{% capture markdown_content_block %}



{% endcapture %}


{% include collapsable.html title="Install the Software" content = markdown_content_block %}
