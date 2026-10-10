import { business, services } from '../data/site.mjs';
export const quoteOptions = [...services.map(service => service.name), 'Vitrificação', 'Preciso de orientação'];
export function quoteMessage({ service, vehicle, observation = '' }) {
  if (!quoteOptions.includes(service)) throw new Error('Selecione um serviço válido.');
  const car = String(vehicle ?? '').trim();
  const detail = String(observation).trim();
  if (!car || car.length > 80) throw new Error('Informe seu veículo em até 80 caracteres.');
  if (detail.length > 400) throw new Error('Use até 400 caracteres na observação.');
  return `Olá! Estou testando a demonstração do site Forma, criada pela Ghati.\nServiço: ${service}\nVeículo: ${car}${detail ? `\nObservação: ${detail}` : ''}`;
}
export function whatsappUrl(values) {
  return `https://wa.me/${business.phone}?text=${encodeURIComponent(quoteMessage(values))}`;
}
