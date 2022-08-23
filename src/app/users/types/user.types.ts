export type User = {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    mobile: string,
    role: string,
    tenant_id?: string,
    secret_key?: string,
    webhook?: string
}


export type EditUserFormValues = {
    first_name: string;
    last_name: string;
    email: string;
    mobile: string;
    password: string;
    bvn: string;
    role: string;
    tenant_id: string;
    id: number;
};

export type AddUserFormValues = {
    first_name: string;
    last_name: string;
    email: string;
    mobile: string;
    password: string;
    bvn: string;
    role: string;
    tenant_id: string;
};

export type UsersResponse = {
    status: string;
    data: User[];
    message: string;
    page: number;
    totalpages: number;
    user: User
};


export type UpdateUserResponse = {
    status: string;
    data: {
        data: User;
    };
    message: string;
};