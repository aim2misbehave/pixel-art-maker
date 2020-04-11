// Select color input
// Select size input
var height, width, color;
// When size is submitted by the user, call makeGrid()
//find the id's in the HTML
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    let height = $('#inputHeight').val();
    let width = $('#inputWidth').val();
    makeGrid(height, width);
})
//make the grid table here
function makeGrid(x, y) {
    $('tr').remove();
    for (var n = 1; n <= x; n++) {
        $('#pixelCanvas').append('<tr id = table' + n + '></tr>');
        for (var m = 1; m <= y; m++) {
          $('#table' + n).append('<td></td');
        }
    }
    //colors in the cells by user
    $('td').click(function addColor() {
        let color = $('#colorPicker').val();

        if ($(this).attr('style') && 'style' === color) {
            $(this).removeAttr('style');
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}
