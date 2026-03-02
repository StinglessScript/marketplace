// Dynamic provider page renderer
// Each page just needs to call: renderProvider('provider-id')

function renderProvider(providerId) {
  const provider = PROVIDERS[providerId];
  
  if (!provider) {
    console.error('Provider not found:', providerId);
    return;
  }
  
  // Set page title
  document.title = `${provider.name} - ${provider.subtitle} | Longvan.vn`;
  
  // Render header
  renderProviderHeader(provider);
  
  // Render stats
  renderProviderStats(provider);
  
  // Render about & services
  renderProviderContent(provider);
  
  // Render contact
  renderProviderContact(provider);
  
  // Initialize filtering if needed
  if (provider.categories) {
    initServiceFiltering(provider);
  }
}

function renderProviderHeader(data) {
  const headerContainer = document.getElementById('provider-header');
  if (!headerContainer) return;
  
  headerContainer.innerHTML = `
    <div class="relative h-40 sm:h-48 md:h-56 bg-gradient-to-br ${data.coverGradient}">
      <img alt="${data.name} background" class="w-full h-full object-cover opacity-${data.coverOpacity.replace('0.', '')}" src="${data.cover}"/>
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>
    <div class="relative px-4 sm:px-6 md:px-8">
      <div class="flex justify-between items-start -mt-12 sm:-mt-16 mb-4">
        <div class="relative">
          <div class="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl bg-white p-2.5 sm:p-3 shadow-xl border-4 border-white">
            <img alt="${data.name} logo" class="w-full h-full object-contain" src="${data.logo}"/>
          </div>
          <div class="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-blue-500 text-white rounded-full p-1.5 sm:p-2 shadow-lg">
            <span class="material-symbols-outlined text-[14px] sm:text-[18px] block font-bold">verified</span>
          </div>
        </div>
        <div class="hidden sm:flex gap-2 mt-2">
          <button class="bg-primary hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-full transition-all shadow-md flex items-center gap-2 text-sm">
            <span class="material-symbols-outlined text-[18px]">chat</span>
            Nhắn tin
          </button>
          <button class="bg-white hover:bg-gray-50 text-gray-700 font-semibold px-5 py-2.5 rounded-full transition-all border border-gray-200 flex items-center gap-2 text-sm">
            <span class="material-symbols-outlined text-[18px]">favorite_border</span>
            Theo dõi
          </button>
        </div>
      </div>
      <div class="pb-6">
        <h1 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">${data.name}</h1>
        <p class="text-gray-600 text-sm sm:text-base mb-3">${data.subtitle}</p>
        <div class="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm mb-4">
          <div class="flex items-center gap-1">
            <span class="material-symbols-outlined text-[16px] sm:text-[18px] text-yellow-400 filled-icon">star</span>
            <span class="font-bold text-gray-900">${data.rating}</span>
            <span class="text-gray-500">(${data.reviews} đánh giá)</span>
          </div>
          <span class="w-1 h-1 bg-gray-300 rounded-full hidden sm:block"></span>
          <div class="flex items-center gap-1 text-gray-600">
            <span class="material-symbols-outlined text-[14px] sm:text-[16px]">schedule</span>
            <span>${data.bookings} lượt đặt</span>
          </div>
        </div>
        <div class="flex sm:hidden gap-2">
          <button class="flex-1 bg-primary hover:bg-blue-700 text-white font-bold px-4 py-2.5 rounded-full transition-all shadow-md flex items-center justify-center gap-2 text-sm">
            <span class="material-symbols-outlined text-[18px]">chat</span>
            Nhắn tin
          </button>
          <button class="bg-white hover:bg-gray-50 text-gray-700 font-semibold px-4 py-2.5 rounded-full transition-all border border-gray-200 flex items-center justify-center">
            <span class="material-symbols-outlined text-[18px]">favorite_border</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderProviderStats(data) {
  const statsContainer = document.getElementById('provider-stats');
  if (!statsContainer) return;
  
  statsContainer.innerHTML = data.stats.map(stat => `
    <div class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
      <div class="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3">
        <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-${stat.color}-50 flex items-center justify-center shrink-0">
          <span class="material-symbols-outlined text-${stat.color}-${stat.color === 'emerald' || stat.color === 'cyan' ? '600' : '500'} text-[20px] sm:text-[24px]">${stat.icon}</span>
        </div>
        <div class="text-center sm:text-left">
          <div class="text-xl sm:text-2xl font-bold text-gray-900">${stat.value}</div>
          <div class="text-[10px] sm:text-xs text-gray-600">${stat.label}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderProviderContent(data) {
  // Render About
  const aboutContainer = document.getElementById('provider-about');
  if (aboutContainer) {
    aboutContainer.innerHTML = data.description.map(p => `<p>${p}</p>`).join('');
  }
  
  // Render Service Header
  const serviceHeader = document.getElementById('service-header');
  if (serviceHeader) {
    serviceHeader.innerHTML = `
      <h2 class="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
        <span class="material-symbols-outlined text-primary text-[26px]">${data.serviceIcon}</span>
        ${data.serviceTitle}
      </h2>
      <span class="text-sm text-gray-500">${data.services.length} dịch vụ</span>
    `;
  }
  
  // Render Service Tabs
  if (data.categories) {
    const tabsContainer = document.getElementById('service-tabs');
    if (tabsContainer) {
      tabsContainer.innerHTML = data.categories.map((cat, index) => `
        <button class="service-tab ${index === 0 ? 'active bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all" data-category="${cat.id}">
          ${cat.label}
        </button>
      `).join('');
    }
  }
  
  // Render Services
  const servicesGrid = document.getElementById('services-grid');
  if (servicesGrid) {
    const hasCategories = data.categories && data.categories.length > 1;
    
    servicesGrid.innerHTML = data.services.map(service => {
      const categoryAttr = hasCategories ? `data-category="${service.category}"` : '';
      const iconColor = service.color || 'primary';
      
      return `
        <div class="service-card p-4 rounded-xl border border-gray-100 hover:border-primary hover:shadow-md transition-all cursor-pointer group" ${categoryAttr}>
          ${service.icon ? `
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-lg bg-${iconColor}-50 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                <span class="material-symbols-outlined text-[20px]">${service.icon}</span>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors text-sm sm:text-base">${service.name}</h3>
                <p class="text-xs sm:text-sm text-gray-600 mb-2">${service.desc}</p>
                <p class="text-accent font-bold text-sm sm:text-base">Từ ${service.price}</p>
              </div>
            </div>
          ` : `
            <h3 class="font-bold text-gray-900 mb-2">${service.name}</h3>
            <p class="text-sm text-gray-600 mb-2">${service.desc}</p>
            <p class="text-accent font-bold">Từ ${service.price}</p>
          `}
        </div>
      `;
    }).join('');
  }
}

function renderProviderContact(data) {
  const contactContainer = document.getElementById('provider-contact');
  if (!contactContainer) return;
  
  contactContainer.innerHTML = `
    <div class="flex items-start gap-3">
      <span class="material-symbols-outlined text-gray-400 text-[20px]">location_on</span>
      <div class="text-sm">
        <p class="font-medium text-gray-900">Địa chỉ</p>
        <p class="text-gray-600">${data.contact.address}</p>
      </div>
    </div>
    <div class="flex items-start gap-3">
      <span class="material-symbols-outlined text-gray-400 text-[20px]">phone</span>
      <div class="text-sm">
        <p class="font-medium text-gray-900">Hotline</p>
        <p class="text-primary font-bold">${data.contact.phone}</p>
      </div>
    </div>
    <div class="flex items-start gap-3">
      <span class="material-symbols-outlined text-gray-400 text-[20px]">schedule</span>
      <div class="text-sm">
        <p class="font-medium text-gray-900">Giờ làm việc</p>
        <p class="text-gray-600">${data.contact.hours}</p>
      </div>
    </div>
  `;
}

function initServiceFiltering(data) {
  const tabs = document.querySelectorAll('.service-tab');
  const serviceCards = document.querySelectorAll('.service-card');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.category;
      
      // Update active tab
      tabs.forEach(t => {
        t.classList.remove('active', 'bg-primary', 'text-white');
        t.classList.add('bg-gray-100', 'text-gray-600');
      });
      tab.classList.add('active', 'bg-primary', 'text-white');
      tab.classList.remove('bg-gray-100', 'text-gray-600');
      
      // Filter services
      serviceCards.forEach(card => {
        const cardCategory = card.dataset.category;
        if (category === 'all' || cardCategory === category) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}
