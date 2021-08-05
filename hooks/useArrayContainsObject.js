export default function useArrayContainsObject(object, list) {
  let index;
  for (index = 0; index < list.length; index++) {
    if (list[index] === object) {
      return true;
    }else return false
  }

}
