import { uploadPhoto, createUser } from './utils.js';

/**
 * Calls uploadPhoto and createUser functions and returns an object.
 *
 * @returns {Promise<Object>} - An object containing the photo and user details, or defaults in case of failure.
 */
export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return {
      photo,
      user,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
