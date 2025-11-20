// firebase.js - Simplified version without Firebase dependency

// Mock Firebase functions for demo purposes
const createUserWithEmailAndPassword = async (auth, email, password) => {
  return { user: { email, uid: 'user_' + Date.now() } };
};

const signInWithEmailAndPassword = async (auth, email, password) => {
  return { user: { email, uid: 'user_' + Date.now() } };
};

const signOut = async (auth) => {
  return Promise.resolve();
};

const onAuthStateChanged = (auth, callback) => {
  // Mock auth state change
  setTimeout(() => callback(null), 100);
  return () => {}; // Return unsubscribe function
};

const updateProfile = async (user, profile) => {
  return Promise.resolve();
};

// Mock auth and db objects
const auth = {};
const db = {};

export { 
  db, auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  updateProfile 
};