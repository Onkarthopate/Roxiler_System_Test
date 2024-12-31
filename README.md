# Roxiler_System_Test

This project sets up an API for managing product transactions. It fetches data from a third-party API, seeds it into a MongoDB database, and provides various endpoints to search, paginate, and get statistics on transactions.

## Setup Instructions

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/try/download/community) or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (cloud MongoDB)
- [Postman](https://www.postman.com/) (for testing API endpoints)

### Steps to Run

1. **Clone the Repository**

   First, clone the repository to your local machine:

   ```bash
   git clone https://github.com/Onkarthopate/Roxiler_System_Test.git
  Create a .env file in the root of your project and add the following content:

.env
Copy code
MONGO_URI=mongodb://localhost:27017/your-db-name
PORT=8080


All Set.
