import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

const speechFormulas = [
  { term: "Речевые формулы", desc: "стандартные языковые конструкции, облегчающие взаимодействие и уменьшающие коммуникативные риски: приветствия, обращения, вводные фразы, формулы согласия/несогласия, завершения разговора. Примеры: «Добрый день», «Прошу предоставить», «С уважением», «Спасибо за внимание»." },
  { term: "Речевой этикет", desc: "совокупность установленных правил вежливого общения в профессиональной среде: обращение по должности/титулу, использование формальных или неформальных форм на «Вы»/«ты», соблюдение субординации, уважительные обороты при критике, благодарность за помощь." },
]

const terminology = [
  { term: "Терминология", desc: "совокупность терминов, специально выделенных и закреплённых в определённой области знания или деятельности; термины имеют точное, однозначное значение в пределах дисциплины." },
  { term: "Профессиональная лексика", desc: "включает термины, профессионализмы, сокращения, аббревиатуры, фразеологизмы отраслевого характера и иногда жаргон; служит для экономии языка и точной передачи содержания." },
  { term: "Функции терминологии в коммуникации", desc: "обеспечение точности, ускорение обмена информацией, создание профессиональной идентичности и границы принадлежности к сообществу." },
]

const specialtyLanguage = [
  { term: "Понятие", desc: "совокупность языковых средств (лексика, синтаксис, стилистические приёмы), характерных для конкретной профессиональной деятельности." },
  { term: "Особенности языка специальности", desc: "высокая концентрация терминов, нормативная фразеология (инструкции, протоколы), устойчивые формулы, использование пассивных конструкций и безличных форм для объективизации информации, стандартизированные формы представления данных." },
  { term: "Роль в обучении и практике", desc: "формирование профессиональной компетенции, обеспечение точности и безопасности деятельности." },
]

const dictionaries = [
  { term: "Определение", desc: "справочные издания, фиксирующие термины, их определения, эквиваленты на других языках, контекст употребления и сокращения." },
  { term: "Виды словарей", desc: "общетерминологические, отраслевые (медицина, юриспруденция, ИТ, инженерия и т.д.), двуязычные и многоязычные, словари стандартов и нормативных документов." },
  { term: "Функции", desc: "кодификация терминов, унификация языка профессии, поддержка обучения и перевода, справочная помощь при междисциплинарном и межкультурном взаимодействии." },
  { term: "Требования к словарям", desc: "авторитетность источников, ясные и сопоставимые дефиниции, указание области применения, примеры употребления, ссылки на стандарты, обновляемость." },
]

const recommendations = [
  "Выбирать стиль и терминологию, соответствующие аудитории и цели.",
  "Определять и при необходимости пояснять ключевые термины в начале выступления или документа.",
  "Использовать стандартные речевые формулы для формализованных действий (приём заявок, отчёты, инструкции).",
  "Соблюдать речевой этикет и корпоративные нормы коммуникации.",
  "Пользоваться отраслевыми словарями и глоссариями для согласованности терминов.",
  "Развивать коммуникативную компетентность: слушать, проверять понимание, перефразировать и уточнять.",
]

const listItems = {
  aspects: [
    { term: "Нормативность", desc: "соответствие высказываний языковым и профессиональным нормам." },
    { term: "Адекватность", desc: "соответствие стиля, терминологии и уровня детализации контексту и аудитории." },
    { term: "Ясность и точность", desc: "однозначность формулировок, минимизация двусмысленности." },
    { term: "Экономичность", desc: "достаточная краткость без потери информативности." },
    { term: "Этикет и вежливость", desc: "соблюдение профессионально принятых форм обращения и учтивости." },
    { term: "Логичность и структурированность", desc: "последовательная организация мысли: тезис, аргументы, вывод." },
    { term: "Коммуникативная компетентность", desc: "умение выбирать речевые средства в зависимости от цели, канала и участников." },
  ],
  norms: [
    { term: "Фонетические нормы", desc: "нейтральное произношение, интонация, ударение, понятные паузы." },
    { term: "Грамматические нормы", desc: "правильное использование морфологии и синтаксиса." },
    { term: "Лексические нормы", desc: "выбор общелитературной и профессиональной лексики, избегание жаргона в неподходящем контексте." },
    { term: "Стилевые нормы", desc: "соответствие официально-деловому, научно-деловому, разговорно-бытовому и др. стилям." },
    { term: "Нормы оформления устной и письменной речи", desc: "структура документа, стандарты отчётности, шаблоны деловой переписки." },
    { term: "Прагматические нормы", desc: "уместность речевых действий (приказ, совет, просьба, уведомление)." },
  ],
}

export default function Lecture() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-white/10 bg-black/80 backdrop-blur-sm px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
          >
            <Icon name="ArrowLeft" size={16} />
            Назад
          </button>
          <span className="text-white/30 text-xs uppercase tracking-widest">Лекция</span>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Тема */}
        <div className="mb-14">
          <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Тема занятия</p>
          <h1 className="text-3xl md:text-4xl font-light text-white leading-snug">
            Язык как средство профессиональной, социальной
            <br />
            <span className="text-white/60">и межкультурной коммуникации</span>
          </h1>
        </div>

        <div className="space-y-14">

          {/* Введение */}
          <section className="flex gap-8">
            <div className="flex-shrink-0 w-8 pt-1">
              <span className="text-white/20 text-xs font-mono">01</span>
            </div>
            <div className="flex-1 border-t border-white/10 pt-6">
              <h2 className="text-lg font-medium text-white mb-3">Введение</h2>
              <p className="text-sm font-light text-white/60 leading-7">
                Язык в профессиональной коммуникации — инструмент передачи знаний, координации действий, поддержания статуса и установления рабочих отношений. Он выполняет не только когнитивную, но и социальную и ценностно-нормативную функции.
              </p>
            </div>
          </section>

          {/* Определение */}
          <section className="flex gap-8">
            <div className="flex-shrink-0 w-8 pt-1">
              <span className="text-white/20 text-xs font-mono">02</span>
            </div>
            <div className="flex-1 border-t border-white/10 pt-6">
              <h2 className="text-lg font-medium text-white mb-3">Определение</h2>
              <div className="border-l border-violet-500/40 pl-4">
                <p className="text-sm font-light text-white/70 leading-7 italic">
                  Профессиональная коммуникация — целенаправленное взаимодействие участников трудовой деятельности с помощью вербальных и невербальных средств, организованное в соответствии с целями, ролями и нормами профессиональной среды.
                </p>
              </div>
            </div>
          </section>

          {/* Основные аспекты */}
          <section className="flex gap-8">
            <div className="flex-shrink-0 w-8 pt-1">
              <span className="text-white/20 text-xs font-mono">03</span>
            </div>
            <div className="flex-1 border-t border-white/10 pt-6">
              <h2 className="text-lg font-medium text-white mb-5">Основные аспекты культуры речи</h2>
              <ul className="space-y-3">
                {listItems.aspects.map((item) => (
                  <li key={item.term} className="flex gap-3 text-sm">
                    <span className="text-violet-400/70 mt-0.5 flex-shrink-0">—</span>
                    <span className="text-white/60 leading-6">
                      <span className="text-white/90 font-medium">{item.term}</span> — {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Языковые нормы */}
          <section className="flex gap-8">
            <div className="flex-shrink-0 w-8 pt-1">
              <span className="text-white/20 text-xs font-mono">04</span>
            </div>
            <div className="flex-1 border-t border-white/10 pt-6">
              <h2 className="text-lg font-medium text-white mb-5">Языковые и речевые нормы</h2>
              <ul className="space-y-3">
                {listItems.norms.map((item) => (
                  <li key={item.term} className="flex gap-3 text-sm">
                    <span className="text-violet-400/70 mt-0.5 flex-shrink-0">—</span>
                    <span className="text-white/60 leading-6">
                      <span className="text-white/90 font-medium">{item.term}</span> — {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Речевые формулы */}
          <section className="flex gap-8">
            <div className="flex-shrink-0 w-8 pt-1">
              <span className="text-white/20 text-xs font-mono">05</span>
            </div>
            <div className="flex-1 border-t border-white/10 pt-6">
              <h2 className="text-lg font-medium text-white mb-5">Речевые формулы и речевой этикет</h2>
              <ul className="space-y-3">
                {speechFormulas.map((item) => (
                  <li key={item.term} className="flex gap-3 text-sm">
                    <span className="text-violet-400/70 mt-0.5 flex-shrink-0">—</span>
                    <span className="text-white/60 leading-6">
                      <span className="text-white/90 font-medium">{item.term}</span> — {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Терминология */}
          <section className="flex gap-8">
            <div className="flex-shrink-0 w-8 pt-1">
              <span className="text-white/20 text-xs font-mono">06</span>
            </div>
            <div className="flex-1 border-t border-white/10 pt-6">
              <h2 className="text-lg font-medium text-white mb-5">Терминология и профессиональная лексика</h2>
              <ul className="space-y-3">
                {terminology.map((item) => (
                  <li key={item.term} className="flex gap-3 text-sm">
                    <span className="text-violet-400/70 mt-0.5 flex-shrink-0">—</span>
                    <span className="text-white/60 leading-6">
                      <span className="text-white/90 font-medium">{item.term}</span> — {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Язык специальности */}
          <section className="flex gap-8">
            <div className="flex-shrink-0 w-8 pt-1">
              <span className="text-white/20 text-xs font-mono">07</span>
            </div>
            <div className="flex-1 border-t border-white/10 pt-6">
              <h2 className="text-lg font-medium text-white mb-5">Язык специальности</h2>
              <ul className="space-y-3">
                {specialtyLanguage.map((item) => (
                  <li key={item.term} className="flex gap-3 text-sm">
                    <span className="text-violet-400/70 mt-0.5 flex-shrink-0">—</span>
                    <span className="text-white/60 leading-6">
                      <span className="text-white/90 font-medium">{item.term}</span> — {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Отраслевые словари */}
          <section className="flex gap-8">
            <div className="flex-shrink-0 w-8 pt-1">
              <span className="text-white/20 text-xs font-mono">08</span>
            </div>
            <div className="flex-1 border-t border-white/10 pt-6">
              <h2 className="text-lg font-medium text-white mb-5">Отраслевые терминологические словари</h2>
              <ul className="space-y-3">
                {dictionaries.map((item) => (
                  <li key={item.term} className="flex gap-3 text-sm">
                    <span className="text-violet-400/70 mt-0.5 flex-shrink-0">—</span>
                    <span className="text-white/60 leading-6">
                      <span className="text-white/90 font-medium">{item.term}</span> — {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Практические рекомендации */}
          <section className="flex gap-8">
            <div className="flex-shrink-0 w-8 pt-1">
              <span className="text-white/20 text-xs font-mono">09</span>
            </div>
            <div className="flex-1 border-t border-white/10 pt-6">
              <h2 className="text-lg font-medium text-white mb-5">Практические рекомендации</h2>
              <ul className="space-y-3">
                {recommendations.map((rec, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="text-violet-400/70 mt-0.5 flex-shrink-0">—</span>
                    <span className="text-white/60 leading-6">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Заключение */}
          <section className="flex gap-8">
            <div className="flex-shrink-0 w-8 pt-1">
              <span className="text-white/20 text-xs font-mono">10</span>
            </div>
            <div className="flex-1 border-t border-white/10 pt-6">
              <h2 className="text-lg font-medium text-white mb-3">Заключение</h2>
              <div className="border-l border-violet-500/40 pl-4">
                <p className="text-sm font-light text-white/70 leading-7">
                  Язык профессиональной коммуникации — это не только инструмент передачи знаний, но и механизм регулирования взаимодействия, поддержания профессиональных стандартов и преодоления межкультурных барьеров. Соблюдение языковых и речевых норм, корректное использование терминологии и речевого этикета повышают эффективность, точность и безопасность профессионального общения.
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm"
          >
            <Icon name="ArrowLeft" size={16} />
            К оглавлению
          </button>
          <span className="text-white/20 text-xs">Конец лекции</span>
        </div>
      </div>
    </div>
  )
}