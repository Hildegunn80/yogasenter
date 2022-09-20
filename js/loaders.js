
/*
    Load common resources.
    Depends on jQuery
*/
$(
    function() {
        console.log("Footer loader...");
        
        $("#loadedFooter").load("footer.html");
        //$("#loadedHeader").load("header.html");
    }
);
