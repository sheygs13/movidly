const truncate = (words, limit = 100) => {
    return (words.length > limit) ? `${words.slice(0, limit)}...` : words;
};

export default truncate;
