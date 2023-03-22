type WatchTimeLocalStorage = Record<number, { watchTime: number, duration?: number }>;

export const getWatchTime = (id: number) => {
    const watchTimes = JSON.parse(
        localStorage.getItem('watchTimes') || '{}'
    ) as WatchTimeLocalStorage;
    if (Object.prototype.hasOwnProperty.call(watchTimes, id)) {
        // If there is, set the video to that time
        return watchTimes[id];
    }
};

export const setWatchTime = (id: number, watchTime: number, duration?: number) => {
    const watchTimes = JSON.parse(
        localStorage.getItem('watchTimes') || '{}'
    ) as WatchTimeLocalStorage;
    watchTimes[id] = { watchTime, duration };
    localStorage.setItem('watchTimes', JSON.stringify(watchTimes));
};

export const removeWatchTime = (id: number) => {
    const watchTimes = JSON.parse(
        localStorage.getItem('watchTimes') || '{}'
    ) as WatchTimeLocalStorage;
    delete watchTimes[id];
    localStorage.setItem('watchTimes', JSON.stringify(watchTimes));
}