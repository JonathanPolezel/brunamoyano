import React from 'react';
import { Briefcase, BookOpen, Mail, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-neutral-900 px-4 py-8 sm:py-16">
      <div className="mx-auto max-w-4xl text-center">
        {/* Hero Section */}
        <div className="space-y-6">
          <div className="relative mx-auto h-40 w-40">
            <Image
              src="/images/bruna.jpg"
              alt="Bruna Lino Moyano"
              className="h-full w-full rounded-full object-cover"
              width={160}
              height={160}
            />
          </div>
          <h1 className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl">
            Bruna Lino Moyano
          </h1>
          <p className="text-xl text-purple-200">Especialista em Finanças & Comércio Exterior</p>
          <p className="mx-auto max-w-2xl text-neutral-400">
            Mais de 10 anos de experiência em gestão financeira internacional, com foco em processos
            de importação e exportação.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contato">
              <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
                Contato <Mail className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/experiencias">
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
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Card className="border-purple-900/20 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50">
            <CardHeader>
              <CardTitle>Formação</CardTitle>
            </CardHeader>
            <CardContent className="p-4 text-center">
              <BookOpen className="mx-auto mb-2 h-8 w-8 text-purple-400" />
              <p className="text-sm text-neutral-400">Administração de Empresas</p>
            </CardContent>
          </Card>
          <Card className="border-purple-900/20 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50">
            <CardHeader>
              <CardTitle>Experiência</CardTitle>
            </CardHeader>
            <CardContent className="p-4 text-center">
              <Briefcase className="mx-auto mb-2 h-8 w-8 text-purple-400" />
              <p className="text-sm text-neutral-400">10+ Anos</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
