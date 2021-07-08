import {makeSchema,queryType} from 'nexus'

const Query = queryType({
    definition(t) {
        t.string("name")
    },
})

export const schema = makeSchema({
    types:{Query}
})