"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const schema_1 = require("@graphql-tools/schema");
const cors_1 = __importDefault(require("cors"));
const mockData_1 = __importDefault(require("./mockData"));
const typeDefs = `
  type Query {
    hello: String!
    orderForm(input: OrderFormInput!): OrderForm!
    extendedWarranty: ExtendedWarranty!
  }

  type ExtendedWarranty {
    methods: [ExtendedWarrantyMethod!]!
  }

  type ExtendedWarrantyMethod {
    months: String!
    value: String!
  }

  input OrderFormInput{
    orderFormId: String!
  }

  type OrderForm{
    id: String!
    items: [Item]!
  }

  type Item {
    id: String!
    image: String!
    name: String!
    listPrice: String!
    price: String!
    shipping: Shipping!
  }
  
  type Shipping {
    delivery: Delivery
    pickup: Boolean!
  }

  type Delivery {
    days: String!
    value: String!
  }

  type Delivery {
    days: String!
    value: String!
  }

`;
const resolvers = {
    Query: {
        orderForm: (_, args) => {
            const { input } = args;
            if (input.orderFormId !== "c7eb7303-c53f-417d-8d51-cce67e5959e1") {
                throw new Error("invalid_order_form_id");
            }
            return mockData_1.default.orderForm;
        },
        extendedWarranty: (_, args) => {
            return mockData_1.default.extendedWarranty;
        }
    }
};
exports.schema = (0, schema_1.makeExecutableSchema)({
    resolvers,
    typeDefs
});
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
    schema: exports.schema,
    graphiql: true
}));
app.listen(process.env.PORT || 3333, () => {
    console.log("app running at http://localhost:3333");
});
