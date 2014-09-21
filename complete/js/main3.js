$(document).ready(function() {
    $('#schools-table').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="example"></table>' );
 
    $('#schools-table').dataTable( {
        "data": dataset,
        "columns": [
            { "title": "County" },
            { "title": "Area name" },
            { "title": "Region " },
            { "title": "No. Overweight", "class": "center" },
            { "title": "Pct. Overweight", "class": "center" },
            { "title": "No. Obese", "class": "center" },
            { "title": "Pct. Obese", "class": "center" }
        ]
    } );   
} );
