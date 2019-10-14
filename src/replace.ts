const replace = (object: any, replacable: any): string => {
    let string = JSON.stringify(object);

    for (const key in replacable) {
        string = string.split(`"\${${key}}"`).join(JSON.stringify(replacable[key]));
    }
    return string;
};

export default replace;