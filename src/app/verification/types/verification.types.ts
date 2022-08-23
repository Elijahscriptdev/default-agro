export type Summary = {
  total_no: number;
  area_sum: number;
  overall_status: "FAIL" | "IN PROGRESS" | "PASS";
};

export type Points = {
  id: number;
  cluster_name: string;
  created: string;
  overall_status: string;
  status: string;
  within_state: string;
  overlay: string;
};

export type VerificationResponse = {
  points: Points[];
  status: string;
  message: string;
  page: number;
  totalpages: number;
  id: number;
  cluster_name: string;
  created: string;
  overall_status: string;
  image_url: string;
  within_state: string;
  overlay: string;
  country: string;
  state: string;
  partner: string;
  crop: string;
  coord: string;
  lga: string;
  within_country: string;
  within_lga: string;
  returned_country: string;
  returned_state: string;
  returned_lga: string;
};

export type Crops = {
  crop: string;
};

export type Partners = {
  partner: string;
};

export type Providers = {
  provider: string;
};

export type States = {
  state: string;
};

export type Tenants = {
  tenant: string;
  id: number;
  name: string;
};

export type EntityResponse = {
  crops: Crops[];
  partners: Partners[];
  providers: Providers[];
  states: States[];
  tenants: Tenants[];
};
