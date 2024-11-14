import React from 'react';
import {
  DollarSign,
  Ship,
  FileText,
  Globe,
  Calculator,
  Users,
  ClipboardCheck,
  BarChart,
  Building2,
  Calendar,
  CheckCircle2,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ExperiencePage = () => {
  const stats = [
    {
      icon: <Ship className="h-5 w-5 sm:h-6 sm:w-6" />,
      value: '10+',
      label: 'Anos de Experiência',
      colorClass: 'text-purple-400',
    },
    {
      icon: <Building2 className="h-5 w-5 sm:h-6 sm:w-6" />,
      value: '5+',
      label: 'Grandes Empresas',
      colorClass: 'text-purple-400',
    },
    {
      icon: <Globe className="h-5 w-5 sm:h-6 sm:w-6" />,
      value: '100+',
      label: 'Portos Atendidos',
      colorClass: 'text-purple-400',
    },
    {
      icon: <DollarSign className="h-5 w-5 sm:h-6 sm:w-6" />,
      value: '1000+',
      label: 'Processos Gerenciados',
      colorClass: 'text-purple-400',
    },
  ];
  const experiences = {
    financial: [
      {
        title: 'Assistente Financeiro',
        company: 'Unimar Agenciamento Marítimo',
        period: 'Fevereiro 2024 - Atual',
        type: 'Financeiro',
        description: 'Gestão completa do contas a receber e processos financeiros internacionais.',
        achievements: [
          'Análise e conferência dos processos faturados',
          'Conferência de pagamentos e identificação de depósitos',
          'Conciliação bancária diária e mensal',
          'Emissão de relatórios diários para diretoria',
        ],
        metrics: [
          { value: '100%', label: 'Precisão' },
          { value: 'Daily', label: 'Relatórios' },
          { value: 'B2B', label: 'Atendimento' },
        ],
      },
      {
        title: 'Assistente Financeiro',
        company: 'AGL Cargo',
        period: 'Fevereiro 2022 - Abril 2023',
        type: 'Financeiro',
        description:
          'Responsável por pagamentos operacionais de exportação e importação em todos os portos nacionais.',
        achievements: [
          'Gestão de pagamentos operacionais nacionais',
          'Atualização e conferência de faturas de cliente',
          'Controle de outstanding semanal com armadores',
          'Controle de antecipações para evitar black list',
        ],
        metrics: [
          { value: '0', label: 'Blacklists' },
          { value: '100%', label: 'Compliance' },
          { value: '24h', label: 'Resposta' },
        ],
      },
      {
        title: 'Assistente Financeiro',
        company: 'Marimex Despachos',
        period: 'Outubro 2021 - Fevereiro 2022',
        type: 'Financeiro',
        description: 'Gestão financeira de operações de exportação e conciliação bancária.',
        achievements: [
          'Gestão de pagamentos operacionais de exportação',
          'Conciliação bancária de pagamentos operacionais',
          'Suporte a clientes internos e externos',
          'Controle de créditos de processos faturados',
        ],
        metrics: [
          { value: '100%', label: 'Precisão' },
          { value: '500+', label: 'Processos' },
          { value: 'B2B', label: 'Suporte' },
        ],
      },
    ],
    operations: [
      {
        title: 'Assistente Financeiro',
        company: 'Craft Multimodal',
        period: 'Março 2015 - Setembro 2021',
        type: 'Operacional',
        description:
          'Gestão completa de processos financeiros e operacionais de importação e exportação.',
        achievements: [
          'Gestão de desbloqueios junto aos armadores',
          'Negociações e controle de valores com armadores',
          'Confecção e controle de documentos internacionais',
          'Gestão de processos de importação e exportação',
        ],
        metrics: [
          { value: '8+', label: 'Anos' },
          { value: '1000+', label: 'Processos' },
          { value: '100%', label: 'Eficiência' },
        ],
      },
      {
        title: 'Assistente Financeiro',
        company: 'Craft Multimodal',
        period: 'Agosto 2013 - Fevereiro 2015',
        type: 'Operacional',
        description: 'Gestão de caixa e processos operacionais de comércio exterior.',
        achievements: [
          'Atendimento especializado ao cliente',
          'Análise de documentação FCL/LCL',
          'Conferência de processos faturados',
          'Gestão de cobranças e uncollect',
        ],
        metrics: [
          { value: '500+', label: 'Clientes' },
          { value: '99%', label: 'Satisfação' },
          { value: '24h', label: 'Resposta' },
        ],
      },
    ],
  };
  const ExperienceCard = ({ exp }) => (
    <Card className="border-purple-900/20 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 transition-all duration-300 hover:border-purple-700/30">
      <CardContent className="p-4 sm:p-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
                {exp.type}
              </Badge>
              <Badge variant="outline" className="border-purple-800/50 text-purple-300">
                {exp.period}
              </Badge>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-50 sm:text-xl">{exp.title}</h3>
              <p className="text-purple-400">{exp.company}</p>
            </div>
          </div>
          <Building2 className="h-5 w-5 text-purple-400 sm:h-6 sm:w-6" />
        </div>

        <p className="mb-6 text-sm text-neutral-300 sm:text-base">{exp.description}</p>

        <div className="mb-6 grid grid-cols-3 gap-3 border-y border-purple-900/30 bg-neutral-900/30 py-4">
          {exp.metrics.map((metric, i) => (
            <div key={i} className="flex flex-col items-center justify-center gap-1 text-center">
              <div className="text-purple-400">
                {i === 0 ? (
                  <BarChart className="h-5 w-5" />
                ) : i === 1 ? (
                  <ClipboardCheck className="h-5 w-5" />
                ) : (
                  <Calendar className="h-5 w-5" />
                )}
              </div>
              <div className="text-sm font-semibold text-purple-100 sm:text-base">
                {metric.value}
              </div>
              <div className="text-xs text-purple-300 sm:text-sm">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {exp.achievements.map((achievement, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" />
              <span className="text-sm text-neutral-300 sm:text-base">{achievement}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen w-full bg-neutral-900 px-4 py-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 space-y-8 text-center">
          <div className="space-y-3">
            <h1 className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
              Experiência Profissional
            </h1>
            <p className="text-lg text-purple-200 sm:text-xl">
              Especialista em Finanças & Comércio Exterior
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="border-purple-900/20 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 transition-all duration-300 hover:border-purple-700/30"
              >
                <CardContent className="flex flex-col items-center gap-2 p-3 text-center sm:p-4">
                  <div className={stat.colorClass}>{stat.icon}</div>
                  <div className="text-xl font-bold text-purple-100 sm:text-2xl">{stat.value}</div>
                  <div className="text-xs text-purple-300 sm:text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Section */}
          <div className="grid gap-4 sm:grid-cols-3">
            <Card className="border-purple-900/20 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50">
              <CardContent className="p-4 text-center">
                <Globe className="mx-auto mb-2 h-8 w-8 text-purple-400" />
                <h3 className="mb-2 text-lg font-semibold text-purple-100">
                  Comércio Internacional
                </h3>
                <p className="text-sm text-neutral-300">
                  Expertise em processos de importação e exportação, com atuação em múltiplos
                  portos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-900/20 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50">
              <CardContent className="p-4 text-center">
                <Calculator className="mx-auto mb-2 h-8 w-8 text-purple-400" />
                <h3 className="mb-2 text-lg font-semibold text-purple-100">Gestão Financeira</h3>
                <p className="text-sm text-neutral-300">
                  Ampla experiência em contas a pagar/receber e processos financeiros
                  internacionais.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-900/20 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50">
              <CardContent className="p-4 text-center">
                <Users className="mx-auto mb-2 h-8 w-8 text-purple-400" />
                <h3 className="mb-2 text-lg font-semibold text-purple-100">Relacionamento B2B</h3>
                <p className="text-sm text-neutral-300">
                  Forte habilidade em negociações e atendimento a clientes corporativos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="relative w-full overflow-x-auto">
            <TabsList className="mb-6 inline-flex w-full min-w-max space-x-2 bg-transparent p-0">
              <TabsTrigger
                value="all"
                className="whitespace-nowrap bg-neutral-800 px-4 py-2 text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-purple-600 sm:text-base"
              >
                Todas Experiências
              </TabsTrigger>
              <TabsTrigger
                value="financial"
                className="whitespace-nowrap bg-neutral-800 px-4 py-2 text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-purple-600 sm:text-base"
              >
                Financeiro
              </TabsTrigger>
              <TabsTrigger
                value="operations"
                className="whitespace-nowrap bg-neutral-800 px-4 py-2 text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-purple-600 sm:text-base"
              >
                Operacional
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            <div className="space-y-4">
              {[...experiences.financial, ...experiences.operations]
                .sort(
                  (a, b) => new Date(b.period.split(' - ')[0]) - new Date(a.period.split(' - ')[0])
                )
                .map((exp, index) => (
                  <ExperienceCard key={index} exp={exp} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="financial">
            <div className="space-y-4">
              {experiences.financial.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="operations">
            <div className="space-y-4">
              {experiences.operations.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ExperiencePage;
