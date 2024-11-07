import { CodegenConfig } from "@graphql-codegen/cli";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

const typescriptConfig = {
  namingConvention: {
    typeNames: "change-case#pascalCase",
    enumValues: "change-case#pascalCase",
    transformUnderscore: true,
    maybeValue: "T",
  },
};

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_GRAHPQL_API_ENDPOINT,
  documents: ["src/queries/*.ts"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/": {
      preset: "client",
      config: {
        ...typescriptConfig,
      },
    },
  },
};

export default config;
