db.createUser({
  user: process.env.MONGO_INITDB_USER_USERNAME,
  pwd: process.env.MONGO_INITDB_USER_PASSWORD,
  roles: [
    {
      role: "readWrite",
      db: process.env.MONGO_INITDB_DATABASE,
    },
  ],
});

db.createCollection("collections", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name"],
      title: "Collection Object Validation",
      properties: {
        name: {
          bsonType: "string",
          description: "'name' must be a string and is required",
        },
        urls: {
          bsonType: "array",
          uniqueItems: true,
          items: {
            bsonType: "object",
            required: ["url"],
            properties: {
              url: {
                bsonType: "string",
                description: "'url' must be a string and is required",
              },
              reports: {
                bsonType: "array",
                items: {
                  bsonType: "object",
                },
              },
            },
          },
        },
      },
    },
  },
});
