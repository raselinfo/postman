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

Client ID: yHpmDs1jPO4634343NMlJ2oess

Client Secret: IYdzPTaJzfBUmYtOY523525Ld3A235235eryUYmsgsgsdgx3B2PjEsqwEfH6jAg4p



<!-- Postman Collection Runner -->
newman run "https://api.postman.com/collections/324010asgagag03ccc85f1ae8?access_key=PMAT-01HPC40F5gasgasgaryrB2BA" --env-var="baseUrl=https://fb287318-52ca-4853-968d-fasfasfasfasf.mock.pstmn.io"



