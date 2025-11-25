import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
// Substituímos Textarea/Checkbox por elementos nativos estilizados
import { Label } from "./ui/label";
import { Card, CardContent } from "./ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const errors: string[] = [];
    if (!formData.name.trim()) errors.push("Nome completo é obrigatório.");
    if (!formData.email.trim()) errors.push("Email é obrigatório.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.push("Formato de email inválido.");
    if (!formData.phone.trim()) errors.push("Telefone é obrigatório.");
    if (!formData.message.trim()) errors.push("Mensagem é obrigatória.");
    if (!formData.consent) errors.push("É necessário aceitar a política de privacidade.");
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (errors.length) {
      toast({ title: "Verifique os dados", description: errors.join(" "), variant: "destructive" });
      return;
    }
    setIsLoading(true);
    try {
      const payload = {
        full_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        consent: formData.consent,
      };
      const res = await fetch("http://gotecnologia.com:9003/contact/messages", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        credentials: "omit",
        mode: "cors",
      });
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Falha ao enviar mensagem (status ${res.status}).`);
      }
      toast({ title: "Mensagem enviada!", description: "Entraremos em contato em breve." });
      setFormData({ name: "", email: "", phone: "", message: "", consent: false });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Tente novamente mais tarde.";
      toast({ title: "Erro ao enviar", description: message, variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className="py-20 bg-muted/30 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solicite um orçamento gratuito e descubra quanto você pode economizar com energia solar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Fale Conosco
              </h3>
              <p className="text-muted-foreground mb-8">
                Nossa equipe está pronta para atender você e apresentar a melhor solução em energia solar para seu projeto.
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <i className="bi bi-whatsapp text-primary text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                    <a
                      href="tel:+5565996961418"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      (65) 99696-1418
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a
                      href="mailto:infinitysolarvg@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      infinitysolarvg@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      Av. Ulisses Pompeu de Campos, 3241<br />
                      Centro Norte, Várzea Grande – MT
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-2">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(65) 99999-9999"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Conte-nos sobre seu projeto..."
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    id="consent"
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.currentTarget.checked })}
                    className="mt-[2px] h-4 w-4 rounded border-input text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label="Aceitar política de privacidade"
                  />
                  <Label htmlFor="consent" className="text-sm text-muted-foreground cursor-pointer">
                    Aceito receber contato e concordo com a política de privacidade
                  </Label>
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isLoading} aria-disabled={isLoading}>
                  {isLoading ? "Enviando..." : "Enviar Mensagem"}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
