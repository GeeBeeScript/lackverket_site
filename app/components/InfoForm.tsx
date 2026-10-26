"use client";

import { Suspense } from "react";
import MainForm from "./MainFormComp";


export default function InfoForm() {
  return (
    <Suspense fallback={<p>belastning...</p>}>
      <MainForm />
    </Suspense>
  )
}
