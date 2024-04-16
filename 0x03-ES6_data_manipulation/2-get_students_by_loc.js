export default function getStudentsByLocation(arrayOfObjects, city) {
  if (Array.isArray(arrayOfObjects)) {
    const arrayCity= arrayOfObjects.filter((item) => item.location === city);

    return arrayCity;
  }
  return [];
}
