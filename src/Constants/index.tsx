import community from "../Assets/Images/community.svg";
import gym from "../Assets/Images/gym.svg";
import wifi from "../Assets/Images/wifi.svg";
import coffee from "../Assets/Images/coffee.svg";
import price from "../Assets/Images/price.svg";
import loungue from "../Assets/Images/lounge.svg";
import booking from "../Assets/Images/booking.svg";
import play from "../Assets/Images/play.svg";

// Define the interface for the data items
export interface ChooseDataItem {
  name: string;
  img: string;
}

// Type the CHOOSE_DATA array using the interface
export const CHOOSE_DATA: ChooseDataItem[] = [
  {
    name: "Community Events",
    img: community,
  },
  {
    name: "Gym Facilities",
    img: gym,
  },
  {
    name: "High-Speed WiFi",
    img: wifi,
  },
  {
    name: "Cafe & Tea Bar",
    img: coffee,
  },
  {
    name: "Affordable",
    img: price,
  },
  {
    name: "Comfort Lounges",
    img: loungue,
  },
  {
    name: "Quick Booking",
    img: booking,
  },
  {
    name: "Sports Area",
    img: play,
  },
];

export interface DayPassDiscount {
  value: number;
  message: string;
}

export interface SpaceData {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  google_maps_url?: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  description?: string | null;
  rules?: string | null;
  amenities: string[];
  images: string[];
  working_hours_start: string;
  working_hours_end: string;
  contact_person_name?: string;
  facilities?: string | null;
  is_active: boolean;
  is_day_pass_enabled: boolean;
  day_pass_price: number;
  day_pass_discounts_percentage: {
    [key: string]: DayPassDiscount;
  };
  manager_id?: string | null;
  can_edit?: boolean;
}

export interface SpacesState {
  space_list: SpaceData[];
}
