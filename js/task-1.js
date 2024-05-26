function slugify(title) {
    return title.split(" ").join("-").toLowerCase();
};

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"