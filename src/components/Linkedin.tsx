"use client";
import { LinkedinLogo } from "@phosphor-icons/react";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

function Linkedin({ showText }: { showText?: boolean }) {
  const [linkedin, setLinkedin] = useState("#");

  useEffect(() => {
    axios
      .get("/api/about?mode=linkedin")
      .then((response) => response.data)
      .then((data) => setLinkedin(data.linkedin));
  }, []);

  return (
    <div>
      <Link
        target="_blank"
        href={linkedin}
        className="flex flex-row space-x-1 items-center opacity-70 hover:opacity-100 focus:opacity-100 hover:scale-150 focus:scale-150 transition-all"
      >
        <LinkedinLogo size={20} />
        <span className={`flex flex-row space-x-2 ${!showText && "hidden"}`}>
          <p className="text-sm">/</p>
          <p className="text-sm">Lucas-Winicius</p>
        </span>
      </Link>
    </div>
  );
}

export default Linkedin;
