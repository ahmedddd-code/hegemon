import { Component, type ErrorInfo, type ReactNode } from 'react';

type State = { failed: boolean };

export class RootErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) console.error('HEGEMON render error', error, info);
  }

  private recover = async () => {
    try {
      const registrations = await navigator.serviceWorker?.getRegistrations();
      await Promise.all((registrations ?? []).map((registration) => registration.unregister()));
      const keys = 'caches' in window ? await window.caches.keys() : [];
      await Promise.all(keys.filter((key) => key.startsWith('hegemon-')).map((key) => window.caches.delete(key)));
    } finally {
      window.location.reload();
    }
  };

  render() {
    if (!this.state.failed) return this.props.children;
    return <main className="boot-error"><img src="/images/hegemon-mark-transparent.png" alt="HEGEMON"/><span>HEGEMON</span><h1>Не удалось открыть страницу</h1><p>Обновим безопасный кеш сайта и попробуем ещё раз.</p><button className="button" type="button" onClick={() => void this.recover()}>Восстановить сайт <b>↻</b></button></main>;
  }
}
