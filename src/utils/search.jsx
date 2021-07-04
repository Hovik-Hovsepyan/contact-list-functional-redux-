export const search = (searchObj, text) => {
    const vals = Object.values(searchObj).filter(el => typeof el === 'string' && el.includes(text));
    return vals.length;
}