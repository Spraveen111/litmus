const textElement = document.getElementById("text");

// Add a mouseover event listener to the text element
textElement.addEventListener("mouseover", () => {
    // Add the 'round-bg' class to the first two letters
    textElement.innerHTML = `<span class="round-bg">${textElement.textContent.slice(0, 2)}</span>${textElement.textContent.slice(2)}`;
});

// Add a mouseout event listener to remove the round background
textElement.addEventListener("mouseout", () => {

    textElement.innerHTML = `HOME`;
});

const textElement4 = document.getElementById("text4");

// Add a mouseover event listener to the text element
textElement4.addEventListener("mouseover", () => {
    // Add the 'round-bg' class to the first two letters
    textElement4.innerHTML = `<span class="round-bg">${textElement4.textContent.slice(0, 2)}</span>${textElement4.textContent.slice(2)}`;
});

// Add a mouseout event listener to remove the round background
textElement4.addEventListener("mouseout", () => {
    // Remove the 'round-bg' class and restore the original text
    textElement4.innerHTML = `ABOUT`;
});


const textElement1 = document.getElementById("text1");

// Add a mouseover event listener to the text element
textElement1.addEventListener("mouseover", () => {
    // Add the 'round-bg' class to the first two letters
    textElement1.innerHTML = `<span class="round-bg">${textElement1.textContent.slice(0, 2)}</span>${textElement1.textContent.slice(2)}`;
});

// Add a mouseout event listener to remove the round background
textElement1.addEventListener("mouseout", () => {
    // Remove the 'round-bg' class and restore the original text
    textElement1.innerHTML = `HCX`;
});






const textElement2 = document.getElementById("text2");

// Add a mouseover event listener to the text element
textElement2.addEventListener("mouseover", () => {
    // Add the 'round-bg' class to the first two letters
    textElement2.innerHTML = `<span class="round-bg">${textElement2.textContent.slice(0, 2)}</span>${textElement2.textContent.slice(2)}`;
});

// Add a mouseout event listener to remove the round background
textElement2.addEventListener("mouseout", () => {
    // Remove the 'round-bg' class and restore the original text
    textElement2.innerHTML = `OTHER INITIATIVES`;
});

const textElement3 = document.getElementById("text3");

// Add a mouseover event listener to the text element
textElement3.addEventListener("mouseover", () => {
    // Add the 'round-bg' class to the first two letters
    textElement3.innerHTML = `<span class="round-bg">${textElement3.textContent.slice(0, 2)}</span>${textElement3.textContent.slice(2)}`;
});

// Add a mouseout event listener to remove the round background
textElement3.addEventListener("mouseout", () => {
    // Remove the 'round-bg' class and restore the original text
    textElement3.innerHTML = `HOW WE WORK`;
});