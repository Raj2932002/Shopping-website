import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('d6a70e3e-d696-4711-aab8-179f1f9de51b', '1Ramona.Lehner54@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv123abc', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('9f3df778-02e3-4ce8-8d91-fc91a1094b8f', '9Maurice_Becker38@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=11', 'inv123abc', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('6562785f-0d73-4685-aeda-c52c78361c6d', '17Clovis.Schuppe@gmail.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=19', 'inv012jkl', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('2db5a73a-cfe6-4f97-a325-732c688a17e5', '25Amos.Mante49@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=27', 'inv789ghi', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('0bf8f93d-7456-47de-883a-213c70e9d6ff', '33Cali3@gmail.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=35', 'inv345mno', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('0fa8d98a-d7a9-4fec-91e7-52f614978bac', '41Ivy4@yahoo.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=43', 'inv789ghi', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('1a294575-0c63-4166-9af3-b564352ce1af', '57Bradford.McClure@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=59', 'inv345mno', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('3c920999-49bc-40f7-89ec-7cba7d43a977', '65Jany76@hotmail.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=67', 'inv789ghi', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('4df0a956-2940-418f-9473-61f182fe23d8', '73Jadon42@yahoo.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=75', 'inv345mno', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('757e78f4-d90a-47bd-a1a7-d53677115548', 'Stay updated with our latest product launches and exclusive offers', '1a294575-0c63-4166-9af3-b564352ce1af');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('1e3971e7-be70-40fd-80af-3660e8dc3eb4', 'Sign up for our newsletter and never miss a beauty deal again', '3c920999-49bc-40f7-89ec-7cba7d43a977');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('a47df815-455e-4415-bb46-f8aa56f5e464', 'Stay updated with our latest product launches and exclusive offers', '6562785f-0d73-4685-aeda-c52c78361c6d');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('e3eda8ac-ddb7-4336-abe0-be1491fb9cda', 'Get the latest trends in cosmetics and wellness delivered to your inbox.', '0bf8f93d-7456-47de-883a-213c70e9d6ff');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('d8bd0ad8-a5fe-4ea7-9d93-47a0e1b502e2', 'Sign up for our newsletter and never miss a beauty deal again', '9f3df778-02e3-4ce8-8d91-fc91a1094b8f');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('99cba712-432d-4bb1-937a-8a47410f3bd0', 'Stay updated with our latest product launches and exclusive offers', '2db5a73a-cfe6-4f97-a325-732c688a17e5');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('ff0071cf-bc1d-440d-b022-e1aab84fb029', 'Sign up for our newsletter and never miss a beauty deal again', '0fa8d98a-d7a9-4fec-91e7-52f614978bac');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('5647cd2d-324b-42d0-aa55-621c72461ada', 'Stay updated with our latest product launches and exclusive offers', '4df0a956-2940-418f-9473-61f182fe23d8');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('9d290a2c-172c-4bfb-bd73-166bec185175', 'Get the latest trends in cosmetics and wellness delivered to your inbox.', '1a294575-0c63-4166-9af3-b564352ce1af');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('a8af4d93-24ef-4cf3-aa02-5b16d4eebc65', 'Subscribe now to receive personalized beauty tips and wellness advice.', '9f3df778-02e3-4ce8-8d91-fc91a1094b8f');

INSERT INTO "Brand" ("id", "name", "description", "rating", "logoUrl", "userId") VALUES ('d5b75f0c-7a76-4d82-8eed-9d0a57d6c0e0', 'WellnessWave', 'A brand committed to enhancing natural beauty with ecofriendly products.', '4.2', 'https://i.imgur.com/YfJQV5z.png?id=104', '4df0a956-2940-418f-9473-61f182fe23d8');
INSERT INTO "Brand" ("id", "name", "description", "rating", "logoUrl", "userId") VALUES ('61c60162-c700-439e-b306-bb4ab02e7f57', 'PureEssence', 'Empowering beauty with a blend of tradition and modern science.', '4.5', 'https://i.imgur.com/YfJQV5z.png?id=109', '0bf8f93d-7456-47de-883a-213c70e9d6ff');
INSERT INTO "Brand" ("id", "name", "description", "rating", "logoUrl", "userId") VALUES ('6be5021e-5d51-4f86-926a-9c0014dde484', 'NatureNurture', 'A brand committed to enhancing natural beauty with ecofriendly products.', '4.6', 'https://i.imgur.com/YfJQV5z.png?id=114', '0bf8f93d-7456-47de-883a-213c70e9d6ff');
INSERT INTO "Brand" ("id", "name", "description", "rating", "logoUrl", "userId") VALUES ('4b0339c1-4c5d-4919-9bde-9f7cc2bf659a', 'NatureNurture', 'Holistic beauty and wellness products inspired by nature.', '4.8', 'https://i.imgur.com/YfJQV5z.png?id=119', '3c920999-49bc-40f7-89ec-7cba7d43a977');
INSERT INTO "Brand" ("id", "name", "description", "rating", "logoUrl", "userId") VALUES ('970f966c-ce79-4301-be07-393b44f4556a', 'WellnessWave', 'A brand committed to enhancing natural beauty with ecofriendly products.', '4.6', 'https://i.imgur.com/YfJQV5z.png?id=124', '0bf8f93d-7456-47de-883a-213c70e9d6ff');
INSERT INTO "Brand" ("id", "name", "description", "rating", "logoUrl", "userId") VALUES ('d67b81f1-57fa-4113-ba02-abf28e622a5c', 'NatureNurture', 'A brand committed to enhancing natural beauty with ecofriendly products.', '4.5', 'https://i.imgur.com/YfJQV5z.png?id=129', '2db5a73a-cfe6-4f97-a325-732c688a17e5');
INSERT INTO "Brand" ("id", "name", "description", "rating", "logoUrl", "userId") VALUES ('8a5bcd85-294d-40ea-b77d-32187a43f1b9', 'RadiantBeauty', 'Empowering beauty with a blend of tradition and modern science.', '4.8', 'https://i.imgur.com/YfJQV5z.png?id=134', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Brand" ("id", "name", "description", "rating", "logoUrl", "userId") VALUES ('174ffc81-284c-48eb-b470-15fb6084ab2f', 'WellnessWave', 'Holistic beauty and wellness products inspired by nature.', '4.7', 'https://i.imgur.com/YfJQV5z.png?id=139', '6562785f-0d73-4685-aeda-c52c78361c6d');
INSERT INTO "Brand" ("id", "name", "description", "rating", "logoUrl", "userId") VALUES ('8d215809-3e31-4a0b-92e1-f8213b8861af', 'RadiantBeauty', 'Empowering beauty with a blend of tradition and modern science.', '4.7', 'https://i.imgur.com/YfJQV5z.png?id=144', '0bf8f93d-7456-47de-883a-213c70e9d6ff');
INSERT INTO "Brand" ("id", "name", "description", "rating", "logoUrl", "userId") VALUES ('e68976f9-9b26-4bc6-9d7f-0ccff921934a', 'RadiantBeauty', 'A brand committed to enhancing natural beauty with ecofriendly products.', '4.8', 'https://i.imgur.com/YfJQV5z.png?id=149', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "Product" ("id", "name", "description", "price", "category", "stock", "featured", "trending", "brandId") VALUES ('7cb000a0-50e2-474d-a218-8ea75e2a1daf', 'Velvet Touch Lipstick', 'Moisturizer that hydrates and refreshes your skin.', '8.75', 'Skincare', 589, false, false, '4b0339c1-4c5d-4919-9bde-9f7cc2bf659a');
INSERT INTO "Product" ("id", "name", "description", "price", "category", "stock", "featured", "trending", "brandId") VALUES ('3db9d42d-240e-48a5-92e1-213fe7c4485c', 'Radiant Glow Serum', 'Shampoo infused with natural herbs for healthy hair.', '12.50', 'Makeup', 735, true, true, '61c60162-c700-439e-b306-bb4ab02e7f57');
INSERT INTO "Product" ("id", "name", "description", "price", "category", "stock", "featured", "trending", "brandId") VALUES ('b8f48f3a-bf4e-4a44-81f1-96ffc301b42e', 'Radiant Glow Serum', 'Shampoo infused with natural herbs for healthy hair.', '8.75', 'Skincare', 524, true, true, 'e68976f9-9b26-4bc6-9d7f-0ccff921934a');
INSERT INTO "Product" ("id", "name", "description", "price", "category", "stock", "featured", "trending", "brandId") VALUES ('4c920cd9-9f37-4426-a660-4cab93539db4', 'Herbal Essence Shampoo', 'A serum that revitalizes and brightens your skin.', '24.99', 'Haircare', 874, true, false, '8a5bcd85-294d-40ea-b77d-32187a43f1b9');
INSERT INTO "Product" ("id", "name", "description", "price", "category", "stock", "featured", "trending", "brandId") VALUES ('b188881c-b47e-4b5e-a409-f14287ce30b2', 'Radiant Glow Serum', 'Longlasting lipstick with a smooth velvet finish.', '19.99', 'Haircare', 757, false, true, 'e68976f9-9b26-4bc6-9d7f-0ccff921934a');
INSERT INTO "Product" ("id", "name", "description", "price", "category", "stock", "featured", "trending", "brandId") VALUES ('c2456b51-c272-4201-90a7-14ef410d5ed5', 'Herbal Essence Shampoo', 'Shampoo infused with natural herbs for healthy hair.', '15.00', 'Makeup', 504, true, false, '970f966c-ce79-4301-be07-393b44f4556a');
INSERT INTO "Product" ("id", "name", "description", "price", "category", "stock", "featured", "trending", "brandId") VALUES ('e81a10c7-9841-427f-9829-9d112baf52f4', 'Herbal Essence Shampoo', 'A serum that revitalizes and brightens your skin.', '24.99', 'Foundations', 730, false, false, '6be5021e-5d51-4f86-926a-9c0014dde484');
INSERT INTO "Product" ("id", "name", "description", "price", "category", "stock", "featured", "trending", "brandId") VALUES ('2367cd00-221e-4cb2-8da7-dd17b1011e6e', 'Aqua Fresh Moisturizer', 'A serum that revitalizes and brightens your skin.', '15.00', 'Foundations', 865, true, true, 'd67b81f1-57fa-4113-ba02-abf28e622a5c');
INSERT INTO "Product" ("id", "name", "description", "price", "category", "stock", "featured", "trending", "brandId") VALUES ('453e2490-4032-43c9-9786-eb9763729195', 'Herbal Essence Shampoo', 'A serum that revitalizes and brightens your skin.', '24.99', 'Skincare', 778, true, false, '4b0339c1-4c5d-4919-9bde-9f7cc2bf659a');
INSERT INTO "Product" ("id", "name", "description", "price", "category", "stock", "featured", "trending", "brandId") VALUES ('29919e0e-6719-45be-ad8a-78a925c9d671', 'Velvet Touch Lipstick', 'Longlasting lipstick with a smooth velvet finish.', '12.50', 'Foundations', 795, false, true, 'e68976f9-9b26-4bc6-9d7f-0ccff921934a');

INSERT INTO "Review" ("id", "rating", "comment", "userId", "productId") VALUES ('d02d47c5-793e-42f5-b788-a26bf34db2de', 446, 'Great product highly recommend', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '4c920cd9-9f37-4426-a660-4cab93539db4');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "productId") VALUES ('b745680b-804e-476a-9752-d8a7a5612ff5', 608, 'Average experience nothing special.', '9f3df778-02e3-4ce8-8d91-fc91a1094b8f', '4c920cd9-9f37-4426-a660-4cab93539db4');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "productId") VALUES ('206977f3-4698-4f6f-9e6f-b128f2f70863', 559, 'Great product highly recommend', 'd6a70e3e-d696-4711-aab8-179f1f9de51b', 'e81a10c7-9841-427f-9829-9d112baf52f4');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "productId") VALUES ('830369b5-ae92-4ea8-8619-1cb0625c6103', 656, 'Not satisfied with the quality.', '0fa8d98a-d7a9-4fec-91e7-52f614978bac', '7cb000a0-50e2-474d-a218-8ea75e2a1daf');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "productId") VALUES ('2cb1999f-9a31-4285-b792-3e7198ddbf98', 268, 'Exceeded my expectations', '0bf8f93d-7456-47de-883a-213c70e9d6ff', '3db9d42d-240e-48a5-92e1-213fe7c4485c');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "productId") VALUES ('c3977011-40e7-4d45-a856-50953416be02', 282, 'Not satisfied with the quality.', '3c920999-49bc-40f7-89ec-7cba7d43a977', 'b8f48f3a-bf4e-4a44-81f1-96ffc301b42e');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "productId") VALUES ('56753ec1-2473-4736-97f9-36da906ef5b8', 500, 'Not satisfied with the quality.', 'd6a70e3e-d696-4711-aab8-179f1f9de51b', '4c920cd9-9f37-4426-a660-4cab93539db4');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "productId") VALUES ('fa7c4a33-8b4e-43fc-b6ef-401ae7bd275e', 316, 'Great product highly recommend', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '7cb000a0-50e2-474d-a218-8ea75e2a1daf');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "productId") VALUES ('82dfdb41-ce85-47cf-adae-b01b3833b421', 535, 'Average experience nothing special.', '3c920999-49bc-40f7-89ec-7cba7d43a977', '453e2490-4032-43c9-9786-eb9763729195');
INSERT INTO "Review" ("id", "rating", "comment", "userId", "productId") VALUES ('914d2380-8fec-4715-bbb6-066fdc317913', 923, 'Exceeded my expectations', '1a294575-0c63-4166-9af3-b564352ce1af', '3db9d42d-240e-48a5-92e1-213fe7c4485c');

INSERT INTO "Cart" ("id", "status", "userId") VALUES ('2567bfa1-d278-4f65-8647-24c695a78801', 'Cancelled', '9f3df778-02e3-4ce8-8d91-fc91a1094b8f');
INSERT INTO "Cart" ("id", "status", "userId") VALUES ('85cef0ad-98fe-4c07-b344-35c46afc1f06', 'Completed', '2db5a73a-cfe6-4f97-a325-732c688a17e5');
INSERT INTO "Cart" ("id", "status", "userId") VALUES ('64f19346-faac-470a-b5db-a3fc65024ccc', 'In Progress', '6562785f-0d73-4685-aeda-c52c78361c6d');
INSERT INTO "Cart" ("id", "status", "userId") VALUES ('b82a9954-76f7-4f38-b8f0-d143c947f4db', 'Completed', '2db5a73a-cfe6-4f97-a325-732c688a17e5');
INSERT INTO "Cart" ("id", "status", "userId") VALUES ('c9339442-ffe9-45f1-a3eb-7a15af5c80e2', 'Awaiting Payment', '9f3df778-02e3-4ce8-8d91-fc91a1094b8f');
INSERT INTO "Cart" ("id", "status", "userId") VALUES ('5c5d29f2-acf8-406f-b1de-1cadca49965e', 'Completed', '3c920999-49bc-40f7-89ec-7cba7d43a977');
INSERT INTO "Cart" ("id", "status", "userId") VALUES ('9e0d4c66-8fab-4858-80eb-4293c4f8e066', 'Pending', '0bf8f93d-7456-47de-883a-213c70e9d6ff');
INSERT INTO "Cart" ("id", "status", "userId") VALUES ('019674ac-8799-4970-94af-24ee516c1653', 'Awaiting Payment', '2db5a73a-cfe6-4f97-a325-732c688a17e5');
INSERT INTO "Cart" ("id", "status", "userId") VALUES ('888443c7-faa2-4bf8-86ff-40679337e8a1', 'Pending', 'd6a70e3e-d696-4711-aab8-179f1f9de51b');
INSERT INTO "Cart" ("id", "status", "userId") VALUES ('c208f53d-fe28-4fd8-b8f7-25b3518a5e2e', 'Completed', '1a294575-0c63-4166-9af3-b564352ce1af');

INSERT INTO "CartItem" ("id", "quantity", "cartId", "productId") VALUES ('b59542d3-22c0-4055-9c2b-35d96abb1887', 93, '5c5d29f2-acf8-406f-b1de-1cadca49965e', 'b8f48f3a-bf4e-4a44-81f1-96ffc301b42e');
INSERT INTO "CartItem" ("id", "quantity", "cartId", "productId") VALUES ('79668d29-452c-40e2-b3cc-972b56447cb0', 682, '9e0d4c66-8fab-4858-80eb-4293c4f8e066', 'c2456b51-c272-4201-90a7-14ef410d5ed5');
INSERT INTO "CartItem" ("id", "quantity", "cartId", "productId") VALUES ('e888fc0b-7a19-44d8-988c-7c1560de8bca', 795, '888443c7-faa2-4bf8-86ff-40679337e8a1', '453e2490-4032-43c9-9786-eb9763729195');
INSERT INTO "CartItem" ("id", "quantity", "cartId", "productId") VALUES ('7a731e48-c128-40bc-b6c7-19768d2925cb', 310, 'c208f53d-fe28-4fd8-b8f7-25b3518a5e2e', '453e2490-4032-43c9-9786-eb9763729195');
INSERT INTO "CartItem" ("id", "quantity", "cartId", "productId") VALUES ('1d578453-4d90-47d0-a067-15e10d31bff1', 839, '888443c7-faa2-4bf8-86ff-40679337e8a1', '29919e0e-6719-45be-ad8a-78a925c9d671');
INSERT INTO "CartItem" ("id", "quantity", "cartId", "productId") VALUES ('a8c02b0e-76a5-40b9-a7e4-dc96584187b0', 277, '019674ac-8799-4970-94af-24ee516c1653', '7cb000a0-50e2-474d-a218-8ea75e2a1daf');
INSERT INTO "CartItem" ("id", "quantity", "cartId", "productId") VALUES ('ce238c84-05f1-4659-b2c7-50603fc4c79d', 154, '64f19346-faac-470a-b5db-a3fc65024ccc', '453e2490-4032-43c9-9786-eb9763729195');
INSERT INTO "CartItem" ("id", "quantity", "cartId", "productId") VALUES ('a4993a9d-5b9d-420b-87a8-a6997a1b99bf', 197, 'b82a9954-76f7-4f38-b8f0-d143c947f4db', '2367cd00-221e-4cb2-8da7-dd17b1011e6e');
INSERT INTO "CartItem" ("id", "quantity", "cartId", "productId") VALUES ('82d65454-5d5d-47a0-801e-22629dbe98bc', 723, '64f19346-faac-470a-b5db-a3fc65024ccc', 'b8f48f3a-bf4e-4a44-81f1-96ffc301b42e');
INSERT INTO "CartItem" ("id", "quantity", "cartId", "productId") VALUES ('d331fb23-09e7-4f22-937d-4abfc98fe9fc', 403, 'c9339442-ffe9-45f1-a3eb-7a15af5c80e2', '2367cd00-221e-4cb2-8da7-dd17b1011e6e');

INSERT INTO "Order" ("id", "status", "total", "userId", "brandId") VALUES ('39074791-dec7-4224-88dd-91ecd9ca6d57', 'Shipped', '25.99', '9f3df778-02e3-4ce8-8d91-fc91a1094b8f', '174ffc81-284c-48eb-b470-15fb6084ab2f');
INSERT INTO "Order" ("id", "status", "total", "userId", "brandId") VALUES ('4df124ef-728c-403a-8077-a1dae8c96b5c', 'Delivered', '25.99', '3c920999-49bc-40f7-89ec-7cba7d43a977', '4b0339c1-4c5d-4919-9bde-9f7cc2bf659a');
INSERT INTO "Order" ("id", "status", "total", "userId", "brandId") VALUES ('1718e0f9-9fd2-45bb-8ca7-d6b1650bde1f', 'Shipped', '75.50', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '61c60162-c700-439e-b306-bb4ab02e7f57');
INSERT INTO "Order" ("id", "status", "total", "userId", "brandId") VALUES ('038de238-0b05-4410-9e2b-b68d46bcfa19', 'Pending', '200.00', '9f3df778-02e3-4ce8-8d91-fc91a1094b8f', '8a5bcd85-294d-40ea-b77d-32187a43f1b9');
INSERT INTO "Order" ("id", "status", "total", "userId", "brandId") VALUES ('3eb43b70-3550-4811-946e-4cf2df20591f', 'Pending', '25.99', '6562785f-0d73-4685-aeda-c52c78361c6d', '61c60162-c700-439e-b306-bb4ab02e7f57');
INSERT INTO "Order" ("id", "status", "total", "userId", "brandId") VALUES ('9a98ad6f-0237-48c5-baef-f2bfb20fc190', 'Processing', '150.00', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '8a5bcd85-294d-40ea-b77d-32187a43f1b9');
INSERT INTO "Order" ("id", "status", "total", "userId", "brandId") VALUES ('bfd8e1c9-9d92-4e80-9f1c-2ebc8b530f13', 'Processing', '150.00', '9f3df778-02e3-4ce8-8d91-fc91a1094b8f', '6be5021e-5d51-4f86-926a-9c0014dde484');
INSERT INTO "Order" ("id", "status", "total", "userId", "brandId") VALUES ('bfc36c3f-9668-4020-a8ba-ab89ff5d1071', 'Pending', '200.00', 'd6a70e3e-d696-4711-aab8-179f1f9de51b', 'd67b81f1-57fa-4113-ba02-abf28e622a5c');
INSERT INTO "Order" ("id", "status", "total", "userId", "brandId") VALUES ('90dc484b-a496-4888-a15c-396bc2a98c10', 'Pending', '150.00', '0fa8d98a-d7a9-4fec-91e7-52f614978bac', '970f966c-ce79-4301-be07-393b44f4556a');
INSERT INTO "Order" ("id", "status", "total", "userId", "brandId") VALUES ('821b8cea-740b-4414-bcb5-f9d735e43c31', 'Processing', '25.99', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '8d215809-3e31-4a0b-92e1-f8213b8861af');

INSERT INTO "OrderItem" ("id", "quantity", "price", "orderId", "productId") VALUES ('deefa177-7ca8-4c12-b09d-ab10a67ea252', 838, '12.75', '4df124ef-728c-403a-8077-a1dae8c96b5c', '4c920cd9-9f37-4426-a660-4cab93539db4');
INSERT INTO "OrderItem" ("id", "quantity", "price", "orderId", "productId") VALUES ('016dd0e0-3a34-4ce5-ae96-bd8497ac1d01', 927, '99.99', '1718e0f9-9fd2-45bb-8ca7-d6b1650bde1f', 'b8f48f3a-bf4e-4a44-81f1-96ffc301b42e');
INSERT INTO "OrderItem" ("id", "quantity", "price", "orderId", "productId") VALUES ('95dc9cc1-bbf0-421b-9624-3eb0432099c3', 630, '19.99', 'bfd8e1c9-9d92-4e80-9f1c-2ebc8b530f13', '29919e0e-6719-45be-ad8a-78a925c9d671');
INSERT INTO "OrderItem" ("id", "quantity", "price", "orderId", "productId") VALUES ('64a74ec0-454e-437b-8310-ee869b9c74cb', 996, '12.75', '9a98ad6f-0237-48c5-baef-f2bfb20fc190', 'c2456b51-c272-4201-90a7-14ef410d5ed5');
INSERT INTO "OrderItem" ("id", "quantity", "price", "orderId", "productId") VALUES ('bc0f1b34-ce0a-41a7-95bb-429292d84bd2', 781, '45.50', '39074791-dec7-4224-88dd-91ecd9ca6d57', 'e81a10c7-9841-427f-9829-9d112baf52f4');
INSERT INTO "OrderItem" ("id", "quantity", "price", "orderId", "productId") VALUES ('cbe88781-0428-44a7-abdc-bab049efd561', 737, '99.99', '90dc484b-a496-4888-a15c-396bc2a98c10', '4c920cd9-9f37-4426-a660-4cab93539db4');
INSERT INTO "OrderItem" ("id", "quantity", "price", "orderId", "productId") VALUES ('dee03343-4687-4bfe-a1e5-89e27d014f54', 20, '19.99', 'bfd8e1c9-9d92-4e80-9f1c-2ebc8b530f13', '2367cd00-221e-4cb2-8da7-dd17b1011e6e');
INSERT INTO "OrderItem" ("id", "quantity", "price", "orderId", "productId") VALUES ('b31faf80-50aa-4849-b72a-f6ac18efa832', 977, '12.75', '9a98ad6f-0237-48c5-baef-f2bfb20fc190', '29919e0e-6719-45be-ad8a-78a925c9d671');
INSERT INTO "OrderItem" ("id", "quantity", "price", "orderId", "productId") VALUES ('64faee88-2530-4270-af5b-b2a12764d88b', 227, '99.99', '90dc484b-a496-4888-a15c-396bc2a98c10', 'b188881c-b47e-4b5e-a409-f14287ce30b2');
INSERT INTO "OrderItem" ("id", "quantity", "price", "orderId", "productId") VALUES ('370f0ac2-288a-4ed7-8a3d-9346c2714394', 604, '99.99', '9a98ad6f-0237-48c5-baef-f2bfb20fc190', 'c2456b51-c272-4201-90a7-14ef410d5ed5');

INSERT INTO "BrandFollower" ("id", "userId", "brandId") VALUES ('0171f662-f4b5-4ca4-ae26-f5fc908203f5', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'd67b81f1-57fa-4113-ba02-abf28e622a5c');
INSERT INTO "BrandFollower" ("id", "userId", "brandId") VALUES ('9427d98d-205c-4a14-ba98-c8d7dd21a8bf', '0fa8d98a-d7a9-4fec-91e7-52f614978bac', '174ffc81-284c-48eb-b470-15fb6084ab2f');
INSERT INTO "BrandFollower" ("id", "userId", "brandId") VALUES ('36999293-4cae-4a33-91a9-34ae2197f4f5', '2db5a73a-cfe6-4f97-a325-732c688a17e5', '61c60162-c700-439e-b306-bb4ab02e7f57');
INSERT INTO "BrandFollower" ("id", "userId", "brandId") VALUES ('98e81833-1aef-44e5-9f9f-58db581a0924', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'e68976f9-9b26-4bc6-9d7f-0ccff921934a');
INSERT INTO "BrandFollower" ("id", "userId", "brandId") VALUES ('4971e070-1820-41e9-a540-e80d282e680d', '0bf8f93d-7456-47de-883a-213c70e9d6ff', '6be5021e-5d51-4f86-926a-9c0014dde484');
INSERT INTO "BrandFollower" ("id", "userId", "brandId") VALUES ('484df6c2-278d-42b8-882c-b4fecc5bacbd', '0fa8d98a-d7a9-4fec-91e7-52f614978bac', '8a5bcd85-294d-40ea-b77d-32187a43f1b9');
INSERT INTO "BrandFollower" ("id", "userId", "brandId") VALUES ('4518486a-a8cb-4e44-98e0-c83d957c74f5', '4df0a956-2940-418f-9473-61f182fe23d8', '8a5bcd85-294d-40ea-b77d-32187a43f1b9');
INSERT INTO "BrandFollower" ("id", "userId", "brandId") VALUES ('31f33c85-ecba-4b13-bbba-b1b8ceed47cf', '6562785f-0d73-4685-aeda-c52c78361c6d', '8d215809-3e31-4a0b-92e1-f8213b8861af');
INSERT INTO "BrandFollower" ("id", "userId", "brandId") VALUES ('fe472118-ac96-4adf-a6c5-6c40c03f66da', '6562785f-0d73-4685-aeda-c52c78361c6d', 'd5b75f0c-7a76-4d82-8eed-9d0a57d6c0e0');
INSERT INTO "BrandFollower" ("id", "userId", "brandId") VALUES ('1250229e-bc84-4141-9ad0-a68f3775485a', '2db5a73a-cfe6-4f97-a325-732c688a17e5', '61c60162-c700-439e-b306-bb4ab02e7f57');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
