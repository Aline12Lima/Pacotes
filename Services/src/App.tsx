export default function App() {
  return (
    <div className="min-h-screen text-gray-800">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-2 py-16 pb-0 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Desenvolvimento de Landing Pages e Aplicações Web
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Soluções digitais sob medida para profissionais, empresas e projetos
          sociais.
        </p>
      </section>

      {/* PACOTES */}
      <section id="pacotes" className="max-w-6xl mx-auto px-6 py-8 pt-8 pb-12">
        <h3 className="text-3xl font-bold text-center mb-4">
          Pacotes de Serviços
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* PACOTE 1 */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col  border-2 border-blue-600">
            <h4 className="text-xl font-bold mb-2">
              Landing Page Simplificada
            </h4>
            <p className="text-gray-600 mb-4">
              Ideal para divulgação simples e objetiva.
            </p>

            <ul className="text-sm text-gray-700 space-y-2 mb-6">
              <li>✔️ 1 página</li>
              <li>✔️ Design simples (feito pelo cliente)</li>
              <li>✔️ Seções básicas</li>
              <li>✔️ Responsiva</li>
              <li>✔️ Links e botões</li>
              <li>❌ Sem domínio</li>
              <li>❌ Sem deploy</li>
              <li>❌ Sem formulários</li>
            </ul>
          </div>

          {/* PACOTE 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col border-2 border-blue-600">
            <h4 className="text-xl font-bold mb-2">
              Landing Page Profissional
            </h4>
            <p className="text-gray-600 mb-4">
              Para profissionais e pequenas empresas.
            </p>

            <ul className="text-sm text-gray-700 space-y-2 mb-6">
              <li>✔️ Tudo da Landing Page Simplificada + </li>
              <li>✔️ Animações leves</li>
              <li>✔️ Integração com o Google Forms (incorporado)</li>
              <li>✔️ Integração simples com API do cliente</li>
              <li>✔️ Deploy (Vercel ou GitHub Pages)</li>
              <li>❌ Sem domínio</li>
            </ul>
          </div>

          {/* PACOTE 3 
          <div className="bg-white rounded-lg shadow p-6 flex flex-col">
            <h4 className="text-xl font-bold mb-2">SPA Completa</h4>
            <p className="text-gray-600 mb-4">
              Aplicações completas com lógica e integração.
            </p>

            <ul className="text-sm text-gray-700 space-y-2 mb-6">
              <li>✔️ SPA estruturada</li>
              <li>✔️ Componentização</li>
              <li>✔️ Rotas</li>
              <li>✔️ Formulários</li>
              <li>✔️ Integração com APIs</li>
              <li>✔️ Deploy</li>
            </ul>

            <span className="text-2xl font-bold text-blue-600 mb-4">
              A partir de R$ 400,00
            </span>
          </div>
          */}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-500 text-gray-300 py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm">
          © {new Date().getFullYear()} Aline Lima — Desenvolvimento Web
        </div>
      </footer>
    </div>
  );
}
