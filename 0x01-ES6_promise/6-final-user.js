import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName).then(
    (value) => ({ status: 'fulfilled', value }),
    (error) => ({ status: 'rejected', value: error })
  );

  const uploadPromise = uploadPhoto(fileName).then(
    (value) => ({ status: 'fulfilled', value }),
    (error) => ({ status: 'rejected', value: error })
  );

  return Promise.allSettled([signUpPromise, uploadPromise]).then((results) =>
    results.map((result) => ({
      status: result.status,
      value: result.value,
    }))
  );
}
