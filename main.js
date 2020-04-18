// Line through functionality
$('li').click(function(){

  $(this).toggleClass('done')
})




// Delete functionality
$('span').click(function(event){
  $(this).parent().fadeOut(100, function(){
    $(this).remove()
  })

  event.stopPropagation()
})




// add functionality
