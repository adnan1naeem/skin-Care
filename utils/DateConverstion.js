export const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  };

export  const convertToISODateString = (day, month, year) => {
    // Ensure that day, month, and year are numbers and have leading zeros if necessary
    const formattedDay = day.padStart(2, '0');
    const formattedMonth = month.padStart(2, '0');
    const formattedYear = year.padStart(4, '0');
    
    // Create the ISO string
    const isoString = `${formattedYear}-${formattedMonth}-${formattedDay}T00:00:00.000Z`;
    
    return isoString;
  };