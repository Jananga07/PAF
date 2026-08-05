<<<<<<< Updated upstream
# 🎓 Smart Campus Management System

A full-stack Smart Campus system designed to manage university resources efficiently.  
This system includes resource booking, ticket management, notifications, and secure role-based access.

---

## 🚀 Features

### 🔐 Authentication & Security
- Google OAuth2 login
- JWT-based authentication
- Role-based access control (USER, ADMIN, TECHNICIAN)
- Secured API endpoints

### 📅 Resource Booking
- Book campus resources (rooms, labs, etc.)
- Prevent double bookings (conflict detection)
- Time slot selection with unavailable slots disabled
- Capacity validation
- Resource availability filtering

### 🎫 Ticket Management
- Raise and manage support tickets
- Role-based ticket handling

### 📧 Email Notifications
- Booking confirmation emails
- Approval / rejection notifications
- Asynchronous email sending using `@Async`

### 📊 Admin Dashboard
- View system analytics
- Manage users and resources
- Monitor bookings and activities

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Custom CSS (modern UI design)
- React Router
- Axios

### Backend
- Spring Boot
- Spring Security
- JWT Authentication
- REST APIs

### Database
- MySQL

### Other Tools
- JavaMailSender (Email service)
- Google OAuth2
- Maven

---

## 🧠 Key Concepts Implemented

- DTO pattern for clean data transfer
- Layered architecture (Controller → Service → Repository)
- Async processing (`@Async`) for email handling
- Validation (frontend + backend)
- Secure authentication using JWT
- Conflict detection in bookings

---
=======
# 🏫 Smart Campus Operations Hub

A full-stack campus management system built for SLIIT that enables students and staff to book resources, report incidents, manage facilities, and stay updated — all from one modern platform.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Framer Motion, Recharts |
| Backend | Spring Boot 4, Spring Security, JWT |
| Database | MySQL |
| Authentication | Google OAuth2 + JWT |
| Email | Spring Mail (Gmail SMTP) |

---

## 📦 Modules

### Module 1 — Resource Management
- Browse and filter campus resources (lecture halls, labs, meeting rooms, equipment)
- Admin: add, edit, delete, update resource status
- Users can book directly from the resource catalogue

### Module 2 — Booking Management
- Submit booking requests with real-time conflict detection
- Hourly time slot selection with booked slots disabled
- Capacity validation and past date prevention
- Admin: approve, reject (with reason), cancel, delete bookings
- Email notifications on booking creation, approval, and rejection
- Analytics dashboard with daily trends, peak hours, top resources, booking health

### Module 3 — Maintenance & Ticket Management
- Submit support tickets with priority, category, and image attachments
- Admin: manage categories, assign technicians, update ticket status
- Comment/discussion system on each ticket

### Module 4 — Notifications
- Real-time in-app notification bell
- Admin notification management panel

### Module 5 — Authentication & Authorization
- Google OAuth2 login for users
- Admin login with JWT
- Role-based access control (USER, ADMIN, TECHNICIAN)
- User management dashboard

---

## ⚙️ Setup & Installation

### Prerequisites
- Java 21
- Node.js 18+
- MySQL 8
- Maven

### Backend Setup

1. Create a MySQL database:
```sql
CREATE DATABASE paf;
```

2. Configure `application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/paf
spring.datasource.username=your_username
spring.datasource.password=your_password

spring.mail.username=your_email@gmail.com
spring.mail.password=your_app_password

app.jwt.secret=your_jwt_secret
app.cors.allowed-origin=http://localhost:3000

spring.security.oauth2.client.registration.google.client-id=your_client_id
spring.security.oauth2.client.registration.google.client-secret=your_client_secret
```

3. Run the backend:
```bash
cd "backend-paf (1)/backend-paf"
./mvnw spring-boot:run
```

Backend runs on `http://localhost:8080`

### Frontend Setup

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Start the development server:
```bash
npm start
```

Frontend runs on `http://localhost:3000`

---

## 🔐 Default Admin Account

```
Email:    admin@gmail.com
Password: admin
```

> The admin account is automatically seeded on first backend startup.

---

## 📁 Project Structure

```
├── backend-paf/
│   └── src/main/java/backend_paf/
│       ├── Module1/    # Resources
│       ├── Module2/    # Bookings
│       ├── Module3/    # Tickets
│       ├── Module4/    # Notifications
│       └── Module5/    # Auth & Users
│
└── frontend/
    └── src/
        ├── M1/         # Resources
        ├── M2/         # Bookings & Analytics
        ├── M3/         # Tickets
        ├── M4/         # Notifications
        ├── M5/         # Auth
        ├── AdminDashboard/
        └── Home/
```

---

## 👥 Team

SLIIT — Programming Applications Framework (PAF) Group Project — 2026

---

## 📄 License

This project is for academic purposes only.
>>>>>>> Stashed changes
