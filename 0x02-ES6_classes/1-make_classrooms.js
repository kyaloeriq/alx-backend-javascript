// Import the ClassRoom class from 0-classroom.js
import ClassRoom from './0-classroom.js';

/**
 * Initializes an array of ClassRoom objects with specified sizes.
 * @returns {ClassRoom[]} Array of ClassRoom objects with sizes 19, 20, and 34.
 */
function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}

// Export the initializeRooms function for use in other modules
export { initializeRooms };
