const hamburgerIcon = document.querySelector('.hamburger-menu-icon');
const closeIcon = document.querySelector('.close-icon');
const mobileNav = document.querySelector('.mobile-nav');
const primaryNavItem = document.querySelector('.contact-us');

hamburgerIcon.addEventListener('click', () => {
  mobileNav.classList.remove('hide');
  hamburgerIcon.classList.add('hide');
  primaryNavItem.classList.remove('theme-btn');
  primaryNavItem.classList.remove('theme-btn-primary');
  primaryNavItem.classList.add('nav-item');
});

closeIcon.addEventListener('click', () => {
  mobileNav.classList.add('hide');
  hamburgerIcon.classList.remove('hide');
  primaryNavItem.classList.add('theme-btn');
  primaryNavItem.classList.add('theme-btn-primary');
  primaryNavItem.classList.remove('nav-item');
});

// dynamic Page

const featuredSpeakers = [
  {
    name: 'Ankit Faidia',
    designation: 'Etical Hacker',
    description:
      'Focusing on a common approach in a networked environment, we created the concept of co-production based on open source software and sharing, such as Wikipedia. (Major books: Wealth in the Network, Penguins and Leviathan)',
    photoUrl: 'images/speakers/speaker_01.png',
  },
  {
    name: 'Vivek Gambhir',
    designation: 'CEO, Boat',
    description:
      'Focusing on a common approach in a networked environment, we created the concept of co-production based on open source software and sharing, such as Wikipedia. (Major books: Wealth in the Network, Penguins and Leviathan)',
    photoUrl: 'images/speakers/speaker_02.png',
  },
  {
    name: 'Suhail Sameer',
    designation: 'Founder, Bharatpe',
    description:
      'Focusing on a common approach in a networked environment, we created the concept of co-production based on open source software and sharing, such as Wikipedia. (Major books: Wealth in the Network, Penguins and Leviathan)',
    photoUrl: 'images/speakers/speaker_03.png',
  },
  {
    name: 'Ratan Tata',
    designation: 'Founder, Bharatpe',
    description:
      'Focusing on a common approach in a networked environment, we created the concept of co-production based on open source software and sharing, such as Wikipedia. (Major books: Wealth in the Network, Penguins and Leviathan)',
    photoUrl: 'images/speakers/speaker_04.png',
  },
  {
    name: 'Rahul Ranjan',
    designation: 'Founder, Alphayte',
    description:
      'Focusing on a common approach in a networked environment, we created the concept of co-production based on open source software and sharing, such as Wikipedia. (Major books: Wealth in the Network, Penguins and Leviathan)',
    photoUrl: 'images/speakers/speaker_05.png',
  },
  {
    name: 'Sumit Gupta',
    designation: 'CEO, CoinDCX',
    description:
      'Focusing on a common approach in a networked environment, we created the concept of co-production based on open source software and sharing, such as Wikipedia. (Major books: Wealth in the Network, Penguins and Leviathan)',
    photoUrl: 'images/speakers/speaker_06.png',
  },
];

const speakerParentelement = document.querySelector('.all-speakers');
for (let i = 0; i < featuredSpeakers.length; i += 1) {
  speakerParentelement.innerHTML += `<div class="single-speaker">
    <img
    class="speaker-photo"
    src="${featuredSpeakers[i].photoUrl}"
    alt="Featured Speaker"
    />
    <h3 class="speaker-name">${featuredSpeakers[i].name}</h3>
    <h4 class="speaker-designation">${featuredSpeakers[i].designation}</h4>
    <div class="small-dash"></div>
    <p class="speaker-description">
    <br />
    ${featuredSpeakers[i].description}
    </p>
    </div>`;
}
