import path from "node:path";

// 项目根目录
export const ROOT = path.resolve(__dirname, "../..");

// h-element 目录
export const EPROOT = path.resolve(ROOT, "packages");

// 入口
export const ENTRY = path.resolve(EPROOT, "h-element");

// 出口
export const OUTPUT = path.resolve(ROOT, "dist");
