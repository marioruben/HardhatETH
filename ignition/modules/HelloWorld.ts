import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const JAN_1ST_2030 = 1893456000;
const ONE_GWEI: bigint = 1_000_000_000n;

const HelloWorldModule = buildModule("HelloWorldModule", (m) => {

  const helloWorld = m.contract("HelloWorld");

  return { helloWorld };
});

export default HelloWorldModule;
