import { openDB } from 'idb';

const DB_NAME = 'fitness-chat-db';
const DB_VERSION = 2; // Incremented the version since schema changes are being made

export const initDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db, oldVersion, newVersion, transaction) {
      if (oldVersion < 1) {
        const messageStore = db.createObjectStore('messages', {
          keyPath: 'id',
        });
        messageStore.createIndex('by-timestamp', 'timestamp');

        db.createObjectStore('profile', {
          keyPath: 'id',
        });

        const progressStore = db.createObjectStore('progress', {
          keyPath: 'date',
        });
        progressStore.createIndex('by-date', 'date');
      }

      // Handle upgrades for version 2 or later
      if (oldVersion < 2) {
        // Example of adding a new index to the progress store (e.g., by user)
        const progressStore = transaction.objectStore('progress');
        progressStore.createIndex('by-user', 'userId');
        
        // Example: Adding a new field to the profile (e.g., tracking the user's preferences)
        const profileStore = transaction.objectStore('profile');
        // Since profile store is only created once, we need to check if we need to add a new property
        profileStore.openCursor().onsuccess = (event) => {
          const cursor = event.target.result;
          if (cursor) {
            let profile = cursor.value;
            // Add a new property to profile
            profile.preferences = profile.preferences || {}; // Add default if not exists
            profileStore.put(profile);
            cursor.continue();
          }
        };
      }
    },
  });
};

export const db = initDB();
