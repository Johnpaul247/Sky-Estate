// NAVIGATION BAR
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('translate-x-full')
  menu.classList.toggle('translate-x-0')
}

//  IMAGECARD
const imageList = [
  {
    image: "/Img/sky5.jpeg",
  },
  {
    image: "/Img/house1.jpeg",
  },
  {
    image: "/Img/house9.jpeg",
  },
  {
    image: "/Img/house4.jpeg",
  },
];

function display(cards) {
  const cardMenu = document.getElementById("card-menu");

  const cardElements = cards.map(card => 
    `<div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src=${card.image} alt="image" class="w-[350px] object-cover"/>
    </div>`
  ).join('');  // Use an empty string to avoid commas between elements
  
  cardMenu.innerHTML = cardElements;  
  console.log(cardElements);  // Logging after defining the variable
}

display(imageList);


// CARD2
// let cardList =[
//   {
//     icon: "",
//     title: "Service Premises",
//     description: "Our complex has office space and convenience stores on the ground floor. Ther's a lot of hate out there for a text",
//   },

//   {
//     icon: "fa fa-home",
//     title: "Service Premises",
//     description: "Our complex has office space and convenience stores on the ground floor. Ther's a lot of hate out there for a text",
//   },

//   {
//     icon: "fa fa-home",
//     title: "Service Premises",
//     description: "Our complex has office space and convenience stores on the ground floor. Ther's a lot of hate out there for a text",
//   },


//   {
//     icon: "fa fa-home",
//     title: "Service Premises",
//     description: "Our complex has office space and convenience stores on the ground floor. Ther's a lot of hate out there for a text",
//   },

//   {
//     icon: "fa fa-home",
//     title: "Service Premises",
//     description: "Our complex has office space and convenience stores on the ground floor. Ther's a lot of hate out there for a text",
//   },

//   {
//     icon: "fa fa-home",
//     title: "Service Premises",
//     description: "Our complex has office space and convenience stores on the ground floor. Ther's a lot of hate out there for a text",
//   },
// ]

// function about(cards) {
//   const cardContainer = document.getElementById("card-container");

//   const cardElement = cards.map(card =>
//     ` <div class="flex flex-col gap-4 shadow-lg rounded-lg p-4 border border-gray-200
//     ">
//           <i>${card.icon}</i>
//           <h1>${card.title}</h1>
//           <p>${card.description}</p>
//       </div> `
//   ).join('');

//   cardContainer.innerHTML = cardElement;
// }

// about(cardList)


// INVESTMENT CARD
const stageList = [
  {
    stage: "01",
    title: "Consultation",
    description: "You leave a request and our manager will contact you. Or you can call us youurself"
  },

  {
    stage: "02",
    title: "Booking Apartments",
    description: "You pay a deposit for the reservation of the apartment you selected",
  },

  {
    stage: "03",
    title: "First Installment",
    description: "During the construction phase, you pay 20% of the cost of the apartment",
  },

  {
    stage: "04",
    title: "Commissioning",
    description: "During the construction, you pay 30% in 3 installments. After commissioning profit"
  }
]

function investment(cards){
  const investmentContainer = document.getElementById("investment-container");

  const cardElements = cards.map(card =>
    ` <div class="flex flex-col gap-4 text-center">
        <h1 class="bg-blue-100 w-[60px] py-4 rounded-full text-blue-500 font-bold text-2xl ml-[92px] max-md:ml-[150px]">${card.stage}</h1>
        <h1 class"font-bold text-xl">${card.title}</h1>
        <h1>${card.description}</h1>
      </div> `
  ).join('');

  investmentContainer.innerHTML = cardElements;
}
investment(stageList)