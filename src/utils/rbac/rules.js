const rules = {
  Admin: {
    static: [
      "user-management:visit",
      "user:create",
      "user:create:add-tenant-info",
      "user:edit",
      "user:delete",
      "users:upload",
      "users:visit",
      "farmers:visit",
      "farmer:create",
      "farmer:edit",
      "farmers:upload",
      "farmers:bulk-edit",
      "sourcing-agents:visit",

      "dashboard:visit",
      "dashboard:activities:visit",
      "dashboard:analysis:visit",

      "configuration:visit",
      "configuration:crop-profile:visit",
      "configuration:calendar:visit",
      "configuration:seasons:visit",

      "farm-management:visit",
      "farm-management:cluster:create",
      "farm-management:cluster:edit",
      "farm-management:sub-cluster:create",
      "farm-management:sub-cluster:edit",

      "input:visit",

      "communication:visit",

      "collection:visit",

      "payment:visit",
    ],
  },
  "Dvalco Admin": {
    static: ["dashboard:visit"],
  },
  Aggregator: {
    static: [
      "dashboard:visit",
      "dashboard:activities:visit",
      "dashboard:analysis:visit",

      "user-management:visit",
      "user:create",
      "user:edit",
      "user:delete",
      "users:upload",
      "users:visit",
      "farmers:visit",
      "farmer:create",
      "farmer:edit",
      "farmers:upload",
      "farmers:bulk-edit",
      "sourcing-agents:visit",

      "configuration:visit",
      "configuration:crop-profile:visit",
      "configuration:calendar:visit",
      "configuration:seasons:visit",

      "farm-management:visit",
      "farm-management:farm:visit",
      "farm-management:farm:create",
      "farm-management:farm:bulk-assign",
      "farm-management:cluster:create",
      "farm-management:cluster:edit",
      "farm-management:sub-cluster:create",
      "farm-management:sub-cluster:edit",

      "communication:visit",

      "collection:visit",

      "payment:visit",
      "payment:disbursement:visit"
    ],
  },
  "Project Manager": {
    static: [
      "dashboard:visit",
      "dashboard:activities:visit",
      "dashboard:analysis:visit",

      "user-management:visit",
      "users:visit",
      "farmers:visit",

      "farm-management:visit",
      "farm-management:farm:visit",

      "input:visit",
      "payment:disbursement:visit"
    ],
    dynamic: {},
  },
  Agent: {
    static: [
        "dashboard:visit",
        "payment:disbursement:visit"
    ],
  },
  "Service Provider": {
    static: [
        "dashboard:visit",
        "communication:visit"
    ],
  },
};

export default rules;
