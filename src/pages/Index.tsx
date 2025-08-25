import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      name: "Коровий навоз премиум",
      price: "150₽/мешок",
      description: "100% натуральное органическое удобрение",
      image: "img/719d76d9-8b2c-4249-bd64-86a0eee55334.jpg",
      benefits: ["Улучшает структуру почвы", "Повышает урожайность", "Экологически чистый"]
    },
    {
      name: "Перегной выдержанный",
      price: "200₽/мешок",
      description: "2-летней выдержки, готов к применению",
      image: "img/719d76d9-8b2c-4249-bd64-86a0eee55334.jpg",
      benefits: ["Богат микроэлементами", "Улучшает плодородие", "Безопасен для растений"]
    },
    {
      name: "Компост садовый",
      price: "120₽/мешок",
      description: "Смесь органики для всех видов растений",
      image: "img/719d76d9-8b2c-4249-bd64-86a0eee55334.jpg",
      benefits: ["Универсальное применение", "Доступная цена", "Быстрый эффект"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-farm-cream to-farm-wheat-beige">
      {/* Header */}
      <header className="bg-farm-brown text-farm-cream shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Wheat" size={32} className="text-farm-cream" />
              <h1 className="text-2xl font-bold">ФермаОрганик</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#hero" className="hover:text-farm-wheat-beige transition-colors">Главная</a>
              <a href="#products" className="hover:text-farm-wheat-beige transition-colors">Каталог</a>
              <a href="#about" className="hover:text-farm-wheat-beige transition-colors">О ферме</a>
              <a href="#delivery" className="hover:text-farm-wheat-beige transition-colors">Доставка</a>
              <a href="#usage" className="hover:text-farm-wheat-beige transition-colors">Применение</a>
              <a href="#contacts" className="hover:text-farm-wheat-beige transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-farm-brown mb-6">
                Натуральные органические удобрения
              </h2>
              <p className="text-xl text-farm-dark-brown mb-8">
                Повысьте урожайность вашего сада и огорода с помощью экологически чистых удобрений от нашей фермы
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Заказать сейчас
                </Button>
                <Button variant="outline" size="lg" className="border-farm-brown text-farm-brown hover:bg-farm-brown hover:text-farm-cream">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="img/47c0f2ff-3587-40d6-984e-eeb9889bcbf9.jpg" 
                alt="Наша ферма" 
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Truck" size={24} />
                  <span className="font-semibold">Доставка по области</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-farm-brown mb-4">Каталог товаров</h3>
            <p className="text-xl text-farm-dark-brown">Выберите лучшее удобрение для ваших потребностей</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-secondary">
                    Эко-продукт
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-farm-brown mb-2">{product.name}</h4>
                  <p className="text-farm-dark-brown mb-4">{product.description}</p>
                  <div className="space-y-2 mb-4">
                    {product.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-secondary" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button className="bg-primary hover:bg-primary/90">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-farm-wheat-beige">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-farm-brown mb-6">О нашей ферме</h3>
              <p className="text-lg text-farm-dark-brown mb-6">
                Уже более 20 лет мы занимаемся органическим животноводством и производством натуральных удобрений. 
                Наша ферма расположена в экологически чистом районе, где коровы пасутся на естественных лугах.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white rounded-lg">
                  <Icon name="Users" size={32} className="mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-farm-brown">50+</div>
                  <div className="text-sm">Довольных клиентов</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <Icon name="Award" size={32} className="mx-auto mb-2 text-secondary" />
                  <div className="text-2xl font-bold text-farm-brown">20</div>
                  <div className="text-sm">Лет опыта</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Leaf" size={20} className="text-secondary" />
                <span className="text-farm-dark-brown">100% экологически чистая продукция</span>
              </div>
            </div>
            <div>
              <img 
                src="img/b866bb1c-00af-4344-bc5a-c24521268b68.jpg" 
                alt="Фермер" 
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section id="usage" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-farm-brown mb-4">Способы применения</h3>
            <p className="text-xl text-farm-dark-brown">Как правильно использовать наши удобрения</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "Sprout", title: "Посадка", desc: "1 мешок на 10 м²" },
              { icon: "Droplets", title: "Полив", desc: "Разбавить 1:10 с водой" },
              { icon: "Sun", title: "Сезон", desc: "Весна-осень" },
              { icon: "Calendar", title: "Частота", desc: "Раз в месяц" }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-farm-wheat-beige rounded-lg">
                <Icon name={item.icon as any} size={48} className="mx-auto mb-4 text-primary" />
                <h4 className="text-lg font-bold text-farm-brown mb-2">{item.title}</h4>
                <p className="text-farm-dark-brown">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-16 bg-farm-wheat-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-farm-brown mb-4">Условия доставки</h3>
            <p className="text-xl text-farm-dark-brown">Быстро и удобно по всей области</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <Icon name="Truck" size={48} className="mx-auto mb-4 text-primary" />
              <h4 className="text-xl font-bold text-farm-brown mb-2">Быстрая доставка</h4>
              <p className="text-farm-dark-brown">От 1 до 3 дней по области</p>
            </Card>
            
            <Card className="text-center p-6">
              <Icon name="MapPin" size={48} className="mx-auto mb-4 text-secondary" />
              <h4 className="text-xl font-bold text-farm-brown mb-2">Доставка до ворот</h4>
              <p className="text-farm-dark-brown">Привозим прямо к вашему участку</p>
            </Card>
            
            <Card className="text-center p-6">
              <Icon name="CreditCard" size={48} className="mx-auto mb-4 text-primary" />
              <h4 className="text-xl font-bold text-farm-brown mb-2">Оплата при получении</h4>
              <p className="text-farm-dark-brown">Наличными или картой курьеру</p>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-block bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold text-farm-brown mb-4">Стоимость доставки</h4>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <Icon name="Home" size={24} className="mx-auto mb-2 text-secondary" />
                  <div className="font-bold">По городу</div>
                  <div className="text-primary text-xl">300₽</div>
                </div>
                <div>
                  <Icon name="Mountain" size={24} className="mx-auto mb-2 text-secondary" />
                  <div className="font-bold">По области</div>
                  <div className="text-primary text-xl">500₽</div>
                </div>
              </div>
              <p className="text-sm text-farm-dark-brown mt-4">
                * Бесплатная доставка при заказе от 10 мешков
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-farm-brown mb-4">Контакты</h3>
            <p className="text-xl text-farm-dark-brown">Свяжитесь с нами удобным способом</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-bold text-farm-brown">Телефон</div>
                  <div className="text-farm-dark-brown">+7 (XXX) XXX-XX-XX</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <Icon name="Mail" size={24} className="text-secondary" />
                </div>
                <div>
                  <div className="font-bold text-farm-brown">Email</div>
                  <div className="text-farm-dark-brown">info@fermaorganik.ru</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-bold text-farm-brown">Адрес фермы</div>
                  <div className="text-farm-dark-brown">с. Зеленое, ул. Фермерская, 1</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <Icon name="Clock" size={24} className="text-secondary" />
                </div>
                <div>
                  <div className="font-bold text-farm-brown">Время работы</div>
                  <div className="text-farm-dark-brown">Пн-Сб: 8:00-18:00<br />Вс: 9:00-15:00</div>
                </div>
              </div>
            </div>
            
            <Card className="p-6">
              <h4 className="text-xl font-bold text-farm-brown mb-4">Оставьте заявку</h4>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full p-3 border border-farm-wheat-beige rounded-lg focus:border-primary outline-none"
                />
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="w-full p-3 border border-farm-wheat-beige rounded-lg focus:border-primary outline-none"
                />
                <textarea 
                  placeholder="Сообщение" 
                  rows={4}
                  className="w-full p-3 border border-farm-wheat-beige rounded-lg focus:border-primary outline-none resize-none"
                />
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-farm-brown text-farm-cream py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Icon name="Wheat" size={24} />
              <span className="text-xl font-bold">ФермаОрганик</span>
            </div>
            <p className="text-farm-wheat-beige">
              © 2024 ФермаОрганик. Все права защищены. Натуральные удобрения для вашего сада.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;