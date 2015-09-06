var $ = require('jq'),
    $doc = $(document);

var navAs = $('nav a');
$doc.on('click', 'nav a', function () {
    navAs.removeClass('selected');
    $(this).addClass('selected');
});