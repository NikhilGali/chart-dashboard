
# Chart Dashboard Application

This project is a web application built using Next.js for the frontend and Django for the backend. The application displays a basic dashboard with multiple charts (Candlestick, Line Chart, Bar Chart, and Pie Chart) with data dynamically fetched from a Django API.

## Project Structure

```
/chart-project
|-- /chart-frontend      # Next.js Frontend
|-- /chart-backend       # Django Backend
```

## Getting Started

### Prerequisites

- **Node.js** (v14 or above)
- **Python** (3.8 or above)
- **Pip** (Python package installer)

### Setup Instructions

#### Backend (Django)

1. **Navigate to the Backend Directory:**

   ```bash
   cd chart-backend
   ```

2. **Install Python Dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

3. **Run the Django Server:**

   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

   The backend API will be running at `http://127.0.0.1:8000`.

#### Frontend (Next.js)

1. **Navigate to the Frontend Directory:**

   ```bash
   cd chart-frontend
   ```

2. **Install Node.js Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Next.js Development Server:**

   ```bash
   npm run dev
   ```

   The frontend will be running at `http://localhost:3000`.

### Libraries and Tools Used

- **Frontend:**
  - Next.js: React framework for server-side rendering and static site generation.
  - Chart.js with React Chart.js 2: Charting library for creating different types of charts.
  - Axios: For making HTTP requests to the Django API.

- **Backend:**
  - Django: Backend web framework for developing the API.
  - Django REST Framework: For building the RESTful API.

### Approach and Thought Process

1. **Django API:** Created a simple Django API with endpoints providing hardcoded data for each chart type.
2. **Next.js Frontend:** Built a dashboard page using Next.js, where each chart component fetches data from the corresponding Django API endpoint and displays it.
3. **Integration:** Ensured smooth integration between the frontend and backend by handling data fetching with Axios and displaying it using popular charting libraries.
4. **Code Organization:** Kept the project structure modular and organized for ease of maintenance and scalability.

### Conclusion

This project demonstrates how to build a full-stack application with Next.js and Django, integrating multiple chart types dynamically.
