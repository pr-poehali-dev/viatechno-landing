import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      <Hero />
      <Problem />
      <Synergy />
      <Products />
      <Financials />
      <Roadmap />
      <InvestorForm />
      <Footer />
    </div>
  );
};

const Hero = () => {
  const [investment, setInvestment] = useState(0);
  const [share, setShare] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    const animateNumber = (target: number, setter: (val: number) => void, duration: number = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    animateNumber(50, setInvestment);
    animateNumber(49, setShare);
    animateNumber(400, setRevenue);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F2C] via-[#2A2F3C] to-[#1A1F2C]" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F97316] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F97316] rounded-full blur-[150px]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center animate-fade-in">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-[#F97316]/10 border border-[#F97316]/30 rounded-full">
          <Icon name="Factory" size={20} className="text-[#F97316]" />
          <span className="text-[#F97316] font-medium">Действующее производство</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
          ВИА-Техно: Запуск производства<br />вездеходов на базе завода
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Инвестируйте 50 млн ₽ за 49%. Выход на 10 млн ₽/мес через 90 дней
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="bg-[#2A2F3C]/50 backdrop-blur-sm border border-[#F97316]/20 rounded-xl p-6">
            <div className="text-5xl font-bold text-[#F97316] mb-2">{investment}</div>
            <div className="text-gray-400">млн ₽ инвестиций</div>
          </div>
          <div className="bg-[#2A2F3C]/50 backdrop-blur-sm border border-[#F97316]/20 rounded-xl p-6">
            <div className="text-5xl font-bold text-[#F97316] mb-2">{share}%</div>
            <div className="text-gray-400">доля компании</div>
          </div>
          <div className="bg-[#2A2F3C]/50 backdrop-blur-sm border border-[#F97316]/20 rounded-xl p-6">
            <div className="text-5xl font-bold text-[#F97316] mb-2">{revenue}</div>
            <div className="text-gray-400">млн ₽ выручка год 2</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-[#F97316] hover:bg-[#ea6a0f] text-white px-8 py-6 text-lg">
            <Icon name="Download" size={20} className="mr-2" />
            Скачать меморандум
          </Button>
          <Button size="lg" variant="outline" className="border-[#F97316] text-[#F97316] hover:bg-[#F97316]/10 px-8 py-6 text-lg">
            <Icon name="Calendar" size={20} className="mr-2" />
            Запись на демо-тур
          </Button>
        </div>
      </div>
    </section>
  );
};

const Problem = () => {
  return (
    <section className="py-24 bg-[#141821]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <div className="text-[#F97316] font-semibold mb-4 flex items-center gap-2">
              <Icon name="Target" size={24} />
              ПРОБЛЕМА И РЕШЕНИЕ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Рынок вездеходов требует изменений
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} className="text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Завышенные цены</h3>
                  <p className="text-gray-400">Заводские вездеходы стоят от 2 млн ₽ — недоступны для большинства</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                  <Icon name="AlertTriangle" size={24} className="text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Низкое качество</h3>
                  <p className="text-gray-400">Гаражные сборки дёшевы, но ненадёжны и без гарантий</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-gradient-to-br from-[#F97316]/20 to-[#F97316]/5 border-[#F97316]/30 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-[#F97316] rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Наше решение</h3>
              </div>
              <p className="text-gray-300 text-lg mb-6">
                Заводское качество по цене от <span className="text-[#F97316] font-bold">600 тыс. ₽</span>
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <Icon name="CheckCircle2" size={20} className="text-[#F97316]" />
                  Сертифицированное производство
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Icon name="CheckCircle2" size={20} className="text-[#F97316]" />
                  Контроль качества на каждом этапе
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Icon name="CheckCircle2" size={20} className="text-[#F97316]" />
                  Официальная гарантия и сервис
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Icon name="CheckCircle2" size={20} className="text-[#F97316]" />
                  Доступная цена для массового рынка
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const Synergy = () => {
  const features = [
    { icon: "Factory", title: "Действующее производство", desc: "Завод станков с 20-летним опытом" },
    { icon: "Users", title: "Готовая команда", desc: "Квалифицированные специалисты на месте" },
    { icon: "Truck", title: "Логистика", desc: "Налаженные каналы поставок" },
    { icon: "Award", title: "Контроль качества", desc: "Сертификация и стандарты ISO" }
  ];

  return (
    <section className="py-24 bg-[#1A1F2C]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-[#F97316] font-semibold mb-4 flex items-center justify-center gap-2">
            <Icon name="Sparkles" size={24} />
            ПРОИЗВОДСТВЕННАЯ СИНЕРГИЯ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Мы не строим с нуля.<br />Мы расширяем действующее производство
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Вся инфраструктура, команда и процессы уже работают. Быстрый запуск без рисков стартапа
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-[#2A2F3C]/50 border-[#8E9196]/20 p-6 hover:border-[#F97316]/50 transition-all duration-300 hover:transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-[#F97316]/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name={feature.icon as any} size={28} className="text-[#F97316]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Products = () => {
  const products = [
    {
      name: "ВИА-БАЗИС",
      price: "600 тыс. ₽",
      description: "Шасси для доработки под ваши задачи",
      features: ["Рама и подвеска", "Двигатель 15 л.с.", "Гарантия 1 год", "Документы в комплекте"],
      icon: "Wrench"
    },
    {
      name: "ВИА-СТАНДАРТ",
      price: "950 тыс. ₽",
      description: "Готовый вездеход для работы и отдыха",
      features: ["Полная комплектация", "Двигатель 25 л.с.", "Гарантия 2 года", "Сервисное обслуживание"],
      icon: "Truck",
      featured: true
    },
    {
      name: "ВИА-ПРОФИ",
      price: "1.4 млн ₽",
      description: "Для профессионалов и экстремальных условий",
      features: ["Усиленная конструкция", "Двигатель 40 л.с.", "Гарантия 3 года", "Расширенная комплектация"],
      icon: "Zap"
    }
  ];

  return (
    <section className="py-24 bg-[#141821]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-[#F97316] font-semibold mb-4 flex items-center justify-center gap-2">
            <Icon name="Package" size={24} />
            ЛИНЕЙКА ПРОДУКТОВ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Три модели на любой бюджет
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index}
              className={`p-8 ${product.featured 
                ? 'bg-gradient-to-br from-[#F97316] to-[#ea6a0f] border-[#F97316] transform scale-105' 
                : 'bg-[#2A2F3C]/50 border-[#8E9196]/20'} hover:transform hover:scale-110 transition-all duration-300 animate-slide-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`w-16 h-16 ${product.featured ? 'bg-white/20' : 'bg-[#F97316]/10'} rounded-lg flex items-center justify-center mb-6`}>
                <Icon name={product.icon as any} size={32} className={product.featured ? 'text-white' : 'text-[#F97316]'} />
              </div>
              
              <h3 className={`text-2xl font-bold mb-2 ${product.featured ? 'text-white' : 'text-white'}`}>
                {product.name}
              </h3>
              
              <div className={`text-4xl font-bold mb-4 ${product.featured ? 'text-white' : 'text-[#F97316]'}`}>
                {product.price}
              </div>
              
              <p className={`mb-6 ${product.featured ? 'text-white/90' : 'text-gray-400'}`}>
                {product.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {product.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-center gap-3 ${product.featured ? 'text-white' : 'text-gray-300'}`}>
                    <Icon name="CheckCircle2" size={20} className={product.featured ? 'text-white' : 'text-[#F97316]'} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${product.featured 
                  ? 'bg-white text-[#F97316] hover:bg-gray-100' 
                  : 'bg-[#F97316] text-white hover:bg-[#ea6a0f]'}`}
              >
                Запросить детали
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Financials = () => {
  return (
    <section className="py-24 bg-[#1A1F2C]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-[#F97316] font-semibold mb-4 flex items-center justify-center gap-2">
            <Icon name="TrendingUp" size={24} />
            ФИНАНСОВЫЕ ПРОГНОЗЫ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Прозрачная экономика проекта
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="bg-[#2A2F3C]/50 border-[#8E9196]/20 p-8 animate-slide-up">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Icon name="LineChart" size={28} className="text-[#F97316]" />
              Рост выручки
            </h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Месяц 3</span>
                <span className="text-2xl font-bold text-[#F97316]">10 млн ₽</span>
              </div>
              <div className="h-2 bg-[#1A1F2C] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#F97316] to-[#ea6a0f] w-[25%]"></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400">Год 1</span>
                <span className="text-2xl font-bold text-[#F97316]">120 млн ₽</span>
              </div>
              <div className="h-2 bg-[#1A1F2C] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#F97316] to-[#ea6a0f] w-[50%]"></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400">Год 2</span>
                <span className="text-2xl font-bold text-[#F97316]">300 млн ₽</span>
              </div>
              <div className="h-2 bg-[#1A1F2C] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#F97316] to-[#ea6a0f] w-[75%]"></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400">Год 3</span>
                <span className="text-2xl font-bold text-[#F97316]">400 млн ₽</span>
              </div>
              <div className="h-2 bg-[#1A1F2C] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#F97316] to-[#ea6a0f] w-[100%]"></div>
              </div>
            </div>
          </Card>

          <Card className="bg-[#2A2F3C]/50 border-[#8E9196]/20 p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Icon name="PieChart" size={28} className="text-[#F97316]" />
              Распределение инвестиций
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">Комплектующие</span>
                  <span className="text-xl font-bold text-white">40%</span>
                </div>
                <div className="h-3 bg-[#1A1F2C] rounded-full overflow-hidden">
                  <div className="h-full bg-[#F97316] w-[40%]"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">Производственная линия</span>
                  <span className="text-xl font-bold text-white">30%</span>
                </div>
                <div className="h-3 bg-[#1A1F2C] rounded-full overflow-hidden">
                  <div className="h-full bg-[#ea6a0f] w-[30%]"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">Маркетинг</span>
                  <span className="text-xl font-bold text-white">20%</span>
                </div>
                <div className="h-3 bg-[#1A1F2C] rounded-full overflow-hidden">
                  <div className="h-full bg-[#ff8c3a] w-[20%]"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">Операционные расходы</span>
                  <span className="text-xl font-bold text-white">10%</span>
                </div>
                <div className="h-3 bg-[#1A1F2C] rounded-full overflow-hidden">
                  <div className="h-full bg-[#ffa154] w-[10%]"></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

const Roadmap = () => {
  const milestones = [
    { quarter: "Кв. 1", title: "Подготовка", items: ["Прототип вездехода", "Сертификация", "Запуск маркетинга"], icon: "Rocket" },
    { quarter: "Кв. 2", title: "Запуск", items: ["Первые 20 продаж", "Обратная связь", "Оптимизация"], icon: "Play" },
    { quarter: "Кв. 3-4", title: "Рост", items: ["10 млн ₽/мес", "Расширение линейки", "Новые регионы"], icon: "TrendingUp" },
    { quarter: "Год 2", title: "Масштабирование", items: ["400 млн ₽/год", "Экспорт", "Новые модели"], icon: "Target" }
  ];

  return (
    <section className="py-24 bg-[#141821]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-[#F97316] font-semibold mb-4 flex items-center justify-center gap-2">
            <Icon name="Calendar" size={24} />
            ДОРОЖНАЯ КАРТА
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Путь к успеху за 2 года
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="bg-[#2A2F3C]/50 border-[#8E9196]/20 p-6 hover:border-[#F97316]/50 transition-all duration-300">
                <div className="w-14 h-14 bg-[#F97316]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={milestone.icon as any} size={28} className="text-[#F97316]" />
                </div>
                
                <div className="text-[#F97316] font-bold text-lg mb-2">{milestone.quarter}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{milestone.title}</h3>
                
                <ul className="space-y-2">
                  {milestone.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-400">
                      <Icon name="CheckCircle2" size={16} className="text-[#F97316] mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              
              {index < milestones.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <Icon name="ArrowRight" size={24} className="text-[#F97316]/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InvestorForm = () => {
  return (
    <section className="py-24 bg-[#1A1F2C]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-[#2A2F3C] to-[#1A1F2C] border-[#F97316]/30 p-8 md:p-12 animate-fade-in">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-[#F97316]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Mail" size={32} className="text-[#F97316]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Стать инвестором
              </h2>
              <p className="text-gray-400 text-lg">
                Оставьте заявку и получите полный меморандум проекта
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-gray-300">ФИО *</Label>
                  <Input 
                    id="name" 
                    placeholder="Иван Иванов" 
                    className="bg-[#141821] border-[#8E9196]/20 text-white mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="text-gray-300">Компания</Label>
                  <Input 
                    id="company" 
                    placeholder="ООО «Инвест»" 
                    className="bg-[#141821] border-[#8E9196]/20 text-white mt-2"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" className="text-gray-300">Email *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="ivan@example.com" 
                    className="bg-[#141821] border-[#8E9196]/20 text-white mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-300">Телефон *</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+7 (999) 123-45-67" 
                    className="bg-[#141821] border-[#8E9196]/20 text-white mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="amount" className="text-gray-300">Интересующая сумма инвестиций</Label>
                <Input 
                  id="amount" 
                  placeholder="50 млн ₽" 
                  className="bg-[#141821] border-[#8E9196]/20 text-white mt-2"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#F97316] hover:bg-[#ea6a0f] text-white py-6 text-lg"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Получить меморандум
              </Button>

              <p className="text-gray-500 text-sm text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#141821] border-t border-[#8E9196]/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">ВИА-Техно</h3>
            <p className="text-gray-400">
              Производство вездеходов на базе действующего завода станков
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-[#F97316]" />
                invest@viatechno.ru
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-[#F97316]" />
                +7 (999) 123-45-67
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Документы</h4>
            <div className="space-y-2">
              <a href="#" className="text-gray-400 hover:text-[#F97316] transition-colors block">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F97316] transition-colors block">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#8E9196]/20 pt-8 text-center text-gray-500">
          <p>&copy; 2024 ВИА-Техно. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Index;
