import { useNavigate } from "react-router-dom"

export default function HeroContent() {
  const navigate = useNavigate()

  return (
    <main className="absolute bottom-8 left-8 z-20 max-w-xl">
      <div className="text-left">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
          style={{ filter: "url(#glass-effect)" }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-xs font-light relative z-10">Дополнительные материалы для студентов</span>
        </div>

        {/* Тема лекции */}
        <h1 className="text-4xl md:text-5xl md:leading-14 tracking-tight font-light text-white mb-4">
          <span className="font-medium italic">Язык</span> как средство
          <br />
          <span className="font-light text-white/80">профессиональной, социальной</span>
          <br />
          <span className="font-light text-white/60">и межкультурной коммуникации</span>
        </h1>

        {/* Оглавление */}
        <div className="mb-4 border-l border-white/20 pl-4 space-y-1">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Оглавление</p>
          <p className="text-white/70 text-xs">1. Введение</p>
          <p className="text-white/70 text-xs">2. Язык и профессиональная коммуникация</p>
          <p className="text-white/70 text-xs">3. Язык в социальном контексте</p>
          <p className="text-white/70 text-xs">4. Межкультурная коммуникация</p>
          <p className="text-white/70 text-xs">5. Выводы</p>
        </div>

        {/* Введение */}
        <p className="text-xs font-light text-white/60 mb-5 leading-relaxed max-w-md">
          Язык — универсальный инструмент общения, который формирует профессиональные отношения,
          определяет социальный статус и соединяет людей разных культур. В этой лекции мы рассмотрим,
          как владение языком влияет на карьеру, общество и международное взаимодействие.
        </p>

        {/* Кнопка на вторую страницу */}
        <div className="flex items-center gap-4 flex-wrap">
          <button
            onClick={() => navigate("/lecture")}
            className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer"
          >
            Читать лекцию →
          </button>
        </div>
      </div>
    </main>
  )
}
