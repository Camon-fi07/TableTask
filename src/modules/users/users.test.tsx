import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { Providers } from '@/components/Providers';
import { instance } from '@/shared/api/instance';

import { Users } from './users';

jest.mock('@/shared/api/instance', () => ({
  instance: {
    get: jest.fn()
  }
}));

const UsersWithProviders = () => (
  <Providers>
    <Users />
  </Providers>
);

const mockedInstanceGet = instance.get as jest.Mock;

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
    }
  ],
  page: { size: 2, hasNext: true }
};

const promiseRequest = (
  data: typeof USERS_RESPONSE | typeof USERS_EMPTY_RESPONSE,
  timeout: number
) =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          data
        }),
      timeout
    )
  );

describe('Users', () => {
  it('should display skeletons', () => {
    mockedInstanceGet.mockImplementation(() =>
      promiseRequest(USERS_EMPTY_RESPONSE, 10000)
    );

    render(<UsersWithProviders />);

    expect(screen.getAllByTestId('skeleton-row').length).toBeGreaterThan(0);
  });

  it('should display items', async () => {
    mockedInstanceGet.mockImplementation(() =>
      promiseRequest(USERS_RESPONSE, 0)
    );

    render(<UsersWithProviders />);

    await waitFor(() => {
      expect(screen.queryByTestId('skeleton-row')).toBeNull();
    });

    expect(screen.getByText(USERS_RESPONSE.items[0].name)).toBeInTheDocument();
    expect(screen.getByText(USERS_RESPONSE.items[0].email)).toBeInTheDocument();
    expect(screen.getByText(USERS_RESPONSE.items[0].city)).toBeInTheDocument();
    expect(
      screen.getByText(USERS_RESPONSE.items[0].phoneNumber)
    ).toBeInTheDocument();
    expect(screen.getByText(USERS_RESPONSE.items[0].grade)).toBeInTheDocument();
    expect(
      screen.getByText(USERS_RESPONSE.items[0].university)
    ).toBeInTheDocument();
    expect(
      screen.getByText(USERS_RESPONSE.items[0].testScore.toString())
    ).toBeInTheDocument();
  });

  it('should display no data', async () => {
    mockedInstanceGet.mockImplementation(() =>
      promiseRequest(USERS_EMPTY_RESPONSE, 0)
    );

    render(<UsersWithProviders />);

    await waitFor(() => {
      expect(screen.queryByTestId('skeleton-row')).toBeNull();
    });

    expect(screen.getByTestId('no-data-row')).toBeInTheDocument();
  });

  it('should display loading in infinite scroll', async () => {
    mockedInstanceGet.mockImplementation(() =>
      promiseRequest(USERS_RESPONSE, 0)
    );

    render(<UsersWithProviders />);

    await waitFor(() => {
      expect(screen.queryByTestId('skeleton-row')).toBeNull();
    });

    mockedInstanceGet.mockImplementation(() =>
      promiseRequest(USERS_RESPONSE, 10000)
    );

    fireEvent.scroll(window, { target: { scrollY: 500 } });
    expect(mockedInstanceGet).toHaveBeenCalledTimes(2);
    await waitFor(() => {}, { timeout: 2000 });
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
