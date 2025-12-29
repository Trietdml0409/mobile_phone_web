# Mobile Phone Web - Learning Checklist

Đây là dự án học tập về React.js và Next.js. Checklist này giúp bạn theo dõi tiến độ học tập của mình.

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📚 React.js Cơ Bản

### JSX & Components

- [ ] Hiểu JSX là gì và cách viết JSX
- [ ] Biết cách tạo Functional Component
- [ ] Biết cách export và import Component
- [ ] Hiểu sự khác biệt giữa "use client" và Server Component

### Props (Properties)

- [ ] Hiểu Props là gì và cách truyền Props
- [ ] Biết cách nhận Props trong Component
- [ ] Biết cách sử dụng Props với TypeScript interface
- [ ] Hiểu Props vs State

### State Management (useState)

- [ ] Hiểu State là gì và khi nào cần dùng
- [ ] Biết cách sử dụng useState hook
- [ ] Biết cách update state với setState
- [ ] Hiểu functional update: `setState(prev => prev + 1)`
- [ ] Biết cách quản lý nhiều state trong một component

### Event Handling

- [ ] Biết cách xử lý onClick event
- [ ] Biết cách xử lý onChange event (input, select)
- [ ] Hiểu cách truyền parameters vào event handler
- [ ] Biết cách preventDefault và stopPropagation

### Conditional Rendering

- [ ] Biết cách sử dụng `&&` operator để render có điều kiện
- [ ] Biết cách sử dụng ternary operator `? :`
- [ ] Biết cách sử dụng `if/else` trong JSX
- [ ] Hiểu khi nào nên dùng cách nào

### Lists & Keys

- [ ] Biết cách sử dụng `map()` để render danh sách
- [ ] Hiểu tại sao cần `key` prop
- [ ] Biết cách chọn key phù hợp (id, index)

### useEffect Hook

- [ ] Hiểu useEffect là gì và khi nào cần dùng
- [ ] Biết cách sử dụng useEffect với dependency array rỗng `[]`
- [ ] Biết cách sử dụng useEffect với dependencies `[value]`
- [ ] Hiểu cleanup function trong useEffect
- [ ] Biết cách tránh infinite loop

### Array Methods

- [ ] Biết cách sử dụng `map()` để transform array
- [ ] Biết cách sử dụng `filter()` để lọc array
- [ ] Biết cách sử dụng `sort()` để sắp xếp array
- [ ] Biết cách sử dụng `find()` để tìm phần tử
- [ ] Hiểu cách kết hợp các array methods

---

## ⚡ Next.js Cơ Bản

### Routing

- [ ] Hiểu App Router trong Next.js 13+
- [ ] Biết cách tạo route mới bằng folder structure
- [ ] Hiểu sự khác biệt giữa `page.tsx` và `layout.tsx`
- [ ] Biết cách tổ chức folder structure

### Navigation

- [ ] Biết cách sử dụng `Link` component từ `next/link`
- [ ] Biết cách sử dụng `useRouter` hook
- [ ] Biết cách navigate programmatically với `router.push()`
- [ ] Hiểu sự khác biệt giữa `Link` và `router.push()`

### URL Parameters & Query Strings

- [ ] Biết cách sử dụng `useSearchParams` để lấy query string
- [ ] Hiểu cách đọc `?id=123` từ URL
- [ ] Biết cách tạo dynamic route với `[id]` folder
- [ ] Biết cách lấy params từ dynamic route

### Client vs Server Components

- [ ] Hiểu khi nào cần "use client"
- [ ] Hiểu khi nào không cần "use client"
- [ ] Biết cách sử dụng hooks trong Client Component

---

## 🎯 TypeScript Cơ Bản

### Types & Interfaces

- [ ] Hiểu cách khai báo interface
- [ ] Biết cách sử dụng interface cho Props
- [ ] Hiểu type vs interface
- [ ] Biết cách sử dụng optional properties `?`

### Type Annotations

- [ ] Biết cách type cho useState: `useState<string>("")`
- [ ] Biết cách type cho function parameters
- [ ] Biết cách type cho function return value

---

## 🛠️ Thực Hành trong Project

### Trang Home (`src/app/page.tsx`)

- [ ] Hoàn thành useState cho visitCount
- [ ] Hoàn thành useState cho showWelcome
- [ ] Hoàn thành useState cho userName
- [ ] Hoàn thành useEffect để tăng visitCount
- [ ] Hoàn thành handleToggleWelcome
- [ ] Hoàn thành handleChangeUserName
- [ ] Hoàn thành conditional rendering cho welcome message
- [ ] Hoàn thành input field cho userName
- [ ] Hoàn thành array mapping cho features list

### Trang Category (`src/app/category/page.tsx`)

- [ ] Hoàn thành các case sort còn lại (price-decrease, name-a-z, name-z-a, newest, oldest, best-seller)
- [ ] Hoàn thành filter by brand (state, buttons, handler)
- [ ] Hoàn thành state cho favorites
- [ ] Hoàn thành state cho cart
- [ ] Hoàn thành handleAddToCart
- [ ] Hoàn thành handleToggleFavorite
- [ ] Hoàn thành navigation đến product-details
- [ ] Hoàn thành useEffect để update totalProducts

### Trang Product Details (`src/app/product-details/page.tsx`)

- [ ] Hoàn thành useSearchParams để lấy productId
- [ ] Hoàn thành state cho product
- [ ] Hoàn thành state cho quantity
- [ ] Hoàn thành useEffect để fetch product
- [ ] Hoàn thành handleBuyNow
- [ ] Hoàn thành handleAddToCart
- [ ] Hoàn thành conditional rendering cho loading
- [ ] Hoàn thành props passing cho ImagesProduct
- [ ] Hoàn thành props passing cho Information

---

## 📖 Tài Liệu Tham Khảo

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [React Documentation](https://react.dev) - learn about React features.
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - learn TypeScript basics.

---

## 🚀 Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
