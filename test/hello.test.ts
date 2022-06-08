import {
  callReadOnlyFunction,
} from '@stacks/transactions';
import { StacksTestnet }from '@stacks/network';
import { StacksDevnetOrchestrator } from "@hirosystems/stacks-devnet-js";

const DEPLOYER_KEY = "753b7cc01a1a2e86221266a154af739463fce51219d97e4f856cd7200c3bd2a601";

const orchestrator = new StacksDevnetOrchestrator({
  path: `Clarinet.toml`,
  logs: true,
});

beforeAll(() => orchestrator.start());
afterAll(() => orchestrator.stop());

test('Block height changes when blocks are mined', async () => {
  const network = new StacksTestnet({ url: orchestrator.getStacksNodeUrl() });


  // wait for deployment of contract
  orchestrator.waitForStacksBlock();
  orchestrator.waitForStacksBlock();
  orchestrator.waitForStacksBlock();
  orchestrator.waitForStacksBlock();
  orchestrator.waitForStacksBlock();
  orchestrator.waitForStacksBlock();
  orchestrator.waitForStacksBlock();

  const options = {
    contractAddress: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
    contractName: "test-this",
    functionName: "read-this",
    functionArgs: [],
    network,
    senderAddress: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
  }

  const result = await callReadOnlyFunction(options);

  console.log(result);
  expect(false).toBe(false);
})