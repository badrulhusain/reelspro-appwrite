import { db } from "../name";
import createAnswerCollection from "./answer.collection";
import createCommentCollection from "./comment.collection";
import createQuestionCollection from "./question.collection";
import createVoteCollection from "./vote.collection";
import { databases } from "./config";
export default async function getOrCreateDB(){
        try {
           await databases.get(db)
            console.log('database create');
            
            
        } catch (error) {
            try {
                await databases.create(db,db)
                console.log("database created")

                await Promise.all([
                    createAnswerCollection(),
                    createCommentCollection(),
                    createVoteCollection(),
                    createQuestionCollection()
                ])
                  console.log("Collection created")
      console.log("Database connected")
            } catch (error) {
                  console.log("Error creating databases or collection", error)
            }
            
        }
} 