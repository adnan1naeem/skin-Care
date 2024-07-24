export const getColor = (progress) => {
    if (progress < 0.4) {
        return '#FFDB58';
    } else if (progress >= 0.4 && progress < 0.7) {
        return '#008080';
    } else {
        return '#FF7F50';
    }
};
export const getColorValue = (progress) => {
    if (progress < 40) {
        return '#FFDB58';
    } else if (progress >= 40 && progress < 70) {
        return '#008080';
    } else {
        return '#FF7F50';
    }
};
export const getColorCode = (category) => {
    switch (category) {
        case 'low':
            return '#FFDB58';
        case 'medium':
            return '#008080';
        case 'high':
            return '#FF7F50';
        default:
            return '#000'; // Default color
    }
};