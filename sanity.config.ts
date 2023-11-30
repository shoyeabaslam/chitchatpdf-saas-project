import { defineConfig} from "sanity";
import schemas from './sanity/schemas';
import {deskTool} from 'sanity/desk'


const ID:string = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const config = defineConfig({
    projectId : ID,
    dataset : 'production',
    title : 'chitchatpdf',
    apiVersion : '2023-11-29',
    basePath : '/admin',
    plugins : [deskTool()],
    schema : {types:schemas},
    
})


export default config;