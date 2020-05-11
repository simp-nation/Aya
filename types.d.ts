/* eslint-disable */
/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.svg" {
  import { HTMLAttributes } from "react";
  const value: React.ComponentType<HTMLAttributes<SVGElement>>;
  export default value;
}

declare module "simpleflakes" {
  export function simpleflake(
    ts?: number,
    randomBits?: number,
    epoch?: number
  ): BigInt;

  export function binary(value: any, padding?: boolean): string;
  export function extractBits(data: any, shift: number, length: number);

  export class SimpleFlakeStruct {
    timestamp: BigInt;
    randomBits: BigInt;
  }

  export function parseSimpleflake(flake: string | BigInt): SimpleFlakeStruct;

  export const SIMPLEFLAKE_EPOCH: number;
}
