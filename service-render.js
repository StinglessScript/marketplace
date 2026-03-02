// Service detail page renderer
const serviceId = window.SERVICE_ID;
const providerId = window.PROVIDER_ID;

const provider = PROVIDERS[providerId];
if (!provider) {
  document.getElementById('main-content').innerHTML = `
    <div class="text-center py-20">
      <h1 class="text-2xl font-bold text-gray-900 mb-4">Provider not found</h1>
      <a href="index.html" class="text-primary hover:underline">← Back to home</a>
    </div>
  `;
} else {
  const service = provider.services.find(s => s.id === serviceId);
  
  if (!service) {
    document.getElementById('main-content').innerHTML = `
      <div class="text-center py-20">
        <h1 class="text-2xl font-bold text-gray-900 mb-4">Service not found</h1>
        <a href="${providerId}.html" class="text-primary hover:underline">← Back to provider</a>
      </div>
    `;
  } else {
    document.getElementById('page-title').textContent = `${service.name} - ${provider.name} | Longvan.vn`;
    renderServicePage(service, provider);
  }
}

function renderServicePage(service, provider) {
  const mainContent = document.getElementById('main-content');
  
  const html = `
    <!-- Breadcrumb -->
    <div class="mb-6">
      <div class="flex items-center gap-2 text-sm text-gray-600">
        <a href="index.html" class="hover:text-primary transition">Trang chủ</a>
        <span class="material-symbols-outlined text-[16px]">chevron_right</span>
        <a href="${provider.id}.html" class="hover:text-primary transition">${provider.name}</a>
        <span class="material-symbols-outlined text-[16px]">chevron_right</span>
        <span class="text-gray-900 font-medium">${service.name}</span>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Left Column - Service Details -->
      <div class="lg:col-span-2 space-y-6">
        <!-- Service Header -->
        <div class="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
          <div class="relative h-64 sm:h-80 bg-gray-100">
            <img alt="${service.name}" class="w-full h-full object-cover" src="${service.image}"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-12 h-12 rounded-xl bg-${service.color}-50 flex items-center justify-center">
                  <span class="material-symbols-outlined text-${service.color}-500 text-[28px]">${service.icon}</span>
                </div>
                <div>
                  <h1 class="text-2xl sm:text-3xl font-bold text-white">${service.name}</h1>
                  <p class="text-white/90 text-sm">${service.desc}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="p-6">
            <div class="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-gray-100">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-yellow-400 filled-icon text-[20px]">star</span>
                <span class="font-bold text-gray-900">${provider.rating}</span>
                <span class="text-gray-500 text-sm">(${provider.reviewCount} đánh giá)</span>
              </div>
              <span class="w-px h-4 bg-gray-300"></span>
              <div class="flex items-center gap-2 text-gray-600">
                <span class="material-symbols-outlined text-[18px]">schedule</span>
                <span class="text-sm">${provider.bookings} lượt đặt</span>
              </div>
            </div>

            <h2 class="text-xl font-bold text-gray-900 mb-4">Mô tả dịch vụ</h2>
            <p class="text-gray-700 leading-relaxed mb-6">${service.fullDescription}</p>

            <h3 class="text-lg font-bold text-gray-900 mb-4">Điểm nổi bật</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${service.features.map(feature => `
                <div class="flex items-center gap-2 text-gray-700">
                  <span class="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                  <span>${feature}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Service Info -->
        <div class="bg-white rounded-2xl shadow-card border border-gray-100 p-6">
          <h3 class="text-lg font-bold text-gray-900 mb-4">Thông tin dịch vụ</h3>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-gray-400 text-[20px]">schedule</span>
              <div>
                <p class="font-medium text-gray-900">Thời gian thực hiện</p>
                <p class="text-gray-600 text-sm">${service.duration}</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-gray-400 text-[20px]">verified_user</span>
              <div>
                <p class="font-medium text-gray-900">Bảo hành</p>
                <p class="text-gray-600 text-sm">${service.warranty}</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-gray-400 text-[20px]">location_on</span>
              <div>
                <p class="font-medium text-gray-900">Địa điểm</p>
                <p class="text-gray-600 text-sm">${provider.contact.address}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Provider Info -->
        <div class="bg-white rounded-2xl shadow-card border border-gray-100 p-6">
          <h3 class="text-lg font-bold text-gray-900 mb-4">Nhà cung cấp</h3>
          <div class="flex items-center gap-4">
            <img src="${provider.logo}" alt="${provider.name}" class="w-16 h-16 rounded-xl object-cover border-2 border-gray-100"/>
            <div class="flex-1">
              <a href="${provider.id}.html" class="font-bold text-gray-900 hover:text-primary transition text-lg">${provider.name}</a>
              <p class="text-gray-600 text-sm">${provider.subtitle}</p>
              <div class="flex items-center gap-2 mt-1">
                <span class="material-symbols-outlined text-yellow-400 filled-icon text-[16px]">star</span>
                <span class="font-semibold text-gray-900">${provider.rating}</span>
                <span class="text-gray-500 text-xs">(${provider.reviewCount})</span>
              </div>
            </div>
            <a href="${provider.id}.html" class="bg-blue-50 text-primary font-semibold px-4 py-2 rounded-full hover:bg-primary hover:text-white transition text-sm">
              Xem shop
            </a>
          </div>
        </div>
      </div>

      <!-- Right Column - Booking Card -->
      <div class="space-y-6">
        <div class="bg-white rounded-2xl shadow-card border border-gray-100 p-6 sticky top-6">
          <div class="mb-6">
            <p class="text-gray-600 text-sm mb-2">Giá dịch vụ</p>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-bold text-accent">${service.price}</span>
            </div>
          </div>

          <a href="booking.html?provider=${provider.id}&service=${service.id}" class="block w-full bg-primary hover:bg-blue-700 text-white font-bold py-3.5 rounded-full transition-all shadow-md hover:shadow-lg mb-3 text-center">
            Đặt lịch ngay
          </a>
          <button class="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3.5 rounded-full transition-all border border-gray-200 flex items-center justify-center gap-2">
            <span class="material-symbols-outlined text-[20px]">chat</span>
            Nhắn tin tư vấn
          </button>

          <div class="mt-6 pt-6 border-t border-gray-100 space-y-3">
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-green-500 text-[20px]">verified_user</span>
              <div class="flex-1">
                <p class="font-medium text-gray-900 text-sm">Đảm bảo hoàn tiền</p>
                <p class="text-gray-600 text-xs">100% nếu không hài lòng</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-blue-500 text-[20px]">support_agent</span>
              <div class="flex-1">
                <p class="font-medium text-gray-900 text-sm">Hỗ trợ 24/7</p>
                <p class="text-gray-600 text-xs">Luôn sẵn sàng giúp đỡ bạn</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-orange-500 text-[20px]">schedule</span>
              <div class="flex-1">
                <p class="font-medium text-gray-900 text-sm">Linh hoạt thời gian</p>
                <p class="text-gray-600 text-xs">Đặt lịch theo nhu cầu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  mainContent.innerHTML = html;
}
