import replace from "./replace"
const joiner = (input: any, replaceble: any) => {
    const out = JSON.parse(replace(input, replaceble));
    return out;
}

export default joiner; 