import { ACCESS_SECRET } from './access-config.js';
export const HOUR = 3600000;
export async function createCode(timestamp=Date.now(),secret=ACCESS_SECRET) {
  const bytes = new Uint8Array(secret.match(/.{2}/g).map(v=>parseInt(v,16)));
  const key = await crypto.subtle.importKey('raw',bytes,{name:'HMAC',hash:'SHA-256'},false,['sign']);
  const message = new TextEncoder().encode('little-strengths-v1:'+Math.floor(timestamp/HOUR));
  const digest = new Uint8Array(await crypto.subtle.sign('HMAC',key,message));
  const offset=digest[digest.length-1]&15;
  const number=((digest[offset]&127)*16777216)+(digest[offset+1]<<16)+(digest[offset+2]<<8)+digest[offset+3];
  return String(number%1000000).padStart(6,'0');
}
export async function verifyCode(value,timestamp=Date.now()) {
  if(!/^\d{6}$/.test(value)) return false;
  return value===await createCode(timestamp);
}
