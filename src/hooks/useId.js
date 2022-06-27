export default function useId() {
  const generateNewId = (state) => {
    // count all students number
    const lastID = state.stacionary.length + state.nonstacionary.length;

    // create id by num of students
    const newId = lastID + 1;

    return newId.toString();
  };

  return { generateNewId };
}
