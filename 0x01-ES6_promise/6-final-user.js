import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

/**
 * Handles profile signup by calling signUpUser and uploadPhoto.
 * 
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} fileName - The name of the photo file to upload.
 * @returns {Promise<Array>} - A promise that resolves to an array with the results of both promises.
 */
export default async function handleProfileSignup(firstName, lastName, fileName) {
    const signUpPromise = signUpUser(firstName, lastName);
    const uploadPhotoPromise = uploadPhoto(fileName);

    const results = await Promise.allSettled([signUpPromise, uploadPhotoPromise]);

    return results.map((result) => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : `${result.reason}`,
    }));
}
