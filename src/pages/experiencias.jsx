import React, { useState } from 'react';
import {
  DollarSign,
  Ship,
  Globe,
  Calculator,
  Users,
  ClipboardCheck,
  BarChart,
  Building2,
  Calendar,
  CheckCircle2,
  TrendingUp,
  Target,
  Award,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  LineChart,
  Line,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from 'recharts';

// Dados para os gráficos
const skillsData = [
  { name: 'Gestão Financeira', value: 95 },
  { name: 'Comércio Exterior', value: 90 },
  { name: 'Relacionamento B2B', value: 85 },
  { name: 'Análise de Dados', value: 80 },
  { name: 'Negociação', value: 88 },
  { name: 'Gestão de Processos', value: 92 },
];

const experienceGrowthData = [
  { year: '2013', projects: 150, efficiency: 75 },
  { year: '2015', projects: 280, efficiency: 82 },
  { year: '2017', projects: 420, efficiency: 88 },
  { year: '2019', projects: 580, efficiency: 92 },
  { year: '2021', projects: 780, efficiency: 95 },
  { year: '2023', projects: 1000, efficiency: 98 },
];

const COLORS = ['#9333ea', '#a855f7', '#c084fc', '#d8b4fe', '#e9d5ff', '#f3e8ff'];

// Componente de Card de Estatísticas Melhorado
const StatCard = ({ stat, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`transform border-purple-900/20 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 transition-all duration-300 hover:scale-105 hover:border-purple-700/30 ${
        isHovered ? 'shadow-lg shadow-purple-500/20' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="flex flex-col items-center gap-3 p-4 text-center">
        <div
          className={`transform transition-all duration-300 ${
            isHovered ? 'scale-110 text-purple-400' : stat.colorClass
          }`}
        >
          {stat.icon}
        </div>
        <div className="text-2xl font-bold text-purple-100 sm:text-3xl">{stat.value}</div>
        <div className="text-sm text-purple-300 sm:text-base">{stat.label}</div>
        {isHovered && (
          <div className="mt-2 h-1 w-full rounded bg-gradient-to-r from-purple-500 to-purple-600" />
        )}
      </CardContent>
    </Card>
  );
};

// Componente de Gráfico de Radar de Habilidades
const SkillsRadarChart = () => (
  <Card className="border-purple-900/20 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-4">
    <CardContent>
      <h3 className="mb-4 text-center text-lg font-semibold text-purple-100">
        Análise de Competências
      </h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer>
          <RadarChart data={skillsData}>
            <PolarGrid stroke="#6b21a8" />
            <PolarAngleAxis dataKey="name" tick={{ fill: '#e9d5ff', fontSize: 12 }} />
            <PolarRadiusAxis stroke="#6b21a8" tick={{ fill: '#e9d5ff' }} />
            <Radar
              name="Habilidades"
              dataKey="value"
              stroke="#9333ea"
              fill="#9333ea"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);

export { StatCard, SkillsRadarChart, skillsData, experienceGrowthData, COLORS };
// Componente de Gráfico de Crescimento Profissional
const GrowthChart = () => (
  <Card className="border-purple-900/20 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-4">
    <CardContent>
      <h3 className="mb-4 text-center text-lg font-semibold text-purple-100">
        Evolução Profissional
      </h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer>
          <LineChart data={experienceGrowthData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#6b21a8" />
            <XAxis dataKey="year" stroke="#e9d5ff" />
            <YAxis yAxisId="left" stroke="#e9d5ff" />
            <YAxis yAxisId="right" orientation="right" stroke="#e9d5ff" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#18181b',
                border: '1px solid #6b21a8',
                borderRadius: '8px',
              }}
            />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="projects"
              stroke="#9333ea"
              name="Projetos Gerenciados"
              strokeWidth={2}
              dot={{ fill: '#9333ea' }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="efficiency"
              stroke="#a855f7"
              name="Eficiência (%)"
              strokeWidth={2}
              dot={{ fill: '#a855f7' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);

// Componente de Card de Experiência Melhorado
const ExperienceCard = ({ exp }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const achievementProgress = exp.metrics.map((metric) => ({
    name: metric.label,
    value: parseInt(metric.value) || 100,
  }));

  return (
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

        <div className="mb-6">
          <div className="h-[200px] w-full">
            <ResponsiveContainer>
              <RechartsBarChart data={achievementProgress}>
                <CartesianGrid strokeDasharray="3 3" stroke="#6b21a8" />
                <XAxis dataKey="name" stroke="#e9d5ff" />
                <YAxis stroke="#e9d5ff" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#18181b',
                    border: '1px solid #6b21a8',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="value" fill="#9333ea" />
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div
          className={`space-y-3 transition-all duration-300 ${
            isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {exp.achievements.map((achievement, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" />
              <span className="text-sm text-neutral-300 sm:text-base">{achievement}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-sm text-purple-400 hover:text-purple-300"
        >
          {isExpanded ? 'Ver menos' : 'Ver mais'}
        </button>
      </CardContent>
    </Card>
  );
};

// Componente de Skills
const SkillCard = ({ icon: Icon, title, description }) => (
  <Card className="group border-purple-900/20 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 transition-all duration-300 hover:border-purple-700/30">
    <CardContent className="p-4 text-center">
      <Icon className="mx-auto mb-2 h-8 w-8 text-purple-400 transition-transform duration-300 group-hover:scale-110" />
      <h3 className="mb-2 text-lg font-semibold text-purple-100">{title}</h3>
      <p className="text-sm text-neutral-300">{description}</p>
    </CardContent>
  </Card>
);

export { GrowthChart, ExperienceCard, SkillCard };
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

  const skills = [
    {
      icon: Globe,
      title: 'Comércio Internacional',
      description:
        'Expertise em processos de importação e exportação, com atuação em múltiplos portos.',
    },
    {
      icon: Calculator,
      title: 'Gestão Financeira',
      description:
        'Ampla experiência em contas a pagar/receber e processos financeiros internacionais.',
    },
    {
      icon: Users,
      title: 'Relacionamento B2B',
      description: 'Forte habilidade em negociações e atendimento a clientes corporativos.',
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
          { value: '100', label: 'Precisão' },
          { value: '95', label: 'Relatórios' },
          { value: '98', label: 'Atendimento' },
        ],
      },
      // ... outros experiences.financial
    ],
    operations: [
      // ... experiences.operations
    ],
  };

  return (
    <div className="min-h-screen w-full bg-neutral-900 px-4 py-8 sm:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-12 space-y-8 text-center">
          <div className="space-y-3">
            <h1 className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl">
              Experiência Profissional
            </h1>
            <p className="text-lg text-purple-200 sm:text-xl">
              Especialista em Finanças & Comércio Exterior
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid gap-6 sm:grid-cols-2">
            <SkillsRadarChart />
            <GrowthChart />
          </div>

          {/* Skills Section */}
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

        {/* Experience Tabs */}
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

          <TabsContent value="all" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {[...experiences.financial, ...experiences.operations]
                .sort(
                  (a, b) => new Date(b.period.split(' - ')[0]) - new Date(a.period.split(' - ')[0])
                )
                .map((exp, index) => (
                  <ExperienceCard key={index} exp={exp} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="financial" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {experiences.financial.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="operations" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
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
