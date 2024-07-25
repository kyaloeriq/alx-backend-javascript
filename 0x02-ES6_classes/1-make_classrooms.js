// Import the ClassRoom class from 0-classroom.js
import ClassRoom from './0-classroom.js';

// Function to initialize an array of ClassRoom objects
function initializeRooms() {
  // Create an array with three ClassRoom objects with the specified sizes
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34)
  ];
}

// Export the initializeRooms function for use in other modules
export { initializeRooms };
