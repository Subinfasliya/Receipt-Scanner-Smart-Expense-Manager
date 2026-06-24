// const formatTimeTo24h = (timeStr) => {
//   const timeRegex = /\b(\d{1,2}:\d{2})\s*(AM|PM)?\b/i;
//   if (!timeStr) return "";

//   let [time, modifier] = timeStr.split(" ");

//   let [hours, minutes] = time.split(":");

//   hours = parseInt(hours, 10);

//   if (modifier === "PM" && hours !== 12) {
//     hours += 12;
//   }

//   if (modifier === "AM" && hours === 12) {
//     hours = 0;
//   }

//   return `${String(hours).padStart(2, "0")}:${minutes}`;
// };

const normalizeTime = (timeStr) => {
  const match = timeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);

  if (!match) return "";

  let [, hours, minutes, period] = match;

  hours = Number(hours);

  if (period) {
    period = period.toUpperCase();

    if (period === "PM" && hours !== 12) {
      hours += 12;
    }

    if (period === "AM" && hours === 12) {
      hours = 0;
    }
  }

  return `${String(hours).padStart(2, "0")}:${minutes}`;
};

export const extractTime = (text) => {
  const timeRegex = /\b(?:[01]?\d|2[0-3]):[0-5]\d(?:\s?[APMapm]{2})?\b/;

  const matchedTime = text.match(timeRegex);

  const time = matchedTime ? matchedTime[0] : "";

  const formattedTime = normalizeTime(time)

  
  return formattedTime;
};
