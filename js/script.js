
// Preloader

window.addEventListener('load', function(){
    document.querySelector('.preloader').classList.add('opacity-0');
    setTimeout(function(){
        document.querySelector('.preloader').style.display = 'none';
    }, 1000);
});

// iTyped 

window.ityped.init(document.querySelector('.iTyped'), {
    strings: ["I'm a Electronics & Communication Engineer", 'I Love PCB Design', 'I Love Web Design', 'I Love Solving Technical Issues', 'I Love Telecommunication', 'I Enjoy My Job'],
    loop: true
});

// Portfolio Item Filter

const filterContainer = document.querySelector('.portfolio-filter'),
    filterBtns = filterContainer.children,
    totalFilterBtn = filterBtns.length,
    portfolioItems = document.querySelectorAll('.portfolio-item'),
    totalPortfolioItem = portfolioItems.length;
    
    for (let i = 0; i < totalFilterBtn; i++) {
        filterBtns[i].addEventListener("click", function(){
            filterContainer.querySelector('.active').classList.remove('active');
            this.classList.add("active");

            const filterValue = this.getAttribute('data-filter');
            for (let k = 0; k < totalPortfolioItem; k++) {
                if (filterValue === portfolioItems[k].getAttribute('data-category')) {
                    portfolioItems[k].classList.remove('hide');
                    portfolioItems[k].classList.add('show');
                } else{
                    portfolioItems[k].classList.remove('show');
                    portfolioItems[k].classList.add('hide');
                }
                if (filterValue === 'all') {
                    portfolioItems[k].classList.remove('hide');
                    portfolioItems[k].classList.add('show');
                }
            }
        });
    }

// Portfolio Lighbox

const lightbox = document.querySelector('.lightbox'),
    lightboxImg = lightbox.querySelector('.lightbox-img'),
    lightboxText = lightbox.querySelector('.caption-text'),
    lightboxClose = lightbox.querySelector('.lightbox-close'),
    lightboxCounter = lightbox.querySelector('.caption-counter');

let itemIndex = 0;

for (let i = 0; i < totalPortfolioItem; i++) {
    portfolioItems[i].addEventListener('click', function(){
        itemIndex = i;
        changeItem();
        toggleLightbox();
    });
}

function toggleLightbox() {
    lightbox.classList.toggle('open');
}

function changeItem() {
    let imgSrc = portfolioItems[itemIndex].querySelector('.portfolio-img img').getAttribute('src');
    lightboxImg.src = imgSrc;
    lightboxText.innerHTML = portfolioItems[itemIndex].querySelector('h4').innerHTML;
    lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalPortfolioItem;
}

function prevItem() {
    if (itemIndex === 0) {
        itemIndex = totalPortfolioItem - 1;
    } else {
        itemIndex--;
    }
    changeItem();
}

function nextItem() {
    if (itemIndex === totalPortfolioItem - 1) {
        itemIndex = 0;
    } else {
        itemIndex++;
    }
    changeItem();
}

//portfolio picture slide 
document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".slider");

  sliders.forEach(slider => {
    let slides = slider.querySelectorAll(".slide");
    let prev = slider.querySelector(".prev-btn");
    let next = slider.querySelector(".next-btn");
    let index = 0;

    // show first slide
    slides[index].classList.add("active");

    function showSlide(i) {
      slides.forEach(slide => slide.classList.remove("active"));
      slides[i].classList.add("active");
    }

    // Auto Slide
    let autoSlide = setInterval(() => {
      index = (index + 1) % slides.length;
      showSlide(index);
    }, 3000);

    // Manual Next
    next.addEventListener("click", () => {
      clearInterval(autoSlide);
      index = (index + 1) % slides.length;
      showSlide(index);
    });

    // Manual Previous
    prev.addEventListener("click", () => {
      clearInterval(autoSlide);
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    });
  });
});

//portfolio picture popup

function openPopup(src) {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");

  popupImg.src = src;
  popup.style.display = "flex";

  document.body.classList.add("popup-active");
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
  document.body.classList.remove("popup-active");
}




// Certificates Sections
function openPopup(src) {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");

  popup.style.display = "flex";
  popupImg.src = src;
}

document.getElementById("popup").addEventListener("click", function () {
  this.style.display = "none";
});



// close lightbox

lightbox.addEventListener('click', function(event){
    if(event.target === lightboxClose || event.target === lightbox){
        toggleLightbox();
    }
});

// Aside Navbar

const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll('li'),
    totalNavList = navList.length,
    allSection = document.querySelectorAll('.section'),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector('a');
    a.addEventListener('click', function(){
        // remove back section class
        removeBackSectionClass();

        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector('a').classList.contains('active')) {
                // add back section class
                addBackSectionClass(j);
            }
            navList[j].querySelector('a').classList.remove('active');
        }

        this.classList.add('active');

        showSection(this);

        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }

    });
}

function addBackSectionClass(num) 
{
    allSection[num].classList.add('back-section');
}

function removeBackSectionClass() 
{
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('back-section');
    }
}

function updateNav(element) 
{
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector('a').classList.remove('active');
        const target = element.getAttribute('href').split('#')[1];
        if (target === navList[i].querySelector('a').getAttribute('href').split('#')[1]) {
            navList[i].querySelector('a').classList.add('active');
        }
    }
}

document.querySelector('.hire-me').addEventListener('click', function(){
    const sectionIndex = this.getAttribute('data-section-index');
    addBackSectionClass(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSectionClass();
});

function showSection(element) 
{
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('active');
    }

    const target = element.getAttribute('href').split('#')[1];

    document.querySelector('#'+target).classList.add('active');
}

const navTogglerBtn = document.querySelector('.nav-toggler'),
    aside = document.querySelector('.aside');

navTogglerBtn.addEventListener('click', asideSectionTogglerBtn);

function asideSectionTogglerBtn() 
{
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle('open');
    }
}

// blog section
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".read-more-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const content = btn.previousElementSibling; // full-content div

      if (content.style.display === "none") {
        content.style.display = "block";
        btn.textContent = "Read Less";
      } else {
        content.style.display = "none";
        btn.textContent = "Read More";
      }
    });
  });
});

/* AOS init */
AOS.init({ duration:700, easing:'ease-out-cubic', once:true });

/* Dark mode toggle & persistence */
const toggleDark = document.getElementById('toggle-dark');
const stored = localStorage.getItem('site-theme');
if (stored === 'dark') { document.body.classList.add('dark'); toggleDark.checked = true; }
toggleDark.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('site-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

/* Search filter */
const searchInput = document.getElementById('searchInput');
const blogGrid = document.getElementById('blogGrid');
const blogCards = blogGrid.querySelectorAll('.blog-card');

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  blogCards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    const body = (card.textContent || '').toLowerCase();
    const show = title.includes(q) || body.includes(q);
    card.style.display = show ? '' : 'none';
  });
  AOS.refresh();
});

/* Category filter */
const catBtns = document.querySelectorAll('.cat-btn');
catBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    catBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    blogCards.forEach(card => {
      const match = (cat === 'all') || (card.dataset.cat === cat);
      card.style.display = match ? '' : 'none';
    });
    AOS.refresh();
  });
});

/* Share modal logic */
const shareModal = document.getElementById('shareModal');
const shareLinks = {
  facebook: document.getElementById('share-facebook'),
  twitter: document.getElementById('share-twitter'),
  whatsapp: document.getElementById('share-whatsapp'),
  copyBtn: document.getElementById('copyLinkBtn'),
  closeBtn: document.getElementById('closeShare')
};

// When a share button (card or spotlight) clicked:
document.querySelectorAll('.share, .share-small').forEach(wrapper => {
  wrapper.addEventListener('click', (e) => {
    e.preventDefault();
    const url = wrapper.dataset.url ? new URL(wrapper.dataset.url, window.location.origin).href : window.location.href;
    const title = wrapper.dataset.title || document.title;
    openShareModal(url, title);
  });
});

function openShareModal(url, title) {
  // set links
  shareLinks.facebook.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  shareLinks.twitter.href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
  shareLinks.whatsapp.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + url)}`;

  // set attributes for anchors
  document.getElementById('share-facebook').setAttribute('href', shareLinks.facebook.href);
  document.getElementById('share-twitter').setAttribute('href', shareLinks.twitter.href);
  document.getElementById('share-whatsapp').setAttribute('href', shareLinks.whatsapp.href);

  // store current url for copy
  shareModal.dataset.currentUrl = url;
  shareModal.setAttribute('aria-hidden','false');
}

/* copy link */
document.getElementById('copyLinkBtn').addEventListener('click', async () => {
  const url = shareModal.dataset.currentUrl || window.location.href;
  try {
    await navigator.clipboard.writeText(url);
    const btn = document.getElementById('copyLinkBtn');
    btn.textContent = 'Copied!';
    setTimeout(()=> btn.textContent = 'Copy link', 1500);
  } catch (err) {
    alert('Copy failed: ' + url);
  }
});

/* close share */
document.getElementById('closeShare').addEventListener('click', () => shareModal.setAttribute('aria-hidden','true'));
shareModal.addEventListener('click', e => { if (e.target === shareModal) shareModal.setAttribute('aria-hidden','true'); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') shareModal.setAttribute('aria-hidden','true'); });
