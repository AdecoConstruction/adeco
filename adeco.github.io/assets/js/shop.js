const encodeDict = {
    'a' : '7',
    'b' : 'n',
    'c' : 'p',
    'd' : '.',
    'e' : '6',
    'f' : 'u',
    'g' : 'V',
    'h' : 'x',
    'i' : 'H',
    'j' : 'C',
    'k' : 'R',
    'l' : '1',
    'm' : 'P',
    'n' : 'd',
    'o' : 'g',
    'p' : 'k',
    'q' : 'L',
    'r' : '4',
    's' : 'q',
    't' : 'S',
    'u' : '8',
    'v' : 'v',
    'w' : 'T',
    'x' : 'e',
    'y' : 'Z',
    'z' : 'f',
    'A' : 'y',
    'B' : 'Q',
    'C' : 'l',
    'D' : 'J',
    'E' : '9',
    'F' : '_',
    'G' : 'i',
    'H' : 'o',
    'I' : 't',
    'J' : 'h',
    'K' : 'E',
    'L' : 'W',
    'M' : 'X',
    'N' : '0',
    'O' : 'G',
    'P' : 'z',
    'Q' : 'b',
    'R' : '-',
    'S' : 'a',
    'T' : 'D',
    'U' : 'j',
    'V' : 'Y',
    'W' : 'U',
    'X' : 'r',
    'Y' : 's',
    'Z' : 'm',
    '1' : '5',
    '2' : 'I',
    '3' : 'w',
    '4' : '2',
    '5' : 'c',
    '6' : 'N',
    '7' : 'K',
    '8' : 'A',
    '9' : '3',
    '0' : 'O',
    '-' : 'M',
    '_' : 'F',
    '.' : 'B',
};

function encode(data) {
    let retString = "";
    for (let i = 0; i < data.length; i++) {
        retString = retString.concat(encodeDict[data[i]]);
    }
    return retString
}

// Runs from the shop page to store the product which the user clicked
function checkout(product) {

    // Give the URL a parameter with the product name and load the checkout page
    const encodedData = encodeURIComponent(encode(product));
    window.location.href = 'productcheckout.html?product=' + encodedData;
}

function getTitleOpacity(scroll) {
    if (scroll > 800) return 0;
    return 1 - (scroll / 800);
}

function getArrowOpacity(scroll) {
    if (scroll > 400) return 0;
    return 1 - (scroll / 400);
}

function getTitleOffset(scroll) {
    if (scroll > 800) return "100px";

    let base = 100;

    base += (1 - (scroll / 800)) * 200;

    return base.toString().concat("px");
}

function getArrowOffset(scroll) {
    if (scroll > 400) return "500px";

    let offset = (scroll / 400) * 500;

    return offset.toString().concat("px");
}

// Makes the Title text and the down arrows fade out when the user scrolls
document.addEventListener('DOMContentLoaded', function () {
    const pageTitle = document.getElementById('shopTitle');
    const arrow1 = document.getElementById('arrow1');
    const arrow2 = document.getElementById('arrow2');
    const arrow3 = document.getElementById('arrow3');
    pageTitle.style.opacity = 1;
    pageTitle.style.top = '100px'; // or the desired initial position

    window.addEventListener('scroll', function () {
        const currentScrollPosition = window.scrollY;

        // Get opacity and vertical offset values for title and arrows
        let titleOpacity = getTitleOpacity(currentScrollPosition);
        let titleOffset = getTitleOffset(currentScrollPosition);
        let arrowOpacity = getArrowOpacity(currentScrollPosition);
        let arrowOffset = getArrowOffset(currentScrollPosition);

        // Set the style values
        pageTitle.style.opacity = titleOpacity;
        pageTitle.style.top = titleOffset;
        arrow1.style.opacity = arrowOpacity;
        arrow1.style.top = arrowOffset;
        arrow2.style.opacity = arrowOpacity;
        arrow2.style.top = arrowOffset;
        arrow3.style.opacity = arrowOpacity;
        arrow3.style.top = arrowOffset;
    });
});

function nothing() {
    if (currentScrollPosition != lastScrollPosition) {

        let titleOpacity = getTitleOpacity(currentScrollPosition);
        let titleOffset = getTitleOffset(currentScrollPosition);

        let arrowOpacity = getArrowOpacity(currentScrollPosition);
        let arrowOffset = getArrowOffset(currentScrollPosition);

        pageTitle.innerHTML = currentScrollPosition;
            
        // Move and fade out title and arrows
        pageTitle.style.opacity = titleOpacity;
        pageTitle.style.top = titleOffset;
        // arrow1.style.opacity = arrowOpacity;
        // arrow1.style.top = arrowOffset;
        // arrow2.style.opacity = arrowOpacity;
        // arrow2.style.top = arrowOffset;
        // arrow3.style.opacity = arrowOpacity;
        // arrow3.style.top = arrowOffset;
    }
}