import { CommandPalette } from './CommandPalette';
import { InstallPrompt } from './InstallPrompt';
import { MobileNavigation } from './MobileNavigation';
import { NotificationCenter } from './NotificationCenter';
import { QrModal } from './QrModal';
import { Toast } from './Toast';

export function GlobalUi() {
  return <><NotificationCenter/><CommandPalette/><QrModal/><InstallPrompt/><Toast/><MobileNavigation/></>;
}
