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
      title: 'Адрес',
      value: 'Москва, ул. Примерная, 123',
      icon: 'MapPin'
    },
    {
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      icon: 'Phone'
    },
    {
      title: 'Email',
      value: 'info@company.ru',
      icon: 'Mail'
    },
    {
      title: 'Время работы',
      value: 'Пн-Пт: 9:00 - 18:00',
      icon: 'Clock'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Свяжитесь с Нами</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Мы всегда готовы ответить на ваши вопросы и обсудить возможности сотрудничества
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Отправить Сообщение</CardTitle>
                <p className="text-gray-600">Заполните форму, и мы свяжемся с вами в ближайшее время</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Имя</Label>
                    <Input id="firstName" placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Фамилия</Label>
                    <Input id="lastName" placeholder="Ваша фамилия" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (000) 000-00-00" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Тема</Label>
                  <Input id="subject" placeholder="Тема сообщения" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Расскажите подробнее о ваших потребностях..."
                    rows={6}
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить Сообщение
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Контактная Информация</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Мы находимся в центре Москвы и всегда готовы к личным встречам. 
                  Также вы можете связаться с нами любым удобным способом.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon name={info.icon as any} className="text-primary" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{info.title}</h3>
                          <p className="text-gray-600">{info.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Icon name="MapPin" className="text-gray-400 mx-auto mb-2" size={48} />
                      <p className="text-gray-500">Карта будет здесь</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Часто Задаваемые Вопросы</h2>
            <p className="text-xl text-gray-600">Ответы на популярные вопросы наших клиентов</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Как быстро вы отвечаете на запросы?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Мы стараемся отвечать на все запросы в течение 2-4 часов в рабочее время. 
                  Срочные вопросы обрабатываются в приоритетном порядке.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Предоставляете ли вы консультации?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Да, мы предоставляем бесплатные первичные консультации для новых клиентов. 
                  Это поможет определить ваши потребности и наши возможности.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Какие формы оплаты вы принимаете?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Мы работаем как с физическими, так и с юридическими лицами. 
                  Принимаем оплату по безналичному расчету и банковскими картами.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Есть ли у вас гарантии на услуги?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Да, мы предоставляем гарантию качества на все наши услуги. 
                  Условия гарантии обсуждаются индивидуально для каждого проекта.
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