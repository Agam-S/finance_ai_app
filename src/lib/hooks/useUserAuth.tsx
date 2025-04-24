import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/util/firebase-config";

export function useUserAuth(redirectTo = "/login") {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user : any) => {
      setUser(user);
      setLoading(false);
      if (!user && redirectTo) {
        router.push(redirectTo);
      }
    });

    return () => unsubscribe();
  }, [redirectTo]);

  return { user, loading };
}
