const rules = {
    "SuperAdmin": {
        static: [
            "user-management:visit",
            "user:create",
            "users:visit",
            "tenants:visit",
            "tenant:add:edit",
            "dashboard:visit",
            "verification:visit",
            "verification:upload",
            "verification:details",
            "adminupload:visit",
            "dashboard:mapping:visit",
            "dashboard:analysis:visit",
            "settings:visit",
            "report:visit",
            "countries:visit",
            "currencies:visit",
            "quickVerification:visit"
        ]
    },
    Admin: {
        static: [
            "user-management:visit",
            "user:create",
            "users:visit",
            "verification:visit",
            "verification:details",
            "dashboard:mapping:visit",
            "dashboard:analysis:visit",
            "dashboard:visit",
            "settings:visit",
            "settings:developer",
            "settings:configuration",
            "upload:visit",
            "report:visit",
            "quickVerification:visit"

        ],
        dynamic: {

        }
    },
    'RSE Agent': {
        static: [
            "vegetation:visit"
        ]
    },
};

export default rules;




