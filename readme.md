## PetAdopt 

PetAdopt is a web application that connects animal shelters with adopters. It provides an easy-to-use platform for users to browse available pets, view shelter details, and add pets to their favorites. Shelters can manage pet listings and communicate with potential adopters. The app aims to streamline the adoption process and help pets find loving homes.

# key features:
	•	Browse pets available for adoption
	•	Add and remove favorites
	•	Admin dashboard for pet management
	•	Filter pets by type, location, and age
	•	Contact shelters directly from pet listings

# Getting Started

Prerequisites

	•	Node.js: Ensure you have Node.js installed.
	•	MongoDB: Set up a MongoDB instance (local or cloud).
	•	Cloudinary: Create a free account for image uploads.

# Installation

	1.	Clone the repository:

	git clone <the repo link>
    cd petAdopt

    2. Install dependencies:

    - server:
     npm install express mongoose cors dotenv

    - client:
    npm install axios 

	3.	Set up environment variables:
    Create a .env file in the root directory and add the following:
	PORT=3000
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
    CLOUDINARY_URL=cloudinary://<api_key>:<api_secret>@<cloud_name>

# Run the application
   npm run dev
   Open http://localhost:5173 in your browser.

# Tech Stack
	•	Frontend: React.js.
	•	Backend: Node.js with Express.js for routing and API logic.
	•	Database: MongoDB for storing user, pet, and shelter information.
	•	Authentication: JSON Web Tokens (JWT) for secure user sessions.
	•	Cloudinary: For managing and storing uploaded pet images.
	•	Mapping: Leaflet.js for an interactive map displaying shelter locations.
	•	Others: Axios.   

	
	quick demo:https://youtu.be/daxerr8_VXA?si=FNyuhZ6dinvD2Ld6

