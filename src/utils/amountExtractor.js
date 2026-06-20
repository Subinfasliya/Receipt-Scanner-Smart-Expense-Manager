export const extractAmount = (text) => {
  const patterns = [
    /\bgrand\s+total\b\s*[:\-]?\s*[₹$€£]?\s*([\d,]+(?:\.\d+)?)/i,
    /\bnet\s+total\b\s*[:\-]?\s*[₹$€£]?\s*([\d,]+(?:\.\d+)?)/i,
    /\btotal\s+amount\b\s*[:\-]?\s*[₹$€£]?\s*([\d,]+(?:\.\d+)?)/i,
    /\btotal\b\s*[:\-]?\s*[₹$€£]?\s*([\d,]+(?:\.\d+)?)/i,
  ];


  for(const pattern of patterns){

      const macthedAmount = text.match(pattern);
  
      if(macthedAmount){
        return macthedAmount[1].replace(/,/g, "");
      }
    }

  return  "Amount not found";
};
