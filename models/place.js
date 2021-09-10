const placeSchema = new Schema({
    name: { type: String, required: true },
    description: {
        type: String,
        enum : ['coffee_shop','bookstore']
    }
  },
  { timestamps: true });