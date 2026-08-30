export const uiEvents = {
  command: 'hegemon:command',
  qr: 'hegemon:qr',
  toast: 'hegemon:toast',
} as const;

export function openCommandPalette() { window.dispatchEvent(new Event(uiEvents.command)); }
export function openQrCode() { window.dispatchEvent(new Event(uiEvents.qr)); }
export function showToast(message: string) { window.dispatchEvent(new CustomEvent(uiEvents.toast, { detail: message })); }
