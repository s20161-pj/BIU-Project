export default function useTranslatedTypeOfStudy() {
  const translateTypeOfStudy = (typeOfStudy) => {
    return typeOfStudy === "stacionary" ? "stacjonarne" : "niestacjonarne";
  };

  return { translateTypeOfStudy };
}
