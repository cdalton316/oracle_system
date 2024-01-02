const cardObjectDefinitions = [
  { id: 1, imagePath: '/neteru-images/amen-hetep.jpg' },
  { id: 2, imagePath: '/neteru-images/amen-tu_tchaas.jpg' },
  { id: 3, imagePath: '/neteru-images/amen-tu_maat.jpg' },
  { id: 4, imagePath: '/neteru-images/amen-tem_tchaas.jpg' },
  { id: 5, imagePath: '/neteru-images/amen-tem_maat.jpg' },
  { id: 6, imagePath: '/neteru-images/ausar-hetep.jpg' },
  { id: 7, imagePath: '/neteru-images/ausar-tu_tchaas.jpg' },
  { id: 8, imagePath: '/neteru-images/ausar-tu_maat.jpg' },
  { id: 9, imagePath: '/neteru-images/ausar-tem_tchaas.jpg' },
  { id: 10, imagePath: '/neteru-images/ausar-tem_maat.jpg' },
  { id: 11, imagePath: '/neteru-images/tehuti-hetep.jpg' },
  { id: 12, imagePath: '/neteru-images/tehuti-tu_tchaas.jpg' },
  { id: 13, imagePath: '/neteru-images/tehuti-tu_maat.jpg' },
  { id: 14, imagePath: '/neteru-images/tehuti-tem_tchaas.jpg' },
  { id: 15, imagePath: '/neteru-images/tehuti-tem_maat.jpg' },
  { id: 16, imagePath: '/neteru-images/seker-hetep.jpg' },
  { id: 17, imagePath: '/neteru-images/seker-tu_tchaas.jpg' },
  { id: 18, imagePath: '/neteru-images/seker-tu_maat.jpg' },
  { id: 19, imagePath: '/neteru-images/seker-tem_tchaas.jpg' },
  { id: 20, imagePath: '/neteru-images/seker-tem_maat.jpg' },
  { id: 21, imagePath: '/neteru-images/card-back.jpg' },
];

// displayCards(cardObjectDefinitions);
// const cardBackImgPath = '/neteru-images/card-back.jpg';

// const cardContainerElem = document.querySelector('.card-container');
// createCards();
// function createCards() {
//   cardObjectDefinitions.forEach((cardItem) => {
//     createCard(cardItem);
//     // console.log(cardItem);
//   });
// }

// function createCard(cardItem) {
//   // Create div elements that make up a card
//   const cardElem = document.createElement('div');
//   const cardInnerElem = document.createElement('div');
//   const cardFrontElem = document.createElement('div');
//   const cardBackElem = document.createElement('div');

//   // Create front and back image elements for a card
//   const cardFrontImg = document.createElement('img');
//   const cardBackImg = document.createElement('img');

//   // Add class and id to card element
//   addClassToElement(cardElem, 'card');
//   addIdToElement(cardElem, cardItem.id);

//   // Add class to inner card element
//   addClassToElement(cardInnerElem, 'card-inner');

//   // Add class to front card element
//   addClassToElement(cardFrontElem, 'card-front');

//   // Add class to back card element
//   addClassToElement(cardBackElem, 'card-back');

//   // Add src attribute and appropriate value to img element - back of card
//   addSrcToImageElem(cardBackImg, cardBackImgPath);

//   // Add src attribute and appropriate value to img element - front of card
//   addSrcToImageElem(cardFrontImg, cardItem.imagePath);

//   // Assign class to back image element of back of card
//   addClassToElement(cardBackImg, 'card-img');
//   // Assign class to front image element of front of card
//   addClassToElement(cardFrontImg, 'card-img');

//   // Add front image element as child element to front card element
//   addChildElement(cardFrontElem, cardFrontImg);
//   // Add back image element as child element to back card element
//   addChildElement(cardBackElem, cardBackImg);

//   // Add front card element as child element to inner card element
//   addChildElement(cardInnerElem, cardFrontElem);
//   // Add back card element as child element to inner card element
//   addChildElement(cardInnerElem, cardBackElem);

//   // Add inner card element as child element to card element
//   addChildElement(cardElem, cardInnerElem);

//   // Add card element as child element to appropriate grid cell
//   addCardToGridCell(cardElem);
// }
// function createElement(elemType) {
//   return document.createElement(elemType);
// }

// function addClassToElement(elem, className) {
//   elem.classList.add(className);
// }
// function addIdToElement(elem, id) {
//   elem.id = id;
// }

// function addSrcToImageElem(imgElem, src) {
//   imgElem.src = src;
// }

// function addChildElement(parentElem, childElem) {
//   parentElem.appendChild(childElem);
// }

// const addCardToGridCell = function (card) {
//   const cardPositionClassName = mapCardIdToGridCell(card);
//   const cardPosElem = document.querySelector(cardPositionClassName);
//   addChildElement(cardPosElem, card);
// };

// function mapCardIdToGridCell(card) {
//   if (card.id === 1) {
//     return '.card-pos-one';
//   } else if (card.id === 2) {
//     return '.card-pos-two';
//   } else if (card.id === 3) {
//     return '.card-pos-three';
//   } else if (card.id === 4) {
//     return '.card-pos-four';
//   } else if (card.id === 5) {
//     return '.card-pos-five';
//   } else if (card.id === 6) {
//     return '.card-pos-six';
//   } else if (card.id === 7) {
//     return '.card-pos-seven';
//   } else if (card.id === 8) {
//     return '.card-pos-eight';
//   } else if (card.id === 9) {
//     return '.card-pos-nine';
//   } else if (card.id === 10) {
//     return '.card-pos-ten';
//   } else if (card.id === 11) {
//     return '.card-pos-eleven';
//   } else if (card.id === 12) {
//     return '.card-pos-twelve';
//   } else if (card.id === 13) {
//     return '.card-pos-thirteen';
//   } else if (card.id === 14) {
//     return '.card-pos-fourteen';
//   } else if (card.id === 15) {
//     return '.card-pos-fifteen';
//   } else if (card.id === 16) {
//     return '.card-pos-sixteen';
//   } else if (card.id === 17) {
//     return '.card-pos-seventeen';
//   } else if (card.id === 18) {
//     return '.card-pos-eighteen';
//   } else if (card.id === 19) {
//     return '.card-pos-nineteen';
//   } else if (card.id === 20) {
//     return '.card-pos-twenty';
//   }
// }
