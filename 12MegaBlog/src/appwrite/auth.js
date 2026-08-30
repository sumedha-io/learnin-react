import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

export class AuthService{
   client = new Client();
   account;

   constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
   }

   async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                //call another method to logIN

            }else{
                return userAccount
            }
        }catch (error){
            throw error;
        }
   }

   async login({email, password}){
        try{
            return await this.account.createEmailSession(email, password)
        }catch(error){
            throw error;
        }
   }

   async getCurrentUser(){
        try {
            return this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null
   }

   async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
             console.log("Appwrite service :: logout :: error", error);
        }
   }

}

const authService = new AuthService();

export default authService
/*

authService is an object of class AuthService. All the functions can be accessed using authService.function 

 */