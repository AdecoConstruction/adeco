const decodeDict = {
    '7' : 'a',
    'n' : 'b',
    'p' : 'c',
    '.' : 'd',
    '6' : 'e',
    'u' : 'f',
    'V' : 'g',
    'x' : 'h',
    'H' : 'i',
    'C' : 'j',
    'R' : 'k',
    '1' : 'l',
    'P' : 'm',
    'd' : 'n',
    'g' : 'o',
    'k' : 'p',
    'L' : 'q',
    '4' : 'r',
    'q' : 's',
    'S' : 't',
    '8' : 'u',
    'v' : 'v',
    'T' : 'w',
    'e' : 'x',
    'Z' : 'y',
    'f' : 'z',
    'y' : 'A',
    'Q' : 'B',
    'l' : 'C',
    'J' : 'D',
    '9' : 'E',
    '_' : 'F',
    'i' : 'G',
    'o' : 'H',
    't' : 'I',
    'h' : 'J',
    'E' : 'K',
    'W' : 'L',
    'X' : 'M',
    '0' : 'N',
    'G' : 'O',
    'z' : 'P',
    'b' : 'Q',
    '-' : 'R',
    'a' : 'S',
    'D' : 'T',
    'j' : 'U',
    'Y' : 'V',
    'U' : 'W',
    'r' : 'X',
    's' : 'Y',
    'm' : 'Z',
    '5' : '1',
    'I' : '2',
    'w' : '3',
    '2' : '4',
    'c' : '5',
    'N' : '6',
    'K' : '7',
    'A' : '8',
    '3' : '9',
    'O' : '0',
    'M' : '-',
    'F' : '_',
    'B' : '.',
};

function decode(data) {
    let retString = "";
    for (let i = 0; i < data.length; i++) {
        retString = retString.concat(decodeDict[data[i]]);
    }
    return retString
}

// Scroll animation functions
function getNameOffset(scroll) {
    if (scroll > 800) return (-50 - (scroll - 800)).toString().concat("px");
    return (150 - (scroll / 4)).toString().concat("px");
}

function getDescOffset(scroll) {
    if (scroll > 800) return (250 - (scroll - 800)).toString().concat("px");
    return (450 - (scroll / 4)).toString().concat("px");
}

function getPriceOffset(scroll) {
    if (scroll > 800) return (175 - (scroll - 800)).toString().concat("px");
    return (375 - (scroll / 4)).toString().concat("px");
}

function getAddCartOffset(scroll) {
    if (scroll > 800) return "1500px";
    return ((900 + (scroll)) - (scroll / 4)).toString().concat("px");
}

function getImgOffset(scroll) {
    if (scroll > 800) return "950px";
    return (scroll + 150).toString().concat("px");
}

document.addEventListener('DOMContentLoaded', function () {
    
    // Fetches the product which was stored on the shop page now that the user is on the checkout page
    // Get stored string
    const urlParams = new URLSearchParams(window.location.search);
    const product = decode(urlParams.get('product'));

    // Find the elements which will be changed
    const productName = document.getElementById('productName');
    const productDesc = document.getElementById('productDescription');
    const productPrice = document.getElementById('productPrice');
    const productImg = document.getElementById('productImage');

    // Load the page based on the product
    switch (product) {
        case 'simpleCrown':
            productName.innerHTML = "Simple Crown";
            productDesc.innerHTML = "A versatile, minimalist choice, the Simple Crown molding adds subtle elegance to any room, blending seamlessly with both classic and modern styles.";
            productPrice.innerHTML = "";
            productImg.src = "assets/img/simpleCrown.webp";
            break;
        case 'artDeco':
            productName.innerHTML = "Art Deco Moulding";
            productDesc.innerHTML = "This molding style features bold, geometric lines and intricate detailing, bringing a touch of vintage glamour and sophistication to any space.";
            productPrice.innerHTML = "";
            productImg.src = "assets/img/artDeco.jpg";
            break;
        case 'ceilingMoulding':
            productName.innerHTML = "Ceiling Moulding";
            productDesc.innerHTML = "A sophisticated choice, this ceiling-only molding creates a subtle floating effect, perfect for adding modern elegance and indirect lighting to any space.";
            productPrice.innerHTML = "";
            productImg.src = "assets/img/ceilingMoulding.jpg";
            break;
        case 'floorMoulding':
            productName.innerHTML = "Floor Moulding";
            productDesc.innerHTML = "A refined finishing touch, Floor Molding seamlessly bridges the floor and wall, enhancing room definition with clean, polished lines.";
            productPrice.innerHTML = "";
            productImg.src = "assets/img/floorMoulding.jpg.webp";
            break;
        case 'battery5000':
            productName.innerHTML = "5000 mAh Battery";
            productDesc.innerHTML = "This battery is slightly bigger than our 3000 mAh option, and will last ~20 hours of use. This is a great option for anyone as it gives the best balance between price and charge.";
            productPrice.innerHTML = "$79.99";
            productImg.src = "assets/img/battery.png";
            break;
        case 'battery10000':
            productName.innerHTML = "10000 mAh Battery";
            productDesc.innerHTML = "This is our biggest battery avaliable. The charge will last ~40 hours of use, so this is the perfect option for someone who is not able to charge their phone everyday.";
            productPrice.innerHTML = "$109.99";
            productImg.src = "assets/img/battery.png";
            break;
        case 'display480x800':
            productName.innerHTML = "480 x 800 Display";
            productDesc.innerHTML = "This is our lowest resolution display avaliable. This is the perfect option for someone who uses their phone primarily for texting/calling and not streaming video.";
            productPrice.innerHTML = "$69.99";
            productImg.src = "assets/img/display.png";
            break;
        case 'display720x1280':
            productName.innerHTML = "720 x 1280 Display";
            productDesc.innerHTML = "This is the standard phone resolution. Great for anyone who doesnt need a super high res display but still wants to stream videos.";
            productPrice.innerHTML = "$99.99";
            productImg.src = "assets/img/display.png";
            break;
        case 'display1440x2560':
            productName.innerHTML = "1440 x 2560 Display";
            productDesc.innerHTML = "This is our super high res display. With this, anything you are looking at will appear super crisp and clean. This display pairs perfectly with our 40 MegaPixel camera.";
            productPrice.innerHTML = "$149.99";
            productImg.src = "assets/img/display.png";
            break;
    }

    // Add scroll animations for stuff
    const name = document.getElementById('productNameContainer');
    const desc = document.getElementById('productDescriptionContainer');
    const price = document.getElementById('productPriceContainer');
    const button = document.getElementById('productAddCart');
    const img = document.getElementById('productPictureContainer');

    window.addEventListener('scroll', function () {
        const currentScrollPosition = window.scrollY;

        // Get vertical offset values for elements
        let nameOffset = getNameOffset(currentScrollPosition);
        let descOffset = getDescOffset(currentScrollPosition);
        let priceOffset = getPriceOffset(currentScrollPosition);
        let buttonOffset = getAddCartOffset(currentScrollPosition);
        let imgOffset = getImgOffset(currentScrollPosition);

        // Set the style values
        name.style.top = nameOffset;
        desc.style.top = descOffset;
        price.style.top = priceOffset;
        button.style.top = buttonOffset;
        img.style.top = imgOffset;
    });
});