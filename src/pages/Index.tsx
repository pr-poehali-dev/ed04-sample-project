import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      title: 'Экологические услуги',
      description: 'Комплексные решения по охране окружающей среды',
      icon: 'Leaf'
    },
    {
      title: 'Обращение с отходами',
      description: 'Профессиональная переработка и утилизация',
      icon: 'Recycle'
    },
    {
      title: 'Экологический аудит',
      description: 'Оценка воздействия на окружающую среду',
      icon: 'ClipboardCheck'
    },
    {
      title: 'Мониторинг',
      description: 'Контроль экологического состояния',
      icon: 'Activity'
    },
    {
      title: 'Консультации',
      description: 'Экспертные консультации по экологии',
      icon: 'MessageSquare'
    },
    {
      title: 'Лицензирование',
      description: 'Помощь в получении экологических разрешений',
      icon: 'FileCheck'
    }
  ];

  const advantages = [
    {
      number: '15+',
      text: 'лет опыта',
      icon: 'Calendar'
    },
    {
      number: '500+',
      text: 'выполненных проектов',
      icon: 'CheckCircle'
    },
    {
      number: '24/7',
      text: 'техническая поддержка',
      icon: 'Clock'
    },
    {
      number: '100%',
      text: 'соответствие требованиям',
      icon: 'Shield'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 1000\"><polygon fill=\"%23ffffff05\" points=\"0,1000 1000,0 1000,1000\"/></svg>')] bg-cover"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Экологические решения
              <span className="block text-accent-foreground">для вашего бизнеса</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Обеспечиваем полное соответствие экологическим требованиям 
              и помогаем создать устойчивое будущее
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3">
                <Icon name="Phone" className="mr-2" size={20} />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
                <Icon name="FileText" className="mr-2" size={20} />
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Предоставляем комплексные экологические услуги для предприятий всех отраслей
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-md group">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} className="text-primary" size={36} />
                  </div>
                  <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Почему выбирают нас</h2>
            <p className="text-xl text-gray-600">
              Цифры, которые говорят о нашем профессионализме
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon name={advantage.icon as any} className="text-primary" size={36} />
                </div>
                <div className="text-4xl font-bold text-primary mb-3">{advantage.number}</div>
                <p className="text-gray-600 text-lg">{advantage.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Лицензии и сертификаты</h2>
            <p className="text-xl text-gray-600">
              Все наши услуги сертифицированы и соответствуют требованиям законодательства
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'Лицензия на обращение с отходами',
              'Сертификат экологического менеджмента',
              'Аккредитация лаборатории'
            ].map((title, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-6 flex items-center justify-center">
                    <Icon name="Award" className="text-primary" size={64} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{title}</h3>
                  <p className="text-gray-600 text-center">
                    Официальный документ, подтверждающий право на осуществление деятельности
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">О нашей компании</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Мы являемся ведущей экологической компанией с многолетним опытом работы 
                  в сфере охраны окружающей среды и обращения с отходами.
                </p>
                <p>
                  Наша команда состоит из высококвалифицированных специалистов, которые 
                  помогают предприятиям соблюдать экологические требования и внедрять 
                  современные технологии природопользования.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle2" className="text-primary" size={24} />
                  <span className="text-lg">Полное сопровождение проектов</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle2" className="text-primary" size={24} />
                  <span className="text-lg">Собственная аккредитованная лаборатория</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle2" className="text-primary" size={24} />
                  <span className="text-lg">Квалифицированные специалисты</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 h-96 flex items-center justify-center">
              <Icon name="Building2" className="text-primary" size={120} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Нужна экологическая консультация?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Свяжитесь с нами сегодня, и наши эксперты помогут решить любые вопросы 
            в области экологии и природопользования
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3">
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
              <Icon name="Mail" className="mr-2" size={20} />
              Написать письмо
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;