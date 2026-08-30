import { Link } from 'wouter';
import { Icon } from './Icon';
import type { SiteItem } from '../lib/site-content';

export function ContentCard({ item, favorite, onFavorite }: { item: SiteItem; favorite?: boolean; onFavorite?: () => void }) {
  return <article className="content-card"><Link href={item.path}><small>{item.label}</small><h3>{item.title}</h3><p>{item.description}</p><b>Открыть →</b></Link>{onFavorite && <button className={favorite ? 'favorite-button favorite-button--active' : 'favorite-button'} type="button" onClick={onFavorite} aria-label={favorite ? 'Удалить из избранного' : 'Добавить в избранное'}><Icon name="heart" size={19}/></button>}</article>;
}
