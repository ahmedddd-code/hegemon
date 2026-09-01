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
            <p>Идея HEGEMON появилась из простого наблюдения: индустрия ухода и красоты развивается огромными темпами, но большинство специализированных пространств по-прежнему ориентированы на женщин.</p>
            <p>При этом у мужчин есть свои потребности — гигиена, уход за телом, эстетика и деликатные вопросы здоровья. А мест, где всё это можно получить в одном пространстве, практически нет.</p>
            <p>Мне хотелось создать место, куда мужчина приходит без ощущения, что оказался в «женском» салоне или клинике. Место, где не нужно стесняться своих вопросов и долго объяснять, что ему необходимо.</p>
            <p>Так появился HEGEMON — пространство, изначально задуманное вокруг мужчины.</p>
            <p>Здесь важна каждая деталь: приватная атмосфера, профессиональные специалисты, современные технологии и понятный подход без лишнего.</p>
            <p>Для меня HEGEMON — это не просто набор процедур. Это новая культура мужского ухода, где заботиться о себе так же естественно, как заниматься спортом, следить за внешним видом или своим здоровьем.</p>
            <footer><span>Основатель HEGEMON</span><strong>HEGEMON</strong></footer>
          </div>
        </div>
      </section>

    </>
  );
}
