import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const team = [
    {
      name: 'Иван Петров',
      position: 'Генеральный директор',
      experience: '15+ лет опыта',
      icon: 'User'
    },
    {
      name: 'Мария Сидорова', 
      position: 'Директор по развитию',
      experience: '12+ лет опыта',
      icon: 'User'
    },
    {
      name: 'Алексей Козлов',
      position: 'Технический директор',
      experience: '10+ лет опыта', 
      icon: 'User'
    }
  ];

  const achievements = [
    {
      number: '500+',
      text: 'Довольных клиентов',
      icon: 'Users'
    },
    {
      number: '15+',
      text: 'Лет на рынке',
      icon: 'Calendar'
    },
    {
      number: '1000+',
      text: 'Успешных проектов',
      icon: 'Award'
    },
    {
      number: '24/7',
      text: 'Поддержка клиентов',
      icon: 'Clock'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">О Нашей Компании</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Мы являемся ведущей компанией в своей области с многолетним опытом работы 
            и репутацией надежного партнера
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Наша История</h2>
              <p className="text-lg text-gray-600 mb-6">
                Компания была основана в 2009 году с целью предоставления качественных 
                услуг и инновационных решений для бизнеса. За годы работы мы накопили 
                богатый опыт и сформировали команду высококвалифицированных специалистов.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Наша миссия - помогать компаниям достигать успеха через внедрение современных 
                технологий и эффективных бизнес-процессов. Мы гордимся долгосрочными 
                отношениями с нашими клиентами и стремимся превосходить их ожидания.
              </p>
              <div className="flex items-center space-x-4">
                <Icon name="Award" className="text-primary" size={24} />
                <span className="text-lg font-semibold text-gray-900">
                  Сертифицированные специалисты
                </span>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Наши Ценности</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Качество</h4>
                    <p className="text-gray-600">Высокие стандарты во всем</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Надежность</h4>
                    <p className="text-gray-600">Соблюдение всех обязательств</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Инновации</h4>
                    <p className="text-gray-600">Современные технологии</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши Достижения</h2>
            <p className="text-xl text-gray-600">Цифры, которые говорят о нашем успехе</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={achievement.icon as any} className="text-primary" size={32} />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                  <p className="text-gray-600">{achievement.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наша Команда</h2>
            <p className="text-xl text-gray-600">Опытные профессионалы в своей области</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={member.icon as any} className="text-primary" size={40} />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.position}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;