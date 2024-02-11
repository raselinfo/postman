## Auth :

Health (GET): http://localhost:4005/api/v1/health
Signup (Post) : http://localhost:4005/api/v1/signup
Signin (Post) : http://localhost:4005/api/v1/signin
Checkpoint (Post) : http://localhost:4005/api/v1/checkpoint

## Inventory

Health (Get): http://localhost:4001/api/v1/health
Create Product (Post): http://localhost:4001/api/v1/products
Get Product [id] (Get): http://localhost:4001/api/v1/products/:productId
Get All Product (Get): http://localhost:4001/api/v1/products
Update Product [id] (Put): http://localhost:4001/api/v1/products/:productId
Delete Product [id] (Delete): http://localhost:4001/api/v1/products/:productId

<!-- Authorization Server Credential for Authorization-Code-Flow -->

Token Endpoint: https://dev-mh5yy0530kzifbg6.us.auth0.com/oauth/token

Auth Endpoint: https://dev-mh5yy0530kzifbg6.us.auth0.com/oauth/authorize

Client ID: yHpmDs1jPOc9OkGbYK3HF2lNMlJ2oess

Client Secret: IYdzPTaJzfBUmYtOYLd3Ahq34b5_LvyUYmsm3JoDQm4k7x3B2PjEsqwEfH6jAg4p



<!-- Postman Collection Runner -->
newman run "https://api.postman.com/collections/32401078-8972932a-601a-4678-85b4-03ccc85f1ae8?access_key=PMAT-01HPC40F5AWCPPTTYFVFKFB2BA" --env-var="baseUrl=https://fb287318-52ca-4853-968d-0a3ab0b1b5c3.mock.pstmn.io"



