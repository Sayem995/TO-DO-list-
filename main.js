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
$('input').keypress(function(event){
  if(event.which === 13){
    var task = $('input').val()
    $('ul').append('<li><span> ~ </span>'+ task + '</li>')
    $('input').val()
  }
})
