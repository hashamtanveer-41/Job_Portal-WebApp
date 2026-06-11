export function timeAgo(time:string) {
    const now:any = new Date();
    const past:any = new Date(time);
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30.44;
    const msPerYear = msPerDay * 365.25;

    const elapsed = now.getTime() - past.getTime();

    if (elapsed < 0) {
        return 'just now';
    }

    if (elapsed < msPerMinute) {
        const seconds = Math.round(elapsed / 1000);
        return seconds <= 1 ? 'just now' : `${seconds} seconds ago`;
    }

    if (elapsed < msPerHour) {
        const minutes = Math.round(elapsed / msPerMinute);
        return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
    }

    if (elapsed < msPerDay) {
        const hours = Math.round(elapsed / msPerHour);
        return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
    }

    if (elapsed < msPerMonth) {
        const days = Math.round(elapsed / msPerDay);
        return days === 1 ? '1 day ago' : `${days} days ago`;
    }

    if (elapsed < msPerYear) {
        const months = Math.round(elapsed / msPerMonth);
        return months === 1 ? '1 month ago' : `${months} months ago`;
    }

    const years = Math.round(elapsed / msPerYear);
    return years === 1 ? '1 year ago' : `${years} years ago`;
}

export const formatInterviewTime = (dateStr:any)=>{
    const date = new Date(dateStr)
    return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day:'numeric' ,
        hour: 'numeric',
        hour12:true,
    });
}