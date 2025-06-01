import { test, expect } from '@playwright/test';
const USERS_EMPTY_RESPONSE = {
  items: [],
  page: { size: 0, hasNext: false }
};

const USERS_RESPONSE = {
  items: [
    {
      id: 1,
      name: 'Иван Иванов',
      email: 'ivan.ivanov@example.com',
      city: 'Москва',
      phoneNumber: '+7 999 123-45-01',
      grade: '1',
      university: 'МГУ',
      testScore: 95
    },
    {
      id: 2,
      name: 'Анна Смирнова',
      email: 'anna.smirnova@example.com',
      city: 'Санкт-Петербург',
      phoneNumber: '+7 999 123-45-02',
      grade: '2',
      university: 'СПбГУ',
      testScore: 89
    },
    {
      id: 3,
      name: 'Дмитрий Кузнецов',
      email: 'd.kuznetsov@example.com',
      city: 'Новосибирск',
      phoneNumber: '+7 999 123-45-03',
      grade: '3',
      university: 'НГУ',
      testScore: 78
    },
    {
      id: 4,
      name: 'Елена Попова',
      email: 'elena.popova@example.com',
      city: 'Екатеринбург',
      phoneNumber: '+7 999 123-45-04',
      grade: '4',
      university: 'УрФУ',
      testScore: 88
    },
    {
      id: 5,
      name: 'Алексей Соколов',
      email: 'a.sokolov@example.com',
      city: 'Казань',
      phoneNumber: '+7 999 123-45-05',
      grade: '1',
      university: 'КФУ',
      testScore: 91
    },
    {
      id: 6,
      name: 'Мария Лебедева',
      email: 'm.lebedeva@example.com',
      city: 'Нижний Новгород',
      phoneNumber: '+7 999 123-45-06',
      grade: '3',
      university: 'ННГУ',
      testScore: 83
    },
    {
      id: 7,
      name: 'Игорь Морозов',
      email: 'i.morozov@example.com',
      city: 'Челябинск',
      phoneNumber: '+7 999 123-45-07',
      grade: '2',
      university: 'ЮУрГУ',
      testScore: 76
    },
    {
      id: 8,
      name: 'Ольга Новикова',
      email: 'olga.novikova@example.com',
      city: 'Ростов-на-Дону',
      phoneNumber: '+7 999 123-45-08',
      grade: '4',
      university: 'ЮФУ',
      testScore: 90
    },
    {
      id: 9,
      name: 'Сергей Волков',
      email: 'sergey.volkov@example.com',
      city: 'Уфа',
      phoneNumber: '+7 999 123-45-09',
      grade: '2',
      university: 'БашГУ',
      testScore: 84
    },
    {
      id: 10,
      name: 'Наталья Васильева',
      email: 'n.vasileva@example.com',
      city: 'Красноярск',
      phoneNumber: '+7 999 123-45-10',
      grade: '3',
      university: 'СФУ',
      testScore: 87
    },
    {
      id: 11,
      name: 'Артем Зайцев',
      email: 'a.zaytsev@example.com',
      city: 'Пермь',
      phoneNumber: '+7 999 123-45-11',
      grade: '1',
      university: 'ПГНИУ',
      testScore: 93
    },
    {
      id: 12,
      name: 'Ксения Белова',
      email: 'ks.belova@example.com',
      city: 'Воронеж',
      phoneNumber: '+7 999 123-45-12',
      grade: '4',
      university: 'ВГУ',
      testScore: 82
    },
    {
      id: 13,
      name: 'Владимир Медведев',
      email: 'v.medvedev@example.com',
      city: 'Самара',
      phoneNumber: '+7 999 123-45-13',
      grade: '3',
      university: 'СамГУ',
      testScore: 86
    }
  ],
  page: { size: 13, hasNext: true }
};

test.describe('Users', () => {
  test('should display skeletons', async ({ page }) => {
    await page.route('**users?**', async (route) => {
      await new Promise((res) => setTimeout(res, 10000));
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(USERS_EMPTY_RESPONSE)
      });
    });

    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const skeletons = page.getByTestId('skeleton-row');
    const skeletonsCount = await skeletons.count();
    expect(skeletonsCount).toBeGreaterThan(0);
  });

  test('should display data', async ({ page }) => {
    await page.route('**users?**', (route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(USERS_RESPONSE)
      });
    });

    await page.goto('/', { waitUntil: 'domcontentloaded' });

    await page.waitForResponse('**/users?**', {
      timeout: 8000
    });

    await expect(page.getByText(USERS_RESPONSE.items[0].name)).toBeVisible();
  });

  test('should display loading in infinite scroll', async ({ page }) => {
    await page.route('**users?**', (route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(USERS_RESPONSE)
      });
    });

    await page.goto('/', { waitUntil: 'domcontentloaded' });

    await page.waitForResponse('**/users?**', {
      timeout: 8000
    });

    await page.mouse.wheel(0, 50000);

    const loader = page.getByTestId('loader');
    await expect(loader).toBeVisible();
  });

  test('should display no data', async ({ page }) => {
    await page.route('**/users?**', (route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(USERS_EMPTY_RESPONSE)
      });
    });

    await page.goto('/', { waitUntil: 'domcontentloaded' });

    await page.waitForResponse('**/users?**', {
      timeout: 8000
    });

    await expect(page.getByTestId('no-data-row')).toBeVisible();
  });
});
