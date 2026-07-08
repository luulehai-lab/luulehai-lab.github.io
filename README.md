<!--
File: d:/CloudStation/CODE/PYTHON_APP/57_LANDING_PAGE_0807/README.md
CHỨC NĂNG: Tài liệu giới thiệu dự án Landing Page cá nhân của Anh Lưu
CHANGELOG:
- 11:43:00 08/07/2026: [NEW] Khởi tạo README.md chuẩn hóa theo cấu trúc của /github-publish (Lê Thanh Vân/Antigravity)
-->

<p align="center">
  <img src="logo.png" alt="Steel Framework Logo" width="180px">
</p>

<h1 align="center">Hồ sơ cá nhân & Landing Page - Lê Hải Lưu</h1>

<p align="center">
  <strong>Kỹ sư Xây dựng (NUCE K43) | Head of Sales & Design - Tuan Long Steel (TLS)</strong>
</p>

<p align="center">
  <a href="https://github.com/luulehai-lab/luulehai-lab.github.io/actions"><img src="https://img.shields.io/github/actions/workflow/status/luulehai-lab/luulehai-lab.github.io/pages/pages-build-deployment?style=flat-square&label=Deploy" alt="Deployment Status"></a>
  <img src="https://img.shields.io/badge/Language-HTML5%20%2F%20CSS3%20%2F%20JS-orange?style=flat-square" alt="Languages">
  <img src="https://img.shields.io/badge/Style-Premium%20Dark%20Mode-blueviolet?style=flat-square" alt="Style">
</p>

---

## 📖 Giới thiệu

Trang Landing Page cá nhân cao cấp, responsive tự động, phản ánh thương hiệu và năng lực chuyên môn của **Lê Hải Lưu (Lưu TLS)**. Đây là không gian trưng bày các dự án kết cấu thép tiêu biểu, các công cụ tự động hóa kỹ thuật tự phát triển (Python/PyQt6) và cổng liên hệ công việc trực tiếp.

* **Trang chủ chính thức**: [https://luulehai-lab.github.io](https://luulehai-lab.github.io)
* **Phong cách**: Premium Dark Mode & Industrial Accents (Metallic Orange & Slate Gray).

---

## 🏗️ Cấu trúc dự án & Phân rã Module

Trang web được thiết kế theo mô hình single-page tĩnh, tối ưu hóa tốc độ tải trang bằng cách nhúng trực tiếp tài nguyên vector (SVG) và viết Vanilla CSS thuần.

```mermaid
graph TD
    index.html[index.html - Cấu trúc & SEO] --> style.css[style.css - Thiết kế & Responsive]
    index.html --> script.js[script.js - Tương tác & Form gửi Email]
    index.html --> logo.png[logo.png - Nhận diện thương hiệu]
    script.js --> Web3Forms[Web3Forms API - Gửi mail về luu.lehai@gmail.com]
```

### Chi tiết các thành phần:
* **`index.html`**: Khung sườn semantic HTML5 chuẩn SEO.
* **`style.css`**: Hệ thống biến màu sắc `:root` đồng bộ, layout responsive Grid & Flexbox, hiệu ứng cuộn chuyển động (Scroll Reveal).
* **`script.js`**:
  * Typing Animation: Hiệu ứng gõ chữ giới thiệu ở Hero section.
  * Active Navigation Link Tracking: Tự động làm sáng menu tương ứng khi cuộn trang.
  * Form Handler: Tích hợp Fetch API gửi dữ liệu liên hệ trực tiếp qua Web3Forms.

---

## 🚀 Hướng dẫn Cấu hình & Deploy nhanh

### 1. Cấu hình hòm thư nhận tin nhắn (Web3Forms)
Trang web đã được cấu hình gửi tin nhắn trực tiếp từ form liên hệ về email của bạn:
1. Truy cập [web3forms.com](https://web3forms.com/) và nhập email `luu.lehai@gmail.com` để nhận **Access Key** miễn phí.
2. Mở file `index.html`, tìm dòng cấu hình input ẩn sau và thay thế bằng key thực tế của bạn:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```

### 2. Triển khai lên GitHub Pages
Để trang web hoạt động trên tên miền cá nhân miễn phí của bạn, chạy các lệnh Git sau:
```bash
# Đổi tên nhánh sang main
git branch -M main

# Liên kết với kho chứa trên GitHub của bạn
git remote add origin https://github.com/luulehai-lab/luulehai-lab.github.io.git

# Đẩy mã nguồn lên
git push -u origin main
```

Sau khi đẩy code thành công, GitHub Pages sẽ tự động kích hoạt và deploy trang web của bạn chỉ sau 1 phút tại: **`https://luulehai-lab.github.io`**.
