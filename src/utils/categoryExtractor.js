export const extractCategory = (text) => {
  const lowerText = text.toLowerCase();

  if (
    lowerText.includes("burger") ||
    lowerText.includes("pizza") ||
    lowerText.includes("tea") ||
    lowerText.includes("coffee") ||
    lowerText.includes("shawarma")
  ) {
    return "Food";
  }

  if (
    lowerText.includes("milk") ||
    lowerText.includes("rice") ||
    lowerText.includes("bread") ||
    lowerText.includes("egg")
  ) {
    return "Grocery";
  }

  if (
    lowerText.includes("paracetamol") ||
    lowerText.includes("tablet") ||
    lowerText.includes("capsule")
  ) {
    return "Medical";
  }

  return "Other";
};