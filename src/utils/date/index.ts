const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
};

export default function ToDate(date: Date) {
    return date.toLocaleDateString(undefined, options);
}
