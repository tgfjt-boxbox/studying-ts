/// <reference path="../typings/jquery/jquery.d.ts" />

$.ajax({
    url: "/example",
    success: function(result) {
        console.log(result);
    }
});