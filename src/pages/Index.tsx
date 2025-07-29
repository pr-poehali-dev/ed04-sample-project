import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      title: 'Консультации',
      description: 'Профессиональные консультации по развитию бизнеса',
      icon: 'Users'
    },
    {
      title: 'Аналитика',
      description: 'Глубокий анализ и исследование рынка',
      icon: 'BarChart3'
    },
    {
      title: 'Решения',
      description: 'Индивидуальные решения для вашего бизнеса',
      icon: 'Lightbulb'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/img/136d94f8-1266-42bb-8eec-30df283d232f.jpg)' }}
        />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Ваш Надежный Партнер в Бизнесе
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Мы предоставляем качественные услуги и инновационные решения для развития вашего бизнеса
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Узнать больше
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Наши услуги
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши Услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Предлагаем широкий спектр профессиональных услуг для развития вашего бизнеса
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Лицензии и Сертификаты</h2>
            <p className="text-xl text-gray-600">
              Мы работаем в соответствии с высокими стандартами качества
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img 
                    src="/img/fed5da41-854d-4231-87da-e4d76f4f67c2.jpg" 
                    alt={`Сертификат ${item}`}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">Сертификат качества {item}</h3>
                  <p className="text-gray-600">Подтверждение соответствия международным стандартам</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готовы Начать Сотрудничество?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня и узнайте, как мы можем помочь развитию вашего бизнеса
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Связаться с нами
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;