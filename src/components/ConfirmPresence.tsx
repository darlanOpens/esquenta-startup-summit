"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, CheckCircle } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

/**
 * Componente de Confirmação de Presença
 * Página para quando o email é encontrado na lista de convidados
 */
export function ConfirmPresence() {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    linkedin: '',
    tamanhoEmpresa: '',
    setorAtuacao: '',
    principaisProdutos: '',
    areaExperiencia: 'Sim',
    quantasPessoas: '',
    canaisAtendimento: [] as string[],
    desafios: '',
    faturamento: '',
    modeloNegocio: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      canaisAtendimento: prev.canaisAtendimento.includes(value)
        ? prev.canaisAtendimento.filter(item => item !== value)
        : [...prev.canaisAtendimento, value]
    }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start px-4 py-8 md:py-20">
      {/* Background com gradiente e efeito de brilho */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
        {/* Efeito de brilho central */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-400/20 via-purple-600/10 to-transparent" />
        {/* Brilho adicional no canto superior */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-pink-400/15 via-purple-500/10 to-transparent" />
        {/* Brilho no canto inferior esquerdo */}
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-radial from-blue-400/15 via-indigo-500/10 to-transparent" />
      </div>
      
      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Image
            src="/esquenta/logo-esquenta.png"
            alt="Logo Esquenta Startup Summit"
            width={200}
            height={160}
            className="h-20 w-auto object-contain mx-auto"
            priority
          />
        </motion.div>

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">
            Parabéns!
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl font-semibold mb-6 text-white"
        >
          Você está entre os convidados exclusivos para o Esquenta Startup Summit
        </motion.h2>

        {/* Subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <p className="text-white/80 mb-4">
            Para garantir sua vaga, <span className="font-semibold text-orange-300">só falta um último passo:</span> confirme sua presença preenchendo o formulário abaixo. Estamos animados para ter você conosco em uma experiência incrível de aprendizado e networking!
          </p>
          <p className="text-purple-200 font-semibold">
            Preencha suas informações e nos vemos em breve!
          </p>
        </motion.div>

        {/* Informações do evento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 text-blue-200 font-semibold mb-6">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-orange-400" />
              <span>28 de agosto</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-orange-400" />
              <span>09h – 12h</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-orange-400" />
              <a 
                href="https://blackpotrestaurant.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-orange-300 transition-colors duration-200 underline decoration-orange-400/50 hover:decoration-orange-300"
              >
                Blackpot Restaurant Floripa
              </a>
            </div>
          </div>
        </motion.div>

        {/* Formulário de confirmação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="max-w-lg mx-auto"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-lg p-6">
                <div className="space-y-4">
                  {/* Nome Completo */}
                  <div>
                    <label className="block text-sm font-medium text-purple-200 mb-2">Como você gostaria de ser chamado?</label>
                    <input
                      type="text"
                      name="nomeCompleto"
                      value={formData.nomeCompleto}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-orange-400 transition-colors"
                      required
                    />
                  </div>

                  {/* LinkedIn */}
                  <div>
                    <label className="block text-sm font-medium text-purple-200 mb-2">qual seu linkedin?</label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-orange-400 transition-colors"
                      required
                    />
                  </div>

                  {/* Tamanho da Empresa */}
                  <div>
                    <label className="block text-sm font-medium text-purple-200 mb-2">Tamanho da Empresa</label>
                    <select
                      name="tamanhoEmpresa"
                      value={formData.tamanhoEmpresa}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-orange-400 transition-colors"
                      required
                    >
                      <option value="" className="bg-purple-900">Selecione...</option>
                      <option value="Entre 1 e 10 funcionários" className="bg-purple-900">Entre 1 e 10 funcionários</option>
                      <option value="Entre 11 e 50 funcionários" className="bg-purple-900">Entre 11 e 50 funcionários</option>
                      <option value="Entre 51 e 100 funcionários" className="bg-purple-900">Entre 51 e 100 funcionários</option>
                      <option value="Entre 101 e 500 funcionários" className="bg-purple-900">Entre 101 e 500 funcionários</option>
                      <option value="Entre 501 e 1000 funcionários" className="bg-purple-900">Entre 501 e 1000 funcionários</option>
                      <option value="Mais de 1000 funcionários" className="bg-purple-900">Mais de 1000 funcionários</option>
                    </select>
                  </div>

                  {/* Setor de Atuação */}
                  <div>
                    <label className="block text-sm font-medium text-purple-200 mb-2">Setor de Atuação</label>
                    <select
                      name="setorAtuacao"
                      value={formData.setorAtuacao}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-orange-400 transition-colors"
                      required
                    >
                      <option value="" className="bg-purple-900">Selecione...</option>
                      <option value="Tecnologia e Software" className="bg-purple-900">Tecnologia e Software</option>
                      <option value="Finanças e Bancos" className="bg-purple-900">Finanças e Bancos</option>
                      <option value="Saúde e Bem-Estar" className="bg-purple-900">Saúde e Bem-Estar</option>
                      <option value="Varejo e E-commerce" className="bg-purple-900">Varejo e E-commerce</option>
                      <option value="Educação e Treinamento" className="bg-purple-900">Educação e Treinamento</option>
                      <option value="Logística e Transporte" className="bg-purple-900">Logística e Transporte</option>
                      <option value="Imobiliário e Construção" className="bg-purple-900">Imobiliário e Construção</option>
                      <option value="Indústria e Manufatura" className="bg-purple-900">Indústria e Manufatura</option>
                      <option value="Serviços Profissionais (Consultoria, Jurídico, Contabilidade)" className="bg-purple-900">Serviços Profissionais (Consultoria, Jurídico, Contabilidade)</option>
                      <option value="Mídia e Entretenimento" className="bg-purple-900">Mídia e Entretenimento</option>
                      <option value="Hotelaria e Turismo" className="bg-purple-900">Hotelaria e Turismo</option>
                      <option value="Energia e Utilidades" className="bg-purple-900">Energia e Utilidades</option>
                      <option value="Agronegócio e Alimentação" className="bg-purple-900">Agronegócio e Alimentação</option>
                      <option value="Telecomunicações" className="bg-purple-900">Telecomunicações</option>
                      <option value="Outros" className="bg-purple-900">Outros</option>
                    </select>
                  </div>

                  {/* Principais Produtos/Serviços */}
                  <div>
                    <label className="block text-sm font-medium text-purple-200 mb-2">Principais Produtos/Serviços</label>
                    <input
                      type="text"
                      name="principaisProdutos"
                      value={formData.principaisProdutos}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-orange-400 transition-colors"
                      required
                    />
                  </div>

                  {/* Área dedicada para Experiência do Cliente */}
                  <div>
                    <label className="block text-sm font-medium text-purple-200 mb-3"> empresa possui uma área dedicada para Experiência do Cliente (CX)?</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="areaExperiencia"
                          value="Sim"
                          checked={formData.areaExperiencia === 'Sim'}
                          onChange={(e) => handleRadioChange('areaExperiencia', e.target.value)}
                          className="mr-2 text-orange-400"
                        />
                        <span className="text-white">Sim</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="areaExperiencia"
                          value="Não"
                          checked={formData.areaExperiencia === 'Não'}
                          onChange={(e) => handleRadioChange('areaExperiencia', e.target.value)}
                          className="mr-2 text-orange-400"
                        />
                        <span className="text-white">Não</span>
                      </label>
                    </div>
                  </div>

                  {/* Quantas pessoas compõem a equipe */}
                  <div>
                    <label className="block text-sm font-medium text-purple-200 mb-2">Quantas pessoas compõem a equipe de atendimento?</label>
                    <input
                      type="text"
                      name="quantasPessoas"
                      value={formData.quantasPessoas}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-orange-400 transition-colors"
                      required
                    />
                  </div>

                  {/* Canais de atendimento */}
                  <div>
                    <label className="block text-sm font-medium text-purple-200 mb-3">Quais são os principais canais de atendimento ao cliente na sua empresa?</label>
                    <div className="space-y-2">
                      {['Chat Online', 'E-mail', 'Telefone', 'Redes Sociais', 'Aplicativo próprio'].map((canal) => (
                        <label key={canal} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.canaisAtendimento.includes(canal)}
                            onChange={() => handleCheckboxChange(canal)}
                            className="mr-2 text-orange-400"
                          />
                          <span className="text-white">{canal}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Principais desafios */}
                  <div>
                    <label className="block text-sm font-medium text-purple-200 mb-2">Quais são os principais desafios que a empresa enfrenta em CX?</label>
                    <input
                      type="text"
                      name="desafios"
                      value={formData.desafios}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-orange-400 transition-colors"
                      required
                    />
                  </div>

                  {/* Faturamento anual */}
                  <div>
                    <label className="block text-sm font-medium text-purple-200 mb-2">Qual é a faixa de faturamento anual da empresa?</label>
                    <select
                      name="faturamento"
                      value={formData.faturamento}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-orange-400 transition-colors"
                      required
                    >
                      <option value="" className="bg-purple-900">Selecione...</option>
                      <option value="Até R$500 mil" className="bg-purple-900">Até R$500 mil</option>
                      <option value="Entre R$500 mil e R$5 milhões" className="bg-purple-900">Entre R$500 mil e R$5 milhões</option>
                      <option value="Entre R$5 milhões e R$20 milhões" className="bg-purple-900">Entre R$5 milhões e R$20 milhões</option>
                      <option value="Entre R$20 milhões e R$50 milhões" className="bg-purple-900">Entre R$20 milhões e R$50 milhões</option>
                      <option value="Acima de R$50 milhões" className="bg-purple-900">Acima de R$50 milhões</option>
                    </select>
                  </div>

                  {/* Modelo de negócio */}
                  <div>
                    <label className="block text-sm font-medium text-purple-200 mb-2">O modelo de negócio da sua empresa é principalmente voltado para:</label>
                    <select
                      name="modeloNegocio"
                      value={formData.modeloNegocio}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-orange-400 transition-colors"
                      required
                    >
                      <option value="" className="bg-purple-900">Selecione...</option>
                      <option value="B2B (Business to Business)" className="bg-purple-900">B2B (Business to Business)</option>
                      <option value="B2C (Business to Consumer)" className="bg-purple-900">B2C (Business to Consumer)</option>
                      <option value="B2B e B2C (Atende ambos)" className="bg-purple-900">B2B e B2C (Atende ambos)</option>
                      <option value="B2G (Business to Government)" className="bg-purple-900">B2G (Business to Government)</option>
                    </select>
                  </div>
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-6 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 rounded-lg transition-all duration-200"
                >
                  {isSubmitting ? 'Enviando...' : 'ENVIAR'}
                </Button>
              </div>
            </form>
          ) : (
            <div className="bg-green-500/20 backdrop-blur-md border border-green-400/30 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Presença Confirmada!
              </h3>
              <p className="text-green-200">
                Obrigado por confirmar sua presença. Nos vemos no evento!
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}