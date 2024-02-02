http://localhost:4001/api/v1/products
Method: POST
Response: 201 Created
Request Body: {
    "name": "{{$randomProduct}}",
    "price": {{$randomPrice}},
    "quantity": {{$randomInt}},
    "userID": "{{$randomUUID}}"
}
Response Body: {
    "message": "Success",
    "product": {
        "id": "5c6d4b78-d402-4b5e-b74c-6b801796c696",
        "name": "Sausages",
        "quantity": 549,
        "price": 887.8,
        "createdBy": "b205f5c0-97c9-46d3-8ce2-68987a59decf",
        "createdAt": "2024-02-01T13:08:10.982Z",
        "updatedAt": "2024-02-01T13:08:10.982Z"
    }
}