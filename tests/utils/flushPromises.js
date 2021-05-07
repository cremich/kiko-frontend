const scheduler = typeof setImmediate === "function" ? setImmediate : setTimeout;

const flushPromises = () => new Promise(scheduler);

export { flushPromises };
