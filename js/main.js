
var all_collapsed = false;
var p_collapsed = false;


$( document ).ready(function() {
  $('#collapse-all-btn').on( "click", collapseAllHandler );
  $('#collapse-p-btn').on( "click", collapseParagraphHandler );

  $('.collapsable').on( "click", expandCollapsableOnClick );
});

function collapseAllHandler(){
  if(p_collapsed){ collapseParagraphHandler(); }//need to reset with respect to paragraphs

  if(all_collapsed){ //expand
    $('.collapsable').removeClass(" collapsed ");
    $('#collapse-all-btn').text('Collapse All');
    $('#collapse-all-btn').prop('title', 'Hide all content');

    $('.collapsable-content').show();
  }else{ //collapse
    $('.collapsable').addClass(" collapsed ");
    $('#collapse-all-btn').text('Expand All');
    $('#collapse-all-btn').prop('title', 'Show all content');


    $('.collapsable-content').hide();
  }
  all_collapsed = !all_collapsed;
}

function collapseParagraphHandler(){
  if(all_collapsed){ collapseAllHandler(); }//need to reset with respect to all content

  if(p_collapsed){ //expand
    $('#collapse-p-btn').text('Advanced Users');
    $('#collapse-p-btn').prop('title', 'Hide paragraphs');

    $('p').show();

  }else{ //collapse
    $('#collapse-p-btn').text('Beginner Users');
    $('#collapse-p-btn').prop('title', 'Show paragraphs');

    //Using markdown, <img> tags are auto wrapped in <p> tags. I want to show images though. Thus do not hide the <p> if there is an image within it
    $('p').not(':has(img)').hide();

  }
  p_collapsed = !p_collapsed;
}

function expandCollapsableOnClick(){
  $(this).removeClass("collapsed");

  $(this).find(".collapsable-content").show();
}
