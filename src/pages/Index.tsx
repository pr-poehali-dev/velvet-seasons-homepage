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
  const [rooms, setRooms] = useState(1);

  const quarters = [
    {
      id: 'ekaterininsky',
      name: 'Квартал «Екатерининский»',
      subtitle: 'Премиальный формат',
      description: 'Изысканность классической архитектуры в сочетании с безупречным сервисом. Авторская кухня, винный погреб и приватный SPA-комплекс.',
      image: 'https://cdn.poehali.dev/projects/dfe9d619-8ec4-4627-bcaa-ba364d706b54/files/3f03bbf8-7d0f-496e-a338-ac9bc837732a.jpg',
      features: ['Винный бар', 'SPA-комплекс', 'Fine dining', 'Консьерж-сервис']
    },
    {
      id: 'family',
      name: 'Квартал «Семейный»',
      subtitle: 'Комфорт для всей семьи',
      description: 'Просторные апартаменты, детский аквапарк, анимационные программы и семейные ужины. Всё для незабываемого семейного отдыха.',
      image: 'https://cdn.poehali.dev/projects/dfe9d619-8ec4-4627-bcaa-ba364d706b54/files/ca737712-33e0-4f00-8acf-e113ab733445.jpg',
      features: ['Аквапарк', 'Детская анимация', 'Игровые зоны', 'Семейные номера']
    },
    {
      id: 'sport',
      name: 'Квартал «Спортивный»',
      subtitle: 'Активный образ жизни',
      description: 'Современный фитнес-центр, велосипедные маршруты, йога на рассвете с видом на горы. Энергия Кавказа в каждом дне.',
      image: 'https://cdn.poehali.dev/projects/dfe9d619-8ec4-4627-bcaa-ba364d706b54/files/9f0b4163-dcb4-4d87-9257-0ae659055a8c.jpg',
      features: ['Фитнес-центр', 'Горные маршруты', 'Спортивное питание', 'Персональные тренеры']
    }
  ];

  const roomTypes = [
    {
      type: 'Стандарт',
      size: '28 м²',
      price: 'от 8 500 ₽',
      image: 'https://cdn.poehali.dev/projects/dfe9d619-8ec4-4627-bcaa-ba364d706b54/files/9f0b4163-dcb4-4d87-9257-0ae659055a8c.jpg'
    },
    {
      type: 'Комфорт',
      size: '35 м²',
      price: 'от 12 000 ₽',
      image: 'https://cdn.poehali.dev/projects/dfe9d619-8ec4-4627-bcaa-ba364d706b54/files/3f03bbf8-7d0f-496e-a338-ac9bc837732a.jpg'
    },
    {
      type: 'Люкс',
      size: '45 м²',
      price: 'от 18 000 ₽',
      image: 'https://cdn.poehali.dev/projects/dfe9d619-8ec4-4627-bcaa-ba364d706b54/files/ca737712-33e0-4f00-8acf-e113ab733445.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <h1 className="text-2xl font-bold tracking-wide">БАРХАТНЫЕ СЕЗОНЫ</h1>
            <div className="hidden md:flex gap-8 text-sm">
              <a href="#quarters" className="hover:text-primary transition-colors">Кварталы</a>
              <a href="#rooms" className="hover:text-primary transition-colors">Номера</a>
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
          <Button variant="outline" size="sm">Личный кабинет</Button>
        </div>
      </nav>

      <section className="relative h-[90vh] flex items-center justify-center mt-16">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/dfe9d619-8ec4-4627-bcaa-ba364d706b54/files/9f0b4163-dcb4-4d87-9257-0ae659055a8c.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
            Город-отель премиум класса
          </h2>
          <p className="text-xl md:text-2xl mb-12 font-light opacity-90">
            Три уникальных квартала. Один высочайший стандарт сервиса
          </p>

          <Card className="max-w-5xl mx-auto bg-white shadow-2xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                <div className="md:col-span-1">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block font-semibold">Заезд</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-light">
                        <Icon name="Calendar" className="mr-2 h-4 w-4" />
                        {checkIn ? format(checkIn, 'dd.MM.yyyy', { locale: ru }) : 'Дата'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="md:col-span-1">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block font-semibold">Выезд</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <Icon name="Calendar" className="mr-2 h-4 w-4" />
                        {checkOut ? format(checkOut, 'dd.MM.yyyy', { locale: ru }) : 'Дата'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="md:col-span-1">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block font-semibold">Номера</label>
                  <Input 
                    type="number" 
                    min="1" 
                    max="10"
                    value={rooms} 
                    onChange={(e) => setRooms(parseInt(e.target.value))}
                    className="w-full font-light"
                  />
                </div>

                <div className="md:col-span-1">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block font-semibold">Гостей</label>
                  <Input 
                    type="number" 
                    min="1" 
                    max="20"
                    value={guests} 
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="w-full font-light"
                  />
                </div>

                <div className="md:col-span-1 flex items-end">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white h-10">
                    Найти номер
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-center gap-6 pt-4 border-t text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Shield" className="h-4 w-4" />
                  <span>Безопасная оплата</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="h-4 w-4" />
                  <span>Мгновенное подтверждение</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" className="h-4 w-4" />
                  <span>Поддержка 24/7</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-24 px-4 bg-muted" id="about">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
                Выберите формат своего идеального отдыха
              </h2>
              <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                «Бархатные Сезоны» — это уникальная концепция города-отеля, объединяющая три независимых квартала. 
                Каждый из них создан для определённого стиля отдыха, но все они следуют единому стандарту премиального сервиса.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Building2" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">428 номеров премиум класса</h4>
                    <p className="text-sm text-muted-foreground">От стандарта до панорамных люксов</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Первая линия в Сочи</h4>
                    <p className="text-sm text-muted-foreground">10 минут до центра, 5 минут до канатной дороги</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Star" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Персонализированный сервис</h4>
                    <p className="text-sm text-muted-foreground">Консьерж 24/7, индивидуальные программы отдыха</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90">
                Забронировать тур
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://cdn.poehali.dev/projects/dfe9d619-8ec4-4627-bcaa-ba364d706b54/files/3f03bbf8-7d0f-496e-a338-ac9bc837732a.jpg" 
                alt="Interior"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="https://cdn.poehali.dev/projects/dfe9d619-8ec4-4627-bcaa-ba364d706b54/files/ca737712-33e0-4f00-8acf-e113ab733445.jpg" 
                alt="Pool"
                className="w-full h-64 object-cover rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4" id="quarters">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary mb-4 font-semibold">Три концепции отдыха</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">Выберите свой квартал</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Каждый квартал — самостоятельный отель со своей философией и атмосферой
            </p>
          </div>

          <div className="space-y-12">
            {quarters.map((quarter, index) => (
              <Card key={quarter.id} className="overflow-hidden hover:shadow-2xl transition-shadow">
                <div className={`grid grid-cols-1 ${index % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2'} gap-0`}>
                  {index % 2 === 0 && (
                    <div className="relative h-96 md:h-full">
                      <img 
                        src={quarter.image} 
                        alt={quarter.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardContent className="p-12 flex flex-col justify-center">
                    <p className="text-sm uppercase tracking-widest text-primary mb-3 font-semibold">{quarter.subtitle}</p>
                    <h3 className="text-3xl md:text-4xl font-light mb-6">{quarter.name}</h3>
                    <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                      {quarter.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {quarter.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button className="bg-primary hover:bg-primary/90">
                        Подробнее о квартале
                      </Button>
                      <Button variant="outline">
                        Выбрать номер
                      </Button>
                    </div>
                  </CardContent>
                  {index % 2 !== 0 && (
                    <div className="relative h-96 md:h-full">
                      <img 
                        src={quarter.image} 
                        alt={quarter.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-muted" id="rooms">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary mb-4 font-semibold">Номерной фонд</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">Категории номеров</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              От комфортабельных стандартов до панорамных люксов с видом на горы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roomTypes.map((room, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.type}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-light mb-2">{room.type}</h3>
                      <p className="text-sm text-muted-foreground">{room.size}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-semibold text-primary">{room.price}</p>
                      <p className="text-xs text-muted-foreground">за ночь</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Wifi" className="h-4 w-4 text-muted-foreground" />
                      <span>Wi-Fi</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Tv" className="h-4 w-4 text-muted-foreground" />
                      <span>Smart TV</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Bath" className="h-4 w-4 text-muted-foreground" />
                      <span>Премиальная косметика</span>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Посмотреть все категории номеров
              <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary mb-4 font-semibold">Инфраструктура</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">Услуги и сервисы</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="UtensilsCrossed" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-light mb-3">Рестораны и бары</h3>
              <p className="text-muted-foreground mb-4">5 ресторанов авторской кухни, винный погреб, лобби-бар</p>
              <Button variant="link" className="text-primary">Меню ресторанов →</Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Waves" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-light mb-3">SPA & Wellness</h3>
              <p className="text-muted-foreground mb-4">Spa-комплекс площадью 2000 м², хаммам, сауны, массажные кабинеты</p>
              <Button variant="link" className="text-primary">SPA-меню →</Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Dumbbell" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-light mb-3">Спорт и активности</h3>
              <p className="text-muted-foreground mb-4">Фитнес-центр, аквапарк, теннисные корты, горные маршруты</p>
              <Button variant="link" className="text-primary">Узнать больше →</Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-primary text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">Остались вопросы?</h2>
          <p className="text-xl mb-12 opacity-90">Заполните форму, и наш менеджер свяжется с вами в течение 15 минут</p>
          
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Input placeholder="Ваше имя" className="font-light" />
                <Input placeholder="Телефон" className="font-light" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Input placeholder="Email" type="email" className="font-light" />
                <Input placeholder="Дата заезда" className="font-light" />
              </div>
              <textarea 
                placeholder="Комментарий или вопрос"
                className="w-full p-3 border rounded-lg mb-4 font-light"
                rows={4}
              />
              <Button size="lg" className="w-full bg-foreground hover:bg-foreground/90 text-white">
                Отправить заявку
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-24 px-4" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary mb-4 font-semibold">Контакты</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">Мы всегда рады гостям</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-muted h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Icon name="MapPin" className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-lg font-semibold">г. Сочи, Курортный проспект</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-light mb-6">Свяжитесь с нами</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Телефон</p>
                      <p className="text-muted-foreground">+7 (800) 123-45-67 (звонок бесплатный)</p>
                      <p className="text-muted-foreground">+7 (862) 234-56-78</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Icon name="Mail" className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="text-muted-foreground">reservations@velvet-seasons.ru</p>
                      <p className="text-muted-foreground">info@velvet-seasons.ru</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Icon name="Clock" className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Режим работы</p>
                      <p className="text-muted-foreground">Круглосуточно, 7 дней в неделю</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t">
                <h4 className="font-semibold mb-4">Кварталы комплекса:</h4>
                <div className="space-y-3 text-sm">
                  <p><span className="font-semibold">Екатерининский</span> — центральная часть, корпус А</p>
                  <p><span className="font-semibold">Семейный</span> — южное крыло, корпуса Б и В</p>
                  <p><span className="font-semibold">Спортивный</span> — северное крыло, корпус Г</p>
                </div>
              </div>

              <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                Заказать обратный звонок
                <Icon name="Phone" className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">БАРХАТНЫЕ СЕЗОНЫ</h3>
              <p className="text-sm text-white/70">Город-отель премиум класса в самом сердце Сочи</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Кварталы</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Екатерининский</li>
                <li>Семейный</li>
                <li>Спортивный</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Рестораны</li>
                <li>SPA & Wellness</li>
                <li>Конференц-залы</li>
                <li>Экскурсии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Подписаться</h4>
              <div className="flex gap-2 mb-4">
                <Input placeholder="Email" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                <Button className="bg-primary hover:bg-primary/90">
                  <Icon name="Send" className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex gap-4">
                <Icon name="Instagram" className="h-5 w-5 cursor-pointer hover:text-primary transition-colors" />
                <Icon name="Facebook" className="h-5 w-5 cursor-pointer hover:text-primary transition-colors" />
                <Icon name="Youtube" className="h-5 w-5 cursor-pointer hover:text-primary transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
            <p>© 2024 Бархатные Сезоны. Все права защищены</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Публичная оферта</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
