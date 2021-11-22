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
const core = require('@actions/core');
const resolver = require('./resolver');
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const githubToken = core.getInput('token');
        const { headRef, baseRef } = yield resolver.resolveRefs(githubToken);
        core.setOutput('base_ref', baseRef);
        core.setOutput('head_ref', headRef);
    }
    catch (error) {
        core.setFailed(error.message);
    }
}))();
