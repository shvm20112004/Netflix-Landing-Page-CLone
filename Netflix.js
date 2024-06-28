var collapsible = document.getElementsByClassName("collapsible");
var part6 = document.querySelector(".part6"); 
var i;

for (i = 0; i < collapsible.length; i++) {
    collapsible[i].addEventListener("click", function() 
    {
        for (var j = 0; j < collapsible.length; j++) 
        {
            if (collapsible[j] !== this) 
            {
                collapsible[j].classList.remove("active");
                collapsible[j].nextElementSibling.style.display = "none";
            }
        }
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") 
        {
            content.style.display = "none";
            part6.style.height = "auto"; 
        } else {
            content.style.display = "block";
            part6.style.height = "1100px"; 
        }
    });
}
