export class DateHelper {
    static formatTimestamp(timestamp: string): string {
        const date = new Date(timestamp);
        const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        const month = monthNames[date.getMonth()];
        const day = date.getDate();
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        const formattedTime = `${month} ${day}, ${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
        
        return formattedTime;
    }
}

