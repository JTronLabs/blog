
var all_collapsed = false;
var p_collapsed = false;

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('collapse-all-btn').addEventListener('click', collapseAllHandler, false);
  document.getElementById('collapse-p-btn').addEventListener('click', collapseParagraphHandler, false);

  registerListenerToClass('collapsable',expandCollapsableOnClick,'click');
});

function collapseAllHandler(){
  if(p_collapsed){ collapseParagraphHandler(); }//need to reset with respect to paragraphs

  var btn = document.getElementById('collapse-all-btn');
  if(all_collapsed){ //expand
    doToClassObjects('collapsable',removeClass('collapsed'));
    btn.innerHTML = 'Collapse<br/>All';
    btn.title = 'Hide all content';

    doToClassObjects('collapsable-content',show);
  }else{ //collapse
    doToClassObjects('collapsable',addClass('collapsed'));
    btn.innerHTML = 'Expand<br/>All';
    btn.title = 'Show all content';

    doToClassObjects('collapsable-content',hide);
  }
  all_collapsed = !all_collapsed;
}

function collapseParagraphHandler(){
  if(all_collapsed){ collapseAllHandler(); }//need to reset with respect to all content

  var btn = document.getElementById('collapse-p-btn');
  if(p_collapsed){ //expand
    btn.innerHTML = 'Hide<br/>Background';
    btn.title = 'Hide paragraphs';

    doToTags('p',show);

  }else{ //collapse
    btn.innerHTML = 'Show<br/>Background';
    btn.title = 'Show paragraphs';

    //Using markdown, <img> tags are auto wrapped in <p> tags. I want to show images though. Thus do not hide the <p> if there is an image within it
    //$('p').not(':has(img)').hide();
    doToTags('p',hide);
    doToChildren(document.getElementById('introduction'),show);//leave the intro visible so the buttons dont move around on the screen (they are below the intro)
  }
  p_collapsed = !p_collapsed;
}

function expandCollapsableOnClick(){
  removeClass("collapsed")(this);

  var showContent = function(domObj){
    if( hasClass('collapsable-content')(domObj) ){
      show(domObj);
    }
  };
  doToChildren(this,showContent);
}









/**
  * Utitilty functions that are basically just my simplified jQuery
  */

function removeClass(className){
  //save that class name, and return a function usable on DOM objects
  return function(domObj){
    domObj.className = domObj.className.replace(className,'');
  }
}
function addClass(className){
  //save that class name, and return a function usable on DOM objects
  return function(domObj){
    domObj.className += " "+className+" ";
  }
}
function hasClass(className) {
  return function(domObj){
    return (""+domObj.className).split(" ").indexOf(className) >= 0;
  }
};

function show(domObj){ //not quite what jQuery does, but this works
  domObj.style.display = 'block';
}
function hide(domObj){
  domObj.style.display = 'none';
}

function registerListenerToClass(className,listenerFunction,listenerType){
    var registerClickListener = function(domObj){
      domObj.addEventListener(listenerType, listenerFunction, false);
    };
    doToClassObjects(className,registerClickListener);
}

function doToClassObjects(className,actionToDo){
  var classObjs = document.getElementsByClassName(className);

  for (var i = classObjs.length-1; i >=0; i--) {
    actionToDo(classObjs[i]);
  }
}

function doToTags(tagName,actionToDo){
  var tags = document.getElementsByTagName(tagName);

  for(var i = 0; i < tags.length; i++) {
    actionToDo(tags[i]);
  }
}

function doToChildren(domObj,actionToDo){
  var children = domObj.children;
  for (var i = 0; i < children.length; i++) {
    if(domObj != null){
      actionToDo(children[i]);
      doToChildren(children[i],actionToDo);
    }
  }
}
