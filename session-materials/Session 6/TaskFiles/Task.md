
### OSC Crew Endpoints [OSC-System.json](./OSC-System.json)

#### 1. Get all data
**Endpoint:** `/osc-crew`

**Method:** GET  
**Response Example:**
```json
{
  "Committees": {
    "Technical": ["Backend", "Frontend", "Linux", "S&T", "Game", "Flutter"],
    "Creative": ["Media", "UI/UX", "Blender"],
    "Non-Technical": ["PR", "HR"]
  },
  "Highboard": {
    "President": "Amr Attar",
    "VPs": ["Haneen", "Nour", "Kamoula", "Mo2men"],
    "Heads": {
      "Technical": {"Backend": "Meefr", "Frontend": "Dareen", "Linux": "Amna"},
      "Creative": {"Creative": "Asmaa", "UI/UX": "Toqa"},
      "Non-Technical": {"PR": "Sara", "HR": "Seif"}
    }
  }
}
```

#### 2. Get Committees OR Highboard
**Endpoint:** `/osc-crew?type=committees` OR `/osc-crew?type=highboard`

**Response Example:**
```json
{
  "Technical": ["Backend", "Frontend", "Linux"]
}
```

#### 3. Get Specific Highboard Members
**Endpoint:** `/osc-crew/highboard?role=VPs`  
**Response Example:**
```json
["Haneen", "Nour", "Kamoula", "Mo2men"]
```

#### 4. Get Committees by Section
**Endpoint:** `/osc-crew/committees?section=Technical`  
**Response Example:**
```json
["Backend", "Frontend", "Linux"]
```

#### 5. Get All Heads with Queries
**Endpoint:** `/osc-crew/heads?section=Creative`  
**Response Example:**
```json
{
  "Media": "Asmaa",
  "UI/UX": "Toqa"
}
```

#### 6. Get Head by Committee Name
**Endpoint:** `/osc-crew/heads?committee=Backend`  
**Response Example:**
```json
"Meefr"
```

---

### Products Endpoints [Products.json](./Products.json)

#### 1. Get all products with filters
**Endpoint:** `/products?category=Electronics`  
**Response Example:**
```json
[
  {
    "id": 1,
    "name": "Wireless Headphones",
    "price": 99.99
  },
  {
    "id": 2,
    "name": "Smartphone",
    "price": 699.99
  }
]
```

#### 2. Price Filters
- **Under x dollars:** `/products?max_price=100`
- **Above x dollars:** `/products?min_price=100`
- **Between x and y dollars:** `/products?min_price=50&max_price=200`

**Response Example for  `/products?min_price=50&max_price=200`:**
```json
[
  {
        "id": 1,
        "name": "Wireless Headphones",
        "description": "Noise-canceling over-ear headphones with Bluetooth connectivity.",
        "price": 99.99,
        "category": "Electronics",
        "stock": 50,
        "rates": [{"Mario": 3}, {"Anas": 4}, {"Esraa": 1}, {"Mahmood": 1}]
      },
      {
        "id": 4,
        "name": "Coffee Maker",
        "description": "Automatic coffee machine with multiple brewing options.",
        "price": 79.99,
        "category": "Home Appliances",
        "stock": 40,
        "rates": [{"Mohamed": 1}, {"Nouran": 3}]
      },
      {
        "id": 5,
        "name": "Office Chair",
        "description": "Ergonomic office chair with lumbar support and adjustable height.",
        "price": 149.99,
        "category": "Furniture",
        "stock": 15,
        "rates": [{"Bakr": 2}, {"Mahmood": 1}]
      }
]
```

#### 3. Get all rates for a specific product
**Endpoint:** `/products/1/rates`  
**Response Example:**
```json
[{"Mario": 3}, {"Anas": 4}]
```

#### 4. Get all rates = x
**Endpoint:** `/products/1/rates?value=3`  
**Response Example:**
```json
[{"Mario": 3}]
```

#### 5. Get all rates between x and y
**Endpoint:** `/products/1/rates?min=2&max=5`  
**Response Example:**
```json
[{"Anas": 4}]
```

#### 6. Get Product by ID
**Endpoint:** `/products/1`

**Response Example:**
```json
{
"id": 1,
"name": "Wireless Headphones",
"description": "Noise-canceling over-ear headphones with Bluetooth connectivity.",
"price": 99.99,
"category": "Electronics",
"stock": 50,
"rates": [{"Mario": 3}, {"Anas": 4}, {"Esraa": 1}, {"Mahmood": 1}]
}
```

#### 7. Add New Product
**Endpoint:** `/products`  
**Method:** POST  
**Request Body Example:**
```json
{
  "name": "Tablet",
  "description": "10-inch display tablet.",
  "price": 299.99,
  "category": "Electronics",
  "stock": 25,
  "rates": []
}
```
**Response Example:**
```json
{
  "message": "Product added successfully"
}
```

#### 8. Update a Product
**Endpoint:** `/products/1`  
**Method:** PUT  
**Request Body Example:**
```json
{
  "price": 89.99,
  "stock": 45
}
```
**Response Example:**
```json
{
  "message": "Product updated successfully"
}
```
