// Custom scripts
function searchResults() {

    var currentItem = null;
    var search = document.getElementById("search");
    var results = document.getElementById("search-results");

    if (search === null) {
        return;
    }

    function removeActive() {
        for (i = 0; i < results.children.length; i++) {
            results.children[i].classList.remove("uk-background-muted");
        }
    }

    // Detect all clicks on the document
    document.addEventListener("click", function(event) {

        var isClickSearch = false;
        var isClickResults = false;

        if (search !== null) {
            isClickSearch = search.contains(event.target);
        }

        if (results !== null) {
            isClickResults = results.contains(event.target);
        }

        if (isClickSearch) {
            results.style.display = "block";
        }        

        if (!isClickResults && !isClickSearch) {
            results.style.display = "none";
        }        
        
    });    

    results.addEventListener("mouseover", function(event) {

        removeActive();
        event.target.parentElement.classList.add("uk-background-muted");
        currentItem = null;

    });

    results.addEventListener("mouseout", function(event) {
        event.target.parentElement.classList.remove("uk-background-muted");
    });


    search.addEventListener("keyup", function(event) {

        var resultItems = results.children;
        var resultCount = results.children.length;
                                
        if (event.keyCode === 40) {

            if (currentItem < (resultCount - 1)) {
                if (currentItem === null) {
                    currentItem = 0;
                } else {
                    removeActive();
                    currentItem++;
                }
                removeActive();
                resultItems[currentItem].classList.add("uk-background-muted");
            }
            
        } else if (event.keyCode === 38) {

            if (currentItem > 0) {
                if (currentItem === null) {
                    currentItem = 0;
                } else {
                    removeActive();
                    currentItem--;
                }
                removeActive();
                resultItems[currentItem].classList.add("uk-background-muted");
            }

        } else if (event.keyCode === 13) {

            resultItems[currentItem].children[0].click();

        }

    });

}
