import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const Index = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(2);

  const quarters = [
    {
      id: 'ekaterininsky',
      name: 'Екатерининский',
      subtitle: 'Для взыскательных гостей',
      description: 'Утончённая классика и безупречный сервис для тех, кто ценит роскошь в деталях',
      image: 'https://cdn.poehali.dev/projects/dfe9d619-8ec4-4627-bcaa-ba364d706b54/files/3f03bbf8-7d0f-496e-a338-ac9bc837732a.jpg',
      tags: ['Премиум', 'Гастрономия', 'SPA', 'Для пар'],
      gradient: 'from-purple-900 to-purple-600'
    },
    {
      id: 'family',
      name: 'Семейный',
      subtitle: 'Для самых важных путешествий',
      description: 'Мир, где счастливы и дети, и родители. Пространство для незабываемых семейных моментов',
      image: 'https://cdn.poehali.dev/projects/dfe9d619-8ec4-4627-bcaa-ba364d706b54/files/ca737712-33e0-4f00-8acf-e113ab733445.jpg',
      tags: ['Аквапарк', 'Анимация', 'Смежные номера', 'Детские клубы'],
      gradient: 'from-orange-500 to-pink-500'
    },
    {
      id: 'sport',
      name: 'Спортивный',
      subtitle: 'Для активных и современных',
      description: 'Энергия Кавказских гор. Динамичный отдых для тех, кто не представляет жизнь без движения',
      image: 'https://cdn.poehali.dev/projects/dfe9d619-8ec4-4627-bcaa-ba364d706b54/files/9f0b4163-dcb4-4d87-9257-0ae659055a8c.jpg',
      tags: ['У гор', 'Фитнес', 'Экстрим', 'Эко-маршруты'],
      gradient: 'from-blue-600 to-cyan-400'
    }
  ];

  const principles = [
    {
      icon: 'UserCheck',
      title: 'Персонализация',
      description: 'Выбор квартала под вашу цель отдыха'
    },
    {
      icon: 'Star',
      title: 'Единство сервиса',
      description: 'Безупречный стандарт во всех кварталах'
    },
    {
      icon: 'Sparkles',
      title: 'Детали решают всё',
      description: 'От постельного белья до организации экскурсий'
    }
  ];

  const offers = [
    {
      title: 'Раннее бронирование на лето',
      discount: '-25%',
      description: 'Успейте забронировать номер с выгодой',
      color: 'bg-gradient-to-r from-purple-600 to-purple-400'
    },
    {
      title: 'Семейный пакет',
      discount: 'Дети бесплатно',
      description: 'Размещение детей в номере родителей',
      color: 'bg-gradient-to-r from-orange-500 to-pink-500'
    },
    {
      title: 'SPA-детокс неделя',
      discount: 'От 45 000₽',
      description: 'Программа оздоровления в Екатерининском',
      color: 'bg-gradient-to-r from-indigo-600 to-purple-500'
    }
  ];

  const steps = [
    {
      icon: 'MapPin',
      title: 'Выберите квартал и номер',
      description: 'Определите стиль отдыха'
    },
    {
      icon: 'Calendar',
      title: 'Оформите заявку онлайн',
      description: 'Быстрое бронирование за 2 минуты'
    },
    {
      icon: 'CheckCircle',
      title: 'Получите подтверждение',
      description: 'Мгновенное подтверждение и инструкции'
    }
  ];

  const reviews = [
    {
      text: 'Отдыхали в Екатерининском — это настоящий уровень! Изысканная атмосфера, безупречный сервис.',
      author: 'Анна',
      city: 'Москва',
      quarter: 'Екатерининский',
      rating: 5
    },
    {
      text: 'Семейный квартал — просто спасение для родителей. Дети счастливы, а мы наконец-то отдохнули!',
      author: 'Игорь',
      city: 'Санкт-Петербург',
      quarter: 'Семейный',
      rating: 5
    },
    {
      text: 'Спортивный квартал превзошёл ожидания. Виды на горы, современный фитнес-центр — всё на высоте!',
      author: 'Михаил',
      city: 'Екатеринбург',
      quarter: 'Спортивный',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/dfe9d619-8ec4-4627-bcaa-ba364d706b54/files/9f0b4163-dcb4-4d87-9257-0ae659055a8c.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="mb-8 inline-block">
            <h1 className="text-7xl md:text-8xl font-bold tracking-tight mb-2">
              Бархатные Сезоны
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold mb-6 animate-fade-in">
            Откройте свой идеальный отдых в Сочи
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-white/90 font-light">
            Три уникальных квартала, одна безупречная философия гостеприимства
          </p>

          <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-1">
                  <label className="text-sm font-medium text-foreground/70 mb-2 block">Заезд</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <Icon name="Calendar" className="mr-2 h-4 w-4" />
                        {checkIn ? format(checkIn, 'dd MMM', { locale: ru }) : 'Выберите дату'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="md:col-span-1">
                  <label className="text-sm font-medium text-foreground/70 mb-2 block">Выезд</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <Icon name="Calendar" className="mr-2 h-4 w-4" />
                        {checkOut ? format(checkOut, 'dd MMM', { locale: ru }) : 'Выберите дату'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="md:col-span-1">
                  <label className="text-sm font-medium text-foreground/70 mb-2 block">Гостей</label>
                  <Input 
                    type="number" 
                    min="1" 
                    value={guests} 
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div className="md:col-span-1 flex items-end">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-semibold h-10">
                    Найти номер
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="h-8 w-8 text-white" />
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Выберите свой бархатный сезон
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Три независимых отеля в одной концепции. Найдите отдых, который говорит именно с вами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quarters.map((quarter, index) => (
              <Card 
                key={quarter.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={quarter.image} 
                    alt={quarter.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${quarter.gradient} opacity-60 group-hover:opacity-70 transition-opacity`} />
                  <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
                    {quarter.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-3xl font-bold mb-2">{quarter.name}</h3>
                  <p className="text-sm font-semibold text-primary mb-4">{quarter.subtitle}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {quarter.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {quarter.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-muted text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button className="w-full group/btn" variant="outline">
                    Исследовать квартал
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Философия идеального отдыха
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Мы объединили три независимых отеля в одну экосистему, чтобы каждый гость нашёл своё — 
              от уединённой роскоши до бурного веселья. Наш принцип: внимание к деталям, которые создают ваш идеальный день
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {principles.map((principle, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon name={principle.icon} className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{principle.title}</h3>
                <p className="text-white/80">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Моменты, которые остаются с вами
            </h2>
            <p className="text-xl text-muted-foreground">
              Вдохновитесь атмосферой наших кварталов
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {quarters.map((quarter) => (
              <div 
                key={quarter.id}
                className="relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img 
                  src={quarter.image} 
                  alt={quarter.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold text-lg">{quarter.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="group">
              Смотреть все фото и видео
              <Icon name="Image" className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ваш выгодный сезон
            </h2>
            <p className="text-xl text-muted-foreground">
              Специальные предложения для незабываемого отдыха
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`${offer.color} p-8 text-white`}>
                  <div className="text-4xl font-bold mb-2">{offer.discount}</div>
                  <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6">{offer.description}</p>
                  <Button className="w-full">
                    Узнать подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Начните отдых в три шага
            </h2>
            <p className="text-xl text-muted-foreground">
              Простой процесс бронирования
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
                    <Icon name={step.icon} className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600">
              Подобрать номер
              <Icon name="Search" className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Гости о своих «Бархатных сезонах»
            </h2>
            <p className="text-xl text-muted-foreground">
              Реальные отзывы наших гостей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{review.author}</p>
                      <p className="text-sm text-muted-foreground">{review.city}</p>
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {review.quarter}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ждём вас в Сочи
            </h2>
            <p className="text-xl text-muted-foreground">
              Город-отель «Бархатные Сезоны»
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="bg-muted rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <Icon name="MapPin" className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-lg font-semibold">Интерактивная карта</p>
                <p className="text-muted-foreground">Все три квартала на карте</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-muted-foreground">г. Сочи, курортный комплекс «Бархатные Сезоны»</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Icon name="Phone" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Единый call-центр</p>
                      <p className="text-muted-foreground">+7 (800) 123-45-67</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Icon name="Mail" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">info@velvet-seasons.ru</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Icon name="Clock" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Режим работы</p>
                      <p className="text-muted-foreground">Круглосуточно, без выходных</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold mb-4">Расположение кварталов:</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-600 rounded-full" />
                    <p className="text-sm"><span className="font-semibold">Екатерининский</span> — центральная часть комплекса</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full" />
                    <p className="text-sm"><span className="font-semibold">Семейный</span> — рядом с аквапарком и пляжем</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full" />
                    <p className="text-sm"><span className="font-semibold">Спортивный</span> — 5 минут до канатной дороги</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600">
                Связаться с нами
                <Icon name="Send" className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Бархатные Сезоны</h2>
          <p className="text-white/80 mb-6">Ваш идеальный отдых в Сочи</p>
          <div className="flex justify-center gap-6 mb-6">
            <Icon name="Instagram" className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform" />
            <Icon name="Facebook" className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform" />
            <Icon name="Youtube" className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform" />
          </div>
          <p className="text-sm text-white/60">© 2024 Бархатные Сезоны. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
