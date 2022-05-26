export default function useId() {
  const generateNewId = (dataArray) => {
    const lastID = dataArray[dataArray.length - 1].id;
    const newId = (Number(lastID) + 1).toString();

    return newId;
  };

  return { generateNewId };
}
