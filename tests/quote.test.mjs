import test from 'node:test';
import assert from 'node:assert/strict';
import { quoteMessage, whatsappUrl } from '../src/lib/quote.mjs';
test('WhatsApp points to Ghati and preserves accented text, newlines and punctuation', () => {
  const values = { service: 'Higienização interna', vehicle: ' Onix 2020 ', observation: 'Bancos: água & café? #interior' };
  const url = new URL(whatsappUrl(values));
  assert.equal(url.origin, 'https://wa.me');
  assert.equal(url.pathname, '/5513978143448');
  assert.equal(url.searchParams.get('text'), quoteMessage(values));
  assert.match(url.searchParams.get('text'), /Ghati\.\nServiço: Higienização interna\nVeículo: Onix 2020/);
});
test('No optional observation line and invalid or oversized fields are rejected', () => {
  assert.equal(quoteMessage({ service: 'Polimento', vehicle: 'Gol' }).includes('Observação:'), false);
  for (const values of [{service:'Falso',vehicle:'Gol'},{service:'Polimento',vehicle:'  '},{service:'Polimento',vehicle:'x'.repeat(81)},{service:'Polimento',vehicle:'Gol',observation:'x'.repeat(401)}]) assert.throws(() => whatsappUrl(values));
});
