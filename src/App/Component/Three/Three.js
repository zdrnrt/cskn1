import React from "react";
import { Typography, Button } from "antd";
const { Title } = Typography;
import "./Three.scss";
import Icons from "../../Icon";

const b2c = [
  {
    title: 'Непредвзятая диагностика',
    steps: [
      'AI-анализ финансового состояния',
      'Оценка кредитной нагрузки',
      'Выявление первопричин проблем',
    ]
  },
  {
    title: 'Персональный план',
    steps: [
      'Разработка стратегии',
      'Пошаговый алгоритм действий',
      'Расчет сроков и результатов',
    ]
  },
  {
    title: 'Подбор специалистов',
    steps: [
      'Проверенные партнеры',
      'Оптимальные решения',
      'Контроль качества услуг',
    ]
  },
  {
    title: 'Сопровождение',
    steps: [
      'Мониторинг реализации',
      'Корректировка плана',
      'Экспертная поддержка 24/7',
    ]
  }
]

const b2b = [
  {
    title: 'Глубокая квалификация'
  },
  {
    title: 'Консультирование и нативный прогрев'
  },
  {
    title: 'Продажа услуг и экспертности партнера'
  },
]

const steps = [
  {
    title: "1. Автоматическая диагностика",
    steps: [
      "AI-анализ финансового состояния.",
      "Оценка кредитной нагрузки.",
      "Выявление первопричин проблем.",
    ],
  },
  {
    title: "2. Персональный план",
    steps: [
      "Разработка стратегии.",
      "Пошаговый алгоритм действий.",
      "Расчет сроков и результатов.",
    ],
  },
  {
    title: "3. Подбор специалистов",
    steps: [
      "Проверенные партнеры.",
      "Оптимальные решения.",
      "Контроль качества услуг.",
    ],
  },
  {
    title: "4. Сопровождение",
    steps: [
      "Мониторинг реализации.",
      "Корректировка плана.",
      "Поддержка 24/7.",
    ],
  },
];

const stack = [
  {
    icon: "atom",
    title: "AI/ML ядро",
    steps: [ "GPT-агенты для коммуникации", "Нейросети для анализа данных", "Предиктивная аналитика", ],
  },
  {
    icon: "settings",
    title: "Автоматизация",
    steps: [ "24/7 доступность", "Масштабируемость", "Минимум человеческого фактора", ],
  },
  {
    icon: "shield2",
    title: "Безопасность",
    steps: [ "Шифрование данных", "Защита персональной информации", "Compliance со всеми требованиями", ],
  },
  {
    icon: "dotsGrid",
    title: "Интеграции",
    steps: ["CRM-системы", "Платёжные сервисы", "Партнёрский API"],
  },
  {
    icon: "bar",
    title: "Аналитика",
    steps: [
      "Мониторинг метрик",
      "Оптимизация процессов",
      "Data-driven решения",
    ],
  },
  {
    icon: "layers",
    title: "Масштабируемость",
    steps: [
      "Cloud-native архитектура",
      "Микросервисы",
      "Балансировка нагрузки",
    ],
  },
];

const unique = [
  {
    icon: "scales",
    title: "Непредвзятость",
    description:
      "Искусственный интеллект анализирует ситуацию  объективно, без эмоций и личной выгоды",
  },
  {
    icon: "person",
    title: "Персонализация",
    description:
      "Системный подход к оптимизации с учётом индивидуальных факторов и долгосрочных последствий",
  },
  {
    icon: "expand",
    title: "Масштабируемость",
    description:
      "Неограниченные возможности роста без пропорционального увеличения расходов на персонал",
  },
];

function Arrow(){
  return (
    <div className="three__arrow">
      <img src={Icons.arrow} alt=""></img>
    </div>
  )
}

export default function Three() {
  return (
    <section className="three section">
      <div className="container">
        <div className="three__content">
          <Title level={2} className="subtitle three__title">
            AI Финансовый Терапевт: <br/>революционный подход к оптимизации долговой нагрузки граждан&nbsp;и лидогенерации для B2B партнеров
          </Title>
          <Title level={3} className="part-title three__part-title">Как это работает?</Title>
          <Title level={4} className="three__subtitle">Состав продукта для B2C:</Title>
          <div className="three__list">
            {b2c.map( (el, i) => (
              <div key={i} className="three-tile three-tile--b2c">
                <div className="three-tile__number">{i + 1}</div>
                <div className="three-tile__title">{el.title}</div>
                <ul className="three-tile__list">
                  {el.steps.map((elem, i) => (
                    <li key={i} className="three-tile__list-item">{elem}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Title level={4} className="three__subtitle">Состав продукта для B2B <br/>(для B2B клиентов проект является агрегатором лидов):</Title>
          <p className="three__text">Поставка высоко конверсионных лидов (на 26% выше среднего)</p>
          <div className="three__list three__list">
            {b2b.map( (el, i) => (
              <div key={i} className="three-tile three-tile--b2b">
                <div className="three-tile__number">{i + 1}</div>
                <div className="three-tile__title">{el.title}</div>
              </div>
            ))}
          </div>
          <Title level={3} className="part-title three__part-title">Уникальные преимущества</Title>
          <div className="three__list three__list--uniq">
            {unique.map( (el, i) => (
              <div key={i} className="three-unique">
                
                <div className="three-unique__icon">
                  <img src={Icons[el.icon]} className="three-unique__pic"/>
                </div>
                <div className="three-unique__title">{el.title}</div>
                <p className="three-unique__text">{el.description}</p>
              </div>
            ))}
          </div>
          <div className="three__controls">
            <Button type="primary" size="large" href="https://wa.me/message/CG4TEM4HZBQQA1" target="_blank">Написать основателю</Button>
          </div>
          <Title level={3} className="part-title three__part-title">Технологический стек</Title>
          <div className="three__list three__list--stack">
            {stack.map( (el, i) => (
              <div key={i} className="three-stack">
                <div className="three-stack__icon">
                  <img src={Icons[el.icon]} className="three-stack__pic"/>
                </div>
                <div className="three-stack__title">{el.title}</div>
                <ul className="three-stack__list">
                  {el.steps.map((elem, i) => <li key={i} className="three-stack__item">{elem}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
