# 🏋️ Project Fitness App

## **📌 Project Description**
- React-based Fitness Exercise Web Application  
- Allows users to search exercises, filter by body part, watch exercise videos, and view similar exercises  
- Fetches real-time data using external fitness APIs  
- Provides responsive and user-friendly interface  

---

##  🌍 Live Demo

- 🔗 Live Application:
- https://goldsgym14.netlify.app/
  
🔄 CI/CD Pipeline
- This project uses GitHub Actions for Continuous Integration and is automatically deployed via Netlify.

✅ What Happens on Every Push:
- Code pushed to main
- GitHub Actions runs build
- Project is tested for build errors
- If successful → Automatically deployed to Netlify

📂 Workflow File:
. github/workflows/react-ci.yml

## **✨ Features**
- 🔍 Search exercises by name  
- 🧍 Filter exercises by body parts  
- 🎥 Watch exercise demonstration videos  
- 🔁 View similar exercises suggestions  
- ⚡ Fast and responsive UI  
- 📱 Mobile-friendly design  

---

## **🛠 Tech Stack**

## **Frontend**
- React.js  
- JavaScript (ES6+)  
- HTML5  
- CSS3  

## **API Integration**
- Exercise Data API  
- Video API (YouTube or similar)  

## **Tools**
- Fetch API / Axios  
- Environment Variables (.env)  

## 📂 Project Folder Structure

```bash
project_fitness_app/
│
├── .github/
|    |- workflows
        |- react-ci.yml 
├── node_modules/
├── public/
│
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── BodyPart.js
│   │   ├── Detail.js
│   │   ├── ExerciseCard.js
│   │   ├── Exercises.js
│   │   ├── ExerciseVideos.js
│   │   ├── Footer.js
│   │   ├── HeroBanner.js
│   │   ├── HorizontalScrollbar.js
│   │   ├── Loader.js
│   │   ├── Navbar.js
│   │   ├── SearchExercises.js
│   │   └── SimilarExercises.js
│   │
│   ├── pages/
│   │   ├── ExerciseDetail.js
│   │   └── Home.js
│   │
│   ├── utils/
│   │   └── fetchData.js
│   │
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── .env
├── .eslintrc.js
└── package.json
```

## ⚙️ Setup and Installation


# 1️⃣ Clone the Repository

```bash

    git clone https://github.com/ranishilpi14/project_fitness_app.git
    cd project_fitness_app


```
# 2️⃣ Install Dependencies

```bash
    npm install
```

# 3️⃣ Setup Environment Variables
- Create .env file in root folder.
```bash
    REACT_APP_EXERCISE_API_KEY=
    REACT_APP_VIDEO_API_KEY=
```
# 4️⃣ Start Development Server
```bash
    npm start
```

# App runs on:
```bash
    http://localhost:3000 
```

## **🧠 Application Workflow**
- User opens homepage  
- User searches exercise or selects body part  
- App fetches exercise data from API  
- User clicks exercise  
- Exercise details + videos + similar exercises displayed  

---

## **🚀 Future Enhancements** 
- Save favorite exercises  
- Workout plan generator  
- AI-based workout recommendation  
- Dark mode  

---

## **🤝 Contributing**
- Fork repository  
- Create new branch  
- Commit changes  
- Push branch  
- Create Pull Request  







