import {useRouter} from 'next/router'

import { useState, useEffect } from "react";

import {onAuthStateChanged} from 'firebase/client'

export default function useUser() {
    const [user, setUser] = useState(undefined);
    const router = useRouter()
    useEffect(() => {
        onAuthStateChanged(setUser);
      }, []);

      useEffect(() => {
          user === null && router.push('/')
      },[user])

    return user;
}