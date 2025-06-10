// const CACHE_NAME = 'vite-pwa-cache-v1';

// const urlsToCache = [
//   '/',
//   '/index.html',
//   '/manifest.json',
//   '/favicon.svg',
//   '/src/main.jsx?t=1749466897279',
//   '/src/App.jsx',
//   '/src/components/home_page/index.jsx',
//   '/src/components/service_page/index.jsx',
//   '/src/components/About_page/index.jsx',
//   '/src/components/Career_page/index.jsx',
//   '/src/components/CareerApplyPage_Page/index.jsx',
//   '/src/components/Intership_page/index.jsx',
//   '/src/components/ApplyNow_page/index.jsx',
//   '/src/components/Contact_page/index.jsx',
//   '/src/components/Portfolio_page/index.jsx',
//   '/src/components/Portfolio_Detailpage/index.jsx',
//   '/src/components/header/Header.jsx',
//   '/src/components/sections/SectionOne.jsx',
//   '/src/components/sections/WeOffer.jsx',
//   '/src/components/sections/Choose.jsx',
//   '/src/components/sections/Work.jsx',
//   '/src/components/Slider/SectionTwo.jsx',
//   '/src/components/sections/Slidebar.jsx',
//   '/src/components/sections/Idea.jsx',
//   '/src/components/sections/Footer.jsx',
//   '/src/components/service_section/ServiceOne.jsx',
//   '/src/components/service_section/ServiceChoose.jsx',
//   '/src/components/service_section/ServiceWork.jsx',
//   '/src/components/service_section/ServicesOffer.jsx',
//   '/src/components/About_section/AboutOne.jsx',
//   '/src/components/About_section/AboutChoose.jsx',
//   '/src/components/AboutSlider/About_SectionTwo.jsx',
//   '/src/components/About_section/AboutSlidebar.jsx',
//   '/src/components/About_section/Location.jsx',
//   '/src/components/Career_section/CareerOne.jsx',
//   '/src/components/Career_section/CareerTwo.jsx',
//   '/src/components/Career_section/CareerTeam.jsx',
//   '/src/components/Career_section/CareerWork.jsx',
//   '/src/components/Career_section/CareerPosition.jsx',
//   '/src/components/CareerApplyPage/CareerApply.jsx',
//   '/src/components/CareerApplyPage/CareerApplyRules.jsx',
//   '/src/components/CareerApplyPage/Responsibilities.jsx',
//   '/src/components/CareerApplyPage/Team.jsx',
//   '/src/components/Intership_section/InternshipForm.jsx',
//   '/src/components/ApplyNow_section/ApplyNow.jsx',
//   '/src/components/Contact_section/ContactOne.jsx',
//   '/src/components/Contact_section/ContactForm.jsx',
//   '/src/components/Portfolio_section/PortfolioOne.jsx',
//   '/src/components/Portfolio_section/PortfolioTwo.jsx',
//   '/src/components/Portfolio_Detailsection/PortfolioDetailpageOne.jsx',
//   '/src/components/Portfolio_Detailsection/PortfolioDetailpageTwo.jsx',
//   '/src/components/header/DynamicButton.jsx',
//   '/src/components/Slider/LeftRight.jsx',
//   '/src/components/Slider/RightLeft.jsx',
//   '/src/components/AboutSlider/About_LeftRight.jsx',
//   '/src/components/AboutSlider/About_RightLeft.jsx',
//   '/src/components/header/Images.jsx',
// ];

// // Normalize: remove query params and duplicates
// const uniqueNormalizedUrls = [...new Set(urlsToCache.map(url => url.split('?')[0]))];

// // Install: Cache files
// this.addEventListener('install', event => {
//   console.log('[Service Worker] Installing...');
//   this.skipWaiting();
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(cache => {
//         console.log('[Service Worker] Caching:', uniqueNormalizedUrls);
//         return cache.addAll(uniqueNormalizedUrls);
//       })
//       .catch(error => {
//         console.error('[Service Worker] Failed to cache:', error);
//       })
//   );
// });

// // Activate: Take control
// this.addEventListener('activate', event => {
//   console.log('[Service Worker] Activated');
//   event.waitUntil(this.clients.claim());
// });

// // Fetch: Serve from cache first, fallback to network
// this.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request).then(response => {
//       if (response) {
//         console.log('[Service Worker] Serving from cache:', event.request.url);
//         return response;
//       }
//       console.log('[Service Worker] Fetching from network:', event.request.url);
//       return fetch(event.request);
//     }).catch(err => {
//       console.error('[Service Worker] Fetch failed:', err);
//     })
//   );
// });
