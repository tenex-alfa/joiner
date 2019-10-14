import joiner from "../../src/index"
const sample = {
    name: "String",
    sample: "${id}"
}
const sampleJoin = {
    id: {
        my: {
            sample: "123"
        }
    }
}
console.log(joiner(sample, sampleJoin));
