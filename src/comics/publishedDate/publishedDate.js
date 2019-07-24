export default function publishedDate(text, valueIfInvalid = '') {
    const date = new Date(text);
    const isValid = !isNaN(date.getTime());

    if (!isValid) {
        return valueIfInvalid;
    }

    return date.toLocaleString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
}