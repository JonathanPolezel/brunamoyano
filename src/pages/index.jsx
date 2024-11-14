import React from 'react';
import {
  User,
  BookOpen,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  FileText,
  ArrowRight,
  GraduationCap,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen w-full bg-neutral-900 px-4 py-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12 grid gap-8 sm:grid-cols-2">
          <div className="space-y-4">
            <h1 className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl">
              Bruna Lino Moyano
            </h1>
            <p className="text-xl text-purple-200">Especialista em Finanças & Comércio Exterior</p>
            <p className="text-neutral-400">
              Mais de 10 anos de experiência em gestão financeira internacional, com foco em
              processos de importação e exportação.
            </p>
            <div className="flex gap-4">
              <Link href="/contato">
                <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
                  Contato <Mail className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/comercio">
                <Button
                  variant="outline"
                  className="border-purple-700 text-purple-300 hover:border-purple-500"
                >
                  Experiência <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="border-purple-900/20 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50">
              <CardContent className="p-4 text-center">
                <GraduationCap className="mx-auto mb-2 h-8 w-8 text-purple-400" />
                <p className="text-lg font-bold text-purple-100">Graduação</p>
                <p className="text-sm text-neutral-400">Administração de Empresas</p>
              </CardContent>
            </Card>
            <Card className="border-purple-900/20 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50">
              <CardContent className="p-4 text-center">
                <Briefcase className="mx-auto mb-2 h-8 w-8 text-purple-400" />
                <p className="text-lg font-bold text-purple-100">10+ Anos</p>
                <p className="text-sm text-neutral-400">Experiência Profissional</p>
              </CardContent>
            </Card>
            <Card className="border-purple-900/20 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50">
              <CardContent className="p-4 text-center">
                <BookOpen className="mx-auto mb-2 h-8 w-8 text-purple-400" />
                <p className="text-lg font-bold text-purple-100">Cursando</p>
                <p className="text-sm text-neutral-400">Análise e Desenvolvimento</p>
              </CardContent>
            </Card>
            <Card className="border-purple-900/20 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50">
              <CardContent className="p-4 text-center">
                <FileText className="mx-auto mb-2 h-8 w-8 text-purple-400" />
                <p className="text-lg font-bold text-purple-100">Inglês</p>
                <p className="text-sm text-neutral-400">Intermediário</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="grid gap-6 sm:grid-cols-3">
          <Link href="/comercio">
            <Card className="border-purple-900/20 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 transition-all duration-300 hover:border-purple-700/30">
              <CardContent className="p-6">
                <Briefcase className="mb-4 h-8 w-8 text-purple-400" />
                <h3 className="mb-2 text-lg font-semibold text-purple-100">Experiência</h3>
                <p className="text-sm text-neutral-400">
                  Conheça minha trajetória profissional em comércio exterior e finanças.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/estudos">
            <Card className="border-purple-900/20 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 transition-all duration-300 hover:border-purple-700/30">
              <CardContent className="p-6">
                <BookOpen className="mb-4 h-8 w-8 text-purple-400" />
                <h3 className="mb-2 text-lg font-semibold text-purple-100">Formação</h3>
                <p className="text-sm text-neutral-400">
                  Explore minha formação acadêmica e qualificações profissionais.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/contato">
            <Card className="border-purple-900/20 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 transition-all duration-300 hover:border-purple-700/30">
              <CardContent className="p-6">
                <Mail className="mb-4 h-8 w-8 text-purple-400" />
                <h3 className="mb-2 text-lg font-semibold text-purple-100">Contato</h3>
                <p className="text-sm text-neutral-400">
                  Entre em contato para oportunidades profissionais.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
