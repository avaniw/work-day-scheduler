(document).readyState(function () {

//var saveBtn= $('saveBtn');

saveBtn.on("click", function() {
    console.log("Clicky Clicky")
    var value =$(this).siblings(' .description').val()
    var time = $(this).parent().attr('id')
    console.log(value);
    console.log(time);
})