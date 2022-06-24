export const save = (key: string, val: any) => {
    return localStorage.setItem(key, val)
}

export const get = (key: any) => {
    return localStorage.getItem(key)
}

export const clearStorage = () => localStorage.clear();

export const timestamp = () => {
    const date = new Date();    
    const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const day = ["sun", "mon", "tue", "wed", "thur", "friday", "sat"];
    const month = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    return `${day[date.getDay()]}(${date.getDate()}) • ${month[date.getMonth()]} • ${date.getUTCFullYear()} • ${time}`;
}

export const formatCash = (n: any) => {
     n = parseInt(n);
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};