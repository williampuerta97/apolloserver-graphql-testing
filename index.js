const { ApolloServer, gql } = require('apollo-server');

const libros = [
    {nombre : "La iliada", genero: "tragedia"},
    {nombre : "el principito", genero: "fantasia"},
];

const typeDefs = gql`
    type Libro {
        nombre: String!,
        genero: String!
    }

    type Query {
        libros : [Libro]
    }
`;

const resolvers = {
    Query : {
        libros : () => libros,
    },
}

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`Server runing on port ${url}`);
})
