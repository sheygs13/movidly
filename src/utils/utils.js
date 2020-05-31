const truncate = (words, limit = 250) => {
    return (words.length > limit) ? `${words.slice(0, limit)}...` : words;
};

export {truncate};
