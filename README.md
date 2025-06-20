**📦 Multiple Location Warehouse Management System (WMS)**

A Warehouse Management System (WMS) built using Next.js and Firebase that helps businesses manage inventory across multiple warehouse locations. It features user authentication, role-based access, inventory operations, real-time updates, and reporting support.

🚀 Live Demo
Vercel Link - https://assignment-wms.vercel.app/auth/login
GitHub Link - https://github.com/aastha002/assignment_wms

📚 Table of Contents
Features

Tech Stack
Project Structure
Setup Instructions
Usage Guide
Future Scope

✅ Features
🔑 User Authentication
Login functionality (via Firebase Auth)

Role-based access:

Admin: Manage warehouses & inventory

Manager/Staff: Perform day-to-day stock operations

Firebase Firestore stores user roles

📦 Inventory Management
Add, edit, delete inventory items

View inventory by warehouse

Search & filter functionality

🏢 Warehouse Management
Add/edit warehouse locations

View all items in each warehouse

🔄 Stock Operations
Track incoming (entries) and outgoing (exits) stock

(Feature planned) Transfers between warehouses

📊 Reporting
View inventory levels (basic implemented)

Generate transaction history (Planned feature)

⚙️ Admin Dashboard
Real-time overview of warehouses and inventory status

Alerts for low-stock items (Planned feature)


Tech Stack - 

Next.js -	React framework for frontend
Firebase	 - Firestore DB + Auth + Hosting
Tailwind CSS	 - For styling the UI
GitHub Actions -	CI/CD Deployment

🗂️ Project Structure
├── components/        // UI Components (Sidebar, InventoryTable)
├── context/           // Auth Context (Firebase-based)
├── pages/             // Next.js Routes
│   ├── auth/login.js
│   ├── dashboard.js
│   ├── inventory/index.js
│   ├── warehouses/index.js
│   └── reports/index.js
├── services/          // Firebase Firestore Service Layer
├── styles/            // Tailwind CSS
├── lib/               // Firebase Config
├── .env.local         // Firebase API Keys (ignored by git)


⚙️ Setup Instructions
1️⃣ Clone the repository

git clone https://github.com/aastha002/assignment_wms.git
cd assignment_wms

2️⃣ Install dependencies

npm install

Run development server
npm run dev

👥 Usage Guide
▶️ Login Credentials
You can register new users manually in Firebase Console or modify the code to support user registration.

For testing:

Email: admin@example.com

Password: password123

🔮 Future Scope
✅ Add proper warehouse inventory view (basic available)

🚧 Reports & Export PDFs

🚧 Role-based dashboards

🚧 Stock Transfer between Warehouses

🚧 Add user management (create/delete users from app)




