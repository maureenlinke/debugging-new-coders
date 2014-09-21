$(document).ready(function() {
 
    $('#schools-table').dataTable( {
        "data": datasets,
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
