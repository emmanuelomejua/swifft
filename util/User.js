export default class User {
    constructor(username, email, id) {
      this.username = username;
      this.email = email;
      this.id = id;
    }
  
    static async fromFirebaseUser(firebaseUser) {
      const username = await this.getUsernameFromEmail(firebaseUser.email);
      return new User(username, firebaseUser.email, firebaseUser.uid);
    }
  
    static async getUsernameFromEmail(email) {
      // Implement logic to retrieve username based on email (e.g., from a database)
      // This is a placeholder, replace with your actual username retrieval logic
      return email.split('@')[0]; // Example: Extract username from email (replace with actual logic)
    }
  }