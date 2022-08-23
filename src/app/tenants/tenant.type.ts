export type Tenant = {
  tenant_id: string,
  name: string,
  description?: string,
  sms_sender_id?: string,
  custom_domain?: string,
  currency?: string,
  id?: string
  country?: string
};



export type TenantResponse = {
  status: string;
  data: Tenant[];
  message: string;
  page: number;
  totalpages: number;
  tenant?: Tenant
};




