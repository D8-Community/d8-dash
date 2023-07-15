/*
Template Name: D8 Design
Author: D8 Design
Website: https://D8 Design.com/
Contact: D8 Design@gmail.com
File: Table responsive
*/

$(function() {
    $('.table-responsive').responsiveTable({
        addDisplayAllBtn: 'btn btn-secondary'
    });

    $('.btn-toolbar [data-toggle=dropdown]').attr('data-bs-toggle', "dropdown");
});