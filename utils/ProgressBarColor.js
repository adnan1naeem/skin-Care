export const getColor = (progress) => {
  if (progress < 0.4) {
    return "#FFDB58";
  } else if (progress >= 0.4 && progress <= 0.6) {
    return "#008080";
  } else {
    return "#FF7F50";
  }
};
export const getColorValue = (progress) => {
  if (progress < 40) {
    return "#FFDB58";
  } else if (progress >= 40 && progress <= 70) {
    return "#008080";
  } else {
    return "#FF7F50";
  }
};
