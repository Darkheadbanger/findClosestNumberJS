// Creation de fonction pour trouver la plus proche de zero
const findClosestToZero = (arr, num) => {
  if (arr.length == null) {
    return 0;
  } else if (!arr.length) {
    return 0;
  } else if (arr.length === 0) {
    return 0;
  }

  let closest = arr[0];

  let min = -501;
  let max = 6001;

  for (let i = 0; i < arr.length; i++) {
    if (Math.max(arr[i] - num) < max && Math.min(arr[i] - num) > min) {
      if (closest === 0) {
        closest = arr[i];
      } else if (
        Math.abs(arr[i] - num) < 0 &&
        Math.abs(arr[i] - num) <= Math.abs(closest - num)
      ) {
        closest = arr[i];
      } else if (
        Math.abs(arr[i] - num) > 0 &&
        Math.abs(arr[i] - num) < Math.abs(closest - num)
      ) {
        closest = arr[i];
      }
      // else if (Math.abs(arr[i] - num) > 6000) {
      //   closest = 0;
      // } else if (Math.abs(arr[i] - num) > -500) {
      //   closest = 0;
      // }
    } else {
      return 0;
    }
  }
  return closest;
};

const array = [50, -500];
const num = 0;
console.log(findClosestToZero(array, num));
