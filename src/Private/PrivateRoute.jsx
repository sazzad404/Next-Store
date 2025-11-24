"use client";

import { useAuth } from "@/app/auth/FirebaseAuthProvider";
import Loader from "@/Components/Loader";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/Login"); // redirect to login if not logged in
    }
  }, [user, loading, router]);

  if (loading) {
    return <Loader></Loader>;
  }

  if (!user) {
    return null; // wait for redirect
  }

  return children;
}
