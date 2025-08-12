import env from "@/app/env";
import { Avatars, Client, Databases, Storage, Users } from "node-appwrite";

const client = new Client();

client
    .setEndpoint("https://syd.cloud.appwrite.io/v1") // Use endpoint from env
    .setProject("687f82b4001e9f0e7c84")
  
    .setKey("standard_3dbb4ae4197577a1e50aefb37593b017c5c90cd2e7875ffa360d7368bb69a208231ca4fb0ed0bba7c3443e0d917ed5709650428156b11a9462db21fd75aa2715a5abe5c7a572aebc41dca10ba16c5f0fd8bb85be64c7072e264cb5b53ae28fe29392456f507b6c65d1a6acee196faf813b6b090bee74df03becc8bd6251ae923");

const databases = new Databases(client);
const avatars = new Avatars(client);
const storage = new Storage(client);
const users = new Users(client);

export { client, databases, users, avatars, storage };
