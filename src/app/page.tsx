import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-bold text-xl">Seu Nome</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm hover:text-blue-500 transition-colors">Início</a>
            <a href="#projetos" className="text-sm hover:text-blue-500 transition-colors">Projetos</a>
            <a href="#skills" className="text-sm hover:text-blue-500 transition-colors">Habilidades</a>
            <a href="#contato" className="text-sm hover:text-blue-500 transition-colors">Contato</a>
            <ThemeToggle />
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <span className="sr-only">Abrir menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container flex flex-col items-center justify-center space-y-8 pt-32 pb-40 text-center">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Desenvolvedor Full Stack
            <br />
            <span className="text-blue-500">& Arquiteto de Software</span>
          </h1>
          
          <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed">
            Transformando ideias em soluções robustas e escaláveis.
            <br />
            Especializado em arquiteturas modernas e desenvolvimento ágil.
          </p>
        </div>

        <div className="flex flex-col gap-4 min-[400px]:flex-row">
          <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-lg px-8">
            Ver Projetos
          </Button>
          <Button variant="outline" size="lg" className="rounded-full border-blue-600 text-blue-600 hover:bg-blue-600/10 text-lg px-8">
            Contato
          </Button>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Features Section */}
      <section className="container py-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Recursos Principais
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Nova Seção - Skills */}
      <section className="container py-12 bg-secondary/10">
        <h2 className="text-3xl font-bold text-center mb-12">Habilidades Técnicas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skillCategories.map((category, i) => (
            <div key={i} className="space-y-4">
              <h3 className="font-semibold text-xl text-primary">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <Badge key={j} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nova Seção - Projetos */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Projetos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Card key={i} className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="aspect-video relative mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, j) => (
                    <Badge key={j} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24 space-y-8">
        <div className="bg-primary/5 rounded-3xl p-8 md:p-16 text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Pronto para Começar?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-[600px] mx-auto">
            Junte-se a milhares de usuários que já estão transformando seus negócios
          </p>
          <Button size="lg" className="rounded-full">
            Comece Gratuitamente
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container py-12 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Image
              src="/next.svg"
              alt="Logo"
              width={100}
              height={24}
              className="dark:invert"
            />
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-sm hover:underline">
              Sobre
            </a>
            <a href="#" className="text-sm hover:underline">
              Contato
            </a>
            <a href="#" className="text-sm hover:underline">
              Termos
            </a>
            <a href="#" className="text-sm hover:underline">
              Privacidade
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    title: "Fácil Integração",
    description: "Configure em minutos com nossa API intuitiva e documentação completa."
  },
  {
    title: "Performance Otimizada",
    description: "Garanta velocidade e eficiência com nossa infraestrutura robusta."
  },
  {
    title: "Suporte 24/7",
    description: "Nossa equipe está sempre disponível para ajudar você em qualquer situação."
  }
];

const skillCategories = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Python", "Java", "PostgreSQL", "MongoDB"]
  },
  {
    name: "DevOps",
    skills: ["Docker", "AWS", "CI/CD", "Kubernetes", "Linux"]
  },
  {
    name: "Ferramentas",
    skills: ["Git", "VS Code", "Jira", "Figma", "Postman"]
  }
];

const projects = [
  {
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com painel administrativo e análise de dados.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS"]
  },
  {
    title: "Sistema de Gestão",
    description: "Sistema ERP para gestão empresarial com múltiplos módulos integrados.",
    image: "/projects/erp.jpg",
    technologies: ["React", "Java Spring", "Docker", "MongoDB"]
  },
  {
    title: "App de Delivery",
    description: "Aplicativo mobile para delivery com rastreamento em tempo real.",
    image: "/projects/delivery.jpg",
    technologies: ["React Native", "Node.js", "Socket.io", "Redis"]
  }
];
