import { Icon } from './Icon';

export function AboutStory() {
  return (
    <>
      <section className="about-overview">
        <div className="about-overview__inner section-wrap">
          <div className="about-overview__visual" role="img" aria-label="Приватное пространство мужского центра HEGEMON">
            <span>H</span>
          </div>
          <div className="about-overview__copy">
            <span className="eyebrow eyebrow--dark">ПРОСТРАНСТВО HEGEMON</span>
            <p className="about-overview__lead">Здесь мужчина может спокойно заботиться о себе, своей внешности и комфорте — профессионально, приватно и без неловкости.</p>
            <p>Мы объединили в одном пространстве услуги, которые помогают мужчине чувствовать себя ухоженно и уверенно.</p>
          </div>
        </div>
      </section>

      <section className="founder-story">
        <div className="founder-story__inner section-wrap">
          <header>
            <span className="eyebrow eyebrow--dark founder-story__idea-label"><Icon name="idea" size={16}/>ИДЕЯ HEGEMON</span>
            <h2>Почему появился<br /><em>HEGEMON.</em></h2>
          </header>
          <div className="founder-story__copy">
            <p className="founder-story__lead">Я заметила, что индустрия ухода в основном ориентирована на женщин. При этом у мужчин есть свои потребности — гигиена, уход за телом, эстетика и деликатные вопросы здоровья. А специализированных пространств, где мужчина может получить всё это спокойно и без неловкости, практически нет.</p>
            <p>Мне хотелось создать место, где мужчина чувствует себя комфортно с первого визита — без ощущения салона красоты и без стеснения говорить о деликатных вопросах.</p>
            <p className="founder-story__origin">Так появился <strong>HEGEMON</strong> — пространство, созданное вокруг потребностей мужчины.</p>
            <p>Для меня HEGEMON — это не просто набор процедур. Это новая культура мужского ухода, где заботиться о себе так же естественно, как заниматься спортом, следить за внешним видом или своим здоровьем.</p>
            <footer><strong className="founder-story__name">Жанбота Алтынтогыс</strong><span className="founder-story__role"><strong>Основатель</strong> HEGEMON</span></footer>
          </div>
        </div>
      </section>

    </>
  );
}
