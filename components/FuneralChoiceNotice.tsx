import { Phone, ShieldCheck } from 'lucide-react'

type FuneralChoiceNoticeProps = {
  compact?: boolean
}

export default function FuneralChoiceNotice({ compact = false }: FuneralChoiceNoticeProps) {
  return (
    <div className="rounded-xl border border-primary/25 bg-gradient-to-br from-primary/10 via-black/40 to-black/30 p-6 md:p-8">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15">
          <ShieldCheck className="h-5 w-5 text-primary" />
        </div>
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary/85">
          Ważna Informacja Dla Rodziny
        </p>
      </div>

      <div className={`space-y-4 text-gray-200 ${compact ? 'text-base' : 'text-lg leading-relaxed'}`}>
        <p>
          W tych niezwykle trudnych chwilach, jakimi są odejście bliskiej osoby, naturalne jest poczucie szoku,
          zagubienia i silnych emocji. Właśnie dlatego, jako firma Nekrolog, pragniemy zapewnić Państwu pełne
          wsparcie, zrozumienie oraz pomoc na każdym etapie organizacji uroczystości pożegnalnej.
        </p>
        <p>
          Jednocześnie chcielibyśmy uprzejmie przypomnieć, że niezależnie od tego, czy zgon nastąpił w szpitalu,
          czy w domu, nikt nie ma prawa narzucać Państwu wyboru konkretnej firmy pogrzebowej. Decyzja ta należy
          wyłącznie do Rodziny i powinna być podejmowana w sposób świadomy oraz dobrowolny.
        </p>
        <p>
          Informacje przekazywane przez personel medyczny, takie jak wskazanie chłodni, z którą dana placówka
          współpracuje, mają wyłącznie charakter organizacyjny i nie oznaczają obowiązku korzystania z usług
          konkretnego zakładu pogrzebowego.
        </p>
        <p>
          Nawet jeśli szpital współpracuje z określonym zakładem pogrzebowym lub ma z nim podpisaną umowę
          organizacyjną, nie jest to wyrok dla Rodziny ani obowiązek załatwienia tam pogrzebu. Rodzina ma pełne
          prawo wybrać inną firmę.
        </p>
        <p>
          Szpital ma obowiązek wydać kartę zgonu. Przewiezienie ciała do wskazanej chłodni nie zobowiązuje Państwa
          do dalszej współpracy z tą firmą.
        </p>
        <p>
          Prosimy, aby nie traktować sugestii w rodzaju: „ciało znajduje się w chłodni i należy tam udać się w celu
          załatwienia formalności” jako jedynej możliwej drogi postępowania. Mają Państwo pełne prawo wyboru firmy,
          która najlepiej odpowiada Państwa oczekiwaniom i potrzebom.
        </p>
        <p>
          Jesteśmy do Państwa dyspozycji, aby w tym wymagającym czasie służyć profesjonalnym wsparciem, empatią
          oraz pomocą w organizacji godnego pożegnania.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-300">
          W razie potrzeby pomagamy także przy odbiorze karty zgonu oraz w dalszych formalnościach.
        </p>
        <a
          href="tel:+48602274661"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-medium text-black transition hover:bg-primary/90"
        >
          <Phone className="h-4 w-4" />
          +48 602 274 661
        </a>
      </div>
    </div>
  )
}
