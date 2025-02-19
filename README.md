# Admin User - Parks & Rec 🏞️

This repository contains the **Admin User Dashboard** for managing **Parks & Recreation programs**. The admin panel allows authorized users to **add, edit, delete, and upload images** for programs stored in the backend.

---
## 🌐 About This Project

This project is a **mock site** designed for demonstration purposes.  
The **Admin User Interface** allows users to manage programs and events, but since this project uses **SQLite3**, the backend must be **manually updated and redeployed** for changes to take effect.

### **⚠️ Important Notes**
- 🛠 **SQLite3 is used for this mock version**, meaning database updates require **backend redeployment**.
- ☁️ **For a real-world implementation, a cloud-based database** (such as **Firebase Firestore, Supabase, or PostgreSQL**) would be used to allow **real-time admin modifications**.
- 🔧 **If you want to modify the database via the admin panel, you'll need to set up your own database connection and backend API**.

### **🔄 Making This Work in a Real-World Scenario**
To implement **real-time updates without redeploying**:
1. Replace SQLite3 with a **cloud database** (e.g., Firebase Firestore, Supabase, or MongoDB Atlas).
2. Modify the backend to allow direct database manipulation from the admin panel.
3. Use real-time database listeners to sync frontend changes instantly.

🚀 **This mock project demonstrates the core functionality, but to use it in production, you'll need to set up your own database infrastructure.**  


## ⚠️ **Prerequisite: Start the Backend First!**
Before running this application, make sure the **backend server** is up and running.  

### 🥌 **Start the Backend:**  
1. Clone the backend repository:  
   ```sh
   git clone https://github.com/aRonnieAlsop/parks_and_rec_backend.git
2. Navigate into the backend directory:
   ```sh
   cd parks_and_rec_backend
3. Install dependencies:
   ```sh
   npm install
4. Start the backend server:
   ```sh
   npm run dev
The backend will be available at http://localhost:5000.

### 🎮 **Starting the Admin Dashboard:**  
Once the backend is running, follow these steps to start the **Admin User Panel**:
1. Clone this repository:
   ```sh
   git clone https://github.com/aRonnieAlsop/admin_user_parks_-_rec.git
2. Navigate into the project directory:
   ```sh
   cd admin_user_parks_-_rec
3. Install dependencies:
   ```sh
   npm install
4. Start the development server:
   ```sh
   npm start

The application will be available at http://localhost:3000.

## 🔐 Authentication Setup

You'll need to set up your own credentials to be able to run this project beyond the login page.  

Refer to the [Firebase Authentication Docs](https://firebase.google.com/docs/auth) for details on setting up authentication.









