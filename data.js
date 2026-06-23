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
const startYearInput = document.getElementById("from-year");
const endYearInput = document.getElementById("to-year");
const language = [];
const checkedLangs = [];
const checkedAuthors = [];
const genre = [];
const checkedGenre = [];
let startYear;
let endYear;
const filtersContainer = document.querySelector(".container .filtercontainer");

function renderBook(BookList) {
  const result = BookList.map(
    (item) =>
      // ;
      `
        <div class="card">
            <div class="cardshadow">
                <img src="./image/${item.imgSrc}" alt="${item.title}" class="m-w-2" />
            </div>
            <h3>  ${item.title}</h3>
            <div class="details">
            <span>نویسنده: ${item.author}<span>
            <span class="bDate">تاریخ انتشار: ${item.published_date}</span>
            <span class="bLang">زبان: ${item.language}</span>
            <span class="bGenre"> ژانر: ${item.genre}</span>
            <a href="./index.php?id=${item.id}">
              <div class="btn">خرید</div>
            </a>
            </div>
        </div>
    `,
  );

  if (result.length === 0) {
    cc.innerHTML = "<h2>فیلتر ها بی نتیجه بود</h2>";
  } else {
    let output = result.join("");
    cc.innerHTML = output;
  }
}

renderBook(BOOKS);
/////////filters
const renderLanguage = () => {
  const uniqLangs = [];
  BOOKS.forEach((current) => {
    if (!uniqLangs.includes(current.language)) uniqLangs.push(current.language);
  });

  const filterItemsL = uniqLangs
    .map((lang) => {
      return `

      <div>
        <label for="${lang}">${lang}</label>
        <input id="${lang}" type="checkbox" onchange="handleLanguageChange(this,'${lang}')" />
      </div>

  `;
    })
    .join("");
  filtersContainer.innerHTML += `
    <div>
      <h3>زبان ها</h3>
      ${filterItemsL}
    </div>
  `;

  //console.log(filtersContainer.innerHTML)
};
renderLanguage();

const renderAuthorsFilter = () => {
  const uniqueAuthors = [];

  BOOKS.forEach((current) => {
    if (!uniqueAuthors.includes(current.author)) {
      uniqueAuthors.push(current.author);
    }
  });

  console.log("unique Authors:", uniqueAuthors);

  const filterItems = uniqueAuthors
    .map((item) => {
      return `
          <div>
              <label for="${item}">${item}</label>
              <input id="${item}" type="checkbox" onchange="handleAuthorChange(this,'${item}')" />
          </div>
      `;
    })
    .join("");

  filtersContainer.innerHTML += `
    <div>
      <h3>نویسنده ها</h3>
      ${filterItems}
    </div>
  `;
};
renderAuthorsFilter();

const handleAuthorChange = (inputElement, author) => {
  if (inputElement.checked) {
    checkedAuthors.push(author);
  } else {
    const result = checkedAuthors.filter((item) => item !== author);

    checkedAuthors.length = 0;
    checkedAuthors.push(...result);
  }

  handleFilter();
};

function handleLanguageChange(eventElement, language) {
  if (eventElement.checked) {
    checkedLangs.push(language);
  } else {
    const filtered = checkedLangs.filter((item) => item !== language);

    checkedLangs.length = 0;
    checkedLangs.push(...filtered);
  }
  handleFilter();
}
let results = [];
function handleFilter() {
  results = BOOKS.filter((item) => {
    //
    return checkedLangs.length === 0
      ? true
      : checkedLangs.includes(item.language);
  });

  results = results.filter((item) =>
    checkedAuthors.length === 0 ? true : checkedAuthors.includes(item.author),
  );

 results = results.filter((item) =>
    checkedGenre.length === 0 ? true : checkedGenre.includes(item.genre),
  );

  results = results.filter((item) => {
    if (!startYear && !endYear) return true;

    if (startYear && !endYear) {
      if (item.published_date >= startYear) return true;
    }

    if (!startYear && endYear) {
      if (item.published_date <= endYear) return true;
    }

    if (item.published_date >= startYear && item.published_date <= endYear) {
      return true;
    } else {
      return false;
    }
  });

  renderBook(results);
}

function handleYearChange(evt) {
  if (evt.target.id === "from-year") {
    startYear = evt.target.value;
  } else {
    endYear = evt.target.value;
  }

  console.log("start:", startYear);
  console.log("end:", endYear);

  handleFilter();
}

// debugger
// startYearInput.addEventListener("keydown", handleYearChange)
// endYearInput.addEventListener("keydown", handleYearChange)

// window.addEventListener("keydown", (event) => console.log(event))

const renderGenre = () => {
  const uniqGenre = [];
  BOOKS.forEach((current) => {
    if (!uniqGenre.includes(current.genre)) uniqGenre.push(current.genre);
  });
console.log(uniqGenre);
  const filterItemsG = uniqGenre
    .map((genre) => {
      return `

      <div>
        <label for="${genre}">${genre}</label>
        <input id="${genre}" type="checkbox" onchange="handleGenreChange(this,'${genre}')" />
      </div>

  `;
    })
    .join("");
  filtersContainer.innerHTML += `
    <div>
      <h3>ژانرها</h3>
      ${filterItemsG}
    </div>
  `;
  debugger;
  //console.log(filtersContainer.innerHTML)
};
renderGenre();




function handleGenreChange(eventElement, genre) {
  if (eventElement.checked) {
    checkedGenre.push(genre);
  } else {
    const filtered = checkedGenre.filter((item) => item !== genre);

    checkedGenre.length = 0;
    checkedGenre.push(...filtered);
  }
  handleFilter();
}