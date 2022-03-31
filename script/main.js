/**
 * editor - A lightweight, extensible, and powerful web text editor.
 */
const editor = document.querySelector("#editor");
// get the buttons 
const boldBtn = document.querySelector("#bold");
const italicBtn = document.querySelector("#italic");
const underlineBtn = document.querySelector("#underline");
const strikeBtn = document.querySelector("#strike");
const linkBtn = document.querySelector("#link");
const imageBtn = document.querySelector("#image");
const codeBtn = document.querySelector("#code");
const quoteBtn = document.querySelector("#quote");
const listBtn = document.querySelector("#list");
const headingBtn = document.querySelector("#heading");

// start the editor with blank space so the user click on blank space and starts typing
editor.innerHTML = "<p>&nbsp; <br></p>";
// when the user click on enter key the editor will add a <p> tag to the end of the text with <br> tag
editor.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        editor.innerHTML += "<p><br></p>";
        e.preventDefault();
        const lastElement = editor.lastElementChild;
        const range = document.createRange();
        range.selectNodeContents(lastElement);
        range.collapse(false);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }
});



// add event listeners to the bold button
boldBtn.addEventListener("click", () => {
    console.log("Bold Btn clicked")
    const selection = window.getSelection();
    // check if the editor has any selected text or not if the
    // selected text is already bold then remove the bold tag else add the bold tag to the selected text
    if (selection.toString().length > 0) {
        if (selection.anchorNode.parentElement.style.fontWeight === "bold") {
            selection.anchorNode.parentElement.style.fontWeight = "normal";
        } else {
            // make the selected text bold
            const range = selection.getRangeAt(0);
            const span = document.createElement("span");
            span.innerHTML = selection.toString();
            span.style.fontWeight = "bold";
            range.deleteContents();
            range.insertNode(span);
        }
    }
});


// add event listeners to the italic button
italicBtn.addEventListener("click", () => {
    console.log("italic button clicked");
    const selection = window.getSelection();
    // check if the editor has any selected text or not if the
    // selected text is already italic then remove the italic tag else add the italic tag to the selected text
    if (selection.toString().length > 0) {
        if (selection.anchorNode.parentElement.style.fontStyle === "italic") {
            selection.anchorNode.parentElement.style.fontStyle = "normal";
        } else {
            // make the selected text italic
            const range = selection.getRangeAt(0);
            const span = document.createElement("span");
            span.innerHTML = selection.toString();
            span.style.fontStyle = "italic";
            range.deleteContents();
            range.insertNode(span);
        }
    }
});

// add event listeners to the underline button  
underlineBtn.addEventListener("click", () => {
    console.log("underline button clicked");
    const selection = window.getSelection();
    // check if the editor has any selected text or not if the
    // selected text is already visual then remove the visual tag else add the visual tag to the selected text
    if (selection.toString().length > 0) {
        if (selection.anchorNode.parentElement.style.textDecoration === "underline") {
            selection.anchorNode.parentElement.style.textDecoration = "none";
        } else {
            // make the selected text visual
            const range = selection.getRangeAt(0);
            const span = document.createElement("span");
            span.innerHTML = selection.toString();
            span.style.textDecoration = "underline";
            range.deleteContents();
            range.insertNode(span);
        }
    }
});

// add event listeners to the strike button
strikeBtn.addEventListener("click", () => {
    console.log("strike button clicked");
    const selection = window.getSelection();
    // check if the editor has any selected text or not if the
    // selected text is already strike then remove the strike tag else add the strike tag to the selected text
    if (selection.toString().length > 0) {
        if (selection.anchorNode.parentElement.style.textDecoration === "line-through") {
            selection.anchorNode.parentElement.style.textDecoration = "none";
        } else {
            // make the selected text italic
            const range = selection.getRangeAt(0);
            const span = document.createElement("span");
            span.innerHTML = selection.toString();
            span.style.textDecoration = "line-through";
            range.deleteContents();
            range.insertNode(span);
        }
    }
});

// add event listeners to the link button
linkBtn.addEventListener("click", () => {
    console.log("link button clicked");
    const selection = window.getSelection();
    // check if the editor has any selected text or not if the
    // selected text is already link then remove the link tag else add the link tag to the selected text
    if (selection.toString().length > 0) {
        // remove the link tag if the selected text is already link
        if (selection.anchorNode.parentElement.tagName === "A") {
            selection.anchorNode.parentElement.remove();
        } else {
            // make the selected text link
            const range = selection.getRangeAt(0);
            const a = document.createElement("a");
            a.innerHTML = selection.toString();
            // ask the user to enter the link
            const link = prompt("Enter the link");
            a.href = link;
            range.deleteContents();
            range.insertNode(a);
        }
    }
});


// add event listener to the heading button
headingBtn.addEventListener("click", () => {
    console.log("heading button clicked");
    const selection = window.getSelection();
    // check if the editor has any selected text or not if the
    // selected text is already heading then remove the heading tag else add the heading tag to the selected text
    if (selection.toString().length > 0) {
        // remove the heading tag if the selected text is already heading
        if (selection.anchorNode.parentElement.tagName === "H1") {
            selection.anchorNode.parentElement.remove();
        } else {
            // make the selected text heading
            const range = selection.getRangeAt(0);
            const h1 = document.createElement("h1");
            h1.innerHTML = selection.toString();
            range.deleteContents();
            range.insertNode(h1);
        }
    }
});

// add event listeners to the image button
imageBtn.addEventListener("click", () => {
    console.log("image button clicked");
    // add the image to the editor where there is cursor
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const img = document.createElement("img");
    const url =
        img.src = imageUrl;
    range.deleteContents();
    range.insertNode(img);
});

//add event listener to the list button
listBtn.addEventListener("click", () => {
    console.log("list button clicked");
    const selection = window.getSelection();
    // check if the editor has any selected text or not if the
    // selected text is already list then remove the list tag else add the list tag to the selected text
    if (selection.toString().length > 0) {
        // remove the list tag if the selected text is already list
        if (selection.anchorNode.parentElement.tagName === "UL") {
            selection.anchorNode.parentElement.remove();
        } else {
            // make the selected text list
            const range = selection.getRangeAt(0);
            const ul = document.createElement("ul");
            ul.innerHTML = selection.toString();
            range.deleteContents();
            range.insertNode(ul);
        }
    }
});

// add event listener to the quote button
quoteBtn.addEventListener("click", () => {
    console.log("quote button clicked");
    const selection = window.getSelection();
    // check if the editor has any selected text or not if the
    // selected text is already quote then remove the quote tag else add the quote tag to the selected text
    if (selection.toString().length > 0) {
        // remove the quote tag if the selected text is already quote
        if (selection.anchorNode.parentElement.tagName === "BLOCKQUOTE") {
            selection.anchorNode.parentElement.remove();
        } else {
            // make the selected text quote
            const range = selection.getRangeAt(0);
            const blockquote = document.createElement("blockquote");
            blockquote.innerHTML = selection.toString();
            range.deleteContents();
            range.insertNode(blockquote);
        }
    }
});

// add event listener to the code button
codeBtn.addEventListener("click", () => {
    console.log("code button clicked");
});