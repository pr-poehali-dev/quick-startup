import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

const sections = [
  {
    number: "01",
    title: "Введение",
    content:
      "Язык — важнейший инструмент человеческого общения. Он не просто передаёт информацию, но и формирует отношения, выражает личность и создаёт связь между людьми. В профессиональной среде, в обществе и при контакте с другими культурами язык становится ключом к взаимопониманию.",
  },
  {
    number: "02",
    title: "Язык и профессиональная коммуникация",
    content:
      "Профессиональный язык — это система специальных терминов, норм и стилей речи, принятых в конкретной сфере деятельности. Умение говорить на «языке профессии» повышает авторитет специалиста, ускоряет решение задач и формирует доверие среди коллег и партнёров. Деловая переписка, переговоры, презентации — всё это требует особой культуры речи.",
  },
  {
    number: "03",
    title: "Язык в социальном контексте",
    content:
      "Язык отражает социальное положение, образование и принадлежность к группе. Через речь человек сигнализирует о своей идентичности: выбор слов, акцент, стиль общения несут скрытые социальные смыслы. Социолингвистика изучает, как язык меняется в зависимости от контекста — дома, на работе, в разных социальных группах.",
  },
  {
    number: "04",
    title: "Межкультурная коммуникация",
    content:
      "В глобальном мире умение общаться с представителями других культур — ценнейший навык. Межкультурная коммуникация предполагает не только знание иностранного языка, но и понимание культурных норм, ценностей и невербального поведения собеседника. Ошибки в межкультурном общении могут привести к недопониманию даже при безупречном знании языка.",
  },
  {
    number: "05",
    title: "Выводы",
    content:
      "Язык — это не просто набор слов и грамматических правил. Это живой инструмент, который связывает профессии, культуры и общества. Развитие языковой компетентности открывает новые возможности в карьере, расширяет социальные связи и делает нас более открытыми к миру.",
  },
]

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
        {/* Заголовок */}
        <div className="mb-14">
          <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Тема лекции</p>
          <h1 className="text-3xl md:text-4xl font-light text-white leading-snug">
            Язык как средство профессиональной, социальной
            <br />
            <span className="text-white/60">и межкультурной коммуникации</span>
          </h1>
        </div>

        {/* Разделы */}
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.number} className="flex gap-8 group">
              <div className="flex-shrink-0 w-8 pt-1">
                <span className="text-white/20 text-xs font-mono">{section.number}</span>
              </div>
              <div className="flex-1 border-t border-white/10 pt-6">
                <h2 className="text-lg font-medium text-white mb-3">{section.title}</h2>
                <p className="text-sm font-light text-white/60 leading-7">{section.content}</p>
              </div>
            </div>
          ))}
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
