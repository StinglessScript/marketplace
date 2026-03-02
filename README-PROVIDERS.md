# Dynamic Provider Pages System

## Tổng quan

Hệ thống này cho phép quản lý tất cả các trang provider từ một template duy nhất và data configuration. Tất cả các trang (longvan-system.html, bubbly-baby-spa.html, xuong-ve-sang-tao.html, bs-ha-ngoc-manh.html) được generate từ cùng một template và render động từ JavaScript.

## Cấu trúc files

```
├── _provider-base.html          # Template HTML chung cho tất cả providers
├── provider-data.js              # Data configuration cho tất cả providers
├── provider-render.js            # JavaScript render engine
├── generate-providers.py         # Script Python để generate các trang
├── longvan-system.html           # Generated page (đừng edit trực tiếp!)
├── bubbly-baby-spa.html          # Generated page (đừng edit trực tiếp!)
├── xuong-ve-sang-tao.html        # Generated page (đừng edit trực tiếp!)
└── bs-ha-ngoc-manh.html          # Generated page (đừng edit trực tiếp!)
```

## Cách sử dụng

### 1. Thêm provider mới

**Bước 1:** Thêm data vào `provider-data.js`

```javascript
const PROVIDERS = {
  // ... existing providers
  
  'provider-moi': {
    id: 'provider-moi',
    name: 'Tên Provider',
    subtitle: 'Mô tả ngắn',
    description: [
      '<strong>Tên Provider</strong> là...',
      'Đoạn mô tả thứ 2...'
    ],
    logo: 'https://...',
    cover: 'https://...',
    coverGradient: 'from-blue-900/90 via-blue-700/40 to-transparent',
    coverOpacity: '0.30',
    rating: 4.8,
    reviews: 100,
    bookings: '500+',
    stats: [
      { icon: 'star', color: 'blue', label: 'Label', value: '100+' }
    ],
    contact: {
      address: 'Địa chỉ',
      phone: '0123456789',
      hours: 'Giờ làm việc'
    },
    serviceTitle: 'Dịch vụ',
    serviceIcon: 'build',
    services: [
      { name: 'Dịch vụ 1', desc: 'Mô tả', price: '100.000đ', category: 'all' }
    ]
  }
};
```

**Bước 2:** Thêm vào `generate-providers.py`

```python
PROVIDERS = {
    # ... existing
    'provider-moi.html': 'provider-moi',
}
```

**Bước 3:** Generate page

```bash
python3 generate-providers.py
```

**Bước 4:** Thêm link vào `index.html`

```html
<a href="provider-moi.html">Provider Mới</a>
```

### 2. Cập nhật UI/template chung

**Chỉ cần edit `_provider-base.html`**, sau đó chạy:

```bash
python3 generate-providers.py
```

Tất cả các trang sẽ được cập nhật đồng bộ!

### 3. Cập nhật data của một provider

Edit `provider-data.js`, refresh browser. Không cần generate lại!

## Ưu điểm

✅ **Đồng bộ 100%**: Tất cả trang dùng chung 1 template  
✅ **Dễ maintain**: Sửa 1 chỗ, update tất cả  
✅ **Dynamic data**: Thay đổi data không cần generate lại  
✅ **Thêm provider nhanh**: Chỉ cần thêm data + chạy script  
✅ **SEO friendly**: Mỗi provider có URL riêng (.html)  

## Lưu ý quan trọng

⚠️ **KHÔNG edit trực tiếp các file .html được generate** (longvan-system.html, bubbly-baby-spa.html, etc.)  
⚠️ Mọi thay đổi sẽ bị ghi đè khi chạy `generate-providers.py`  
⚠️ Chỉ edit `_provider-base.html` và `provider-data.js`  

## Workflow

```
Thay đổi UI → Edit _provider-base.html → Run generate-providers.py
Thay đổi data → Edit provider-data.js → Refresh browser (không cần generate)
Thêm provider → Edit provider-data.js + generate-providers.py → Run script
```

## Troubleshooting

**Q: Trang hiển thị "Provider not found"?**  
A: Kiểm tra `window.PROVIDER_ID` trong HTML và key trong `PROVIDERS` object phải khớp nhau.

**Q: Thay đổi trong _provider-base.html không có hiệu lực?**  
A: Bạn quên chạy `python3 generate-providers.py`

**Q: Muốn custom riêng 1 trang?**  
A: Không nên! Nhưng nếu thực sự cần, tạo file HTML riêng và không thêm vào generate-providers.py
