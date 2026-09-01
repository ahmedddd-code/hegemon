export type SiteItem = {
  id: string;
  path: string;
  title: string;
  description: string;
  label: string;
};

export const siteItems: SiteItem[] = [
  { id: 'services', path: '/services', title: 'Услуги HEGEMON', description: 'Лазерная эпиляция, Трон Кегеля и мужской уход.', label: 'Услуги' },
  { id: 'prices', path: '/prices', title: 'Цены и комплексы', description: 'Стоимость зон и выгодных мужских сетов.', label: 'Прайс' },
  { id: 'about', path: '/about', title: 'О центре', description: 'Приватное пространство для комфортного и деликатного ухода.', label: 'HEGEMON' },
  { id: 'visit', path: '/visit', title: 'Как проходит визит', description: 'Путь от записи до рекомендаций после процедуры.', label: 'Первый визит' },
  { id: 'faq', path: '/faq', title: 'Вопросы и ответы', description: 'Важное о приватности, подготовке и процедурах.', label: 'FAQ' },
];

export const findSiteItem = (path: string) => siteItems.find((item) => item.path === path);
