const getHoursWord = (hours: number): string => {
    if (hours >= 5 && hours <= 20) {
        return "часов";
    } else {
        const lastDigit = hours % 10;
        if (lastDigit === 1) {
            return "час";
        } else if (lastDigit >= 2 && lastDigit <= 4) {
            return "часа";
        } else {
            return "часов";
        }
    }
};

const formatTime = (time: string): string => {
    const dateTime = new Date(time);
    const now = new Date();
    const oneDayInMs = 24 * 60 * 60 * 1000;
    const timeDiff = now.getTime() - dateTime.getTime();

    if (timeDiff < oneDayInMs) {
        const hoursAgo = Math.floor(timeDiff / (60 * 60 * 1000));
        const hoursWord = getHoursWord(hoursAgo);
        return `${hoursAgo} ${hoursWord} назад`;
    } else {
        return dateTime.toLocaleString("ru-RU", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
        });
    }
};

export default formatTime;
