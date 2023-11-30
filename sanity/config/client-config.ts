const ID:string = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;


const config = {
    projectId: ID,
    dataset: "production",
    apiVersion: "2023-11-29",
    useCdn: false, // set useCdn to false to use the Live API
  };
  
  export default config;