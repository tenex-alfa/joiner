import replace from "./replace"
const joiner = (object: any, input: any, config?: any) => {
    const out = JSON.parse(replace(input, JSON.stringify(object)));
    return out;
}

export default joiner; 