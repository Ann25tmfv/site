
const array = [
    {
        id: 1,
        name: 'Bolt',
        image: 'https://www.visa.com.ua/dam/VCOM/regional/cemea/ukraine/paywithvisa/promotions/bolt/ua_bolt_2020_640x640.jpg',
        desc: 'Эстонская частная компания, создатель мобильного приложения для вызова такси и других сервисов. Офис компании находится в Таллине.'
    },
    {
        id: 2,
        name: 'Uber',
        image: 'https://www.ixbt.com/img/n1/news/2020/9/4/%D0%91%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_large.png',
        desc: 'Aмериканская международная публичная компания из Сан-Франциско, создавшая одноимённое мобильное приложение для поиска, вызова и оплаты такси или частных водителей и доставки еды. С помощью приложения Uber заказчик резервирует машину с водителем и отслеживает её перемещение к указанной точке. В большинстве случаев водители используют свои собственные автомобили, а также машины таксопарков или партнёров.'
    },
    {
        id: 3,
        name: 'Uklon',
        image: 'https://sostav.ua/app/public/images/news/2021/10/29/19O6VcKp_l.jpg',
        desc: 'Первый украинский сервис вызова авто онлайн. Удобный сайт и мобильное приложение с приятным интерфейсом позволяют заказать такси в Киеве за считанные секунды, выбрать нужный класс машины, задать условия поездки, создать сложный маршрут, вызвать курьерскую доставку или драйвера и получить другие полезные услуги.'
    },
    {
        id: 4,
        name: 'Oxy-taxi',
        image: 'https://news.bigmir.net/i/47/32/43/5/4732435/337dba929caf99ae93cfcd0996a7688b-quality_75Xresize_crop_1Xallow_enlarge_0Xw_740Xh_400.jpg',
        desc: 'Первая в Киеве служба такси, которая укомплектована исключительно электромобилями.Вы можете воспользоваться бесплатными Wi-Fi и планшетом. Для максимального удобства пассажиров, каждый электрокар службы такси оборудован таксометрами и терминалами для оплаты банковской картой. Во всех электромобилях есть подогрев сидений и кондиционер. Среди дополнительных услуг: бесплатное сопровождение с зонтиком в дождь, встреча пассажиров в аэропорту с именной табличкой, автоняня.'
    },
    {
        id: 5,
        name: 'Elit-taxi',
        image: 'https://gullivercenter.com/storage/products/gallery/4266-13072005554537069.jpg',
        desc: 'Это компания, осуществляющая деятельность в сфере перевозки, что функционирует в городе Киеве. Заведение обеспечивает быстрый и удобный сервис, а также собственное приложение на смартфон, которое поможет вызвать автомобиль и проследить маршрут и наличие машины поблизости.'
    }]

const menu = document.querySelector('#menu-area');
const contentContainer  = document.querySelector('#content');

const createMenuElement = (name) => {
    const menuElement = `
        <li class="menu__element">
        <a class="menu__link" href="#${name.toLowerCase().replace(' ', '-')}">${name}</a> 
        </li>
    `;

    return menuElement;
};

const generateMenuElements = (data) => {
let menuContent = '';

data.forEach((service) => {
menuContent += createMenuElement(service.name);
});

menu.innerHTML = menuContent;
};

const filterData = (data, searchName) => {
return data.filter((service) => {
if (service.name === searchName) return service;
});
};

const createContent = (service) => {
const content = `
<div class="service">
<h2 class="service__title">${service.name}</h2>
<img class="service__image" src="${service.image}" alt="${service.name} image" />
<p class="service__description">${service.desc}</p>
</div>
`;
return content
};

menu.addEventListener('click', (e) => {
const linkName = e.target.textContent;

const result = filterData(array, linkName);

contentContainer.innerHTML = createContent(result[0]);
});

generateMenuElements(array);