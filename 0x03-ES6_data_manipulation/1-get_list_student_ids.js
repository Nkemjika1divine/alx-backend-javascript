export default function getListStudentIds(arrayOfObjects) {
  if (Array.isArray(arrayOfObjects)) {
    const arrayID = arrayOfObjects.map((item) => item.id);

    return arrayID;
  }
  return [];
}
