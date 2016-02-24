
var all_collapsed = false;
var p_collapsed = false;


$( document ).ready(function() {
  $('#collapse-all-btn').on( "click", collapseAllHandler );
  $('#collapse-p-btn').on( "click", collapseParagraphHandler );

  $('.collapsable').on( "click", expandOneCollapsable );
});

function collapseAllHandler(){
  if(all_collapsed){ //expand
    $('.collapsable').removeClass(" collapsed ");
    $('#collapse-all-btn').text('Collapse All');

    $('.collapsable-content').show();
  }else{ //collapse
    $('.collapsable').addClass(" collapsed ");
    $('#collapse-all-btn').text('Expand All');


    $('.collapsable-content').hide();
  }
  all_collapsed = !all_collapsed;
}

function collapseParagraphHandler(){
  if(p_collapsed){ //expand
    $('#collapse-p-btn').text('Advanced Users');

    $('p').show();

  }else{ //collapse
    $('#collapse-p-btn').text('Beginner Users');

    //Using markdown, <img> tags are auto wrapped in <p> tags. I want to show images though. Thus do not hide the <p> if there is an image within it
    $('p').not(':has(img)').hide();

  }
  p_collapsed = !p_collapsed;
}

function expandOneCollapsable(){
  $(this).removeClass("collapsed");
  
  $(this).find(".collapsable-content").show();
}
