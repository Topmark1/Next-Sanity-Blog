import {
//    createImageUrlBuilder,
//   createCurrentUserHook, 
    createClient,
} from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion:"2021-10-21",

    useCdn: process.env.NODE_ENV === "production",
};

//set the client for fecting data in getProps page functions
export const sanityClient = createClient(config);

//function to generate image from url
export const urlFor = (source)=> createImageUrlBuilder(config).image(source);

//helper function for loggin in user account
//export const userCurrentUser = createCurrentUserHook(config);