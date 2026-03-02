// Get provider ID from window (set by generate script)
const providerId = window.PROVIDER_ID;

// Get provider data
const provider = PROVIDERS[providerId];

if (!provider) {
  document.getElementById('main-content').innerHTML = `
    <div class="text-center py-20">
      <h1 class="text-2xl font-bold text-gray-900 mb-4">Provider not found</h1>
      <a href="index.html" class="text-primary hover:underline">← Back to home</a>
    </div>
  `;
} else {
  // Set page title
  document.getElementById('page-title').textContent = `${provider.name} - ${provider.subtitle} | Longvan.vn`;
  
  // Render provider page
  renderProviderPage(provider);
}

function renderProviderPage(data) {
  const mainContent = document.getElementById('main-content');
  
  const html = `
    <!-- Provider Header -->
    <div class="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
      <div class="relative h-48 sm:h-56 md:h-64 lg:h-72 bg-gray-100">
        <img alt="${data.name} background" class="w-full h-full object-cover object-center" src="${data.cover}"/>
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
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
              <span class="text-gray-500">(${data.reviewCount} đánh giá)</span>
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
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      ${data.stats.map(stat => `
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
      `).join('')}
    </div>

    <!-- Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Left Column -->
      <div class="lg:col-span-2 space-y-6">
        <!-- About -->
        <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-gray-100">
          <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-[26px]">info</span>
            Giới thiệu
          </h2>
          <div class="prose prose-sm sm:prose-base max-w-none text-gray-700 leading-relaxed space-y-4">
            ${data.description.map(p => `<p>${p}</p>`).join('')}
          </div>
        </div>

        <!-- Services -->
        <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-gray-100">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span class="material-symbols-outlined text-primary text-[26px]">${data.serviceIcon}</span>
              ${data.serviceTitle}
            </h2>
            <span class="text-sm text-gray-500">${data.services.length} dịch vụ</span>
          </div>

          ${data.categories ? renderServiceTabs(data) : ''}
          ${renderServices(data)}
        </div>

        <!-- Reviews -->
        ${data.reviews ? renderReviews(data) : ''}
      </div>

      <!-- Right Column -->
      <div class="space-y-6">
        <!-- Contact Card -->
        <div class="bg-white rounded-2xl p-6 shadow-card border border-gray-100 sticky top-6">
          <h3 class="text-lg font-bold text-gray-900 mb-4">Liên hệ</h3>
          <div class="space-y-4">
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
          </div>
          <button class="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 rounded-full mt-6 transition-all shadow-md hover:shadow-lg">
            Đặt lịch ngay
          </button>
        </div>

        <!-- Certificates -->
        ${data.certificates ? renderCertificatesSidebar(data) : ''}
      </div>
    </div>
  `;
  
  mainContent.innerHTML = html;
  
  // Initialize service filtering if categories exist
  if (data.categories) {
    initServiceFiltering(data);
  }
}

function renderServiceTabs(data) {
  return `
    <div class="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
      ${data.categories.map((cat, index) => `
        <button class="service-tab ${index === 0 ? 'active bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all" data-category="${cat.id}">
          ${cat.label}
        </button>
      `).join('')}
    </div>
  `;
}

function renderServices(data) {
  const hasCategories = data.categories && data.categories.length > 1;
  const gridCols = data.services.length <= 4 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3';
  
  return `
    <div class="grid grid-cols-1 ${gridCols} gap-3" id="services-grid">
      ${data.services.map(service => {
        const categoryAttr = hasCategories ? `data-category="${service.category}"` : '';
        const iconColor = service.color || 'primary';
        const serviceLink = `service-${data.id}-${service.id}.html`;
        
        return `
          <a href="${serviceLink}" class="service-card p-3 rounded-lg border border-gray-100 hover:border-primary hover:shadow-md transition-all cursor-pointer group block" ${categoryAttr}>
            ${service.icon ? `
              <div class="flex items-start gap-2.5">
                <div class="w-9 h-9 rounded-lg bg-${iconColor}-50 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span class="material-symbols-outlined text-[18px]">${service.icon}</span>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-bold text-gray-900 mb-0.5 group-hover:text-primary transition-colors text-sm leading-tight">${service.name}</h3>
                  <p class="text-xs text-gray-600 mb-1.5 leading-snug">${service.desc}</p>
                  <p class="text-accent font-bold text-sm">Từ ${service.price}</p>
                </div>
              </div>
            ` : `
              <h3 class="font-bold text-gray-900 mb-1.5 text-sm">${service.name}</h3>
              <p class="text-xs text-gray-600 mb-1.5">${service.desc}</p>
              <p class="text-accent font-bold text-sm">Từ ${service.price}</p>
            `}
          </a>
        `;
      }).join('')}
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


function renderReviews(data) {
  if (!data.reviews || data.reviews.length === 0) return '';
  
  return `
    <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-gray-100">
      <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <span class="material-symbols-outlined text-primary text-[26px]">rate_review</span>
        Đánh giá từ khách hàng
      </h2>
      <div class="space-y-4">
        ${data.reviews.map(review => `
          <div class="p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
            <div class="flex items-start gap-3">
              <img src="${review.avatar}" alt="${review.name}" class="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"/>
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between mb-1">
                  <h4 class="font-bold text-gray-900 text-sm sm:text-base">${review.name}</h4>
                  <span class="text-xs text-gray-500">${review.date}</span>
                </div>
                <div class="flex items-center gap-1 mb-2">
                  ${Array(review.rating).fill(0).map(() => 
                    '<span class="material-symbols-outlined text-yellow-400 filled-icon text-[16px]">star</span>'
                  ).join('')}
                  ${Array(5 - review.rating).fill(0).map(() => 
                    '<span class="material-symbols-outlined text-gray-300 text-[16px]">star</span>'
                  ).join('')}
                </div>
                <p class="text-sm text-gray-700 leading-relaxed">${review.comment}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      <button class="mt-6 w-full py-3 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
        Xem tất cả ${data.reviewCount}+ đánh giá
      </button>
    </div>
  `;
}

function renderCertificates(data) {
  if (!data.certificates || data.certificates.length === 0) return '';
  
  return `
    <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-gray-100">
      <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <span class="material-symbols-outlined text-primary text-[26px]">workspace_premium</span>
        Chứng nhận & Giấy phép
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${data.certificates.map(cert => `
          <div class="p-4 rounded-xl border border-gray-100 hover:border-primary hover:shadow-md transition-all group">
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                <span class="material-symbols-outlined text-[20px]">verified</span>
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="font-bold text-gray-900 text-sm mb-1 group-hover:text-primary transition-colors">${cert.name}</h4>
                <p class="text-xs text-gray-600 mb-1">${cert.org}</p>
                <span class="inline-block px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-medium rounded-full">Năm ${cert.year}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderCertificatesSidebar(data) {
  if (!data.certificates || data.certificates.length === 0) return '';
  
  return `
    <div class="bg-white rounded-2xl p-6 shadow-card border border-gray-100">
      <h3 class="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
        <span class="material-symbols-outlined text-primary text-[20px]">workspace_premium</span>
        Chứng nhận & Giấy phép
      </h3>
      <div class="space-y-3">
        ${data.certificates.map(cert => `
          <div class="p-3 rounded-lg border border-gray-100 hover:border-primary hover:bg-blue-50/30 transition-all group">
            <div class="flex items-start gap-2">
              <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                <span class="material-symbols-outlined text-[16px]">verified</span>
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="font-bold text-gray-900 text-xs mb-0.5 group-hover:text-primary transition-colors leading-tight">${cert.name}</h4>
                <p class="text-[10px] text-gray-600 mb-1 leading-tight">${cert.org}</p>
                <span class="inline-block px-1.5 py-0.5 bg-gray-100 text-gray-600 text-[9px] font-medium rounded-full">Năm ${cert.year}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
