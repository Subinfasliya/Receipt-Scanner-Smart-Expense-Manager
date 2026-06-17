import Tesseract from "tesseract.js";

export const scanReceipt = async (file) => {
    const result = await Tesseract.recognize(
        file,
        "eng"
    );

    return result.data.text
}