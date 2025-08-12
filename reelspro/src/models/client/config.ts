import { Client, Account,Avatars,Databases,Storage } from "appwrite"
import env from "@/app/env"

const endpoint = env.appwrite.enpoint ?? ""
const projectId = env.appwrite.projectId ?? ""

const client = new Client()
  .setEndpoint(endpoint)
  .setProject(projectId)


const databases=new Databases(client)
const account=new Account(client)
const avatars=new Avatars(client)
const storage=new Storage(client)   

export {databases,avatars,account,storage
}