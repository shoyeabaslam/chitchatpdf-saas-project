'use client'
import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  const { data, isLoading } = trpc.authCallback.useQuery(undefined, {
    onSuccess: ({ success }) => {
      if (success) {
        router.push(origin ? `/${origin}` : "/dashboard");
      }
    },
  });

  // Ensure to return JSX from your component
  return (
    <div>
      {/* You can use isLoading to show a loading indicator if needed */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        // Render your component based on the data
        // You might want to add more JSX here
        <div>hello</div>
      )}
    </div>
  );
};

export default Page;
