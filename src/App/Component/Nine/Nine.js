import React from "react";
import { Typography, Button } from "antd";
const { Title } = Typography;

const stages = [
  {
    title: 'Год 1: запуск и развитие (2025)',
    steps: [
      {
        title: 'Q1:',
        steps: [
          'Формирование ключевой команды.',
          'Разработка AI-платформы.',
          'Запуск MVP.'
        ]
      },
      {
        title: 'Q2:',
        steps: [
          'Старт реалити-шоу.',
          'Выход на операционную прибыль.',
          'Расширение партнёрской сети.'
        ]
      },
      {
        title: 'Q3:',
        steps: [
          'Масштабирование продаж.',
          'Оптимизация процессов.',
          'Развитие AI-системы.'
        ]
      },
      {
        title: 'Q4:',
        steps: [
          'Выход на все регионы РФ.',
          '50,000+ заявок в год.',
          'Выручка 128.5M₽.'
        ]
      }
    ]
  },
  {
    title: 'Год 2: масштабирование (2026)',
    steps: [
      {
        title: 'H1:',
        steps: [
          'Запуск на федеральном ТВ.',
          '200,000+ заявок в год.',
          'Новые продукты.'
        ]
      },
      {
        title: 'H2:',
        steps: [
          'Подготовка к экспансии.',
          'Развитие технологий.',
          'Выручка 890.6M₽.'
        ]
      }
    ]
  },
  {
    title: 'Год 3: международная экспансия (2027)',
    steps: [
      {
        title: 'H1:',
        steps: [
          'Выход в Казахстан.',
          '700,000+ заявок в год.',
          'Новые рынки.'
        ]
      },
      {
        title: 'H2:',
        steps: [
          'Выход в Беларусь.',
          'Развитие экосистемы.',
          'Выручка 4.13B₽.'
        ]
      }
    ]
  }
]

export default function Nine() {
  return (
    <section className="nine">
      <div className="container nine__content">
        <Title level={2}>Планы развития на 3 года: от старта до лидерства</Title>
        <Title level={3}>Этапы развития</Title>
        <Title level={4}>Год 1: запуск и развитие (2025)</Title>
        <Title level={4}>Год 2: масштабирование (2026)</Title>
        <Title level={4}>Год 3: международная экспансия (2027)</Title>
        <div><Button>Задать вопрос</Button></div>

      </div>
    </section>
  )
};