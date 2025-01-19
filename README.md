# Percel Point

Welcome to the **Parcel Point**, a dynamic platform built with the MERN stack for efficient parcel booking, delivery, and management. This project demonstrates a fully functional web application that caters to three types of users: Admin, Delivery Men, and Users.

## 🚀 Live Demo

 **Live Site URL** : https://percel-point.web.app

 **Admin Credentials**
  - Email: `admin@gmail.com`
  - Password: `Hyper@118`
 **Delivery Men Credentials**
  - Email: `delivery@man.com`
  - Password: `Hyper@118`

## 📌 Features

**User Roles & Access Control**

- Three distinct user roles: User, Delivery Men, and Admin.
- Conditional rendering of dashboard menus and functionality based on user roles.

**Parcel Booking**

- Seamless parcel booking with user-friendly forms.
- Automatic cost calculation based on parcel weight.
- Real-time validation and status management (`Pending`, `On The Way`, `Delivered`, etc.).

**Admin Dashboard**

- Comprehensive statistics with React Apex Charts (Bar & Line charts).
- Manage all parcels, users, and delivery men efficiently.
- Assign delivery personnel and track progress.

**Delivery Men Dashboard**

- Track assigned deliveries and update statuses.
- Review feedback from users and manage delivery ratings.

**Interactive Home Page**

- Stunning animations using AOS and lottie-react.
- Features sections with icons, titles, and descriptions.
- Real-time statistics of app usage with React CountUp.

**Real-Time Notifications**

- SweetAlert2 and React Toastify for CRUD operation alerts, login/signup success, and errors.

**Location Integration**

- Delivery locations displayed on a MapBox-powered map with precise latitude/longitude pins.

**Responsive Design**

- Fully responsive design for mobile, tablet, and desktop views.
- Adaptable layouts for all dashboard and public pages.

**Payment Integration**

- Secure payments via Stripe.
- Visual feedback using React Confetti on successful transactions.

**Additional Features** - Light/Dark mode toggle. - Secure authentication with Firebase and JWT for protected routes. - Integrated with React Query for efficient data fetching.

## 🛠️ Tech Stack

- **Frontend:** React, React Router, Axios, AOS, SweetAlert2, React Toastify, React Query, React CountUp.
- **Backend:** Node.js, Express.js.
- **Database:** MongoDB (with aggregation for statistics).
- **Authentication:** Firebase Authentication (Google Sign-In & Email/Password Login).
- **Styling:** Shadcn component library.
- **Payment Gateway:** Stripe.
- **Maps & Geolocation:** React MapGL.
