export const extractDate = (text) => {
  const dateRegex = /\b\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}\b/;

  const dateMatch = text.match(dateRegex);

    if (!dateMatch) {
        console.log("Bill date not found");
       return "Date not found"
    }
 
    return dateMatch[0]

};
