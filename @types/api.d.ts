interface UserDto {
  id: number;
  name: string;
  email: string;
  city: string;
  phoneNumber: string;
  grade: number;
  university: string;
  testScore?: number;
}

interface Page {
  size: number;
  hasNext: boolean;
}

interface UsersResponseDto {
  items: UserDto[];
  page: Page;
}

interface CreateUserRequestDto {
  fullName: string;
  email: string;
  city: string;
  phoneNumber: string;
  grade: number;
  university: string;
}
