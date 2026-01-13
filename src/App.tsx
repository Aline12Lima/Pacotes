export default function App() {
  return (
    <div className="min-h-screen text-gray-800">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-6 text-center">
        <h2 className="text-4xl font-bold mb-1">
          Desenvolvimento de Landing Pages e Aplicações Web
        </h2>
        <p className="text-lg text-gray-600 mb-2">
          Soluções digitais sob medida para profissionais, empresas e projetos
          sociais.
        </p>
      </section>

      {/* PACOTES */}
      <section id="pacotes" className="max-w-6xl mx-auto px-4 py-4">
        <h3 className="text-3xl font-bold text-center mb-4">
          Pacotes de Serviços
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* PACOTE 1 */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col border-2 border-blue-600">
            <h4 className="text-xl font-bold mb-1">
              Landing Page Simplificada
            </h4>
            <p className="text-gray-600 mb-2">
              Ideal para divulgação simples e objetiva.
            </p>

            <ul className="text-sm text-gray-700 space-y-1 mb-2">
              <li>✔️ 1 página</li>
              <li>✔️ Design simples (feito pelo cliente ou referência)</li>
              <li>✔️ Seções básicas (Home, serviços, contato)</li>
              <li>✔️ Responsiva (mobile e desktop)</li>
              <li>✔️ Links e botões</li>
              <li>✔️ Código completo no GitHub</li>
              <li>✔️ Prazo de entrega: 3 a 5 dias úteis</li>
              <li>✔️ Primeiro Deploy incluso (Vercel)</li>
              <li>❌ Sem domínio</li>
              <li>❌ Sem formulários</li>
              <li>❌ Sem design elaborado</li>
              <li>❌ Sem vídeo maker</li>
              <li>❌ Sem animações complexas</li>
              <li>❌ Sem carrossel</li>
            </ul>
            {/* Botão */}
            <a
              href="https://ong-ande.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-700 transition text-center"
            >
              Confira um exemplo
            </a>
          </div>

          {/* PACOTE 2 */}
          <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col border-2 border-blue-600">
            <h4 className="text-xl font-bold mb-1">
              Funcionalidades Adicionais
            </h4>
            <p className="text-gray-600 mb-2">
              Serviços que você pode adicionar à landing page, pagos à parte.
              Consulte os valores, pois cada projeto é planejado com dedicação e
              cuidado.
            </p>

            <ul className="text-sm text-gray-700 space-y-1 mb-2">
              <li>✔️ Funcionalidades adicionais</li>
              <li>✔️ Múltiplas páginas e navegações</li>
              <li>✔️ Animações complexas</li>
              <li>✔️ Deploy em hospedagem personalizada</li>
              <li>✔️ Integração com APIs</li>
              <li>✔️ Formulários e integração</li>
              <li>
                ✔️ Vídeos incorporados (video makers prontos ou referências)
              </li>
              <li>✔️ Carrosséis</li>
              <li>✔️ Possibilidade de adicionar domínio</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-500 text-gray-300 py-3">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm">
          © {new Date().getFullYear()} Aline Lima — Desenvolvimento Web
        </div>
      </footer>
    </div>
  );
}
