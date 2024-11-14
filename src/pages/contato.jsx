import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  FileText,
  Send,
  MessageCircle,
  Briefcase,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ContactPage = () => {
  const contactInfo = {
    email: 'Bruka_moyano@hotmail.com',
    phone: '(13) 97412-8143',
    location: 'São Vicente - SP',
    whatsapp: '(13) 97412-4438',
    linkedin: 'linkedin.com/in/brunamoyano',
  };

  const handleContactClick = (type, value) => {
    switch (type) {
      case 'email':
        window.location.href = `mailto:${value}`;
        break;
      case 'phone':
        window.location.href = `tel:${value.replace(/[^\d]/g, '')}`;
        break;
      case 'whatsapp':
        window.open(`https://wa.me/55${value.replace(/[^\d]/g, '')}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.${value}`, '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen w-full bg-neutral-900 px-4 py-8 sm:py-16">
      <div className="mx-auto max-w-4xl">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            Contato
          </h1>
          <p className="mt-4 text-lg text-neutral-400">
            Estou disponível para novas oportunidades e conexões profissionais
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2">
          <Card className="border-purple-900/20 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 transition-all duration-300 hover:border-purple-700/30">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="rounded-full bg-purple-500/10 p-3">
                  <Mail className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-100">Email</h3>
                  <p className="text-neutral-400">{contactInfo.email}</p>
                </div>
              </div>
              <Button
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
                onClick={() => handleContactClick('email', contactInfo.email)}
              >
                Enviar Email <Send className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-purple-900/20 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 transition-all duration-300 hover:border-purple-700/30">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="rounded-full bg-purple-500/10 p-3">
                  <Phone className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-100">Telefone</h3>
                  <p className="text-neutral-400">{contactInfo.phone}</p>
                </div>
              </div>
              <Button
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
                onClick={() => handleContactClick('phone', contactInfo.phone)}
              >
                Ligar Agora <Phone className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-purple-900/20 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 transition-all duration-300 hover:border-purple-700/30">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="rounded-full bg-purple-500/10 p-3">
                  <MessageCircle className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-100">WhatsApp</h3>
                  <p className="text-neutral-400">{contactInfo.whatsapp}</p>
                </div>
              </div>
              <Button
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
                onClick={() => handleContactClick('whatsapp', contactInfo.whatsapp)}
              >
                Enviar Mensagem <MessageCircle className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-purple-900/20 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 transition-all duration-300 hover:border-purple-700/30">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="rounded-full bg-purple-500/10 p-3">
                  <Linkedin className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-100">LinkedIn</h3>
                  <p className="text-neutral-400">Perfil Profissional</p>
                </div>
              </div>
              <Button
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
                onClick={() => handleContactClick('linkedin', contactInfo.linkedin)}
              >
                Conectar <Linkedin className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Location and Quick Links */}
        <div className="grid gap-6 sm:grid-cols-2">
          <Card className="border-purple-900/20 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <MapPin className="h-8 w-8 text-purple-400" />
                <div>
                  <h3 className="text-lg font-semibold text-purple-100">Localização</h3>
                  <p className="text-neutral-400">{contactInfo.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            <Link href="/comercio">
              <Button
                variant="outline"
                className="w-full border-purple-700 text-purple-300 hover:border-purple-500"
              >
                <Briefcase className="mr-2 h-4 w-4" /> Ver Experiência
              </Button>
            </Link>
            <Link href="/curriculo.pdf" target="_blank">
              <Button
                variant="outline"
                className="w-full border-purple-700 text-purple-300 hover:border-purple-500"
              >
                <FileText className="mr-2 h-4 w-4" /> Baixar Currículo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
