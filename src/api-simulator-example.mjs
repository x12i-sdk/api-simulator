import assert from 'node:assert/strict';
import { createApiSimulator } from '@x12i/api-simulator';

const simulator = createApiSimulator({ apis: [{ id: 'demo', basePath: '/demo', endpoints: [
  { id: 'health', method: 'GET', path: '/health', behavior: { type: 'fixed', response: { status: 200, body: { status: 'ok' } } } },
  { id: 'sum', method: 'POST', path: '/sum', behavior: { type: 'simulation', handler: ({ request }) => ({ body: { total: request.body.values.reduce((a, b) => a + b, 0) } }) } },
] }] });
const health = await simulator.dispatch({ method: 'GET', path: '/demo/health' });
const sum = await simulator.dispatch({ method: 'POST', path: '/demo/sum', body: { values: [2, 3, 4] } });
assert.equal(health.response.body.status, 'ok');
assert.equal(sum.response.body.total, 9);
console.log({ health: health.response.body, sum: sum.response.body });
