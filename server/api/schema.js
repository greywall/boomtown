const { gql } = require("apollo-server-express");

/**
 *  @TODO: Boomtown Schema
 *
 * Define the types in your GraphQL schema here.
 * For each type, remove the `_: Boolean` placeholder and add the
 * fields as directed. Be sure to finish writing resolvers for all types
 * and any relational fields, where required.
 *
 * We will create the custom Date scalar together.
 */
const typeDefs = gql`
  
type Item {

id :  ID! 
title : String! 
imageurl :  String
description : String! 
itemowner : User! 
tags :  [Tags]
created :  Date! 
borrower :  User
}

type User {
id :  ID! 
email :  String! 
fullname :  String! 
bio :  String
items : [Items]
borrowed :  [Items]
}

type Tag {
id :  ID! 
title :  String! 
}

type File {
id :  ID! 
filename :  String! 
mimetype :  String! 
encoding :  String! 
itemid :  ID!
}

input AssignedTag {
id :  ID! 
title :  String! 
}

input AssignedBorrower {
id :  ID 
}

input NewItemInput {
title :  String 
description :  String
tags : [AssignedTags] 


mutation addItem {
item :  NewItemInput 
image :  Upload
}


`;



module.exports = typeDefs;