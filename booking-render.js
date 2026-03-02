// Booking page renderer
const urlParams = new URLSearchParams(window.location.search);
const providerId = urlParams.get('provider');
const serviceId = urlParams.get('service');

const provider = window.PROVIDERS[providerId];
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
    document.getElementById('page-title').textContent = `Đặt lịch ${service.name} | Longvan.vn`;
    renderBookingPage(service, provider);
  }
}

function renderBookingPage(service, provider) {
  const mainContent = document.getElementById('main-content');
  
  const html = `
    <!-- Breadcrumb -->
    <div class="mb-6">
      <div class="flex items-center gap-2 text-sm text-gray-600">
        <a href="index.html" class="hover:text-primary transition">Trang chủ</a>
        <span class="material-symbols-outlined text-[16px]">chevron_right</span>
        <a href="${provider.id}.html" class="hover:text-primary transition">${provider.name}</a>
        <span class="material-symbols-outlined text-[16px]">chevron_right</span>
        <a href="service-${provider.id}-${service.id}.html" class="hover:text-primary transition">${service.name}</a>
        <span class="material-symbols-outlined text-[16px]">chevron_right</span>
        <span class="text-gray-900 font-medium">Đặt lịch</span>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Left Column - Booking Form -->
      <div class="lg:col-span-2">
        <div class="bg-white rounded-2xl shadow-card border border-gray-100 p-6 sm:p-8">
          <h1 class="text-2xl font-bold text-gray-900 mb-6">Đặt lịch dịch vụ</h1>
          
          <form id="booking-form" class="space-y-6">
            <!-- Customer Info -->
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-4">Thông tin khách hàng</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Họ và tên <span class="text-red-500">*</span></label>
                  <input type="text" required class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition" placeholder="Nguyễn Văn A"/>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Số điện thoại <span class="text-red-500">*</span></label>
                  <input type="tel" required class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition" placeholder="0901234567"/>
                </div>
                <div class="sm:col-span-2">
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition" placeholder="email@example.com"/>
                </div>
              </div>
            </div>

            <!-- Branch Selection -->
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-4">Chọn chi nhánh</h3>
              <div class="grid grid-cols-1 ${provider.branches && provider.branches.length > 1 ? 'sm:grid-cols-2' : ''} ${provider.branches && provider.branches.length > 2 ? 'lg:grid-cols-3' : ''} gap-3" id="branch-selection">
                ${provider.branches ? provider.branches.map((branch, index) => `
                  <label class="flex items-start gap-2.5 p-3 border-2 ${index === 0 ? 'border-primary bg-blue-50' : 'border-gray-200'} rounded-xl hover:border-primary cursor-pointer transition group">
                    <input type="radio" name="branch" value="${branch.id}" ${index === 0 ? 'checked' : ''} class="w-4 h-4 text-primary mt-0.5 cursor-pointer shrink-0" onchange="updateBranchSelection('${branch.id}')"/>
                    <div class="flex-1 min-w-0">
                      <p class="font-bold text-gray-900 text-sm mb-1.5">${branch.name}</p>
                      <div class="space-y-1">
                        <p class="text-[11px] text-gray-600 flex items-start gap-1 leading-tight">
                          <span class="material-symbols-outlined text-[12px] text-gray-400 mt-0.5 shrink-0">location_on</span>
                          <span class="line-clamp-2">${branch.address}</span>
                        </p>
                        <p class="text-[11px] text-gray-600 flex items-center gap-1">
                          <span class="material-symbols-outlined text-[12px] text-gray-400 shrink-0">phone</span>
                          <span>${branch.phone}</span>
                        </p>
                      </div>
                    </div>
                  </label>
                `).join('') : '<p class="text-gray-500 text-sm">Không có chi nhánh</p>'}
              </div>
            </div>

            <!-- Date Selection -->
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-4">Chọn ngày</h3>
              
              <!-- Week Navigation -->
              <div class="flex items-center justify-between mb-3 bg-white rounded-xl p-2.5 border border-gray-100">
                <button type="button" onclick="changeWeek(-1)" class="p-1.5 hover:bg-gray-100 rounded-lg transition">
                  <span class="material-symbols-outlined text-gray-600 text-[20px]">chevron_left</span>
                </button>
                <div class="text-xs font-semibold text-gray-700" id="week-range"></div>
                <button type="button" onclick="changeWeek(1)" class="p-1.5 hover:bg-gray-100 rounded-lg transition">
                  <span class="material-symbols-outlined text-gray-600 text-[20px]">chevron_right</span>
                </button>
              </div>

              <!-- Calendar Days -->
              <div class="grid grid-cols-7 gap-2" id="calendar-days"></div>
            </div>

            <!-- Time Slots -->
            <div id="time-slots-section" style="display: none;">
              <h3 class="text-lg font-bold text-gray-900 mb-4">Chọn giờ</h3>
              <div class="grid grid-cols-3 sm:grid-cols-4 gap-2" id="time-slots-grid"></div>
              <input type="hidden" id="selected-date" required/>
              <input type="hidden" id="selected-time" required/>
            </div>

            <!-- Quantity -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Số lượng</label>
              <div class="flex items-center gap-4">
                <button type="button" onclick="decreaseQuantity()" class="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition">
                  <span class="material-symbols-outlined text-[20px]">remove</span>
                </button>
                <input type="number" id="quantity" value="1" min="1" max="10" class="w-20 text-center px-4 py-2 border border-gray-200 rounded-lg font-bold text-lg" readonly/>
                <button type="button" onclick="increaseQuantity()" class="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition">
                  <span class="material-symbols-outlined text-[20px]">add</span>
                </button>
              </div>
            </div>

            <!-- Address -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Địa chỉ (nếu cần hỗ trợ tận nơi)</label>
              <textarea rows="3" class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition" placeholder="Nhập địa chỉ của bạn..."></textarea>
            </div>

            <!-- Notes -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Ghi chú</label>
              <textarea rows="3" class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition" placeholder="Thêm ghi chú cho nhà cung cấp..."></textarea>
            </div>

            <!-- Payment Method -->
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-4">Phương thức thanh toán</h3>
              <div class="space-y-3">
                <label class="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-primary cursor-pointer transition">
                  <input type="radio" name="payment" value="cash" checked class="w-5 h-5 text-primary"/>
                  <div class="flex items-center gap-3 flex-1">
                    <span class="material-symbols-outlined text-green-500 text-[24px]">payments</span>
                    <div>
                      <p class="font-semibold text-gray-900">Tiền mặt</p>
                      <p class="text-xs text-gray-600">Thanh toán khi hoàn thành dịch vụ</p>
                    </div>
                  </div>
                </label>
                <label class="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-primary cursor-pointer transition">
                  <input type="radio" name="payment" value="transfer" class="w-5 h-5 text-primary"/>
                  <div class="flex items-center gap-3 flex-1">
                    <span class="material-symbols-outlined text-blue-500 text-[24px]">account_balance</span>
                    <div>
                      <p class="font-semibold text-gray-900">Chuyển khoản</p>
                      <p class="text-xs text-gray-600">Chuyển khoản trước khi sử dụng dịch vụ</p>
                    </div>
                  </div>
                </label>
                <label class="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-primary cursor-pointer transition">
                  <input type="radio" name="payment" value="card" class="w-5 h-5 text-primary"/>
                  <div class="flex items-center gap-3 flex-1">
                    <span class="material-symbols-outlined text-purple-500 text-[24px]">credit_card</span>
                    <div>
                      <p class="font-semibold text-gray-900">Thẻ tín dụng/ghi nợ</p>
                      <p class="text-xs text-gray-600">Thanh toán qua cổng thanh toán an toàn</p>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="pt-4">
              <button type="submit" class="w-full bg-primary hover:bg-blue-700 text-white font-bold py-4 rounded-full transition-all shadow-md hover:shadow-lg">
                Xác nhận đặt lịch
              </button>
              <p class="text-xs text-gray-500 text-center mt-3">
                Bằng việc đặt lịch, bạn đồng ý với <a href="#" class="text-primary hover:underline">Điều khoản sử dụng</a> và <a href="#" class="text-primary hover:underline">Chính sách bảo mật</a>
              </p>
            </div>
          </form>
        </div>
      </div>

      <!-- Right Column - Order Summary -->
      <div>
        <div class="bg-white rounded-2xl shadow-card border border-gray-100 p-6 sticky top-6">
          <h3 class="text-lg font-bold text-gray-900 mb-4">Chi tiết đơn hàng</h3>
          
          <!-- Service Info -->
          <div class="flex gap-3 mb-6 pb-6 border-b border-gray-100">
            <img src="${service.image}" alt="${service.name}" class="w-20 h-20 rounded-xl object-cover"/>
            <div class="flex-1 min-w-0">
              <h4 class="font-bold text-gray-900 text-sm mb-1">${service.name}</h4>
              <p class="text-xs text-gray-600 mb-2">${service.desc}</p>
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-yellow-400 filled-icon text-[14px]">star</span>
                <span class="text-xs font-semibold text-gray-900">${provider.rating}</span>
                <span class="text-xs text-gray-500">(${provider.reviewCount})</span>
              </div>
            </div>
          </div>

          <!-- Provider Info -->
          <div class="mb-6 pb-6 border-b border-gray-100">
            <p class="text-xs text-gray-600 mb-2">Nhà cung cấp</p>
            <div class="flex items-center gap-3">
              <img src="${provider.logo}" alt="${provider.name}" class="w-10 h-10 rounded-lg object-cover"/>
              <div>
                <p class="font-semibold text-gray-900 text-sm">${provider.name}</p>
                <p class="text-xs text-gray-600">${provider.subtitle}</p>
              </div>
            </div>
          </div>

          <!-- Price Breakdown -->
          <div class="space-y-3 mb-6">
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Giá dịch vụ</span>
              <span class="font-semibold text-gray-900" id="service-price">${service.price}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Số lượng</span>
              <span class="font-semibold text-gray-900" id="quantity-display">x1</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Phí dịch vụ</span>
              <span class="font-semibold text-gray-900">0đ</span>
            </div>
            <div class="pt-3 border-t border-gray-100">
              <div class="flex justify-between">
                <span class="font-bold text-gray-900">Tổng cộng</span>
                <span class="font-bold text-accent text-xl" id="total-price">${service.price}</span>
              </div>
            </div>
          </div>

          <!-- Benefits -->
          <div class="space-y-3 pt-6 border-t border-gray-100">
            <div class="flex items-start gap-2">
              <span class="material-symbols-outlined text-green-500 text-[18px]">verified_user</span>
              <div>
                <p class="font-medium text-gray-900 text-xs">Đảm bảo hoàn tiền</p>
                <p class="text-gray-600 text-[10px]">100% nếu không hài lòng</p>
              </div>
            </div>
            <div class="flex items-start gap-2">
              <span class="material-symbols-outlined text-blue-500 text-[18px]">support_agent</span>
              <div>
                <p class="font-medium text-gray-900 text-xs">Hỗ trợ 24/7</p>
                <p class="text-gray-600 text-[10px]">Luôn sẵn sàng giúp đỡ bạn</p>
              </div>
            </div>
            <div class="flex items-start gap-2">
              <span class="material-symbols-outlined text-orange-500 text-[18px]">schedule</span>
              <div>
                <p class="font-medium text-gray-900 text-xs">Linh hoạt thời gian</p>
                <p class="text-gray-600 text-[10px]">Đổi lịch miễn phí trước 24h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  mainContent.innerHTML = html;
  
  // Initialize form handling
  initBookingForm(service, provider);
}

function initBookingForm(service, provider) {
  const form = document.getElementById('booking-form');
  const quantityInput = document.getElementById('quantity');
  const quantityDisplay = document.getElementById('quantity-display');
  const totalPriceDisplay = document.getElementById('total-price');
  
  const basePrice = parseInt(service.price.replace(/[^\d]/g, ''));
  
  // Calendar state
  let currentWeekStart = new Date();
  currentWeekStart.setHours(0, 0, 0, 0);
  const day = currentWeekStart.getDay();
  const diff = currentWeekStart.getDate() - day + (day === 0 ? -6 : 1);
  currentWeekStart.setDate(diff);
  
  let selectedDate = null;
  
  // Update branch selection styling
  window.updateBranchSelection = function(branchId) {
    document.querySelectorAll('input[name="branch"]').forEach(radio => {
      const label = radio.closest('label');
      if (radio.value === branchId && radio.checked) {
        label.classList.remove('border-gray-200');
        label.classList.add('border-primary', 'bg-blue-50');
      } else {
        label.classList.remove('border-primary', 'bg-blue-50');
        label.classList.add('border-gray-200');
      }
    });
    
    // Update time slots if date is selected
    if (selectedDate) {
      updateTimeSlotsDisplay();
    }
  };
  
  function renderCalendar() {
    const weekRange = document.getElementById('week-range');
    const calendarDays = document.getElementById('calendar-days');
    
    const weekEnd = new Date(currentWeekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);
    
    const formatDate = (date) => {
      return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
    };
    
    weekRange.textContent = `${formatDate(currentWeekStart)} - ${formatDate(weekEnd)}`;
    
    const days = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let daysHTML = '';
    for (let i = 0; i < 7; i++) {
      const date = new Date(currentWeekStart);
      date.setDate(date.getDate() + i);
      
      const isPast = date < today;
      const isToday = date.getTime() === today.getTime();
      const isSelected = selectedDate && date.getTime() === selectedDate.getTime();
      
      let classes = 'p-2.5 rounded-xl border text-center cursor-pointer transition';
      
      if (isPast) {
        classes += ' border-gray-100 bg-gray-50 opacity-50 cursor-not-allowed';
      } else if (isSelected) {
        classes += ' border-primary bg-blue-50 shadow-sm';
      } else {
        classes += ' border-gray-200 hover:border-primary hover:bg-blue-50';
      }
      
      daysHTML += `
        <button type="button" 
                class="${classes}"
                data-date="${date.toISOString()}"
                ${isPast ? 'disabled' : ''}
                onclick="selectDate('${date.toISOString()}')">
          <div class="text-[9px] text-gray-500 font-medium mb-0.5">${days[i]}</div>
          <div class="text-lg font-bold ${isSelected ? 'text-primary' : 'text-gray-900'}">${date.getDate()}</div>
          ${isToday ? '<div class="text-[8px] text-red-500 font-bold mt-0.5">HÔM NAY</div>' : ''}
        </button>
      `;
    }
    
    calendarDays.innerHTML = daysHTML;
  }
  
  window.changeWeek = function(direction) {
    currentWeekStart.setDate(currentWeekStart.getDate() + (direction * 7));
    renderCalendar();
    
    if (selectedDate) {
      const weekEnd = new Date(currentWeekStart);
      weekEnd.setDate(weekEnd.getDate() + 6);
      
      if (selectedDate < currentWeekStart || selectedDate > weekEnd) {
        selectedDate = null;
        document.getElementById('selected-date').value = '';
        document.getElementById('selected-time').value = '';
        document.getElementById('time-slots-section').style.display = 'none';
      }
    }
  };
  
  window.selectDate = function(dateString) {
    selectedDate = new Date(dateString);
    document.getElementById('selected-date').value = dateString;
    document.getElementById('selected-time').value = '';
    
    renderCalendar();
    updateTimeSlotsDisplay();
    
    // Show time slots section
    document.getElementById('time-slots-section').style.display = 'block';
    
    // Smooth scroll to time slots
    setTimeout(() => {
      document.getElementById('time-slots-section').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  };
  
  function updateTimeSlotsDisplay() {
    const selectedBranchRadio = document.querySelector('input[name="branch"]:checked');
    if (!selectedBranchRadio) return;
    
    const branchId = selectedBranchRadio.value;
    const branch = provider.branches.find(b => b.id === branchId);
    
    if (!branch || !selectedDate) return;
    
    const timeSlotsGrid = document.getElementById('time-slots-grid');
    
    timeSlotsGrid.innerHTML = branch.timeSlots.map(slot => {
      const isAvailable = slot.slots > 0;
      const slotClass = isAvailable 
        ? 'border-gray-200 hover:border-primary hover:bg-blue-50 cursor-pointer' 
        : 'border-gray-100 bg-gray-50 cursor-not-allowed opacity-50';
      
      return `
        <button type="button" 
                class="time-slot-btn p-3 border ${slotClass} rounded-xl transition text-center"
                data-time="${slot.time}"
                ${!isAvailable ? 'disabled' : ''}
                onclick="selectTimeSlot(this, '${slot.time}')">
          <div class="font-bold text-sm text-gray-900">${slot.time}</div>
        </button>
      `;
    }).join('');
  }
  
  window.selectTimeSlot = function(button, time) {
    document.querySelectorAll('.time-slot-btn').forEach(btn => {
      btn.classList.remove('border-primary', 'bg-blue-50', 'shadow-sm');
      btn.classList.add('border-gray-200');
    });
    
    button.classList.remove('border-gray-200');
    button.classList.add('border-primary', 'bg-blue-50', 'shadow-sm');
    
    document.getElementById('selected-time').value = time;
  };
  
  window.increaseQuantity = function() {
    const current = parseInt(quantityInput.value);
    if (current < 10) {
      quantityInput.value = current + 1;
      updatePrice();
    }
  };
  
  window.decreaseQuantity = function() {
    const current = parseInt(quantityInput.value);
    if (current > 1) {
      quantityInput.value = current - 1;
      updatePrice();
    }
  };
  
  function updatePrice() {
    const quantity = parseInt(quantityInput.value);
    quantityDisplay.textContent = `x${quantity}`;
    const total = basePrice * quantity;
    totalPriceDisplay.textContent = total.toLocaleString('vi-VN') + 'đ';
  }
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const selectedDateValue = document.getElementById('selected-date').value;
    const selectedTime = document.getElementById('selected-time').value;
    
    if (!selectedDateValue) {
      alert('Vui lòng chọn ngày');
      return;
    }
    
    if (!selectedTime) {
      alert('Vui lòng chọn giờ');
      return;
    }
    
    const selectedBranchRadio = document.querySelector('input[name="branch"]:checked');
    const selectedBranchId = selectedBranchRadio.value;
    const selectedBranch = provider.branches.find(b => b.id === selectedBranchId);
    
    const bookingDate = new Date(selectedDateValue);
    const formattedDate = `${String(bookingDate.getDate()).padStart(2, '0')}/${String(bookingDate.getMonth() + 1).padStart(2, '0')}/${bookingDate.getFullYear()}`;
    
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
      <div class="max-w-2xl mx-auto text-center py-20">
        <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span class="material-symbols-outlined text-green-500 text-[48px]">check_circle</span>
        </div>
        <h1 class="text-3xl font-bold text-gray-900 mb-4">Đặt lịch thành công!</h1>
        <div class="bg-white rounded-2xl p-6 shadow-card border border-gray-100 mb-8 text-left">
          <h3 class="font-bold text-gray-900 mb-4">Thông tin đặt lịch</h3>
          <div class="space-y-3 text-sm">
            <div class="flex justify-between">
              <span class="text-gray-600">Dịch vụ:</span>
              <span class="font-semibold text-gray-900">${service.name}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Nhà cung cấp:</span>
              <span class="font-semibold text-gray-900">${provider.name}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Chi nhánh:</span>
              <span class="font-semibold text-gray-900">${selectedBranch.name}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Địa chỉ:</span>
              <span class="font-semibold text-gray-900 text-right">${selectedBranch.address}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Thời gian:</span>
              <span class="font-semibold text-gray-900">${selectedTime} - ${formattedDate}</span>
            </div>
            <div class="flex justify-between pt-3 border-t border-gray-100">
              <span class="text-gray-600">Tổng tiền:</span>
              <span class="font-bold text-accent text-lg">${totalPriceDisplay.textContent}</span>
            </div>
          </div>
        </div>
        <p class="text-gray-600 mb-8">
          Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất để xác nhận lịch hẹn.
        </p>
        <div class="flex gap-4 justify-center">
          <a href="index.html" class="bg-white hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 rounded-full transition-all border border-gray-200">
            Về trang chủ
          </a>
          <a href="${provider.id}.html" class="bg-primary hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full transition-all shadow-md">
            Xem nhà cung cấp
          </a>
        </div>
      </div>
    `;
  });
  
  // Initialize calendar and auto-select today
  if (provider.branches && provider.branches.length > 0) {
    renderCalendar();
    
    // Auto-select today after a short delay
    setTimeout(() => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      window.selectDate(today.toISOString());
    }, 200);
  }
}
