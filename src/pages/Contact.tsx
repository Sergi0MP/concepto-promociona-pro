import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    nit: '',
    cantidad: '',
    mensaje: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'f029a595-ea4d-4696-99f9-c91697da1241', // ✅ Tu Access Key
          subject: `Nueva Cotización - ${formData.nombre}`,
          from_name: formData.nombre,
          email: formData.email,
          empresa: formData.empresa,
          telefono: formData.telefono,
          nit: formData.nit || 'No proporcionado',
          cantidad: formData.cantidad,
          mensaje: formData.mensaje,
        })
      });

      const result = await response.json();

      if (result.success) {
        toast.success("¡Cotización enviada exitosamente! Le responderemos en 24 horas.");
        setFormData({
          nombre: '',
          empresa: '',
          email: '',
          telefono: '',
          nit: '',
          cantidad: '',
          mensaje: ''
        });
      } else {
        throw new Error('Error en el envío');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("Hubo un error. Por favor intente nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4 text-center">
            Solicitar Cotización
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            Respuesta en 24 horas. Comparta sus necesidades y le ayudaremos con la mejor solución.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">info@conceptocreativo.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">Teléfono</h3>
                <p className="text-sm text-muted-foreground">+57 300 123 4567</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">Ubicación</h3>
                <p className="text-sm text-muted-foreground">Bogotá, Colombia</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="pt-8 pb-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nombre completo</label>
                    <Input 
                      required 
                      name="nombre"
                      placeholder="Juan Pérez"
                      value={formData.nombre}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Empresa</label>
                    <Input 
                      required 
                      name="empresa"
                      placeholder="Mi Empresa S.A.S"
                      value={formData.empresa}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input 
                      required 
                      type="email"
                      name="email"
                      placeholder="juan@empresa.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Teléfono</label>
                    <Input 
                      required 
                      type="tel"
                      name="telefono"
                      placeholder="+57 300 123 4567"
                      value={formData.telefono}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">NIT/RUT (opcional)</label>
                    <Input 
                      name="nit"
                      placeholder="900123456-7"
                      value={formData.nit}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Cantidad estimada</label>
                    <Input 
                      type="number"
                      name="cantidad"
                      placeholder="100"
                      min="1"
                      required
                      value={formData.cantidad}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Mensaje / Especificaciones</label>
                  <Textarea 
                    required
                    name="mensaje"
                    placeholder="Describa el producto que necesita, colores, opciones de personalización, fecha de entrega deseada..."
                    className="min-h-32"
                    value={formData.mensaje}
                    onChange={handleChange}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  disabled={isLoading}
                >
                  {isLoading ? 'Enviando...' : 'Enviar Solicitud de Cotización'}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Al enviar este formulario, acepta que nos contactemos para procesar su cotización.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Contact;

