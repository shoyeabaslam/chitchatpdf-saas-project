// 'use client'

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Page = () => {
  const {getUser} = getKindeServerSession();
  const user = getUser();
  // console.log(user);
  if(!user || !user.id) redirect('/auth-callback?origin=dashboard');
  return <div> {user.email}</div>
}
export default Page;