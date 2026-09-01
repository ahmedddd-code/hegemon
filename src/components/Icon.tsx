type IconName = 'home' | 'search' | 'heart' | 'user' | 'bell' | 'phone' | 'command' | 'settings' | 'help' | 'chart' | 'idea';

const paths: Record<IconName, React.ReactNode> = {
  home: <><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></>,
  search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
  heart: <path d="M20.8 5.8a5.4 5.4 0 0 0-7.7 0L12 7l-1.1-1.2a5.4 5.4 0 1 0-7.7 7.6L12 22l8.8-8.6a5.4 5.4 0 0 0 0-7.6Z"/>,
  user: <><circle cx="12" cy="8" r="4"/><path d="M4 21c.7-5 3.4-7 8-7s7.3 2 8 7"/></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></>,
  phone: <><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 18h4"/></>,
  command: <><path d="M9 6V5a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3v14a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6Z"/></>,
  settings: <><circle cx="12" cy="12" r="3"/><path d="M19 13.5v-3l-2-1.2-.5-1.2.6-2.2-2.1-2.1-2.2.7-1.3-.5L10.5 2h-3L6.3 4l-1.2.5-2.2-.7L.8 5.9l.7 2.2-.5 1.2-2 1.2v3l2 1.2.5 1.2-.7 2.2 2.1 2.1 2.2-.7 1.2.5 1.2 2h3l1.2-2 1.2-.5 2.2.7 2.1-2.1-.7-2.2Z" transform="translate(2) scale(.85)"/></>,
  help: <><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.3 2.3 0 1 1 3.4 2c-.8.4-1.2 1-1.2 2M12 17h.01"/></>,
  chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></>,
  idea: <><path d="M9 18h6M10 22h4"/><path d="M8.5 15.5C6.9 14.4 6 12.6 6 10.5a6 6 0 0 1 12 0c0 2.1-.9 3.9-2.5 5-.9.7-1.2 1.3-1.2 2.5H9.7c0-1.2-.3-1.8-1.2-2.5Z"/></>,
};

export function Icon({ name, size = 21 }: { name: IconName; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
