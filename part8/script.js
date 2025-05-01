// example 1
// this changes the paragraph on clicking the button
document.getElementById("ChangeTextButton").addEventListener('click', function(){
    let paragraph = document.getElementById("myParagraph");
    console.log(paragraph.textContent);
    paragraph.textContent = "So the text has changed..ok?"
    console.log(paragraph.textContent);
})

// example 2
// This highlights the first city on clicking the button
document.getElementById("highlightFirstCity").addEventListener('click', () => {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight"); 
    // console.log(element);
})


  