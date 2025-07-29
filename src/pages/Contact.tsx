import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Contact = () => {
  const contactInfo = [
    {
      title: 'Офис в Москве',
      value: 'г. Москва, ул. Экологическая, д. 15, оф. 301',
      icon: 'MapPin'
    },
    {
      title: 'Телефон горячей линии',
      value: '+7 (495) 123-45-67',
      icon: 'Phone'
    },
    {
      title: 'Электронная почта',
      value: 'info@eco-company.ru',
      icon: 'Mail'
    },
    {
      title: 'Режим работы',
      value: 'Пн-Пт: 9:00 - 18:00, Сб: 10:00 - 15:00',
      icon: 'Clock'
    }
  ];

  const services = [
    {
      title: 'Экологический аудит',
      description: 'Комплексная оценка воздействия на окружающую среду',
      icon: 'FileSearch'
    },
    {
      title: 'Обращение с отходами',
      description: 'Утилизация и переработка промышленных отходов',
      icon: 'Recycle'
    },
    {
      title: 'Лабораторные исследования',
      description: 'Анализ проб воздуха, воды и почвы',
      icon: 'FlaskConical'
    },
    {
      title: 'Экологическое сопровождение',
      description: 'Полное сопровождение проектов и получение разрешений',
      icon: 'Shield'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-accent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-8">Свяжитесь с нами</h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Готовы обсудить ваши экологические задачи и предложить оптимальные решения. 
            Наши эксперты всегда готовы помочь
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gray-50 rounded-t-lg">
                <CardTitle className="text-3xl flex items-center">
                  <Icon name="MessageSquare" className="mr-3 text-primary" size={32} />
                  Отправить заявку
                </CardTitle>
                <p className="text-gray-600 text-lg">
                  Заполните форму, и наш специалист свяжется с вами в течение часа
                </p>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-base font-medium">Имя *</Label>
                    <Input id="firstName" placeholder="Ваше имя" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-base font-medium">Фамилия *</Label>
                    <Input id="lastName" placeholder="Ваша фамилия" className="h-12" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-base font-medium">Компания</Label>
                  <Input id="company" placeholder="Название вашей компании" className="h-12" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-medium">Email *</Label>
                    <Input id="email" type="email" placeholder="your@company.ru" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-medium">Телефон *</Label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" className="h-12" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-base font-medium">Интересующая услуга</Label>
                  <Input id="service" placeholder="Экологический аудит, обращение с отходами и т.д." className="h-12" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base font-medium">Сообщение</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Опишите ваши задачи и требования подробнее..."
                    rows={6}
                    className="resize-none"
                  />
                </div>
                
                <Button className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90">
                  <Icon name="Send" className="mr-3" size={24} />
                  Отправить заявку
                </Button>
                
                <p className="text-sm text-gray-500 text-center">
                  * - обязательные поля для заполнения
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Наши контакты</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Мы работаем по всей России и готовы приехать к вам для решения любых 
                  экологических задач. Наш офис находится в Москве, но география наших 
                  проектов охватывает всю страну.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <Icon name={info.icon as any} className="text-primary" size={28} />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg mb-2">{info.title}</h3>
                          <p className="text-gray-600 text-base leading-relaxed">{info.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="overflow-hidden shadow-lg border-0">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 h-80 flex items-center justify-center">
                    <div className="text-center">
                      <Icon name="MapPin" className="text-primary mx-auto mb-4" size={64} />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Интерактивная карта</h3>
                      <p className="text-gray-600">Здесь будет отображаться наше местоположение</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Наши основные услуги</h2>
            <p className="text-xl text-gray-600">
              Полный спектр экологических услуг для вашего бизнеса
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon name={service.icon as any} className="text-primary" size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Часто задаваемые вопросы</h2>
            <p className="text-xl text-gray-600">
              Ответы на самые популярные вопросы о наших услугах
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Icon name="Clock" className="mr-3 text-primary" size={24} />
                  Как быстро вы выполняете проекты?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Сроки зависят от сложности проекта. Экспресс-анализы выполняем за 1-3 дня, 
                  комплексные экологические аудиты — за 2-4 недели. Срочные заказы 
                  обрабатываются в приоритетном порядке.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Icon name="Shield" className="mr-3 text-primary" size={24} />
                  Есть ли гарантии на ваши услуги?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Да, мы предоставляем гарантию качества на все виды работ. На результаты 
                  лабораторных исследований — 1 год, на проектные работы — 2 года. 
                  Также страхуем профессиональную ответственность.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Icon name="CreditCard" className="mr-3 text-primary" size={24} />
                  Какие способы оплаты доступны?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Работаем как с физическими, так и с юридическими лицами. Принимаем 
                  безналичный расчет, банковские карты. Возможна поэтапная оплата 
                  для крупных проектов.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Icon name="MapPin" className="mr-3 text-primary" size={24} />
                  В каких регионах вы работаете?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Основной офис находится в Москве, но мы выполняем проекты по всей России. 
                  Имеем партнеров в крупных городах. Для удаленных регионов организуем 
                  выездные работы наших специалистов.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;