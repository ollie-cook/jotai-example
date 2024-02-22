"use client";

import { useState } from "react";
import { createStore, Provider } from "jotai";

const BgColourProvider = ({ children }: { children: React.ReactNode }) => {
	const [bgColourStore] = useState(() => createStore());
	return <Provider store={bgColourStore}>{children}</Provider>;
};

export default BgColourProvider;
