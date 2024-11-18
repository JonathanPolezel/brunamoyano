import React, { useState } from 'react';
import {
  Globe,
  Calculator,
  Users,
  Building2,
  CheckCircle2,
  BookOpen,
  Briefcase,
  Target,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Legend,
} from 'recharts';

// Dados de habilidades técnicas
const skillsData = [
  { name: 'Gestão Financeira', value: 95 },
  { name: 'Comércio Exterior', value: 90 },
  { name: 'Atendimento B2B', value: 92 },
  { name: 'Sistemas (ERP)', value: 85 },
  { name: 'Inglês', value: 75 },
];

// Dados de evolução profissional por ano
const timelineData = [
  { year: '2007', role: 'Recepcionista', level: 1 },
  { year: '2008', role: 'Aux. Operacional', level: 2 },
  { year: '2013', role: 'Ass. Financeiro', level: 3 },
  { year: '2015', role: 'Ass. Financeiro Sr', level: 4 },
  { year: '2021', role: 'Esp. Financeiro', level: 5 },
  { year: '2024', role: 'Analista Financeiro', level: 6 },
];

const COLORS = ['#9333ea', '#a855f7', '#c084fc', '#d8b4fe', '#e9d5ff'];

// Constantes de estatísticas
const stats = [
  {
    icon: <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />,
    value: '17+',
    label: 'Anos de Experiência',
    colorClass: 'text-purple-400',
  },
  {
    icon: <Building2 className="h-5 w-5 sm:h-6 sm:w-6" />,
    value: '6+',
    label: 'Empresas',
    colorClass: 'text-purple-400',
  },
  {
    icon: <Target className="h-5 w-5 sm:h-6 sm:w-6" />,
    value: '3+',
    label: 'Especializações',
    colorClass: 'text-purple-400',
  },
  {
    icon: <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />,
    value: 'ADS',
    label: 'Graduação',
    colorClass: 'text-purple-400',
  },
];

export { stats, skillsData, timelineData, COLORS };
// Componente de Card de Estatísticas
const StatCard = ({ stat }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="transform border-purple-900/20 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 transition-all duration-300 hover:scale-105 hover:border-purple-700/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="flex flex-col items-center gap-2 p-4 text-center">
        <div
          className={`${isHovered ? 'scale-110 text-purple-400' : stat.colorClass} transition-all duration-300`}
        >
          {stat.icon}
        </div>
        <div className="text-xl font-bold text-purple-100 sm:text-2xl">{stat.value}</div>
        <div className="text-xs text-purple-300 sm:text-sm">{stat.label}</div>
      </CardContent>
    </Card>
  );
};

// Componente de Gráfico de Habilidades
const SkillsChart = () => (
  <Card className="border-purple-900/20 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-4">
    <CardContent>
      <h3 className="mb-4 text-center text-lg font-semibold text-purple-100">Competências</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer>
          <RadarChart data={skillsData}>
            <PolarGrid stroke="#6b21a8" />
            <PolarAngleAxis dataKey="name" tick={{ fill: '#e9d5ff', fontSize: 12 }} />
            <Radar name="Nível" dataKey="value" stroke="#9333ea" fill="#9333ea" fillOpacity={0.5} />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);

// Componente de Gráfico de Evolução
const TimelineChart = () => (
  <Card className="border-purple-900/20 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-4">
    <CardContent>
      <h3 className="mb-4 text-center text-lg font-semibold text-purple-100">
        Evolução Profissional
      </h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer>
          <LineChart data={timelineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#6b21a8" />
            <XAxis dataKey="year" stroke="#e9d5ff" />
            <YAxis stroke="#e9d5ff" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#18181b',
                border: '1px solid #6b21a8',
                borderRadius: '8px',
              }}
              formatter={(value) => [timelineData.find((item) => item.level === value)?.role]}
            />
            <Line
              type="monotone"
              dataKey="level"
              stroke="#9333ea"
              strokeWidth={2}
              dot={{ fill: '#9333ea' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);

// Componente de Card de Habilidade
const SkillCard = ({ icon: Icon, title, description }) => (
  <Card className="group border-purple-900/20 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 transition-all duration-300 hover:border-purple-700/30">
    <CardContent className="p-4 text-center">
      <Icon className="mx-auto mb-2 h-8 w-8 text-purple-400 transition-transform duration-300 group-hover:scale-110" />
      <h3 className="mb-2 text-lg font-semibold text-purple-100">{title}</h3>
      <p className="text-sm text-neutral-300">{description}</p>
    </CardContent>
  </Card>
);

export { StatCard, SkillsChart, TimelineChart, SkillCard };
// Componente de Card de Experiência
const ExperienceCard = ({ exp }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="border-purple-900/20 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 transition-all duration-300 hover:border-purple-700/30">
      <CardContent className="p-4 sm:p-6">
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-gradient-to-r from-purple-500 to-purple-600">{exp.type}</Badge>
              <Badge variant="outline" className="border-purple-800/50 text-purple-300">
                {exp.period}
              </Badge>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-50">{exp.title}</h3>
              <p className="text-purple-400">{exp.company}</p>
            </div>
          </div>
          <Building2 className="h-5 w-5 text-purple-400" />
        </div>

        <div
          className={`space-y-3 transition-all duration-300 ${
            isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-[100px] overflow-hidden'
          }`}
        >
          {exp.responsibilities.map((resp, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" />
              <span className="text-sm text-neutral-300">{resp}</span>
            </div>
          ))}
        </div>

        {exp.responsibilities.length > 3 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-sm text-purple-400 hover:text-purple-300"
          >
            {isExpanded ? 'Ver menos' : 'Ver mais'}
          </button>
        )}
      </CardContent>
    </Card>
  );
};

// Dados de experiência profissional completos
const experiences = {
  current: [
    {
      title: 'Assistente Financeiro - Contas a Receber',
      company: 'Unimar Agenciamento Marítimo',
      period: 'Fevereiro 2024 - Outubro 2024',
      type: 'Financeiro',
      responsibilities: [
        'Análise e conferência dos processos faturados',
        'Conferência de pagamentos e identificação de depósitos',
        'Conciliação bancária diária e mensal',
        'Emissão de relatórios diários para diretoria',
        'Cobrança de processos em aberto (uncollect)',
      ],
    },
    {
      title: 'Assistente Financeiro - Contas a Pagar',
      company: 'Unimar Agenciamento Marítimo',
      period: 'Julho 2023 - Fevereiro 2024',
      type: 'Financeiro',
      responsibilities: [
        'Lançamentos das notas fiscais dos fornecedores',
        'Pagamentos operacionais em todos portos',
        'Gestão de contas contábeis para custos operacionais',
        'Suporte a clientes internos e externos',
      ],
    },
  ],
  previous: [
    {
      title: 'Assistente Financeiro',
      company: 'AGL Cargo',
      period: 'Fevereiro 2022 - Abril 2023',
      type: 'Financeiro',
      responsibilities: [
        'Gestão de pagamentos operacionais de exportação/importação',
        'Atualização e conferência de faturas de clientes',
        'Controle de outstanding semanal com armadores',
        'Controle de antecipações para evitar black list',
        'Suporte a clientes internos e externos',
      ],
    },
    {
      title: 'Assistente Financeiro',
      company: 'Marimex Despachos',
      period: 'Outubro 2021 - Fevereiro 2022',
      type: 'Financeiro',
      responsibilities: [
        'Gestão de pagamentos operacionais de exportação',
        'Conciliação bancária de pagamentos operacionais',
        'Suporte a clientes internos e externos',
        'Controle de créditos de processos faturados',
      ],
    },
    {
      title: 'Assistente Financeiro',
      company: 'Craft Multimodal',
      period: 'Março 2015 - Setembro 2021',
      type: 'Financeiro',
      responsibilities: [
        'Gestão de pagamentos operacionais de importação/exportação',
        'Negociações de valores com armadores',
        'Gestão de documentos e desbloqueios junto aos armadores',
        'Controle de vencimentos dos termos de contêiner',
        'Gestão documental de clientes de Representação',
      ],
    },
    {
      title: 'Assistente Financeiro',
      company: 'Craft Multimodal',
      period: 'Agosto 2013 - Fevereiro 2015',
      type: 'Financeiro',
      responsibilities: [
        'Atendimento ao cliente',
        'Análise de documentação para desbloqueio FCL/LCL',
        'Conferência de processos e pagamentos',
        'Conciliação bancária e emissão de recibos',
        'Gestão de cobranças (uncollect)',
      ],
    },
    {
      title: 'Auxiliar Operacional',
      company: 'Allink Transportes Internacionais',
      period: 'Dezembro 2008 - Junho 2011',
      type: 'Operacional',
      responsibilities: [
        'Atendimento ao cliente',
        'Gestão de identificação de depósitos',
        'Conciliação de valores e extratos bancários',
        'Conferência de documentos de importação/exportação',
      ],
    },
    {
      title: 'Recepcionista',
      company: 'Allink Transportes Internacionais',
      period: 'Fevereiro 2007 - Novembro 2008',
      type: 'Administrativo',
      responsibilities: [
        'Atendimento ao cliente',
        'Gestão de arquivos e documentos',
        'Suporte aos setores de Importação e Exportação',
        'Controle de recibos e documentação',
      ],
    },
  ],
};

export { ExperienceCard, experiences };
const ExperiencePage = () => {
  const skills = [
    {
      icon: Globe,
      title: 'Comércio Internacional',
      description:
        'Especialista em processos de importação, exportação e documentação internacional.',
    },
    {
      icon: Calculator,
      title: 'Gestão Financeira',
      description:
        'Expertise em contas a pagar/receber, conciliação bancária e controles financeiros.',
    },
    {
      icon: Users,
      title: 'Relacionamento B2B',
      description: 'Forte experiência em atendimento e negociação com clientes corporativos.',
    },
  ];

  return (
    <div className="min-h-screen w-full bg-neutral-900 px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Header Section */}
        <div className="space-y-8 text-center">
          <div className="space-y-2">
            <h1 className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
              Bruna Lino Moyano
            </h1>
            <p className="text-lg text-purple-200">Especialista em Finanças & Comércio Exterior</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid gap-6 sm:grid-cols-2">
            <SkillsChart />
            <TimelineChart />
          </div>

          {/* Core Skills */}
          <div className="grid gap-4 sm:grid-cols-3">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="space-y-8">
          <h2 className="text-center text-2xl font-semibold text-purple-100 sm:text-3xl">
            Experiência Profissional
          </h2>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-6 flex w-full justify-center space-x-2 bg-transparent">
              <TabsTrigger
                value="all"
                className="bg-neutral-800 px-4 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-purple-600"
              >
                Todas
              </TabsTrigger>
              <TabsTrigger
                value="current"
                className="bg-neutral-800 px-4 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-purple-600"
              >
                Atual
              </TabsTrigger>
              <TabsTrigger
                value="previous"
                className="bg-neutral-800 px-4 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-purple-600"
              >
                Anteriores
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid gap-6 lg:grid-cols-2">
                {[...experiences.current, ...experiences.previous]
                  .sort(
                    (a, b) =>
                      new Date(b.period.split(' - ')[0]) - new Date(a.period.split(' - ')[0])
                  )
                  .map((exp, index) => (
                    <ExperienceCard key={index} exp={exp} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="current">
              <div className="grid gap-6 lg:grid-cols-2">
                {experiences.current.map((exp, index) => (
                  <ExperienceCard key={index} exp={exp} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="previous">
              <div className="grid gap-6 lg:grid-cols-2">
                {experiences.previous
                  .sort(
                    (a, b) =>
                      new Date(b.period.split(' - ')[0]) - new Date(a.period.split(' - ')[0])
                  )
                  .map((exp, index) => (
                    <ExperienceCard key={index} exp={exp} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer Section */}
        <div className="text-center text-sm text-purple-300">
          <p>São Vicente, SP • bruka_moyano@hotmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
