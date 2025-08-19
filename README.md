# Ecommerce API
A simple ecommerce API with product and order management built with Typescipt, Express, MongoDB atlas, Mongoose, Zod etc. Deployed API link: [Ecommerce API](https://ecommerce-api-orpin.vercel.app/)

## Technologies
Typescipt, Express, MongoDB atlas, Mongoose, Zod, Vercel for deployment

## Features
1. Product management: CRUD, search
2. Order management: create new order, get all order, get order by email
3. Inventory management: update inventory after each order placement, refuse order if not sufficient inventory
4. Error handling

## API endpoints

**Product Management:**
### **1. Create a New Product**

- **Endpoint**: **`/api/products`**
- **Method:** `POST`
- **Sample Request Body**:
    
    ```json
    {
        "name": "iPhone 13",
        "description": "A sleek and powerful smartphone with cutting-edge features.",
        "price": 999,
        "category": "Electronics",
        "tags": ["smartphone", "Apple", "iOS"],
        "variants": [
            {
                "type": "Color",
                "value": "Midnight Blue"
            },
            {
                "type": "Storage Capacity",
                "value": "256GB"
            }
        ],
        "inventory": {
            "quantity": 50,
            "inStock": true
        }
    }
    ```
    
- **Sample Response**:
    
    ```json
    {
        "success": true,
        "message": "Product created successfully!",
        "data": {
            "name": "iPhone 13",
            "description": "A sleek and powerful smartphone with cutting-edge features.",
            "price": 999,
            "category": "Electronics",
            "tags": ["smartphone", "Apple", "iOS"],
            "variants": [
                {
                    "type": "Color",
                    "value": "Midnight Blue"
                },
                {
                    "type": "Storage Capacity",
                    "value": "256GB"
                }
            ],
            "inventory": {
                "quantity": 50,
                "inStock": true
            }
        }
    }
    ```
    

### **2. Retrieve a List of All Products**

- **Endpoint**: **`/api/products`**
- **Method:** `GET`
- **Sample Response**:
    
    ```json
    {
        "success": true,
        "message": "Products fetched successfully!",
        "data": [
            {
                "name": "iPhone 13",
                "description": "A sleek and powerful smartphone with cutting-edge features.",
                "price": 999,
                "category": "Electronics",
                "tags": ["smartphone", "Apple", "iOS"],
                "variants": [
                    {
                        "type": "Color",
                        "value": "Midnight Blue"
                    },
                    {
                        "type": "Storage Capacity",
                        "value": "256GB"
                    }
                ],
                "inventory": {
                    "quantity": 50,
                    "inStock": true
                }
            },
            {
                "name": "Samsung Galaxy S21",
                "description": "High-performance Android smartphone with advanced camera capabilities.",
                "price": 799,
                "category": "Electronics",
                "tags": ["smartphone", "Samsung", "Android"],
                "variants": [
                    {
                        "type": "Color",
                        "value": "Phantom Black"
                    },
                    {
                        "type": "Storage Capacity",
                        "value": "128GB"
                    }
                ],
                "inventory": {
                    "quantity": 30,
                    "inStock": true
                }
            }
            // Additional products can be added here...
        ]
    }
    ```
    

### **3. Retrieve a Specific Product by ID**

- **Endpoint**: **`/api/products/:productId`**
- **Method: `GET`**
- **Sample Response**:
    
    ```json
    {
        "success": true,
        "message": "Product fetched successfully!",
        "data": {
            "name": "iPhone 13",
            "description": "A sleek and powerful smartphone with cutting-edge features.",
            "price": 999,
            "category": "Electronics",
            "tags": ["smartphone", "Apple", "iOS"],
            "variants": [
                {
                    "type": "Color",
                    "value": "Midnight Blue"
                },
                {
                    "type": "Storage Capacity",
                    "value": "256GB"
                }
            ],
            "inventory": {
                "quantity": 50,
                "inStock": true
            }
        }
    }
    ```
    

### **4. Update Product Information**

- **Endpoint**: **`/api/products/:productId`**
- **Method: `PUT`**
- **Sample Request Body**:
    
    ```json
    {
        "name": "iPhone 13",
        "description": "A sleek and powerful smartphone with cutting-edge features.",
        "price": 999,
        "category": "Electronics",
        "tags": ["smartphone", "Apple", "iOS"],
        "variants": [
            {
                "type": "Color",
                "value": "Midnight Blue"
            },
            {
                "type": "Storage Capacity",
                "value": "256GB"
            }
        ],
        "inventory": {
            "quantity": 50,
            "inStock": true
        }
    }
    ```
    
- **Sample Response**:
    
    ```json
    {
        "success": true,
        "message": "Product updated successfully!",
        "data": {
            "name": "iPhone 13",
            "description": "A sleek and powerful smartphone with cutting-edge features.",
            "price": 999,
            "category": "Electronics",
            "tags": ["smartphone", "Apple", "iOS"],
            "variants": [
                {
                    "type": "Color",
                    "value": "Midnight Blue"
                },
                {
                    "type": "Storage Capacity",
                    "value": "256GB"
                }
            ],
            "inventory": {
                "quantity": 49,
                "inStock": true
            }
        }
    }
    ```
    

### **5. Delete a Product**

- **Endpoint**: **`/api/products/:productId`**
- **Method: `DELETE`**
- **Sample Response**:
    
    ```json
    {
        "success": true,
        "message": "Product deleted successfully!",
        "data": null
     }
     
    // The product should be deleted from the database.
    ```
    

### **6. Search a product**

- **Endpoint**: `/api/products?searchTerm=iphone`
- **Method: GET**
- **Sample Response**:

```jsx
{
    "success": true,
    "message": "Products matching search term 'iphone' fetched successfully!",
    "data": [
        {
            "name": "iPhone 13 Pro",
            "description": "The latest flagship iPhone model with advanced camera features.",
            "price": 999,
            "category": "Smartphones",
            "tags": ["iPhone", "Apple", "Mobile"],
            "variants": [
                {
                    "type": "Color",
                    "value": "Graphite"
                },
                {
                    "type": "Storage",
                    "value": "256GB"
                }
            ],
            "inventory": {
                "quantity": 50,
                "inStock": true
            }
        },
        {
            "name": "iPhone SE",
            "description": "Compact and affordable iPhone model with powerful performance.",
            "price": 399,
            "category": "Smartphones",
            "tags": ["iPhone", "Apple", "Mobile"],
            "variants": [
                {
                    "type": "Color",
                    "value": "White"
                },
                {
                    "type": "Storage",
                    "value": "128GB"
                }
            ],
            "inventory": {
                "quantity": 20,
                "inStock": true
            }
        }
    ]
}
```

**Order Management:**
### **Order Management API Endpoints**

### **1.Create a New Order**

- **Endpoint**: **`/api/orders`**
- **Method: `POST`**
- **Request Body**:
    
    ```json
    {
        "email": "example@email.com",
        "productId": "5fd67e890b60c903cd8544a3",
        "price": 999,
        "quantity": 1
    }
    ```
    
- **Response**:
    
    ```json
    {
        "success": true,
        "message": "Order created successfully!",
        "data": {
            "email": "example@email.com",
            "productId": "5fd67e890b60c903cd8544a3",
            "price": 999,
            "quantity": 1
        }
    }
    
    ```
    

### **2.Retrieve All Orders**

- **Endpoint**: **`/api/orders`**
- **Method: `GET`**
- **Sample Response**:
    
    ```json
    {
        "success": true,
        "message": "Orders fetched successfully!",
        "data": [
            {
                "email": "example@email.com",
                "productId": "5fd67e890b60c903cd8544a3",
                "price": 999,
                "quantity": 1
            }
            // more orders...
        ]
    }
    ```
    

### **3. Retrieve Orders by User Email**

- **Endpoint**: `/api/orders?email=example@email.com`
- **Method:** `GET`
- **Sample Response**:
    
    ```json
    {
        "success": true,
        "message": "Orders fetched successfully for user email!",
        "data": [
            {
                "email": "example@email.com",
                "productId": "5fd67e890b60c903cd8544a3",
                "price": 999,
                "quantity": 1
            }
            // more orders for the user...
        ]
    }
    ```
    
## How to run
How to run locally:
1. Clone the repository to your local machine
2. run `npm install` to install all the project dependencies
3. run npm run start:dev to start the server

Or you you can check out the deployed link: [Ecommerce API](https://ecommerce-api-orpin.vercel.app/)
