// Create the necessary DOM elements
const html = document.createElement('html');
const head = document.createElement('head');
const body = document.createElement('body');

// Set the document structure
html.appendChild(head);
html.appendChild(body);

// Set the document properties
const charsetMeta = document.createElement('meta');
charsetMeta.setAttribute('charset', 'UTF-8');
head.appendChild(charsetMeta);

const viewportMeta = document.createElement('meta');
viewportMeta.setAttribute('name', 'viewport');
viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0');
head.appendChild(viewportMeta);

const title = document.createElement('title');
title.textContent = 'GOGO COFFEE';
head.appendChild(title);

const bootstrapLink = document.createElement('link');
bootstrapLink.setAttribute('rel', 'stylesheet');
bootstrapLink.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');
head.appendChild(bootstrapLink);

const style = document.createElement('style');
style.textContent = `
    .center-image {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .nav-item {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: large;
        color: beige;
    }
    .nav-link {
        color: black;
    }
    .carousel-item {
        align-items: center;
    }
    .card {
        border: 10px; border-color: gray;
        padding: 20px;
    }
    .btn-primary {
        width: 120px; height: 40px;
    }
`;
head.appendChild(style);

// Create the content
const centerImageDiv = document.createElement('div');
centerImageDiv.classList.add('center-image');
body.appendChild(centerImageDiv);

const logoImg = document.createElement('img');
logoImg.setAttribute('src', 'https://cdn.icon-icons.com/icons2/2699/PNG/512/starbucks_logo_icon_170705.png');
logoImg.setAttribute('width', '310px');
logoImg.setAttribute('height', '120px');
logoImg.setAttribute('alt', '커피 이미지');
centerImageDiv.appendChild(logoImg);

const hr1 = document.createElement('hr');
body.appendChild(hr1);

const navList = document.createElement('ul');
navList.classList.add('nav', 'justify-content-center');
body.appendChild(navList);

const navItems = [
    { label: 'Home', href: 'https://eom48.github.io/project/' },
    { label: 'About Us', href: 'https://eom48.github.io/project/product.html' },
    { label: 'Product', href: 'https://eom48.github.io/project/product.html' },
    { label: 'Order list', href: 'https://eom48.github.io/project/product.html' }
];

for (const item of navItems) {
    const navItem = document.createElement('li');
    navItem.classList.add('nav-item');
    navList.appendChild(navItem);

    const navLink = document.createElement('a');
    navLink.classList.add('nav-link');
    navLink.setAttribute('href', item.href);
    navLink.textContent = item.label;
    navItem.appendChild(navLink);
}

const hr2 = document.createElement('hr');
body.appendChild(hr2);

const carouselDiv = document.createElement('div');
carouselDiv.setAttribute('id', 'carouselExampleCaptions');
carouselDiv.classList.add('carousel', 'slide');
body.appendChild(carouselDiv);

const carouselIndicators = document.createElement('div');
carouselIndicators.classList.add('carousel-indicators');
carouselDiv.appendChild(carouselIndicators);

const carouselItems = [
    {
        imageUrl: 'https://coffee4m.com/wp-content/uploads/2020/04/coffee-917613_1920.jpg',
        title: '신선한 원두만 판매하겠다는 우리의 다짐',
        caption: '산지에서 생두를 콜드체인을 활용하여 제공받아 가공합니다.'
    },
    {
        imageUrl: 'https://www.dongsuh.co.kr/2017/images/page/03_mediaCenter/img_class_2_3_2_1.jpg',
        title: '신선한 원두만 판매하겠다는 우리의 다짐',
        caption: '생두를 발효시켜 겉껍질을 제거하고 청정지하수로 세척합니다.'
    },
    {
        imageUrl: 'https://static5.depositphotos.com/1000302/503/i/600/depositphotos_5039282-stock-photo-roasted-coffee-beans-background.jpg',
        title: '신선한 원두만 판매하겠다는 우리의 다짐',
        caption: '깨끗하게 세척된 원두를 특별한 레시피로 로스팅합니다.'
    }
];

for (let i = 0; i < carouselItems.length; i++) {
    const carouselIndicator = document.createElement('button');
    carouselIndicator.setAttribute('type', 'button');
    carouselIndicator.setAttribute('data-bs-target', '#carouselExampleCaptions');
    carouselIndicator.setAttribute('data-bs-slide-to', i.toString());
    if (i === 0) {
        carouselIndicator.classList.add('active');
        carouselIndicator.setAttribute('aria-current', 'true');
    }
    carouselIndicators.appendChild(carouselIndicator);
}

const carouselInner = document.createElement('div');
carouselInner.classList.add('carousel-inner');
carouselDiv.appendChild(carouselInner);

for (let i = 0; i < carouselItems.length; i++) {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (i === 0) {
        carouselItem.classList.add('active');
    }
    carouselInner.appendChild(carouselItem);

    const carouselImage = document.createElement('img');
    carouselImage.setAttribute('src', carouselItems[i].imageUrl);
    carouselImage.classList.add('d-block', 'w-100');
    carouselImage.setAttribute('alt', '...');
    carouselItem.appendChild(carouselImage);

    const carouselCaption = document.createElement('div');
    carouselCaption.classList.add('carousel-caption', 'd-none', 'd-md-block');
    carouselItem.appendChild(carouselCaption);

    const title = document.createElement('h1');
    title.textContent = carouselItems[i].title;
    carouselCaption.appendChild(title);

    const caption = document.createElement('p');
    caption.textContent = carouselItems[i].caption;
    carouselCaption.appendChild(caption);
}

const carouselPrevButton = document.createElement('button');
carouselPrevButton.setAttribute('type', 'button');
carouselPrevButton.setAttribute('data-bs-target', '#carouselExampleCaptions');
carouselPrevButton.setAttribute('data-bs-slide', 'prev');
carouselPrevButton.classList.add('carousel-control-prev');
carouselDiv.appendChild(carouselPrevButton);

const carouselPrevIcon = document.createElement('span');
carouselPrevIcon.classList.add('carousel-control-prev-icon');
carouselPrevIcon.setAttribute('aria-hidden', 'true');
carouselPrevButton.appendChild(carouselPrevIcon);

const carouselPrevLabel = document.createElement('span');
carouselPrevLabel.classList.add('visually-hidden');
carouselPrevLabel.textContent = 'Previous';
carouselPrevButton.appendChild(carouselPrevLabel);

const carouselNextButton = document.createElement('button');
carouselNextButton.setAttribute('type', 'button');
carouselNextButton.setAttribute('data-bs-target', '#carouselExampleCaptions');
carouselNextButton.setAttribute('data-bs-slide', 'next');
carouselNextButton.classList.add('carousel-control-next');
carouselDiv.appendChild(carouselNextButton);

const carouselNextIcon = document.createElement('span');
carouselNextIcon.classList.add('carousel-control-next-icon');
carouselNextIcon.setAttribute('aria-hidden', 'true');
carouselNextButton.appendChild(carouselNextIcon);

const carouselNextLabel = document.createElement('span');
carouselNextLabel.classList.add('visually-hidden');
carouselNextLabel.textContent = 'Next';
carouselNextButton.appendChild(carouselNextLabel);

const ratioDiv = document.createElement('div');
ratioDiv.classList.add('ratio', 'ratio-21x9');
body.appendChild(ratioDiv);

const youtubeVideo = document.createElement('iframe');
youtubeVideo.setAttribute('src', 'https://www.youtube.com/embed/OXU0NYr5hO0');
youtubeVideo.setAttribute('title', 'YouTube video');
youtubeVideo.setAttribute('allowfullscreen', '');
ratioDiv.appendChild(youtubeVideo);

const cardGroupDiv = document.createElement('div');
cardGroupDiv.classList.add('card-group');
body.appendChild(cardGroupDiv);

const cards = [
    {
        imageUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2023/04/[11139099]_20230428141331507.jpg',
        title: '케냐 키린야가',
        description: '과일 캔디처럼 달콤한 산미와 감칠맛 가득한 풍미가 가득한 커피',
        price: '15000won',
        lastOrder: 'Last Order 1 mins ago',
        orderLink: 'https://eom48.github.io/project/product.html'
    },
    {
        imageUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2023/05/[11029237]_20230526150757666.jpg',
        title: '에티오피아',
        description: '다크초콜릿의 벨벳 같은 부드러움과 후추 같은 스파이시함, 달콤한 감귤류의 풍미가 특징인 원두',
        price: '15000won',
        lastOrder: 'Last Order 3 mins ago',
        orderLink: 'https://eom48.github.io/project/product.html'
    },
    {
        imageUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/07/[11125845]_20210721100203916.jpg',
        title: '별다방 블렌드',
        description: '사랑하지 않을 수 없는, 한국만을 위한 특별한 커피! 오직 스타벅스 커피 코리아에서만 만날 수 있는 특별한 원두를 소개합니다.',
        price: '15000won',
        lastOrder: 'Last Order 4 mins ago',
        orderLink: 'https://eom48.github.io/project/product.html'
    }
];

for (const cardData of cards) {
    const card = document.createElement('div');
    card.classList.add('card');
    cardGroupDiv.appendChild(card);

    const cardImage = document.createElement('img');
    cardImage.setAttribute('src', cardData.imageUrl);
    cardImage.classList.add('card-img-top');
    card.appendChild(cardImage);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    card.appendChild(cardBody);

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = cardData.title;
    cardBody.appendChild(cardTitle);

    const cardDescription = document.createElement('p');
    cardDescription.classList.add('card-text');
    cardDescription.textContent = cardData.description;
    cardBody.appendChild(cardDescription);

    const cardPrice = document.createElement('p');
    cardPrice.classList.add('card-text');
    cardPrice.textContent = 'Price ' + cardData.price;
    cardBody.appendChild(cardPrice);

    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');
    card.appendChild(cardFooter);

    const lastOrder = document.createElement('small');
    lastOrder.classList.add('text-body-secondary');
    lastOrder.textContent = cardData.lastOrder;
    cardFooter.appendChild(lastOrder);

    const orderLink = document.createElement('a');
    orderLink.setAttribute('href', cardData.orderLink);
    orderLink.classList.add('btn', 'btn-primary');
    orderLink.textContent = 'Order';
    card.appendChild(orderLink);
}

const paginationNav = document.createElement('nav');
paginationNav.setAttribute('aria-label', 'Page navigation example');
body.appendChild(paginationNav);

const paginationList = document.createElement('ul');
paginationList.classList.add('pagination', 'justify-content-center');
paginationNav.appendChild(paginationList);

const paginationItems = [
    { label: 'Previous', href: '', disabled: true },
    { label: '1', href: 'https://eom48.github.io/project/product.html' },
    { label: '2', href: 'https://eom48.github.io/project/product.html' },
    { label: '3', href: 'https://eom48.github.io/project/product.html' },
    { label: 'Next', href: 'https://eom48.github.io/project/product.html' }
];

for (const item of paginationItems) {
    const paginationItem = document.createElement('li');
    paginationItem.classList.add('page-item');
    if (item.disabled) {
        paginationItem.classList.add('disabled');
    }
    paginationList.appendChild(paginationItem);

    const paginationLink = document.createElement('a');
    paginationLink.classList.add('page-link');
    paginationLink.setAttribute('href', item.href);
    paginationLink.textContent = item.label;
    paginationItem.appendChild(paginationLink);
}

const hr3 = document.createElement('hr');
body.appendChild(hr3);

const containerDiv = document.createElement('div');
containerDiv.classList.add('container');
body.appendChild(containerDiv);

const footer = document.createElement('footer');
footer.classList.add('py-3', 'my-4');
containerDiv.appendChild(footer);

const footerNavList = document.createElement('ul');
footerNavList.classList.add('nav', 'justify-content-center', 'border-bottom', 'pb-3', 'mb-3');
footer.appendChild(footerNavList);

for (const item of navItems) {
    const footerNavItem = document.createElement('li');
    footerNavItem.classList.add('nav-item');
    footerNavList.appendChild(footerNavItem);

    const footerNavLink = document.createElement('a');
    footerNavLink.setAttribute('href', item.href);
    footerNavLink.classList.add('nav-link', 'px-2', 'text-body-secondary');
    footerNavLink.textContent = item.label;
    footerNavItem.appendChild(footerNavLink);
}

const footerText = document.createElement('p');
footerText.classList.add('text-center', 'text-body-secondary');
footerText.textContent = '© 2023 GOGO COFFEE Company, Inc';
footer.appendChild(footerText);

// Replace the existing document with the created HTML structure
document.documentElement.replaceWith(html);
