/**
 * Created by 142773A on 11/26/2015.
 */
$(document).ready(function() {
    var table = $('#example').DataTable( {
        "ajax": {
            url: "/book.json",
            dataSrc: ''
        },
        "columns" : [
            {"data" : "title"},
            {"data" : "author"},
            {"data" : "price"},
            {"data" : "quantity"}
        ]

    } );
} );