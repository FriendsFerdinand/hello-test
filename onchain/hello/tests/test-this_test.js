"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_ts_1 = require("https://deno.land/x/clarinet@v0.31.0/index.ts");
const asserts_ts_1 = require("https://deno.land/std@0.90.0/testing/asserts.ts");
index_ts_1.Clarinet.test({
    name: "Ensure that <...>",
    fn(chain, accounts) {
        return __awaiter(this, void 0, void 0, function* () {
            let block = chain.mineBlock([
            /*
             * Add transactions with:
             * Tx.contractCall(...)
            */
            ]);
            (0, asserts_ts_1.assertEquals)(block.receipts.length, 0);
            (0, asserts_ts_1.assertEquals)(block.height, 2);
            block = chain.mineBlock([
            /*
             * Add transactions with:
             * Tx.contractCall(...)
            */
            ]);
            (0, asserts_ts_1.assertEquals)(block.receipts.length, 0);
            (0, asserts_ts_1.assertEquals)(block.height, 3);
        });
    },
});
