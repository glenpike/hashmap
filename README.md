# TypeScript Node Starter

As of Jan 2026

A simple starter project for Node/TypeScript with Jest for testing

Based on this [setup tutorial](https://blog.alexrusin.com/setting-up-a-modern-node-js-project-with-typescript-and-jest/)

But instead of using `npx tsc --init` output, I used the [Node24](https://github.com/tsconfig/bases/blob/main/bases/node24.json) base tsconfig.json recommended by the [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#tsconfig-bases) because I wanted to import TypeScript modules without specifying an extension, e.g.

`import { add } from '../src/utils';` instead of `import { add } from '../src/utils.ts';`

## Getting Started

Run `npm install` in the root folder.

Start coding.

## Testing

Add / edit *_test.ts files in the `tests` directory and run `npm test` for a single pass.  Use `npm test -- --watchAll` to run jest in 'watch' mode and it will re-run tests when files change.

## TypeScript syntax checking

Edit files and run `npm run check` to get the TypeScript compiler to check files without building/running.

## Starting

There is a very simple entry point in `src/index.ts` that demonstrates importing and running code.  

This is linked to the `npm start` command defined in package.json.  

It uses `ts-node` rather than a raw `node` command because `ts-node` uses the tsconfig.json file, so the compiler options like module importing and omitting extensions works, etc.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.