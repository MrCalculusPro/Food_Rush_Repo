
import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';

// Root Stack
export type RootStackParamList = {
  Onboarding: undefined;
  Auth: NavigatorScreenParams<AuthStackParamList>;
  CustomerApp: NavigatorScreenParams<CustomerTabParamList>;
  RestaurantApp: NavigatorScreenParams<RestaurantTabParamList>;
};

// Auth Stack
export type AuthStackParamList = {
  SignIn: { userType?: 'customer' | 'restaurant' };
  SignUp: { userType?: 'customer' | 'restaurant' };
  ForgotPassword: undefined;
  OTPVerification: {
    email?: string;
    phone?: string;
    type: 'email' | 'phone' | 'reset_password'
  };
  ResetPassword: { token: string };
};

// Customer Tab Navigator
export type CustomerTabParamList = {
  Home: NavigatorScreenParams<CustomerHomeStackParamList>;
  Orders: NavigatorScreenParams<CustomerOrderStackParamList>;
  Search: NavigatorScreenParams<CustomerSearchStackParamList>;
  Profile: NavigatorScreenParams<CustomerProfileStackParamList>;
};

// Customer Stack Param Lists
export type CustomerHomeStackParamList = {
  HomeScreen: undefined;
  FoodDetails: { foodId: string; restaurantId: string };
  RestaurantDetails: { restaurantId: string };
  MenuCategory: { categoryId: string; restaurantId: string };
  Notifications: undefined;
  Promotions: undefined;
  Cart: undefined;
  Checkout: undefined;
  OrderTracking: { orderId: string };
  Category: { categoryId: string };
  Search: undefined
};

export type CustomerSearchStackParamList = {
  SearchScreen: undefined;
  FilterOptions: undefined;
  SearchResults: { query?: string; filters?: any };
  FilterScreen: undefined;
};

export type CustomerOrderStackParamList = {
  CompletedOrdersScreen: undefined;
  PendingOrdersScreen: undefined;
  OrderDetails: { orderId: string };
};

export type CustomerProfileStackParamList = {
  FavoriteRestaurantScreen: undefined;
  ProfileScreen: undefined;
  AddressScreen: undefined;
  LanguageScreen: undefined;
  ProfileHome: undefined;
  EditProfile: undefined;
  AddressBook: undefined;
  AddAddress: undefined;
  PaymentMethods: undefined;
  AddPayment: undefined;
  Settings: undefined;
  Help: undefined;
  About: undefined;
};
export type CustomerHelpCenterStackParamsList = {
  FAQ: undefined;
  ContactUs: undefined;
}

// Restaurant Tab Navigator
export type RestaurantTabParamList = {
  Orders: NavigatorScreenParams<RestaurantOrdersStackParamList>;
  Menu: NavigatorScreenParams<RestaurantMenuStackParamList>;
  Analytics: NavigatorScreenParams<RestaurantAnalyticsStackParamList>;
  Profile: NavigatorScreenParams<RestaurantProfileStackParamList>;
};

// Restaurant Stack Param Lists
export type RestaurantOrdersStackParamList = {
  OrdersScreen: undefined;
  OrderDetails: { orderId: string };
  OrderHistory: undefined;
  LiveOrders: undefined;
};

export type RestaurantMenuStackParamList = {
  MenuScreen: undefined;
  AddMenuItem: undefined;
  EditMenuItem: { itemId: string };
  Categories: undefined;
  AddCategory: undefined;
  EditCategory: { categoryId: string };
  MenuSettings: undefined;
};

export type RestaurantAnalyticsStackParamList = {
  AnalyticsScreen: undefined;
  SalesReport: undefined;
  CustomerInsights: undefined;
  PopularItems: undefined;
  PerformanceMetrics: undefined;
};

export type RestaurantProfileStackParamList = {
  ProfileScreen: undefined;
  EditProfile: undefined;
  RestaurantSettings: undefined;
  BusinessHours: undefined;
  DeliverySettings: undefined;
  Notifications: undefined;
  Help: undefined;
  BusinessSettings: undefined;
  PayoutSettings: undefined;
};

// Navigation Prop Types
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

export type CustomerTabScreenProps<T extends keyof CustomerTabParamList> =
  BottomTabScreenProps<CustomerTabParamList, T>;

export type RestaurantTabScreenProps<T extends keyof RestaurantTabParamList> =
  BottomTabScreenProps<RestaurantTabParamList, T>;

export type CustomerHomeStackScreenProps<T extends keyof CustomerHomeStackParamList> =
  NativeStackScreenProps<CustomerHomeStackParamList, T>;

export type CustomerSearchStackScreenProps<T extends keyof CustomerSearchStackParamList> =
  NativeStackScreenProps<CustomerSearchStackParamList, T>;

export type CustomerOrderScreenProps<T extends keyof CustomerOrderStackParamList> =
  MaterialTopTabScreenProps<CustomerOrderStackParamList, T>;

export type CustomerHelpCenterStackScreenProps<T extends keyof CustomerHelpCenterStackParamsList> =
  MaterialTopTabScreenProps<CustomerHelpCenterStackParamsList, T>

export type CustomerProfileStackScreenProps<T extends keyof CustomerProfileStackParamList> =
  NativeStackScreenProps<CustomerProfileStackParamList, T>;

export type RestaurantOrdersStackScreenProps<T extends keyof RestaurantOrdersStackParamList> =
  NativeStackScreenProps<RestaurantOrdersStackParamList, T>;

export type RestaurantMenuStackScreenProps<T extends keyof RestaurantMenuStackParamList> =
  NativeStackScreenProps<RestaurantMenuStackParamList, T>;

export type RestaurantAnalyticsStackScreenProps<T extends keyof RestaurantAnalyticsStackParamList> =
  NativeStackScreenProps<RestaurantAnalyticsStackParamList, T>;

export type RestaurantProfileStackScreenProps<T extends keyof RestaurantProfileStackParamList> =
  NativeStackScreenProps<RestaurantProfileStackParamList, T>;
