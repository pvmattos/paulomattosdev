import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
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
            <span className="font-bold text-xl">Paulo Mattos</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm hover:text-blue-500 transition-colors">Home</a>
            <a href="#projetos" className="text-sm hover:text-blue-500 transition-colors">What I Do</a>
            <a href="#skills" className="text-sm hover:text-blue-500 transition-colors">Skills</a>
            <a href="#contato" className="text-sm hover:text-blue-500 transition-colors"> Get in Touch</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="container flex flex-col items-center justify-center space-y-8 pt-32 pb-40 text-center">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
          Full Stack Developer
            <br />
            <span className="text-blue-500">& Software Architect</span>
          </h1>
          
          <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed">
Turning ideas into real, robust, and scalable solutions.
            <br />
            Specialized in modern agile development architectures.
          </p>
        </div>

        <div className="flex flex-col gap-4 min-[400px]:flex-row">
        <a href="https://calendly.com/paulovsmattoss/30min">
          <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-lg px-8">
          Get in Touch
          </Button>
          </a>
          
        </div>
      </section>

      <Separator className="my-8" />

      {/* Features Section */}
      <section id="projetos" className="container py-12">
        <h2 className="text-3xl font-bold text-center mb-12">
        What I Do
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

    

      <section id="skills"  className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <Card key={i} className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="aspect-video relative mb-4">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <CardTitle>{category.name}</CardTitle>
                <CardDescription>{category.skills}</CardDescription>
              </CardHeader>
              <CardContent>
     
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tec, j) => (
                    <Badge key={j} variant="outline">
                      {tec}
                    </Badge>
                  ))}
            
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Nova Seção - Projetos }
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
*/}
      {/* CTA Section */}
      <section  id="contato"  className="container py-24 space-y-8">
        <div className="bg-primary/5 rounded-3xl p-8 md:p-16 text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Ready to start?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-[600px] mx-auto">
            Get in touch and transform your business!
          </p>
          <a href="https://calendly.com/paulovsmattoss/30min">
            <Button size="lg" className="rounded-full">
              Schedule a meeting
            </Button>
          </a>
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
          <div className="text-sm">
            Created and developed by Paulo Mattos
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    title: "Web Application Development",
    description: "I specialize in developing web applications using agile methodologies, focusing on high performance, scalability, and robustness. Expert in building large-scale, multi-regional, and multicultural applications, leveraging cutting-edge technologies such as Supabase, Xano, and n8n, integrated with no-code platforms for agile and efficient development."
  },
  {
    title: "Project Management",
    description: "Experienced in software development project management, emphasizing agile delivery and quality control. I serve as a technical lead, providing daily guidance and support to the development team."
  },
  {
    title: "Software Architecture Consulting",
    description: "Need to structure a team and a large-scale project? I help you assemble the ideal team and project timeline, ensuring high-quality standards, implementing double-check procedures at each project stage, and providing oversight from inception to final delivery."
  }
];

const skillCategories = [
  {
    name: "Frontend",
    image: "/Front-end-Development.jpeg",
    skills: ["Certified Bubble.io developer with extensive experience in web application development. Additional expertise in Weweb and FlutterFlow platform development."],
    technologies: ["Bubble.io", "Weweb", "Flutterflow", "Next.JS"]
  },
  {
    name: "Backend",
    image: "/backend-vs-frontend-2.webp",
    skills: ["Proficient in implementing comprehensive backend solutions using Supabase, Xano, and n8n. Experience with EvolutionAPI (unofficial WhatsApp API), Meta API (Facebook, Instagram, WhatsApp), Google API suite (Maps, Analytics, Ads), Resend, Mailersend, and more."],
    technologies: ["Supabase", "Xano", "Amazon AWS", "Firebase", "N8N", "EvolutionAPI", "Meta API", "Google API", "Resend", "Mailersend", "OAuth2", "More+"]
  },
  {
    name: "DevOps",
    image: "/devops.png",
    skills: ["Extensive experience in self-hosting and managing open-source applications such as Minio, Postgres, Redis, RabbitMQ, n8n, and others, enabling cost-effective deployment of high-volume data solutions."],
    technologies: ["Minio", "Postgres", "Redis", "RabbitMQ", "N8N", "Docker", "Kubernetes", "", "More+"]
  
  },
 
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
