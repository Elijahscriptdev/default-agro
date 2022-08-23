import rules from "./rules";


type CheckProps = {
    // rules: {
    //     [key: string]: {
    //         static: string[],
    //         dynamic: {
    //             [key: string]: (data: any) => boolean
    //         },
    //     }
    // }
    rules: any,
    role: string,
    action: string,
    data: any

}


type CanProps = {
    yes: () => React.ReactElement | null,
    no: () => React.ReactElement | null,
    role: string,
    perform: string,
    data?: any

}

const check = (props: CheckProps) => {
    const { role, action, data, rules } = props
    const permissions = rules[role];
    if (!permissions) {
        // role is not present in the rules
        return false;
    }

    const staticPermissions = permissions.static;

    if (staticPermissions && staticPermissions.includes(action)) {
        // static rule not provided for action
        return true;
    }

    const dynamicPermissions = permissions.dynamic;

    if (dynamicPermissions) {
        const permissionCondition = dynamicPermissions[action];
        if (!permissionCondition) {
            // dynamic rule not provided for action
            return false;
        }

        return permissionCondition(data);
    }
    return false;
};


const Can = (props: CanProps) => {
    return check({ rules, role: props.role, action: props.perform, data: props.data }) ? props.yes() : props.no()
}


export default Can;