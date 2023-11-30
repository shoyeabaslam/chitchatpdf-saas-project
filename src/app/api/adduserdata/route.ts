import axios from "axios";
// correct this logic so that we can send the data to sanity
export async function POST(request:Request) {
   try{
    const body = await request.json();
    const apiToken = process.env.NEXT_PUBLIC_SANITY_TOKEN;
    const apiUrl = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/mutate/production`;

    const res = await axios.post(
        apiUrl,
        {
          mutations: [
            {
              create: {
                _type: 'usersAccount',
                userName: body.userName,
                userEmail: body.userEmail,
              },
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiToken}`,
          },
        }
      );
  
    console.log(res)
   }catch(err){
    return new Response("Not OK")
   }
}