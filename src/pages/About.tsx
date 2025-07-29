import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const team = [
    {
      name: 'Александр Петров',
      position: 'Генеральный директор',
      experience: 'Эколог с 20-летним стажем',
      icon: 'User'
    },
    {
      name: 'Елена Сидорова', 
      position: 'Главный инженер',
      experience: 'Специалист по охране природы',
      icon: 'User'
    },
    {
      name: 'Михаил Козлов',
      position: 'Руководитель лаборатории',
      experience: 'Кандидат химических наук',
      icon: 'User'
    }
  ];

  const values = [
    {
      title: 'Экологическая ответственность',
      description: 'Защита окружающей среды - наш главный приоритет',
      icon: 'Leaf'
    },
    {
      title: 'Профессионализм',
      description: 'Высокий уровень компетенций и непрерывное обучение',
      icon: 'Award'
    },
    {
      title: 'Инновации',
      description: 'Применение современных технологий и методов',
      icon: 'Lightbulb'
    },
    {
      title: 'Качество',
      description: 'Соответствие всем стандартам и требованиям',
      icon: 'CheckCircle'
    }
  ];

  const achievements = [
    {
      number: '20+',
      text: 'лет успешной работы',
      icon: 'Calendar'
    },
    {
      number: '1000+',
      text: 'выполненных проектов',
      icon: 'Briefcase'
    },
    {
      number: '50+',
      text: 'постоянных клиентов',
      icon: 'Users'
    },
    {
      number: '99%',
      text: 'положительных отзывов',
      icon: 'ThumbsUp'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-accent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-8">О нашей компании</h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Мы — команда профессионалов, посвятивших свою деятельность защите окружающей среды 
            и созданию экологически безопасного будущего для следующих поколений
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Наша миссия</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Обеспечить экологическую безопасность предприятий и помочь им достичь 
                  полного соответствия требованиям природоохранного законодательства.
                </p>
                <p>
                  Мы стремимся к созданию устойчивой экологической среды через внедрение 
                  инновационных технологий и комплексных решений в области охраны природы.
                </p>
                <p>
                  Наша цель — сделать экологически ответственный подход к ведению бизнеса 
                  доступным и экономически выгодным для всех предприятий.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 text-center">
              <Icon name="Target" className="text-primary mx-auto mb-6" size={80} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Наше видение</h3>
              <p className="text-gray-600 text-lg">
                Стать лидером в области экологических услуг и внести значительный вклад 
                в сохранение природных ресурсов России
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Наши ценности</h2>
            <p className="text-xl text-gray-600">
              Принципы, которыми мы руководствуемся в своей работе
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon name={value.icon as any} className="text-primary" size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Наши достижения</h2>
            <p className="text-xl text-gray-600">
              Результаты нашей работы говорят сами за себя
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon name={achievement.icon as any} className="text-primary" size={36} />
                </div>
                <div className="text-4xl font-bold text-primary mb-3">{achievement.number}</div>
                <p className="text-gray-600 text-lg">{achievement.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Наша команда</h2>
            <p className="text-xl text-gray-600">
              Опытные специалисты с глубокими знаниями в области экологии
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name={member.icon as any} className="text-primary" size={48} />
                  </div>
                  <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                  <p className="text-primary font-semibold">{member.position}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">История компании</h2>
              <p className="text-xl text-gray-600">
                Путь развития от небольшой группы энтузиастов до ведущей экологической компании
              </p>
            </div>
            
            <div className="space-y-12">
              <div className="flex items-start space-x-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Calendar" className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">2004 год - Основание</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Компания была основана группой экологов-энтузиастов с целью предоставления 
                    качественных услуг в области охраны окружающей среды. Первые проекты были 
                    связаны с экологическим аудитом промышленных предприятий.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Building" className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">2010 год - Расширение</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Открытие собственной аккредитованной лаборатории и расширение спектра услуг. 
                    Компания начала предоставлять комплексные решения по обращению с отходами 
                    и экологическому мониторингу.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Award" className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">2020 год - Признание</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Получение статуса ведущей экологической компании региона. Внедрение цифровых 
                    технологий в процессы мониторинга и отчетности. Участие в крупных федеральных 
                    экологических программах.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;