const BOOKS = [
  {
    id: 1,
    title: "خواجه تاجدار",
    author: "ژان گور",
    published_date: 2007,
    language: "persian",
    genre: "تاریخ",
    imgSrc: "1.jpg",
  },
  {
    id: 2,
    title: "ضیافت",
    author: "افلاطون",
    published_date: 385,
    language: "greek",
    genre: "فلسفه",
    imgSrc: "2.jpg",
  },
  {
    id: 3,
    title: "منطق الطیر",
    author: "عطار",
    published_date: 1177,
    language: "persian",
    genre: "شعر",
    imgSrc: "3.jpg",
  },
  {
    id: 4,
    title: "مثنوی معنوی",
    author: "مولوی",
    published_date: 1258,
    language: "persian",
    genre: "شعر",
    imgSrc: "4.jpg",
  },
  {
    id: 5,
    title: "دیوان حافظ",
    author: "حافظ",
    published_date: 1200,
    language: "persian",
    genre: "شعر",
    imgSrc: "5.jpg",
  },
  {
    id: 6,
    title: "رومیو و جولیت",
    author: "ویلیام شکسپیر",
    published_date: 1595,
    language: "english",
    genre: "عاشقانه",
    imgSrc: "6.jpg",
  },
  {
    id: 7,
    title: "ویس و رامین",
    author: "فخرالدین اسعد گرگانی",
    published_date: 1054,
    language: "persian",
    genre: "عاشقانه",
    imgSrc: "7.jpg",
  },
  {
    id: 8,
    title: "گلستان",
    author: "سعدی",
    published_date: 1258,
    language: "persian",
    genre: "شعر",
    imgSrc: "8.jpg",
  },
  {
    id: 9,
    title: "بوستان",
    author: "سعدی",
    published_date: 1257,
    language: "persian",
    genre: "شعر",
    imgSrc: "9.jpg",
  },
  {
    id: 10,
    title: "گلشن راز",
    author: "شیخ محمود شبستری",
    published_date: 1311,
    language: "persian",
    genre: "شعر",
    imgSrc: "10.jpg",
  },
  {
    id: 11,
    title: "لیلی و مجنون",
    author: "نظامی",
    published_date: 1188,
    language: "persian",
    genre: "عاشقانه",
    imgSrc: "11.jpg",
  },
  {
    id: 12,
    title: "شاهنامه",
    author: "فردوسی",
    published_date: 1010,
    language: "persian",
    genre: "شعر",
    imgSrc: "12.jpg",
  },
  {
    id: 13,
    title: "ایلیاد",
    author: "هومر",
    published_date: 762,
    language: "greek",
    genre: "شعر",
    imgSrc: "13.jpg",
  },
  {
    id: 14,
    title: "اودیسه",
    author: "هومر",
    published_date: 725,
    language: "greek",
    genre: "شعر",
    imgSrc: "14.jpg",
  },
  {
    id: 15,
    title: "هملت",
    author: "ویلیام شکسپیر",
    published_date: 1609,
    language: "greek",
    genre: "درام",
    imgSrc: "15.jpg",
  },
  {
    id: 16,
    title: "دن کیشوت",
    author: "میگل دسروانتس",
    published_date: 1605,
    language: "spanish",
    genre: "درام",
    imgSrc: "16.jpg",
  },
];
let cc = document.querySelector(".container .cardscontainer");
const language=[]
const checkedLangs=[]
const filtersContainer = document.querySelector(".container .filtercontainer");
//let checkedLangs = [];
function renderBook(BookList) {
  
  const result = BookList.map( (item) =>
    // ;
     `
        <div class="card">
            <img src="./image/${item.imgSrc}" alt="${item.title} class="m-w-2" />
          <h3>  ${item.title}</h3>
          <span>نویسنده: ${item.author}<span>
         
    <a href="./index.php?id=${item.id}">
        <div class="btn">خرید</div>
    </a>
    </div>
    `
  );
console.log(result)
  let output = result.join("");

  cc.innerHTML = output;
}

renderBook(BOOKS);
/////////filters
const renderLanguage = () => {
  const uniqLangs = [];
  BOOKS.forEach((current) => {
    if (!uniqLangs.includes(current.language))
       uniqLangs.push(current.language);
  });
  console.log(uniqLangs);
  const filterItemsL = uniqLangs
    .map((lang) => {
      return `

      <div>
        <label for="${lang}">${lang}</label>
        <input id="${lang}" type="checkbox" onchange="handleLanguageChange(this,${lang})" />
      </div>

  `;
    })
    .join("");
  filtersContainer.innerHTML += filterItemsL;

  //console.log(filtersContainer.innerHTML)
};

renderLanguage();

function handleLanguageChange(eventElement, language) {
  debugger
 let checkedLangs=[]
  if (eventElement.checked) {
    checkedLangs.push(language);
    
  } else {
    const filtered = checkedLangs.filter((item) => {
     if( item !== language){
      checkedLangs.length=0;
      checkedLangs.push(...filtered)
      }
    });
    console.log(checkedLangs)
    b++
    debugger
  }
  handleFilterLanguage()
}
function handleFilterLanguage(){
 const results= BOOKS.filter(item => {
  console.log(item.language)
  // debugger
    return checkedLangs.includes(item.language)
    
  })

  
renderBook(results)

}